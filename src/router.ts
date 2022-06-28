import { welcome } from "./pages/welcome";
import { instructions } from "./pages/instructions";
import { play } from "./pages/play";
import { result } from "./pages/result";

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: welcome,
  },
  {
    path: /\/instructions/,
    component: instructions,
  },
  {
    path: /\/play/,
    component: play,
  },
  {
    path: /\/result/,
    component: result,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    for (const r of routes) {
      console.log("El handleRoute recibió una nueva ruta", route);
      const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/desafio-m5/" || location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
