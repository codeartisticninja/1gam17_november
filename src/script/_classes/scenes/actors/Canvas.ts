import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";


/**
 * Canvas class
 */

export default class Canvas extends Actor {
  public canvasElement: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  constructor(scene: Scene, obj: any) {
    super(scene, obj);
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = this.size.x;
    this.canvasElement.height = this.size.y;
    this.context = <CanvasRenderingContext2D>this.canvasElement.getContext("2d");
  }

  update() {
    let g = this.context;
    let m = this.scene.mouse;
    super.update();
    if (this.scene.mousePressed) {
      g.fillStyle = "black";
      g.fillRect(m.x - 8, m.y - 8, 16, 16);
    }
  }

  render() {
    let g = this.scene.game.ctx;
    g.drawImage(this.canvasElement, this.offset.x, this.offset.y);
    return super.render();
  }



  /*
    _privates
  */

}
