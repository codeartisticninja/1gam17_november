import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";
import PaintingScene from "../PaintingScene";

let topFrontier: number = 0;

/**
 * Puddle class
 */

export default class Puddle extends Actor {
  public scene: PaintingScene;
  public inkColor: string = "purple";
  public inkLeft: number = .25;
  public dna: any;

  constructor(scene: PaintingScene, obj: any) {
    super(scene, obj);
    this.dna = obj;
    this.shape = "circle";
    this.rotation.rad = Math.PI * 2 * Math.random();
  }

  update() {
    this.scale.set(this.inkLeft / 8);
    super.update();
    this.order = 512 // + (this.position.y - topFrontier);
    topFrontier = Math.min(topFrontier, this.position.y);
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
        [this.name]: {
          pos: {
            x: this.position.x,
            y: this.position.y
          },
          inkColor: this.inkColor,
          inkLeft: this.inkLeft
        }
      }
    };
    this.scene.sendPatch(obj);
  }


  /*
    _privates
  */
  private _lastDist: number;
  private _origSprite: HTMLImageElement;
  private _inkedSprite: HTMLCanvasElement;
  private _spriteCtx: CanvasRenderingContext2D;

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
    let g = this._spriteCtx;
    g.globalCompositeOperation = "source-over";
    this.sprite.img.width += 0;
    g.drawImage(this._origSprite, 0, 0);
    g.globalCompositeOperation = "source-atop";
    g.fillStyle = this.inkColor;
    g.fillRect(0, 0, this.sprite.img.width, this.sprite.img.height);
    g.globalCompositeOperation = "source-over";
  }

}
