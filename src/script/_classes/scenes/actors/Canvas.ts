import PaintingScene from "../PaintingScene";
import Actor from "../../lib/scenes/actors/Actor";
import Vector2 from "../../lib/utils/Vector2";
import Aye from "./Aye";

import web from "../../lib/utils/web";
import Tile from "./Tile";


/**
 * Canvas class
 */

export default class Canvas extends Actor {
  public scene: PaintingScene;
  public canvasEl: HTMLCanvasElement;
  public canvasCtx: CanvasRenderingContext2D;
  public brushPos: Vector2 = new Vector2();
  public brushSize: number = 4;
  public aye: Aye;

  constructor(scene: PaintingScene, obj: any) {
    super(scene, obj);
    this.canvasEl = document.createElement("canvas");
    this.canvasEl.width = this.size.x;
    this.canvasEl.height = this.size.y;
    this.canvasCtx = <CanvasRenderingContext2D>this.canvasEl.getContext("2d");
  }

  update() {
    if (!this.aye) this.aye = <Aye>this.scene.actorsByName["Aye"];
    if (!this.aye) return;

    let cg = this.canvasCtx;
    let mp = Vector2.dispense().copyFrom(this.scene.mouse).subtract(this.scene.camera);
    let bp = this.brushPos;
    let bs = this.brushSize;
    let d = Vector2.dispense().copyFrom(mp).subtract(bp);
    super.update();
    if (this.scene.mouseJustPressed) {
      bp.copyFrom(mp);
      if (this.scene.mouseJustPressed < 0 && this._thisStroke < 8 && !this._dirty) {
        this.aye.suck = true;
        this.aye.goTo(this.scene.mouse);
        this.aye.sendPatch();
        this.submit();
      } else if (this._dirty && this.scene.mouseJustPressed > 0) {
        this.aye.stop();
        this.canvasEl.width += 0;
        this.position.copyFrom(this.scene.camera).subtract(this.offset);
        this._dirty = false;
        this._thisDraw = 0;
      }
      this._thisStroke = 0;
    } else if (this.scene.mousePressed) {
      cg.fillStyle = this.aye.inkColor.toString();
      let updated = false;
      while (d.magnitude > 2 && this.aye.inkLeft > 0) {
        d.normalize();
        bp.add(d);
        this._thisDraw++;
        this._thisStroke++;
        this.aye.inkLeft += -.0001;

        cg.beginPath();
        cg.arc(bp.x, bp.y, this.brushSize, 0, Math.PI * 2);
        cg.fill();

        d.copyFrom(mp).subtract(bp);
        updated = true;
      }
      updated && this.aye.animationFrame === 0 && this.aye.sendPatch();
    }
    d.recycle();
    mp.recycle();
  }

  render() {
    let g = this.scene.game.ctx;
    g.drawImage(this.canvasEl, this.offset.x, this.offset.y);
    return super.render();
  }

  submit() {
    this._dirty = true;
    if (this._thisDraw < 8) return;
    web.post(
      "./php/submit.php",
      `left=${this.left}`
      + `&top=${this.top}`
      + `&img=${encodeURIComponent(this.canvasEl.toDataURL("image/png"))}`,
      { setRequestHeader: ["Content-type", "application/x-www-form-urlencoded"] },
      this.sendPatch.bind(this)
    );
  }

  sendPatch(req?: XMLHttpRequest) {
    let obj = {
      tiles: {},
      puddles: {}
    };
    if (req) {
      try {
        let json = JSON.parse(req.responseText);
        obj.puddles = json.state.puddles;
      } catch (error) { }
    }
    (<Tile[]>this.scene.actorsByType["Tile"]).forEach((tile: Tile) => {
      (<any>obj.tiles)[tile.col + "_" + tile.row] = Date.now();
    });
    this.scene.sendPatch(obj);
  }




  /*
    _privates
  */
  private _thisDraw: number = 0;
  private _thisStroke: number = 0;
  private _dirty: boolean = true;

}
