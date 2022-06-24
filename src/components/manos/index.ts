import { state } from "../../state";

const piedra = require("url:../../imgs/piedra.png");
const papel = require("url:../../imgs/papel.png");
const tijera = require("url:../../imgs/tijera.png");
customElements.define(
  "custom-hand",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const img = document.createElement("img");
      const style = document.createElement("style");
      const type = this.getAttribute("type");
      const size = this.getAttribute("size");
      if (type == "tijera") {
        img.src = tijera;
      } else if (type == "piedra") {
        img.src = piedra;
      } else if (type == "papel") {
        img.src = papel;
      }
      style.innerHTML = `
      .flotar{
        display:flex;
      }
      @media(min-width:768px) {
        img {
          width: 6rem;
          height: 12rem;
          padding-right: 2rem;
        }
      }
      `;
      img.className = type!;
      this.shadow.appendChild(img);
      this.shadow.appendChild(style);
      this.addListeners();
    }
    addListeners() {
      const handEL = this.shadow;
      handEL.addEventListener("click", (e: any) => {
        const jugada = e.target.className;
        const event = new CustomEvent("change", {
          detail: {
            jugada: jugada,
          },
        });
        this.dispatchEvent(event);
      });
    }
  }
);
