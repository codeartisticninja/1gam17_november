import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";
import PaintingScene from "../PaintingScene";
import HSL from "../../HSL";
import web from "../../lib/utils/web";

let topFrontier: number = 0;

/**
 * Puddle class
 */

export default class Puddle extends Actor {
  public scene: PaintingScene;
  public inkColor: HSL = new HSL();
  public inkLeft: number = 0;
  public dna: any;
  public timeToSync: number = -1;

  constructor(scene: PaintingScene, obj: any) {
    super(scene, obj);
    this.dna = obj;
    this.shape = "circle";
    this.rotation.rad = Math.PI * 2 * Math.random();
  }

  update() {
    this._pulse += .2;
    this.scale.set(this.inkLeft / 8);
    this.scale.addXY(Math.sin(this._pulse) * .01, Math.cos(this._pulse) * .01);
    super.update();
    this.order = 512 // + (this.position.y - topFrontier);
    topFrontier = Math.min(topFrontier, this.position.y);
    if (!this.timeToSync--) this.sync();
  }

  render() {
    if (this.sprite) {
      if (this.sprite.img.complete && !this._origSprite) this._prepSprite();
      (<any>this.sprite.img) = this._inkedSprite;
      this._updateSprite();
      super.render();
      this.sprite.img = this._origSprite;
    }
  }

  sendPatch() {
    let obj: any = {
      puddles: {
        [this.name]: this.toObj()
      }
    };
    this.scene.sendPatch(obj);
  }
  sync() {
    web.post(
      "./php/puddle.php",
      `id=${encodeURIComponent(this.name)}`
      + `&obj=${encodeURIComponent(JSON.stringify(this.toObj()))}`,
      { setRequestHeader: ["Content-type", "application/x-www-form-urlencoded"] },
      this.sendPatch.bind(this)
    );
    if (this.inkLeft < 0.1) {
      this.scene.removeActor(this);
    }
  }

  toObj() {
    let obj: any = {
      pos: {
        x: this.position.x,
        y: this.position.y
      },
      inkColor: {
        hue: this.inkColor.hue,
        saturation: this.inkColor.saturation,
        lightness: this.inkColor.lightness
      },
      inkLeft: this.inkLeft
    };
    return obj;
  }


  /*
    _privates
  */
  private _lastDist: number;
  private _origSprite: HTMLImageElement;
  private _inkedSprite: HTMLCanvasElement;
  private _spriteCtx: CanvasRenderingContext2D;
  private _lastInkColor: string;
  private _lastInkLeft: number;
  private _pulse: number = 0;

  private _prepSprite() {
    this._origSprite = this.sprite.img;
    this._inkedSprite = document.createElement("canvas");
    this._inkedSprite.width = this._origSprite.width;
    this._inkedSprite.height = this._origSprite.height;
    let g = this._spriteCtx = <CanvasRenderingContext2D>this._inkedSprite.getContext("2d");
    g.drawImage(this._origSprite, 0, 0);
  }

  private _updateSprite() {
    if (!this._spriteCtx) return;
    if (this._lastInkColor === this.inkColor.toString() && this._lastInkLeft === this.inkLeft) return;
    let g = this._spriteCtx;
    g.globalCompositeOperation = "source-over";
    this.sprite.img.width += 0;
    g.drawImage(this._origSprite, 0, 0);
    g.globalCompositeOperation = "source-atop";
    g.fillStyle = this.inkColor.toString();
    g.fillRect(0, 0, this.sprite.img.width, this.sprite.img.height);
    g.globalCompositeOperation = "source-over";
    this._lastInkColor = this.inkColor.toString();
    this._lastInkLeft = this.inkLeft;
  }

}
