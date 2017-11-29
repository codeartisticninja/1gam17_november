import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";

let cache: any = {};

/**
 * Tile class
 */

export default class Tile extends Actor {
  public col: number;
  public row: number;
  public img: HTMLImageElement;

  constructor(scene: Scene, obj: any) {
    super(scene, obj);
    this.img = this._img = new Image();
    //this.updateTile();
    //this.offset.set(0);
  }

  update() {
    super.update();
    this.size.x = this._img.width;
    this.size.y = this._img.height;
    this.offset.copyFrom(this.size).multiplyXY(-.5);
    if (this.img.complete && this.img.height >= this._img.height) {
      this._img = this.img;
      this.position.x = this.col * this.size.x + .5 * this.size.x;
      this.position.y = this.row * this.size.y + .5 * this.size.y;
    }
  }

  render() {
    let g = this.scene.game.ctx;
    try {
      g.drawImage(this._img, this.offset.x, this.offset.y);
    } catch (error) { }
    return super.render();
  }
  renderDebug() {
    let g = this.scene.game.ctx;
    g.fillStyle = "rgba(0,255,0, .25)";
    g.fillRect(this.offset.x + 8, this.offset.y + 8, this.size.x - 16, this.size.y - 16);
    return super.renderDebug();
  }

  assign(col = this.col, row = this.row) {
    if (this.col !== col || this.row !== row) {
      this.col = col;
      this.row = row;
      if (cache[`${col}_${row}`]) {
        this.img = cache[`${col}_${row}`];
      } else {
        this.updateTile();
      }
    }
  }
  updateTile() {
    let col = this.col;
    let row = this.row;
    this.img = new Image();
    this.img.src = `./php/get_tile.php?col=${col}&row=${row}&now=${Date.now()}`;
    cache[`${col}_${row}`] = this.img;
  }

  /*
    _privates
  */
  private _img: HTMLImageElement;

}
