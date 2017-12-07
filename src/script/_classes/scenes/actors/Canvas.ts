import PaintingScene from "../PaintingScene";
import Actor from "../../lib/scenes/actors/Actor";
import Vector2 from "../../lib/utils/Vector2";
import Aye from "./Aye";

import web from "../../lib/utils/web";


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
      if (this.scene.mouseJustPressed < 0 && this._thisStroke < 8) {
        // this.aye.goTo(this.scene.mouse);
        this.submit();
      } else if (this._dirty && this.scene.mouseJustPressed > 0) {
        this.aye.stop();
        this.canvasEl.width += 0;
        this.position.copyFrom(this.scene.camera).subtract(this.offset);
        this._dirty = false;
      }
      this._thisStroke = 0;
    } else if (this.scene.mousePressed) {
      cg.fillStyle = this.aye.inkColor;
      while (d.magnitude > 2 && this.aye.inkLeft > 0) {
        d.normalize();
        bp.add(d);
        this._thisStroke++;
        this.aye.inkLeft += -.0001;

        cg.beginPath();
        cg.arc(bp.x, bp.y, this.brushSize, 0, Math.PI * 2);
        cg.fill();

        d.copyFrom(mp).subtract(bp);
      }
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
    let data = {
      left: this.scene.camera.x,
      top: this.scene.camera.y,
      img: this.canvasEl.toDataURL("image/png")
    }
    web.post(
      "./php/submit.php",
      JSON.stringify(data),
      { setRequestHeader: ["Content-Type", "application/json"] },
      this.scene.updateTiles.bind(this.scene)
    );
    this._dirty = true;
    let obj: any = {
      ayes: {
        [this.scene.collab.peer.id]: {
          id: this.scene.collab.peer.id,
          target: {
            x: this.scene.mouse.x,
            y: this.scene.mouse.y
          },
          inkColor: this.aye.inkColor,
          inkLeft: this.aye.inkLeft
        }
      }
    };

    this.scene.sendPatch(obj);

  }




  /*
    _privates
  */
  private _thisStroke: number = 0;
  private _dirty: boolean;

}
