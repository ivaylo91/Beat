import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    _create(lyric)
    {
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyric;

      document.querySelector(".main").appendChild(message);
    }
  }
}
