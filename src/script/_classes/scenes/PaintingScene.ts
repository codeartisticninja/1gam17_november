import Scene from "../lib/scenes/Scene";
import MyGame from "../MyGame";
import Vector2 from "../lib/utils/Vector2";
import web from "../lib/utils/web";
import Collab from "../lib/utils/Collab";

import Aye from "./actors/Aye";
import Canvas from "./actors/Canvas";
import Tile from "./actors/Tile";
import Puddle from "./actors/Puddle";
import SuckBtn from "./actors/SuckBtn";


/**
 * PaintingScene class
 */

export default class PaintingScene extends Scene {
  public game: MyGame;
  public collab: Collab;

  constructor(game: MyGame, map: string) {
    super(game, map);
    this.actorTypes["Aye"] = Aye;
    this.actorTypes["SuckBtn"] = SuckBtn;
    this.actorTypes["Canvas"] = Canvas;
    this.actorTypes["Tile"] = Tile;
    this.actorTypes["Puddle"] = Puddle;
    this.boundCamera = false;
    this.collab = new Collab("./php/check_in.php");
    this.collab.onPatch(this.applyPatch.bind(this));
  }

  reset() {
    super.reset();
    this.game.mediaChannels.music.play("./assets/music/Dewdrop Fantasy.mp3", true);
    this.camera.subtract(this.size).multiplyXY(.5);
  }


  update() {
    if (!this.actorsByType["Tile"]) return this._prepTiles();
    let tilesize = (<Tile>this.actorsByType["Tile"][0]).img.width || 512;
    let col = Math.floor(this.camera.x / tilesize);
    let row = Math.floor(this.camera.y / tilesize);
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        let tile = <Tile>this.actorsByName[`tile_${x}_${y}`];
        tile.assign(col + x, row + y);
      }
    }
    super.update();
    this.onOverlap(this.actorsByName["Aye"], this.actorsByType["Puddle"], this._AyeMeetsPuddle, this);
    this.onOverlap(this.actorsByType["Puddle"], this.actorsByType["Puddle"], this._PuddleMeetsPuddle, this);
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
        aye.stop();
        aye.goTo(ayeObj.target);
        aye.inkColor.copyFrom(ayeObj.inkColor);
        aye.inkLeft = ayeObj.inkLeft;
      }
    }
    if (patch.puddles) {
      for (let id in patch.puddles) {
        let puddleObj = patch.puddles[id];
        let puddle = <Puddle>this.actorsByName[id];
        if (puddleObj.inkLeft >= .1) {
          if (!puddle) {
            puddle = <Puddle>this.createActor((<Puddle>this.actorsByType["Puddle"][0]).dna);
            puddle.name = id;
            this.addActor(puddle);
          }
          puddle.position.copyFrom(puddleObj.pos);
          puddle.inkColor.copyFrom(puddleObj.inkColor);
          puddle.inkLeft = puddleObj.inkLeft;
        }
      }
    }
    if (patch.tiles) {
      for (let id in patch.tiles) {
        id = "[" + id.replace("_", ",") + "]";
        let [col, row] = JSON.parse(id);
        Tile.updateTile(col, row);
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
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        let tile = new Tile(this, {
          type: "Tile",
          name: `tile_${x}_${y}`,
          visible: true
        });
        this.addActor(tile);
      }
    }
  }

  private _AyeMeetsPuddle(aye: Aye, puddle: Puddle) {
    aye.inPuddle = 2;
    if (!aye.target) {
      puddle.inkColor.blend(puddle.inkColor, aye.inkColor, aye.inkLeft / (aye.inkLeft + puddle.inkLeft));
      aye.inkColor.copyFrom(puddle.inkColor);
      if (aye.suck && aye.inkLeft < 1 && puddle.inkLeft > 0) {
        aye.inkLeft += .01;
        puddle.inkLeft -= .01;
      } else if (!aye.suck && aye.inkLeft > 0) {
        aye.inkLeft -= .01;
        puddle.inkLeft += .01;
      }
      puddle.timeToSync = 3;
      if (aye.animationFrame % 2) {
        aye.sendPatch();
      } else {
        puddle.sendPatch();
      }
    }
  }
  private _PuddleMeetsPuddle(puddleA: Puddle, puddleB: Puddle) {
    puddleB.inkColor.blend(puddleB.inkColor, puddleA.inkColor, puddleA.inkLeft / (puddleA.inkLeft + puddleB.inkLeft));
    puddleA.inkColor.copyFrom(puddleB.inkColor);
    puddleA.timeToSync = puddleB.timeToSync = Math.max(puddleA.timeToSync, puddleB.timeToSync);
    if (puddleA.inkLeft > puddleB.inkLeft && puddleB.inkLeft > 0) {
      puddleA.inkLeft += 0.1;
      puddleB.inkLeft -= 0.1;
    }
  }

}
