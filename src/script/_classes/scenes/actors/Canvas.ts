import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";


/**
 * Canvas class
 */

export default class Canvas extends Actor {
  public canvasEl: HTMLCanvasElement;
  public canvasCtx: CanvasRenderingContext2D;
  public brushEl: HTMLCanvasElement;
  public brushCtx: CanvasRenderingContext2D;
  public brushPos: Vector2 = new Vector2();
  public brushSize: number = 64;

  constructor(scene: Scene, obj: any) {
    super(scene, obj);
    this.canvasEl = document.createElement("canvas");
    this.canvasEl.width = this.size.x;
    this.canvasEl.height = this.size.y;
    this.canvasCtx = <CanvasRenderingContext2D>this.canvasEl.getContext("2d");
    this.canvasCtx.fillStyle = "rgba(255,255,255,0)";
    this.canvasCtx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    this.brushEl = document.createElement("canvas");
    this.brushEl.width =
      this.brushEl.height = this.brushSize;
    this.brushCtx = <CanvasRenderingContext2D>this.brushEl.getContext("2d");

    // this.resetBrush();

    this.splat();
  }

  update() {
    let cg = this.canvasCtx;
    let bg = this.brushCtx;
    let mp = this.scene.mouse;
    let bp = this.brushPos;
    let bs = this.brushSize;
    let d = Vector2.dispense().copyFrom(mp).subtract(bp);
    super.update();
    if (this.scene.mouseJustPressed) {
      bp.copyFrom(mp);
    } else if (this.scene.mousePressed) {
      while (d.magnitude > 2) {
        d.normalize();
        bp.add(d);
        cg.drawImage(this.brushEl, 0, 0, bs, bs, bp.x - bs / 2, bp.y - bs / 2, bs, bs);
        this.resetBrush();
        bp.add(d);
        bg.drawImage(this.canvasEl, bp.x - bs / 2, bp.y - bs / 2, bs, bs, 0, 0, bs, bs);
        d.copyFrom(mp).subtract(bp);
      }
    }
    /*if (this.scene.mouseJustPressed) {
      cg.drawImage(this.scene.game.canvas, 0, 0);
    }*/
  }

  render() {
    let g = this.scene.game.ctx;
    g.drawImage(this.canvasEl, this.offset.x, this.offset.y);
    return super.render();
  }

  splat() {
    let g = this.canvasCtx;
    g.fillStyle = `hsl(${Math.round(Math.random() * 360)} , 50% , 50%)`;
    g.beginPath();
    g.arc(Math.random() * this.size.x, Math.random() * this.size.y, 128, 0, 2 * Math.PI);
    g.fill();
    this.scene.setAlarm(this.scene.game.frameRate * 10, this.splat.bind(this));
  }

  resetBrush() {
    this.brushCtx.globalCompositeOperation = "source-over";
    this.brushEl.width += 0;
    this.brushCtx.fillStyle = "white";
    this.brushCtx.beginPath();
    this.brushCtx.arc(this.brushSize / 2, this.brushSize / 2, this.brushSize / 2, 0, 2 * Math.PI);
    this.brushCtx.fill();
    this.brushCtx.globalCompositeOperation = "source-in";
    this.brushCtx.fillRect(0, 0, this.brushSize, this.brushSize);
  }



  /*
    _privates
  */

}
