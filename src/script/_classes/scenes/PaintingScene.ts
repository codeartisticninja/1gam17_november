import Scene from "../lib/scenes/Scene";
import MyGame from "../MyGame";
import Vector2 from "../lib/utils/Vector2";

import Aye from "./actors/Aye";
import Canvas from "./actors/Canvas";
import Tile from "./actors/Tile";


/**
 * PaintingScene class
 */

export default class PaintingScene extends Scene {
  public game: MyGame;

  constructor(game: MyGame, map: string) {
    super(game, map);
    this.actorTypes["Aye"] = Aye;
    this.actorTypes["Canvas"] = Canvas;
    this.actorTypes["Tile"] = Tile;
    this.boundCamera = false;
  }

  reset() {
    super.reset();
    // this.game.mediaChannels.music.play("./assets/music/AuditoryCheesecake_Drainage.mp3", true);
  }


  update() {
    if (!this.actorsByType["Tile"]) return this._prepTiles();
    let tilesize = (<Tile>this.actorsByType["Tile"][0]).img.width || 1024;
    let col = Math.floor(this.camera.x / tilesize);
    let row = Math.floor(this.camera.y / tilesize);
    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < 2; x++) {
        let tile = <Tile>this.actorsByName[`tile_${x}_${y}`];
        tile.assign(col + x, row + y);
      }
    }
    super.update();
  }

  updateTiles() {
    console.log(arguments);
    this.actorsByType["Tile"].forEach(tile => (<Tile>tile).updateTile());
  }

  mouseMove(x: number, y: number) {
    super.mouseMove(x, y);
    if (!this.actorsByName["Canvas"]) return;
    this.actorsByName["Canvas"].update();
    this.mouseJustPressed = 0;
  }


  /*
    _privates
  */

  private _prepTiles() {
    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < 2; x++) {
        let tile = new Tile(this, {
          type: "Tile",
          name: `tile_${x}_${y}`,
          visible: true
        });
        this.addActor(tile);
      }
    }
  }


}
