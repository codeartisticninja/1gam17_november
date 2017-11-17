import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";


/**
 * Aye class
 */

export default class Aye extends Actor {
  dragged: boolean;

  constructor(scene: Scene, obj: any) {
    super(scene, obj);
  }

  update() {
    super.update();
    if (this.dragged) {
      this.position.copyFrom(this.scene.mouse);
      this.dragged = this.scene.mousePressed;
    } else if (this.overlapsWithPoint(this.scene.mouse)) {
      this.dragged = this.scene.mouseJustPressed > 0;
    }
  }

  render() {
    return super.render();
  }



  /*
    _privates
  */

}
