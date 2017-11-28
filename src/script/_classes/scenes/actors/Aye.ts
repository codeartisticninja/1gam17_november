import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";


/**
 * Aye class
 */

export default class Aye extends Actor {
  public target: Vector2 | null;
  public inkColor: string = "red";
  public inkLeft: number = .25;

  constructor(scene: Scene, obj: any) {
    super(scene, obj);
    this.addAnimation("idle", [0, 1, 2, 3, 4, 5, 6, 7]);
    this.addAnimation("walk", [8, 9, 10, 11, 12, 13, 14, 15]);
    this._fillSize.copyFrom(this.size).multiplyXY(.5);
  }

  update() {
    if (this.target) {
      if (this.velocity.magnitude < 1) {
        this.velocity.copyFrom(this.target).subtract(this.position);
        this._lastDist = this.velocity.magnitude * 2;
        this.velocity.magnitude = 8;
        this.playAnimation("walk");
        if (this.velocity.x < 0) {
          this.scale.x = -Math.abs(this.scale.x);
        }
        if (this.velocity.x > 0) {
          this.scale.x = Math.abs(this.scale.x);
        }
      }
      let dist = Vector2.dispense();
      dist.copyFrom(this.target).subtract(this.position);
      if (dist.magnitude >= this._lastDist) {
        this.target.recycle();
        this.target = null;
        this.velocity.set(0);
        this.playAnimation("idle");
      } else {
        this._lastDist = dist.magnitude;
      }
      dist.recycle();
    }
    super.update();
    this.scene.camera.add(this.velocity).add(this.velocity);
    this.scene.camera.x = Math.min(this.scene.camera.x, this.position.x - 256);
    this.scene.camera.y = Math.min(this.scene.camera.y, this.position.y - 192);
    this.scene.camera.x = Math.max(this.scene.camera.x, this.position.x - this.scene.size.x + 256);
    this.scene.camera.y = Math.max(this.scene.camera.y, this.position.y - this.scene.size.y + 192);
    if (this.animation !== this.animations["idle"]) {
      if (this.inkLeft < 1) this.inkLeft += .01;
    }
}

  render() {
    if (this.sprite) {
      if (this.sprite.img.complete && !this._origImg) this._prepSprite();
      this._updateSprite();
      this.sprite.draw(this.frame + 16, 0, this.offset);
    }
    return super.render();
  }

  goTo(pos:Vector2) {
    if (!this.target) this.target = Vector2.dispense();
    this.target.copyFrom(pos);
  }

  stop() {
    if (this.target) {
      this.target.copyFrom(this.position);
    }
  }


  /*
    _privates
  */
  private _lastDist: number;
  private _fillSize: Vector2 = new Vector2();
  private _origImg: HTMLImageElement;
  private _spriteCtx: CanvasRenderingContext2D;

  private _prepSprite() {
    this._origImg = this.sprite.img;
    let canvas = document.createElement("canvas");
    (<any>this.sprite.img) = canvas;
    canvas.width = this._origImg.width;
    canvas.height = this._origImg.height;
    let g = this._spriteCtx = <CanvasRenderingContext2D>canvas.getContext("2d");
    g.drawImage(this._origImg, 0, 0);
    document.body.appendChild(canvas);
  }

  private _updateSprite() {
    let g = this._spriteCtx;
    g.globalCompositeOperation = "source-over";
    this.sprite.img.width += 0;
    g.drawImage(this._origImg, 0, 0);
    g.globalCompositeOperation = "source-atop";
    g.fillStyle = this.inkColor;
    g.fillRect(this.sprite.img.width / 2, 0, this.sprite.img.width, this.sprite.img.height);
    g.globalCompositeOperation = "source-over";
    g.clearRect(this.sprite.img.width / 2, Math.random(), this.sprite.img.width, this.sprite.img.height * (1 - this.inkLeft));
    for (let x = this.sprite.img.width / 2; x < this.sprite.img.width; x++) {
      g.globalAlpha = Math.random();
      g.clearRect(x + Math.random(), 2 * Math.random() + this.sprite.img.height * (1 - this.inkLeft), 2, 1);
    }
  }

}
