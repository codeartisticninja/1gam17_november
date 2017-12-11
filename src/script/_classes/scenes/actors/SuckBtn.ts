import Actor from "../../lib/scenes/actors/Actor";
import PaintingScene from "../PaintingScene";
import Aye from "./Aye";
import Puddle from "./Puddle";

/**
 * SuckBtn class
 */

export default class SuckBtn extends Actor {
  public scene: PaintingScene;
  public aye: Aye;

  constructor(scene: PaintingScene, obj: any) {
    super(scene, obj);
    this.order = 4096;
  }

  update() {
    if (this.aye) {
      this.position.copyFrom(this.aye.position).addXY(0, -48);
    } else {
      this.aye = <Aye>this.scene.actorsByName["Aye"];
    }
    super.update();
  }

  render() {
    return super.render();
  }

  click() {
    this.aye.stop();
    this.scene.setAlarm(1, () => {
      this.aye.suck = !this.aye.suck;
      this.aye.stop();
      if (this.aye.inPuddle < 0) {
        let puddle = <Puddle>this.scene.createActor((<Puddle>this.scene.actorsByType["Puddle"][0]).dna);
        puddle.name = "puddle" + Date.now();
        puddle.inkColor.set(0, 0, 0);
        puddle.inkLeft = 0;
        puddle.position.copyFrom(this.aye.position);
        this.scene.addActor(puddle);
      }
      return super.click();
    });
  }

  /*
    _privates
  */

}
