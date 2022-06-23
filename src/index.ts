import { initRouter } from "./router";
import "./components/texto";
import "./components/boton";
import "./components/contador";
import "./components/manos";
import "./components/estrella";
(function () {
  const root = document.querySelector(".root")!;
  initRouter(root);
})();
