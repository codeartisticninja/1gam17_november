import Scene from "../lib/scenes/Scene";
import MyGame from "../MyGame";
import Vector2 from "../lib/utils/Vector2";
import web from "../lib/utils/web";

import Aye from "./actors/Aye";
import Canvas from "./actors/Canvas";
import Tile from "./actors/Tile";
import Collab from "../lib/utils/Collab";


/**
 * PaintingScene class
 */

export default class PaintingScene extends Scene {
  public game: MyGame;
  public collab: Collab;

  constructor(game: MyGame, map: string) {
    super(game, map);
    this.actorTypes["Aye"] = Aye;
    this.actorTypes["Canvas"] = Canvas;
    this.actorTypes["Tile"] = Tile;
    this.boundCamera = false;
    this.collab = new Collab("./php/check_in.php");
    this.collab.onPatch(this.applyPatch.bind(this));
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
    this.actorsByType["Tile"].forEach(tile => (<Tile>tile).updateTile());
  }

  mouseMove(x: number, y: number) {
    super.mouseMove(x, y);
    if (!this.actorsByName["Canvas"]) return;
    this.actorsByName["Canvas"].update();
    this.mouseJustPressed = 0;
  }

  applyPatch(patch: any) {
    if (patch.ayes) {
      for (let id in patch.ayes) {
        let ayeObj = patch.ayes[id];
        let aye: Aye;
        if (id === this.collab.peer.id) {
          aye = <Aye>this.actorsByName["Aye"];
        } else {
          aye = <Aye>this.actorsByName[id];
        }
        if (!aye) {
          aye = <Aye>this.createActor((<Aye>this.actorsByName["Aye"]).dna);
          aye.name = id;
          this.addActor(aye);
        }
        aye.goTo(ayeObj.target);
        aye.inkColor = ayeObj.inkColor;
        aye.inkLeft = ayeObj.inkLeft;
      }
    }
  }

  sendPatch(patch: any) {
    this.collab.sendPatch(patch);
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
