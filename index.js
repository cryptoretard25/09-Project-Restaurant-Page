"use strict";
(self["webpackChunk_09_project_restaraunt_page"] = self["webpackChunk_09_project_restaraunt_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/StarjediRegular.ttf */ "./src/fonts/StarjediRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"StarWars-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n  text-decoration: none;\n  -border: 1px dashed gray;\n}\n:root {\n  font-size: 62.5%;\n  font-family: \"StarWars-Regular\";\n  --ash-gray: #b4b8abff;\n  --prussian-blue: #153243ff;\n  --indigo-dye: #284b63ff;\n  --ivory: #f4f9e9ff;\n  --alabaster: #eef0ebff;\n  /* shadow */\n  --inner-shadow: inset #1d1c1c00 0px 5px 15px;\n  --outer-shadow: 2px 4px 8px 1px rgba(255, 255, 255, 0.199);\n}\nbody {\n  font-size: 2rem;\n  min-height: 100vh;\n  color: white;\n  background-color: var(--ivory);\n}\n.grid-container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"menu\"\n    \"content\"\n    \"footer\";\n}\n.header {\n  padding: 2rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-area: header;\n  text-align: center;\n  background-color: var(--indigo-dye);\n}\n.menu {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n  grid-area: menu;\n  background-color: var(--ash-gray);\n  box-shadow: var(--inner-shadow);\n  display: grid;\n  gap: 0.2rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n.menu-item {\n  background-color: var(--prussian-blue);\n  -background-color: black;\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.menu-item:hover > .menu-text {\n  transform: scale(1.5);\n}\n.menu-item:hover {\n  color: var(--prussian-blue);\n  background-color: var(--ivory);\n}\n\n.active{\n  border: 2px solid var(--ash-gray);\n  color: var(--prussian-blue);\n  background-color: var(--ivory);\n  font-size: 1.2em;\n}\n\n.hover {\n  min-height: calc(100% - 5rem);\n  background-color: rgba(0, 0, 0, 0.7);\n  margin: 1.5rem auto;\n  padding: 2rem 4rem;\n  width: min(140rem, 100%);\n  box-shadow: var(--outer-shadow);\n}\n.home-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n}\n.home-page > .chief {\n  opacity: 90%;\n  width: max(300px, 27%);\n  border-radius: 50%;\n}\n.menu-page {\n  grid-area: content;\n  color: var(--prussian-blue);\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));\n  column-gap: 7rem;\n  row-gap: 2.5rem;\n  grid-auto-rows: 30rem;\n}\n.contacts-page {\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  text-align: center;\n}\n.contacts-page > .map-location {\n  box-shadow: var(--outer-shadow);\n  width: max(500px, 45%);\n}\n.background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center 80px;\n  background-attachment: fixed;\n  background-color: var(--ivory);\n\n  display: flex;\n  align-items: center;\n}\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-area: footer;\n  padding: 1rem;\n  text-align: center;\n  background-color: var(--indigo-dye);\n}\n\n.food {\n  border: 2px solid black;\n  box-shadow: var(--outer-shadow);\n  background-color: grey;\n  border: 3px solid var(--ash-gray);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n\n.food:hover {\n  border: 3px solid var(--indigo-dye);\n  transform: scale(1.05);\n}\n.food > img {\n  height: 75%;\n  border-bottom: 3px solid var(--ash-gray);\n}\n.food > .description {\n  padding: 0 2rem;\n  color: white;\n  background-color: var(--prussian-blue);\n  flex: 1;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.food-name {\n  flex: 1;\n}\n.food-content {\n  display: none;\n}\n.food:hover > .food-content {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 75%;\n  padding: 20px;\n  align-items: center;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-shadow: 0 0 10px rgb(0, 0, 0);\n  transition: 0.2s;\n  transform: translateY(-34%);\n}\n@media only screen and (max-width: 660px) {\n  .menu {\n    grid-template-columns: 1fr;\n    padding: 0.3rem 0;\n    gap: 0;\n    grid-row-gap: 0.3rem;\n  }\n  .contacts-page > .map-location {\n    box-shadow: var(--outer-shadow);\n    width: max(300px, 50%);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,+DAA0D;EAC1D,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,qBAAqB;EACrB,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,4CAA4C;EAC5C,0DAA0D;AAC5D;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,sCAAsC;EACtC;;;;YAIU;AACZ;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,mCAAmC;AACrC;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,iCAAiC;EACjC,+BAA+B;EAC/B,aAAa;EACb,WAAW;EACX,qCAAqC;AACvC;AACA;EACE,sCAAsC;EACtC,wBAAwB;EACxB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;EACjC,2BAA2B;EAC3B,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;EAClB,wBAAwB;EACxB,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,aAAa;EACb,4DAA4D;EAC5D,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,+BAA+B;EAC/B,sBAAsB;AACxB;AACA;EACE,yDAAuC;EACvC,sBAAsB;EACtB,gCAAgC;EAChC,4BAA4B;EAC5B,8BAA8B;;EAE9B,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,sBAAsB;EACtB,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,wCAAwC;AAC1C;AACA;EACE,eAAe;EACf,YAAY;EACZ,sCAAsC;EACtC,OAAO;EACP,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,OAAO;AACT;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qCAAqC;EACrC,kCAAkC;EAClC,gBAAgB;EAChB,2BAA2B;AAC7B;AACA;EACE;IACE,0BAA0B;IAC1B,iBAAiB;IACjB,MAAM;IACN,oBAAoB;EACtB;EACA;IACE,+BAA+B;IAC/B,sBAAsB;EACxB;AACF","sourcesContent":["@font-face {\n  font-family: \"StarWars-Regular\";\n  src: url(\"./fonts/StarjediRegular.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n  text-decoration: none;\n  -border: 1px dashed gray;\n}\n:root {\n  font-size: 62.5%;\n  font-family: \"StarWars-Regular\";\n  --ash-gray: #b4b8abff;\n  --prussian-blue: #153243ff;\n  --indigo-dye: #284b63ff;\n  --ivory: #f4f9e9ff;\n  --alabaster: #eef0ebff;\n  /* shadow */\n  --inner-shadow: inset #1d1c1c00 0px 5px 15px;\n  --outer-shadow: 2px 4px 8px 1px rgba(255, 255, 255, 0.199);\n}\nbody {\n  font-size: 2rem;\n  min-height: 100vh;\n  color: white;\n  background-color: var(--ivory);\n}\n.grid-container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"menu\"\n    \"content\"\n    \"footer\";\n}\n.header {\n  padding: 2rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-area: header;\n  text-align: center;\n  background-color: var(--indigo-dye);\n}\n.menu {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n  grid-area: menu;\n  background-color: var(--ash-gray);\n  box-shadow: var(--inner-shadow);\n  display: grid;\n  gap: 0.2rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n.menu-item {\n  background-color: var(--prussian-blue);\n  -background-color: black;\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.menu-item:hover > .menu-text {\n  transform: scale(1.5);\n}\n.menu-item:hover {\n  color: var(--prussian-blue);\n  background-color: var(--ivory);\n}\n\n.active{\n  border: 2px solid var(--ash-gray);\n  color: var(--prussian-blue);\n  background-color: var(--ivory);\n  font-size: 1.2em;\n}\n\n.hover {\n  min-height: calc(100% - 5rem);\n  background-color: rgba(0, 0, 0, 0.7);\n  margin: 1.5rem auto;\n  padding: 2rem 4rem;\n  width: min(140rem, 100%);\n  box-shadow: var(--outer-shadow);\n}\n.home-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n}\n.home-page > .chief {\n  opacity: 90%;\n  width: max(300px, 27%);\n  border-radius: 50%;\n}\n.menu-page {\n  grid-area: content;\n  color: var(--prussian-blue);\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));\n  column-gap: 7rem;\n  row-gap: 2.5rem;\n  grid-auto-rows: 30rem;\n}\n.contacts-page {\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  text-align: center;\n}\n.contacts-page > .map-location {\n  box-shadow: var(--outer-shadow);\n  width: max(500px, 45%);\n}\n.background {\n  background-image: url(./background.jpg);\n  background-size: cover;\n  background-position: center 80px;\n  background-attachment: fixed;\n  background-color: var(--ivory);\n\n  display: flex;\n  align-items: center;\n}\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-area: footer;\n  padding: 1rem;\n  text-align: center;\n  background-color: var(--indigo-dye);\n}\n\n.food {\n  border: 2px solid black;\n  box-shadow: var(--outer-shadow);\n  background-color: grey;\n  border: 3px solid var(--ash-gray);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n\n.food:hover {\n  border: 3px solid var(--indigo-dye);\n  transform: scale(1.05);\n}\n.food > img {\n  height: 75%;\n  border-bottom: 3px solid var(--ash-gray);\n}\n.food > .description {\n  padding: 0 2rem;\n  color: white;\n  background-color: var(--prussian-blue);\n  flex: 1;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.food-name {\n  flex: 1;\n}\n.food-content {\n  display: none;\n}\n.food:hover > .food-content {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 75%;\n  padding: 20px;\n  align-items: center;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-shadow: 0 0 10px rgb(0, 0, 0);\n  transition: 0.2s;\n  transform: translateY(-34%);\n}\n@media only screen and (max-width: 660px) {\n  .menu {\n    grid-template-columns: 1fr;\n    padding: 0.3rem 0;\n    gap: 0;\n    grid-row-gap: 0.3rem;\n  }\n  .contacts-page > .map-location {\n    box-shadow: var(--outer-shadow);\n    width: max(300px, 50%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant-location.png */ "./src/img/restaurant-location.png");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contactsPage = document.createElement('div');
  contactsPage.classList.add('contacts-page', 'hover');
  const title = document.createElement('h3');
  title.textContent = 'our contacts';
  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 123 456 789';
  const address = document.createElement('p')
  address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
  const mapPicture = new Image();
  mapPicture.src = _img_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__;
  mapPicture.classList.add('map-location')

  contactsPage.append(title, phoneNumber, address, mapPicture);
  return contactsPage;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_chief_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chief.jpg */ "./src/img/chief.jpg");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const divContainer = document.createElement('div');
  divContainer.classList.add('home-page', 'hover');
  const title = document.createElement('h3');
  title.textContent = 'We making the best pizza in the universe';
  const description = document.createElement('h3');
  description.textContent = 'Made with passion since 2022';
  const chiefImg = new Image();
  chiefImg.src = _img_chief_jpg__WEBPACK_IMPORTED_MODULE_0__;
  chiefImg.classList.add('chief');
  const chiefWelcome = document.createElement('h3');
  chiefWelcome.textContent = 'our chief';
  const chiefName = document.createElement('h2');
  chiefName.textContent = 'Konstantin ivlev';
  const welcomeMsg = document.createElement('p');
  welcomeMsg.textContent = 'order online or visit us!'


  divContainer.append(title, description, chiefImg, chiefWelcome, chiefName, welcomeMsg)
  return divContainer;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
const { log } = console;








const mainContainer = document.querySelector(".background");
const menu = document.querySelectorAll(".menu-item");

const onload = (function(){
  mainContainer.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  activeBtn(menu[0]);
})()

menu.forEach((menu) => {
  menu.addEventListener("click", showBlock, { capture: true });
});

function activeBtn(target) {
  menu.forEach((menu) => menu.classList.remove("active"));
  target.classList.add("active");
}

function showBlock(e) {
  if (e.target.classList.contains("menu-one")) {
    mainContainer.innerHTML = "";
    activeBtn(e.target);
    mainContainer.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  } else if (e.target.classList.contains("menu-two")) {
    mainContainer.innerHTML = "";
    activeBtn(e.target);
    mainContainer.append((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
  } else if (e.target.classList.contains("menu-three")) {
    mainContainer.innerHTML = "";
    activeBtn(e.target);
    mainContainer.append((0,_contacts__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Food {
  constructor(src, name, price, content){
    this.src = src;
    this.name = name;
    this.price = price;
    this.content = content;
  }
  createFood(){
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('src', this.src);
    img.setAttribute('alr', this.name);

    const description = document.createElement('div');
    description.classList.add('description')
    const foodName = document.createElement('div');
    foodName.classList.add('food-name');
    foodName.textContent = this.name;
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = this.price + '€';

    description.append(foodName, price)

    const foodContent = document.createElement('div');
    foodContent.classList.add('food-content');
    foodContent.textContent = this.content;

    food.append(img, description, foodContent);

    return food;
  }
}

const food = [
  new Food(
    "../src/img/Salsiccia.jpeg",
    "Salsiccia",
    10,
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
  ),
  new Food(
    "../src/img/Gamberi.jpg",
    "Gamberi",
    12,
    "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
  ),
  new Food(
    "../src/img/Carne.jpg",
    "Carne",
    18,
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
  ),
  new Food(
    "../src/img/Colorato.jpg",
    "Colorato",
    15,
    "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
  ),
  new Food(
    "../src/img/Pomodoro.jpg",
    "Pomodoro",
    14,
    "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
  ),
  new Food(
    "../src/img/Crema.jpg",
    "Crema",
    16,
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
  ),
];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-page', 'hover');

  food.forEach(food => menuContainer.append(food.createFood()))

  return menuContainer;
}



/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "039b17594aad2bba73df.jpg";

/***/ }),

/***/ "./src/fonts/StarjediRegular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/StarjediRegular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d577dc1e1755c4860f3.ttf";

/***/ }),

/***/ "./src/img/chief.jpg":
/*!***************************!*\
  !*** ./src/img/chief.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afeb075cccf51a74403b.jpg";

/***/ }),

/***/ "./src/img/restaurant-location.png":
/*!*****************************************!*\
  !*** ./src/img/restaurant-location.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d4ead59a4044100f85f.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8wOS1wcm9qZWN0LXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMDktcHJvamVjdC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMDktcHJvamVjdC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMDktcHJvamVjdC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMDktcHJvamVjdC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMDktcHJvamVjdC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8wOS1wcm9qZWN0LXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly8wOS1wcm9qZWN0LXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzA5LXByb2plY3QtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvU3RhcmplZGlSZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0YXJXYXJzLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XFxufVxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBmb250LWZhbWlseTogXFxcIlN0YXJXYXJzLVJlZ3VsYXJcXFwiO1xcbiAgLS1hc2gtZ3JheTogI2I0YjhhYmZmO1xcbiAgLS1wcnVzc2lhbi1ibHVlOiAjMTUzMjQzZmY7XFxuICAtLWluZGlnby1keWU6ICMyODRiNjNmZjtcXG4gIC0taXZvcnk6ICNmNGY5ZTlmZjtcXG4gIC0tYWxhYmFzdGVyOiAjZWVmMGViZmY7XFxuICAvKiBzaGFkb3cgKi9cXG4gIC0taW5uZXItc2hhZG93OiBpbnNldCAjMWQxYzFjMDAgMHB4IDVweCAxNXB4O1xcbiAgLS1vdXRlci1zaGFkb3c6IDJweCA0cHggOHB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk5KTtcXG59XFxuYm9keSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl2b3J5KTtcXG59XFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlclxcXCJcXG4gICAgXFxcIm1lbnVcXFwiXFxuICAgIFxcXCJjb250ZW50XFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIjtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28tZHllKTtcXG59XFxuLm1lbnUge1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICBncmlkLWFyZWE6IG1lbnU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2gtZ3JheSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1pbm5lci1zaGFkb3cpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC4ycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuLm1lbnUtaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcnVzc2lhbi1ibHVlKTtcXG4gIC1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudS1pdGVtOmhvdmVyID4gLm1lbnUtdGV4dCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXBydXNzaWFuLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXZvcnkpO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXNoLWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLXBydXNzaWFuLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXZvcnkpO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgbWFyZ2luOiAxLjVyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIHdpZHRoOiBtaW4oMTQwcmVtLCAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7XFxufVxcbi5ob21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaG9tZS1wYWdlID4gLmNoaWVmIHtcXG4gIG9wYWNpdHk6IDkwJTtcXG4gIHdpZHRoOiBtYXgoMzAwcHgsIDI3JSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tZW51LXBhZ2Uge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgY29sb3I6IHZhcigtLXBydXNzaWFuLWJsdWUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXG4gIGNvbHVtbi1nYXA6IDdyZW07XFxuICByb3ctZ2FwOiAyLjVyZW07XFxuICBncmlkLWF1dG8tcm93czogMzByZW07XFxufVxcbi5jb250YWN0cy1wYWdlIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3RzLXBhZ2UgPiAubWFwLWxvY2F0aW9uIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7XFxuICB3aWR0aDogbWF4KDUwMHB4LCA0NSUpO1xcbn1cXG4uYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA4MHB4O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl2b3J5KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28tZHllKTtcXG59XFxuXFxuLmZvb2Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWFzaC1ncmF5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vZDpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pbmRpZ28tZHllKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5mb29kID4gaW1nIHtcXG4gIGhlaWdodDogNzUlO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWFzaC1ncmF5KTtcXG59XFxuLmZvb2QgPiAuZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ1c3NpYW4tYmx1ZSk7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb29kLW5hbWUge1xcbiAgZmxleDogMTtcXG59XFxuLmZvb2QtY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZm9vZDpob3ZlciA+IC5mb29kLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzQlKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xcbiAgLm1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxuICAgIGdhcDogMDtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjNyZW07XFxuICB9XFxuICAuY29udGFjdHMtcGFnZSA+IC5tYXAtbG9jYXRpb24ge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLCtEQUEwRDtFQUMxRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsMERBQTBEO0FBQzVEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDOzs7O1lBSVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixXQUFXO0VBQ1gscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseURBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDhCQUE4Qjs7RUFFOUIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLE9BQU87RUFDUCxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGFyV2Fycy1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1N0YXJqZWRpUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLWJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xcbn1cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGFyV2Fycy1SZWd1bGFyXFxcIjtcXG4gIC0tYXNoLWdyYXk6ICNiNGI4YWJmZjtcXG4gIC0tcHJ1c3NpYW4tYmx1ZTogIzE1MzI0M2ZmO1xcbiAgLS1pbmRpZ28tZHllOiAjMjg0YjYzZmY7XFxuICAtLWl2b3J5OiAjZjRmOWU5ZmY7XFxuICAtLWFsYWJhc3RlcjogI2VlZjBlYmZmO1xcbiAgLyogc2hhZG93ICovXFxuICAtLWlubmVyLXNoYWRvdzogaW5zZXQgIzFkMWMxYzAwIDBweCA1cHggMTVweDtcXG4gIC0tb3V0ZXItc2hhZG93OiAycHggNHB4IDhweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5OSk7XFxufVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdm9yeSk7XFxufVxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgIFxcXCJtZW51XFxcIlxcbiAgICBcXFwiY29udGVudFxcXCJcXG4gICAgXFxcImZvb3RlclxcXCI7XFxufVxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvLWR5ZSk7XFxufVxcbi5tZW51IHtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcbiAgZ3JpZC1hcmVhOiBtZW51O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNoLWdyYXkpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0taW5uZXItc2hhZG93KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbi5tZW51LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ1c3NpYW4tYmx1ZSk7XFxuICAtYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnUtaXRlbTpob3ZlciA+IC5tZW51LXRleHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcnVzc2lhbi1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl2b3J5KTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFzaC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1wcnVzc2lhbi1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl2b3J5KTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5ob3ZlciB7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIG1hcmdpbjogMS41cmVtIGF1dG87XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICB3aWR0aDogbWluKDE0MHJlbSwgMTAwJSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xcbn1cXG4uaG9tZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhvbWUtcGFnZSA+IC5jaGllZiB7XFxuICBvcGFjaXR5OiA5MCU7XFxuICB3aWR0aDogbWF4KDMwMHB4LCAyNyUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWVudS1wYWdlIHtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGNvbG9yOiB2YXIoLS1wcnVzc2lhbi1ibHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxuICBjb2x1bW4tZ2FwOiA3cmVtO1xcbiAgcm93LWdhcDogMi41cmVtO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcmVtO1xcbn1cXG4uY29udGFjdHMtcGFnZSB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250YWN0cy1wYWdlID4gLm1hcC1sb2NhdGlvbiB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xcbiAgd2lkdGg6IG1heCg1MDBweCwgNDUlKTtcXG59XFxuLmJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA4MHB4O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl2b3J5KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28tZHllKTtcXG59XFxuXFxuLmZvb2Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWFzaC1ncmF5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vZDpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pbmRpZ28tZHllKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5mb29kID4gaW1nIHtcXG4gIGhlaWdodDogNzUlO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWFzaC1ncmF5KTtcXG59XFxuLmZvb2QgPiAuZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ1c3NpYW4tYmx1ZSk7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb29kLW5hbWUge1xcbiAgZmxleDogMTtcXG59XFxuLmZvb2QtY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZm9vZDpob3ZlciA+IC5mb29kLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzQlKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xcbiAgLm1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxuICAgIGdhcDogMDtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjNyZW07XFxuICB9XFxuICAuY29udGFjdHMtcGFnZSA+IC5tYXAtbG9jYXRpb24ge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1hcCBmcm9tICcuL2ltZy9yZXN0YXVyYW50LWxvY2F0aW9uLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGNvbnRhY3RzUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0c1BhZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtcGFnZScsICdob3ZlcicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ291ciBjb250YWN0cyc7XG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJ/Cfk54gMTIzIDQ1NiA3ODknO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAn8J+PoCBIb2xseXdvb2QgQm91bGV2YXJkIDQyLCBMb3MgQW5nZWxlcywgVVNBJztcbiAgY29uc3QgbWFwUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICBtYXBQaWN0dXJlLnNyYyA9IG1hcDtcbiAgbWFwUGljdHVyZS5jbGFzc0xpc3QuYWRkKCdtYXAtbG9jYXRpb24nKVxuXG4gIGNvbnRhY3RzUGFnZS5hcHBlbmQodGl0bGUsIHBob25lTnVtYmVyLCBhZGRyZXNzLCBtYXBQaWN0dXJlKTtcbiAgcmV0dXJuIGNvbnRhY3RzUGFnZTtcbn0iLCJpbXBvcnQgY2hpZWYgZnJvbSAnLi9pbWcvY2hpZWYuanBnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScsICdob3ZlcicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1dlIG1ha2luZyB0aGUgYmVzdCBwaXp6YSBpbiB0aGUgdW5pdmVyc2UnO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ01hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDIwMjInO1xuICBjb25zdCBjaGllZkltZyA9IG5ldyBJbWFnZSgpO1xuICBjaGllZkltZy5zcmMgPSBjaGllZjtcbiAgY2hpZWZJbWcuY2xhc3NMaXN0LmFkZCgnY2hpZWYnKTtcbiAgY29uc3QgY2hpZWZXZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY2hpZWZXZWxjb21lLnRleHRDb250ZW50ID0gJ291ciBjaGllZic7XG4gIGNvbnN0IGNoaWVmTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNoaWVmTmFtZS50ZXh0Q29udGVudCA9ICdLb25zdGFudGluIGl2bGV2JztcbiAgY29uc3Qgd2VsY29tZU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VsY29tZU1zZy50ZXh0Q29udGVudCA9ICdvcmRlciBvbmxpbmUgb3IgdmlzaXQgdXMhJ1xuXG5cbiAgZGl2Q29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWVmSW1nLCBjaGllZldlbGNvbWUsIGNoaWVmTmFtZSwgd2VsY29tZU1zZylcbiAgcmV0dXJuIGRpdkNvbnRhaW5lcjtcbn0iLCJjb25zdCB7IGxvZyB9ID0gY29uc29sZTtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBob21lcGFnZUNyZWF0b3IgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNvbnRhY3RzQ3JlYXRvciBmcm9tIFwiLi9jb250YWN0c1wiO1xuaW1wb3J0IG1lbnVDcmVhdG9yIGZyb20gXCIuL21lbnVcIjtcblxuXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tncm91bmRcIik7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW1cIik7XG5cbmNvbnN0IG9ubG9hZCA9IChmdW5jdGlvbigpe1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChob21lcGFnZUNyZWF0b3IoKSk7XG4gIGFjdGl2ZUJ0bihtZW51WzBdKTtcbn0pKClcblxubWVudS5mb3JFYWNoKChtZW51KSA9PiB7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dCbG9jaywgeyBjYXB0dXJlOiB0cnVlIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFjdGl2ZUJ0bih0YXJnZXQpIHtcbiAgbWVudS5mb3JFYWNoKChtZW51KSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Jsb2NrKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtb25lXCIpKSB7XG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGFjdGl2ZUJ0bihlLnRhcmdldCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoaG9tZXBhZ2VDcmVhdG9yKCkpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtdHdvXCIpKSB7XG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGFjdGl2ZUJ0bihlLnRhcmdldCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobWVudUNyZWF0b3IoKSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS10aHJlZVwiKSkge1xuICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhY3RpdmVCdG4oZS50YXJnZXQpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGNvbnRhY3RzQ3JlYXRvcigpKTtcbiAgfVxufVxuIiwiXG5jbGFzcyBGb29kIHtcbiAgY29uc3RydWN0b3Ioc3JjLCBuYW1lLCBwcmljZSwgY29udGVudCl7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuICBjcmVhdGVGb29kKCl7XG4gICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHInLCB0aGlzLm5hbWUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kTmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kLW5hbWUnKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLnByaWNlICsgJ+KCrCc7XG5cbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoZm9vZE5hbWUsIHByaWNlKVxuXG4gICAgY29uc3QgZm9vZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWNvbnRlbnQnKTtcbiAgICBmb29kQ29udGVudC50ZXh0Q29udGVudCA9IHRoaXMuY29udGVudDtcblxuICAgIGZvb2QuYXBwZW5kKGltZywgZGVzY3JpcHRpb24sIGZvb2RDb250ZW50KTtcblxuICAgIHJldHVybiBmb29kO1xuICB9XG59XG5cbmNvbnN0IGZvb2QgPSBbXG4gIG5ldyBGb29kKFxuICAgIFwiLi4vc3JjL2ltZy9TYWxzaWNjaWEuanBlZ1wiLFxuICAgIFwiU2Fsc2ljY2lhXCIsXG4gICAgMTAsXG4gICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBIb21lbWFkZSBzYXVzYWdlLCBHYXJsaWMsIEJhc2lsXCJcbiAgKSxcbiAgbmV3IEZvb2QoXG4gICAgXCIuLi9zcmMvaW1nL0dhbWJlcmkuanBnXCIsXG4gICAgXCJHYW1iZXJpXCIsXG4gICAgMTIsXG4gICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgRmV0YSBjaGVlc2UsIE9saXZlcywgQmFzaWxcIlxuICApLFxuICBuZXcgRm9vZChcbiAgICBcIi4uL3NyYy9pbWcvQ2FybmUuanBnXCIsXG4gICAgXCJDYXJuZVwiLFxuICAgIDE4LFxuICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIEhvbWVtYWRlIHNhdXNhZ2UsIEJhY29uLCBHYXJsaWMsIFBlcHBlciwgQ2hpbGxpXCJcbiAgKSxcbiAgbmV3IEZvb2QoXG4gICAgXCIuLi9zcmMvaW1nL0NvbG9yYXRvLmpwZ1wiLFxuICAgIFwiQ29sb3JhdG9cIixcbiAgICAxNSxcbiAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBPbmlvbiwgUGVwcGVyLCBDaGFtcGlnbm9ucywgQmFzaWxcIlxuICApLFxuICBuZXcgRm9vZChcbiAgICBcIi4uL3NyYy9pbWcvUG9tb2Rvcm8uanBnXCIsXG4gICAgXCJQb21vZG9yb1wiLFxuICAgIDE0LFxuICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgY2hlZXNlLCBDaGlsbGlcIlxuICApLFxuICBuZXcgRm9vZChcbiAgICBcIi4uL3NyYy9pbWcvQ3JlbWEuanBnXCIsXG4gICAgXCJDcmVtYVwiLFxuICAgIDE2LFxuICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIEhvbWVtYWRlIHNhdXNhZ2UsIEJhY29uLCBHYXJsaWMsIFBlcHBlciwgQ2hpbGxpXCJcbiAgKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnLCAnaG92ZXInKTtcblxuICBmb29kLmZvckVhY2goZm9vZCA9PiBtZW51Q29udGFpbmVyLmFwcGVuZChmb29kLmNyZWF0ZUZvb2QoKSkpXG5cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==