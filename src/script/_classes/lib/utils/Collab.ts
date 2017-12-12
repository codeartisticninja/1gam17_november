"use strict";
import web from "./web";
import lazyJSON from "./lazyJSON";

/**
 * Collab class
 * 
 * @date 12-dec-2017
 */

export default class Collab {
  public peer: PeerJs.Peer;
  public peers: { [key: string]: PeerJs.DataConnection } = {};
  public state: any = {};
  public listeners: Function[] = [];

  constructor(public url: string) {
    this.peer = new Peer({ key: "j6tp8oirpyx5stt9" });
    this.peer.on("open", () => {
      this.checkIn();
    });
    this.peer.on("disconnected", ()=>{
      console.log("Connection lost..", "Reconnecting..");
      this.peer.reconnect();
    });
    this.peer.on("connection", this._incomming.bind(this));
  }

  checkIn() {
    web.post(
      this.url,
      `id=${encodeURIComponent(this.peer.id)}`,
      { setRequestHeader: ["Content-type", "application/x-www-form-urlencoded"] },
      (req: XMLHttpRequest) => {
        try {
          let json = JSON.parse(req.responseText);
          if (json.success) {
            this.applyPatch(json.state);
            (<string[]>json.peers).forEach((id: string) => {
              this.addPeer(id);
            });
          } else {
            console.log(json);
          }
        } catch (err) {
          console.log(req, err);
        }
      }
    )
  }

  addPeer(id: string, conn?: PeerJs.DataConnection) {
    let peer = this.peers[id];
    if (!peer && id !== this.peer.id) {
      this.peers[id] = peer = conn || this.peer.connect(id, { reliable: true });
      let green = true;
      setTimeout(function () { green = false; }, 1024 * 8);
      peer.on("open", () => {
        console.log("Connected to", id);
      });
      peer.on("data", (data) => {
        // console.log(id, "says", data);
        this.applyPatch(data);
      });
      peer.on("close", () => {
        console.log(id, "disconnected");
        this.removePeer(id);
      });
      peer.on("error", (err) => {
        green || this.removePeer(id);
      });
    }
  }
  removePeer(id: string) {
    if (this.peers[id]) {
      this.peers[id].close();
      delete this.peers[id];
    }
  }

  applyPatch(patch: any) {
    patch = lazyJSON.lazyJSON(patch);
    lazyJSON.setProperties(patch, this.state);
    this.listeners.forEach((cb: Function) => {
      cb(patch);
    });
  }

  sendPatch(patch: any) {
    this.applyPatch(patch);
    patch = JSON.stringify(patch);
    for (let id in this.peers) {
      this.peers[id].send(patch);
    }
  }

  onPatch(cb: Function) {
    this.listeners.push(cb);
  }

  /*
    _privates
  */

  private _incomming(conn: PeerJs.DataConnection) {
    this.addPeer(conn.peer, conn);
  }

}
