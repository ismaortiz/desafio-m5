const winner = require("url:../../imgs/winner.png");
const loser = require("url:../../imgs/loser.png");
const empate = require("url:../../imgs/empate.png");
customElements.define(
  "custom-star",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      const img = document.createElement("img");
      const type = this.getAttribute("type");
      if (type == "ganaste") {
        img.src = winner;
      } else if (type == "perdiste") {
        img.src = loser;
      } else {
        img.src = empate;
      }
      style.innerHTML = `
        `;
      img.className = type!;
      this.shadow.appendChild(img);
      this.shadow.appendChild(style);
    }
  }
);
