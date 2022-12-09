/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".item-details {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  border: 1px solid rgb(236, 236, 246);\\n  padding: 5px;\\n}\\n\\n.clear > h3 {\\n  text-align: center;\\n}\\n\\nbody {\\n  background-color: #f5f5f5;\\n}\\n\\n.whole-body {\\n  border: 1px solid #ececec;\\n  width: 50%;\\n  margin: auto;\\n  padding: 20px;\\n}\\n\\n.books-container {\\n  width: 50%;\\n  margin: auto;\\n}\\n\\nform {\\n  text-align: center;\\n  margin-bottom: 10px;\\n}\\n\\n.button-details {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n#completed {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.edit,\\n.delete {\\n  margin: auto;\\n}\\n\\n.clear-data {\\n  border: 1px solid grey;\\n  width: 50%;\\n  margin: auto;\\n  height: 40px;\\n  padding-top: 20px;\\n  background-color: lightgray;\\n  cursor: pointer;\\n}\\n\\nform > input {\\n  width: 45%;\\n  height: 30px;\\n}\\n\\n#submit {\\n  height: 34px;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-wepack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-wepack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-wepack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-wepack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-wepack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-wepack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-wepack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-wepack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-wepack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-wepack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"mainToggle\": () => (/* binding */ mainToggle),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nlet todoList = [];\n\nconst setLocalStorage = (todoList) => {\n  localStorage.setItem('formInputs', JSON.stringify(todoList));\n};\n\nconst getLocalStorage = () => {\n  if (localStorage.getItem('formInputs') !== null) {\n    todoList = JSON.parse(localStorage.getItem('formInputs'));\n  } else {\n    todoList = [];\n  }\n  return todoList;\n};\n\nconst mainToggle = () => {\n  const togle = document.querySelectorAll('.complete');\n  togle.forEach((toggleItem, index) => {\n    toggleItem.addEventListener('change', () => {\n      const todoList = getLocalStorage();\n      todoList[index].completed = !todoList[index].completed;\n      setLocalStorage(todoList);\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://todo-wepack/./src/complete.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete.js */ \"./src/complete.js\");\n/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ \"./src/modules.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst divContainer = document.querySelector('.books-container');\nconst inputDiv = document.querySelector('#title');\nconst inputSubmit = document.querySelector('#submit');\n\nlet todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)() || [];\n\nlet isEdit = false;\nconst editId = null;\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)();\n\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.editEvents)();\n\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.reassignIndex)();\n\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.removeEvents)();\n\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();\n\ninputSubmit.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (inputDiv.value.trim() !== '') {\n    if (isEdit === false) {\n      const list = {\n        description: inputDiv.value,\n        completed: false,\n        index: todoList.length + 1,\n      };\n\n      todoList.push(list);\n      (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n      todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n      divContainer.innerHTML = '';\n      todoList.forEach((item) => {\n        divContainer.append((0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(item));\n      });\n    } else {\n      todoList[editId].description = inputDiv.value;\n      (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n      todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n      divContainer.innerHTML = '';\n      todoList.forEach((item) => {\n        divContainer.append((0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(item));\n      });\n      isEdit = false;\n    }\n    (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n    inputDiv.value = '';\n    (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.removeEvents)();\n    (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.editEvents)();\n  }\n});\n\ntodoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\ndivContainer.innerHTML = '';\ntodoList.forEach((item) => {\n  divContainer.append((0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(item));\n});\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.removeEvents)();\n(0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.editEvents)();\n\nconst deleteAllItems = document.querySelector('.clear-data');\n\ndeleteAllItems.addEventListener('click', () => {\n  todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n  todoList = todoList.filter((item) => item.completed === false);\n  (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n  divContainer.innerHTML = '';\n  todoList.forEach((item) => {\n    divContainer.append((0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(item));\n  });\n  (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n  (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.removeEvents)();\n  (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.editEvents)();\n});\n\n\n//# sourceURL=webpack://todo-wepack/./src/index.js?");

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo),\n/* harmony export */   \"editEvents\": () => (/* binding */ editEvents),\n/* harmony export */   \"reassignIndex\": () => (/* binding */ reassignIndex),\n/* harmony export */   \"removeEvents\": () => (/* binding */ removeEvents)\n/* harmony export */ });\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete.js */ \"./src/complete.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst divContainer = document.querySelector('.books-container');\nconst inputDiv = document.querySelector('#title');\nconst inputSubmit = document.querySelector('#submit');\n\nlet todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)() || [];\n\nlet isEdit = false;\nlet editId = null;\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n\nconst displayTodo = ({ description, index, completed }) => {\n  const divElement = document.createElement('div');\n  divElement.className = 'first-item';\n  divElement.innerHTML = `\n        <div class=\"item-details\">\n        <span id=\"completed\">\n        <input type=\"checkbox\" name=\"\" value=\"\" class=\"complete\" ${completed ? 'checked' : ''}> <h4 class=\"item-desription\">${description}</h4>\n        \n        <i class=\"fa-solid fa-trash-can\" id\"${index}\"></i>\n        </span>\n        <span class=\"button-details\">\n        <button class=\"edit\" id=\"${index}\">edit</button>\n        <button type=\"button\" id=\"${index}\" class=\"delete\">del</button>\n        </span>\n        </div>\n              `;\n\n  return divElement;\n};\nconst editEvents = () => {\n  document.querySelectorAll('.edit').forEach((button) => button.addEventListener('click', (e) => {\n    e.preventDefault();\n    let id;\n    if (button.id > 0) {\n      id = button.id - 1;\n    } else {\n      id = 0;\n    }\n\n    isEdit = true;\n    editId = id;\n\n    inputDiv.value = todoList[id].description;\n    inputDiv.focus();\n  }));\n};\n\nconst reassignIndex = (todoList) => {\n  todoList.forEach((item, i) => {\n    item.index = i + 1;\n  });\n};\n\nconst removeEvents = () => {\n  document.querySelectorAll('.delete').forEach((button) => button.addEventListener('click', (e) => {\n    e.preventDefault();\n    let id;\n    if (button.id > 0) {\n      id = button.id - 1;\n    } else {\n      id = 0;\n    }\n\n    deleteTask(id); // eslint-disable-line\n  }));\n};\n\nconst deleteTask = (id) => {\n  todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n  const taskToDelete = todoList[id];\n\n  todoList = todoList.filter((item) => item !== taskToDelete);\n  reassignIndex(todoList);\n\n  (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n  divContainer.innerHTML = '';\n  todoList.forEach((item) => {\n    divContainer.append(displayTodo(item));\n  });\n  removeEvents();\n  editEvents();\n};\n\ninputSubmit.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (inputDiv.value.trim() !== '') {\n    if (isEdit === false) {\n      const list = {\n        description: inputDiv.value,\n        completed: false,\n        index: todoList.length + 1,\n      };\n\n      todoList.push(list);\n      (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n      todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n      divContainer.innerHTML = '';\n      todoList.forEach((item) => {\n        divContainer.append(displayTodo(item));\n      });\n    } else {\n      todoList[editId].description = inputDiv.value;\n      (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n      todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n      divContainer.innerHTML = '';\n      todoList.forEach((item) => {\n        divContainer.append(displayTodo(item));\n      });\n      isEdit = false;\n    }\n    (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n    inputDiv.value = '';\n    removeEvents();\n    editEvents();\n  }\n});\n\ntodoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\ndivContainer.innerHTML = '';\ntodoList.forEach((item) => {\n  divContainer.append(displayTodo(item));\n});\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\nremoveEvents();\neditEvents();\n\nconst deleteAllItems = document.querySelector('.clear-data');\n\ndeleteAllItems.addEventListener('click', () => {\n  todoList = (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n  todoList = todoList.filter((item) => item.completed === false);\n  (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todoList);\n  divContainer.innerHTML = '';\n  todoList.forEach((item) => {\n    divContainer.append(displayTodo(item));\n  });\n  (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__.mainToggle)();\n  removeEvents();\n  editEvents();\n});\n\n\n\n//# sourceURL=webpack://todo-wepack/./src/modules.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;