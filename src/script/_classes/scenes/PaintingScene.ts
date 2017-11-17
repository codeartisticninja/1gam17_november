import Scene from "../lib/scenes/Scene";
import MyGame from "../MyGame";
import Vector2 from "../lib/utils/Vector2";

import Aye from "./actors/Aye";
import Canvas from "./actors/Canvas";


/**
 * PaintingScene class
 */

export default class PaintingScene extends Scene {
  public game: MyGame;

  constructor(game: MyGame, map: string) {
    super(game, map);
    this.actorTypes["Aye"] = Aye;
    this.actorTypes["Canvas"] = Canvas;
    this.boundCamera = false;
  }

  reset() {
    super.reset();
    // this.game.mediaChannels.music.play("./assets/music/AuditoryCheesecake_Drainage.mp3", true);
  }


  update() {
    super.update();
  }

  /*
    _privates
  */


}
