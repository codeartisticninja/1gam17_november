"use strict";
import web from "./web";
import lazyJSON from "./lazyJSON";

/**
 * Collab class
 * 
 * @date 07-dec-2017
 */

export default class Collab {
  public peer: PeerJs.Peer = new Peer({ key: "j6tp8oirpyx5stt9" });
  public peers: { [key: string]: PeerJs.DataConnection } = {};
  public state: any = {};

  constructor(public url: string) {
    this.checkIn();
  }

  checkIn() {
    web.post(
      this.url,
      `id=${encodeURI(this.peer.id)}`,
      (req: XMLHttpRequest) => {
        try {
          let json = JSON.parse(req.responseText);
          if (json.success) {
            this.applyToState(json.state);
            (<string[]>json.peers).forEach((id: string) => {
              this.addPeer(id);
            });
          } else {
            console.log(json);
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
  }

  addPeer(id: string, conn?: PeerJs.DataConnection) {
    let peer = this.peers[id];
    if (!peer && id !== this.peer.id) {
      this.peers[id] = peer = conn || this.peer.connect(id);
      peer.on("open", () => {
        console.log("Connected to", id);
      });
      peer.on("data", (data) => {
        console.log(id, "says", data);
        this.applyToState(data);
      });
      peer.on("close", () => {
        console.log(id, "disconnected");
        this.removePeer(id);
      });
      peer.on("error", (err) => {
        console.log("Error connecting to", id, err);
        this.removePeer(id);
      });
    }
  }
  removePeer(id: string) {
    if (this.peers[id]) {
      this.peers[id].close();
      delete this.peers[id];
    }
  }

  applyToState(patch: any) {
    lazyJSON.setProperties(lazyJSON.lazyJSON(patch), this.state);
  }

  /*
    _privates
  */

  private _incomming(conn: PeerJs.DataConnection) {
    this.addPeer(conn.peer, conn);
  }

}
