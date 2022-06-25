// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"17ZdQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _texto = require("./components/texto");
var _boton = require("./components/boton");
var _contador = require("./components/contador");
var _manos = require("./components/manos");
var _estrella = require("./components/estrella");
(function() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
})();

},{"./router":"4QFWt","./components/texto":"dZBiD","./components/boton":"inIDM","./components/contador":"9qFJd","./components/manos":"5Ho6G","./components/estrella":"5AM8c"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _result = require("./pages/result");
const BASE_PATH = "/desafio-m5/";
function isGithubPages() {
    return location.host.includes("github.io");
}
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.welcome)
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.instructions)
    },
    {
        path: /\/play/,
        component: (0, _play.play)
    },
    {
        path: /\/result/,
        component: (0, _result.result)
    }, 
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        for (const r of routes){
            console.log("El handleRoute recibi\xf3 una nueva ruta", route);
            const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
            if (r.path.test(newRoute)) {
                const el = r.component({
                    goTo: goTo
                });
                if (container.firstChild) container.firstChild.remove();
                container.appendChild(el);
            }
        }
    }
    if (location.pathname == "/desafio-m5/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"fNSF3","./pages/instructions":"c8fMJ","./pages/play":"hbEIY","./pages/result":"7wfLH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcome", ()=>welcome);
function welcome(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "page-a";
    div.innerHTML = `
    <custom-text variant="titulo">Piedra, Papel <span>ó</span> <br> Tijeras</custom-text>
    <custom-button class="start-button">Empezar</custom-button>
    <div class="container">
      <custom-hand type="tijera"></custom-hand>
      <custom-hand type="piedra"></custom-hand>
      <custom-hand type="papel"></custom-hand>
    </div>
  `;
    style.innerHTML = `
    .page-a {
      padding: 115px 26px 0px 27px;
      margin: 0 auto;
      max-width: 375px;
      display: flex;
      flex-direction: column;
      gap: 70px;
    }
    .container{
      display:flex;
      justify-content: space-around;
      align-items: flex-end;
    }
    @media (min-width: 951px) {
      .page-a {
        gap: 150px;
        justify-content: flex-end;
      }
  `;
    div.appendChild(style);
    const buttonEL = div.querySelector(".start-button");
    buttonEL.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instructions", ()=>instructions);
function instructions(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "page-b";
    div.innerHTML = `
  <custom-text variant="body">
    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
  </custom-text>
  <custom-button class="play-button">¡Jugar!</custom-button>
  <div class="container">
    <custom-hand type="tijera"></custom-hand>
    <custom-hand type="piedra"></custom-hand>
    <custom-hand type="papel"></custom-hand>
  </div>
  `;
    style.innerHTML = `
  .page-b {
    padding: 80px 26px 0px 27px;
    margin: 0 auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .container{
    display:flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  @media (min-width: 951px) {
    .page-b {
      gap: 120px;
      justify-content: flex-end;
    }
  }
  `;
    div.appendChild(style);
    const button = div.querySelector(".play-button");
    button.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "play", ()=>play);
var _state = require("../../state");
function newPage(div, result) {
    const style = document.createElement("style");
    div.innerHTML = `
        <div class="container">
          <custom-hand class="rotar" type="${result.computerPlay}" size="XL"></custom-hand>
          <custom-hand type="${result.myPlay}" size="XL"> </custom-hand>
        </div>
      `;
    style.innerHTML = `
        .container{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          gap: 130px;
        }
        .rotar{
          transform: rotate(-180deg);
        }
        @media (min-width: 951px) {
          .container{
            gap: 350px;
          }
      `;
    div.appendChild(style);
}
function contador(c, params, div) {
    c.addEventListener("finish", (e)=>{
        const currentSate = (0, _state.state).getState();
        const currentGame = currentSate.currentGame;
        const myPlay = currentGame.myPlay;
        const computerPlay = currentGame.computerPlay;
        let final = e.detail.finish;
        if (final && myPlay == "") params.goTo("/instructions");
        else {
            const result = {
                myPlay,
                computerPlay
            };
            newPage(div, result);
            setTimeout(()=>{
                params.goTo("/result");
            }, 2000);
        }
    });
}
function play(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "page-c";
    div.innerHTML = `
  <custom-counter></custom-counter>
  <div class="container">
  <custom-hand type="tijera" size="big"></custom-hand>
  <custom-hand type="piedra" size="big"></custom-hand>
  <custom-hand type="papel" size="big"></custom-hand>
  </div>
  `;
    style.innerHTML = `
  .page-c {
    padding: 125px 5px 0 5px;
    margin: 0 auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
  }
  .container{
      display:flex;
      justify-content: space-between;
      height: 310px;
      align-items: flex-end;
  }
  @media (min-width: 951px) {
    .page-c {
      gap: 150px;
      height: 100vh;
      justify-content: flex-center;
    }
  `;
    const handsEls = div.querySelectorAll("custom-hand");
    const counterEl = div.getElementsByTagName("custom-counter");
    const counter = counterEl[0];
    for (const hand of handsEls)hand.addEventListener("change", (e)=>{
        const jugada = e.detail.jugada;
        hand.style.alignSelf = "center";
        const resultado = (0, _state.state).setMove(jugada);
        (0, _state.state).pushToHistory({
            ...resultado
        });
    });
    contador(counter, params, div);
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: JSON.parse(localStorage.getItem("saved-state")) || []
    },
    listeners: [],
    getState () {
        return this.data;
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        currentState.currentGame.computerPlay = this.computerMove();
        const resultado = currentState.currentGame;
        return resultado;
    },
    clearCurrentGame () {
        const currentState = this.getState();
        currentState.currentGame.myPlay = "";
        currentState.currentGame.computerPlay = "";
    },
    computerMove () {
        const moves = [
            "piedra",
            "papel",
            "tijera"
        ];
        const randomN = Math.floor(Math.random() * 3);
        return moves[randomN];
    },
    pushToHistory (play) {
        this.data.history.push(play);
        localStorage.setItem("saved-state", JSON.stringify(this.data.history));
    },
    whoWins (myPlay, computerPlay) {
        let result = "";
        const ganoConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganoConPapel = myPlay == "papel" && computerPlay == "piedra";
        const ganoConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const gane = [
            ganoConPapel,
            ganoConPiedra,
            ganoConTijeras
        ].includes(true);
        if (myPlay === computerPlay) result = "empate";
        else if (gane) result = "ganaste";
        else result = "perdiste";
        return result;
    },
    score () {
        const history = this.getState().history;
        const respuesta = {
            score: {
                computerPlay: 0,
                myPlay: 0
            }
        };
        for (const r of history){
            const win = this.whoWins(r.myPlay, r.computerPlay);
            if (win == "ganaste") respuesta.score.myPlay++;
            else if (win == "perdiste") respuesta.score.computerPlay++;
        }
        return respuesta;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wfLH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "result", ()=>result);
var _state = require("../../state");
function getDate() {
    const currentSate = (0, _state.state).getState();
    const currentGame = currentSate.currentGame;
    const puntaje = (0, _state.state).score();
    const maquina = puntaje.score.computerPlay;
    const you = puntaje.score.myPlay;
    const win = (0, _state.state).whoWins(currentGame.myPlay, currentGame.computerPlay);
    return {
        maquina,
        you,
        win
    };
}
function result(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const resultado = getDate();
    div.className = "page-d";
    div.innerHTML = `
  <div class="container">
  <custom-star class="star" type="${resultado.win}"></custom-star>
  <div class="score-container">
    <custom-text variant="body">Score</custom-text>
    <custom-text variant="right" style="text-align: right">Vos: ${resultado.you}</custom-text>
    <custom-text variant="right" style="text-align: right">Maquina: ${resultado.maquina}</custom-text>
  </div>
  <custom-button class="button-return">Volver a Jugar</custom-button>
  <div>
  `;
    style.innerHTML = `
  body{
    background-color: ${resultado.win == "ganaste" ? "rgba(136, 137, 73, 0.9)" : "rgba(137, 73, 73, 0.9)"};
    background-image: none;
  }
  .page-d{
    margin:0 auto;
    max-width: 400px;
    height: 100%;
  }
  .container{
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 360px;
    padding-top: 25px;
    gap:20px;
  }
  @media (min-width: 951px) {
    .container{
      gap:50px;
      padding-top: 80px;
    }
  }
  .score-container{
    width: 259px;
    border: 10px solid #000000;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 15px 30px;
    margin: 0 auto ;
  }
  .star{
    margin: 0 auto;
  }
`;
    div.appendChild(style);
    (0, _state.state).clearCurrentGame();
    const button = div.querySelector(".button-return");
    button.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZBiD":[function(require,module,exports) {
customElements.define("custom-text", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const variant = this.getAttribute("variant") || "body";
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
        .titulo{
          font-family: "Odibee Sans";
          font-size: 78px;
          color: #009048;
          margin: 0;
        }
        .right{
          font-family: 'Odibee Sans', cursive;
          font-size: 55px;
          text-align: right;
        }
        .body{
          font-family: 'Odibee Sans', cursive;
          font-size: 55px;
          text-align: center;
        }
        .titulo > span {
          color: #0090487a;
        }
        `;
        div.className = variant;
        div.innerHTML = this.textContent;
        this.shadow.appendChild(div);
        this.shadow.appendChild(style);
    }
});

},{}],"inIDM":[function(require,module,exports) {
customElements.define("custom-button", class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const button = document.createElement("button");
        button.textContent = this.textContent;
        const style = document.createElement("style");
        style.innerHTML = `
          button{
            width: 100%;
            height: 87px;
            color: white;
            background-color: #006CFC;
            border: 10px solid #001997;
            border-radius: 10px;
            font-family: 'Odibee Sans', cursive;
            font-size: 45px;
          }
        `;
        shadow.appendChild(button);
        shadow.appendChild(style);
    }
});

},{}],"9qFJd":[function(require,module,exports) {
customElements.define("custom-counter", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    counter(numberEl) {
        let counter = 3;
        const intervalId = setInterval(()=>{
            counter--;
            numberEl.textContent = counter.toString();
            if (counter < 0) {
                const event = new CustomEvent("finish", {
                    detail: {
                        finish: counter
                    }
                });
                clearInterval(intervalId);
                this.dispatchEvent(event);
            }
        }, 1000);
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
      <div class="container">
        <div class="circulo"">
          <div class="number">3</div>
        </div>
      </div>
      `;
        style.innerHTML = `
      .container{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .circulo {
        width: 200px;
        height: 200px;
        border: 23px solid #000000;
        border-radius: 50%;
        display:flex;
        justify-content: center;
        align-items: center;
      }
      .number{
        font-family: 'Odibee Sans', cursive;
        font-size: 150px;
        font-weight: bold;
      }
      `;
        const numberEl = this.shadow.querySelector(".number");
        this.counter(numberEl);
        this.shadow.appendChild(style);
    }
});

},{}],"5Ho6G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const piedra = require("url:../../imgs/piedra.png");
const papel = require("url:../../imgs/papel.png");
const tijera = require("url:../../imgs/tijera.png");
customElements.define("custom-hand", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const img = document.createElement("img");
        const style = document.createElement("style");
        const type = this.getAttribute("type");
        const size = this.getAttribute("size");
        if (type == "tijera") img.src = tijera;
        else if (type == "piedra") img.src = piedra;
        else if (type == "papel") img.src = papel;
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
        img.className = type;
        this.shadow.appendChild(img);
        this.shadow.appendChild(style);
        this.addListeners();
    }
    addListeners() {
        const handEL = this.shadow;
        handEL.addEventListener("click", (e)=>{
            const jugada = e.target.className;
            const event = new CustomEvent("change", {
                detail: {
                    jugada: jugada
                }
            });
            this.dispatchEvent(event);
        });
    }
});

},{"url:../../imgs/piedra.png":"3d8Qm","url:../../imgs/papel.png":"gqnHJ","url:../../imgs/tijera.png":"2Vyja","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3d8Qm":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "piedra.b03b08ab.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gqnHJ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "papel.41ebcf7a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2Vyja":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tijera.c3d0a5c1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5AM8c":[function(require,module,exports) {
const winner = require("url:../../imgs/winner.png");
const loser = require("url:../../imgs/loser.png");
const empate = require("url:../../imgs/empate.png");
customElements.define("custom-star", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        const img = document.createElement("img");
        const type = this.getAttribute("type");
        if (type == "ganaste") img.src = winner;
        else if (type == "perdiste") img.src = loser;
        else img.src = empate;
        style.innerHTML = `
        `;
        img.className = type;
        this.shadow.appendChild(img);
        this.shadow.appendChild(style);
    }
});

},{"url:../../imgs/winner.png":"LHZO1","url:../../imgs/loser.png":"5MsCP","url:../../imgs/empate.png":"3ZhuM"}],"LHZO1":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "winner.a8654324.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5MsCP":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "loser.4893d107.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3ZhuM":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "empate.b810a74e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["17ZdQ","h7u1C"], "h7u1C", "parcelRequire2e3e")

//# sourceMappingURL=index.b71e74eb.js.map
