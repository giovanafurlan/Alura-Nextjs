"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./pages/posts/index.jsx":
/*!*******************************!*\
  !*** ./pages/posts/index.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dados_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dados.json */ \"./dados.json\");\n\n// exemplo do lado do cliente\n// a2.4/pages/posts/index.js\n\n\nfunction Posts(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(router.query);\n    // pegando o post que tem a data informada como parâmetro\n    const posts = _dados_json__WEBPACK_IMPORTED_MODULE_2__.posts.filter((post)=>post.date === router.query.date\n    );\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.length > 0 ? posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(post, null, 2)\n            }, post.id, false, {\n                fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/incremental/pages/posts/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Nenhum post encontrado\"\n        }, void 0, false, {\n            fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/incremental/pages/posts/index.jsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/incremental/pages/posts/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQTZCO0FBQzdCLEVBQTRCO0FBQ1c7QUFDSDtBQUVyQixRQUFRLENBQUNFLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDcEMsS0FBSyxDQUFDQyxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxLQUFLO0lBRTFCLEVBQXlEO0lBQ3pELEtBQUssQ0FBQ0MsS0FBSyxHQUFHUCxxREFBa0IsRUFBRVMsSUFBSSxHQUFLQSxJQUFJLENBQUNDLElBQUksS0FBS1AsTUFBTSxDQUFDRyxLQUFLLENBQUNJLElBQUk7O0lBRXhFLE1BQU0sNkVBQ0hDLENBQUc7a0JBQ0FKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsR0FDZEwsS0FBSyxDQUFDTSxHQUFHLEVBQUVKLElBQUksK0VBQ1pLLENBQUc7MEJBQWdCQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2VBQXRDQSxJQUFJLENBQUNRLEVBQUU7Ozs7O3dGQUdwQkMsQ0FBQztzQkFBQyxDQUFzQjs7Ozs7Ozs7Ozs7QUFJakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ExLjEvLi9wYWdlcy9wb3N0cy9pbmRleC5qc3g/YTE1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleGVtcGxvIGRvIGxhZG8gZG8gY2xpZW50ZVxuLy8gYTIuNC9wYWdlcy9wb3N0cy9pbmRleC5qc1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGRhZG9zIGZyb20gJy4uLy4uL2RhZG9zLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyhwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcblxuLy8gcGVnYW5kbyBvIHBvc3QgcXVlIHRlbSBhIGRhdGEgaW5mb3JtYWRhIGNvbW8gcGFyw6JtZXRyb1xuY29uc3QgcG9zdHMgPSBkYWRvcy5wb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuZGF0ZSA9PT0gcm91dGVyLnF1ZXJ5LmRhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICB7cG9zdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxwcmUga2V5PXtwb3N0LmlkfT57SlNPTi5zdHJpbmdpZnkocG9zdCwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgICAgKSlcbiAgICAgICApIDogKFxuICAgICAgICA8cD5OZW5odW0gcG9zdCBlbmNvbnRyYWRvPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZGFkb3MiLCJQb3N0cyIsInByb3BzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwiZGF0ZSIsImRpdiIsImxlbmd0aCIsIm1hcCIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./dados.json":
/*!********************!*\
  !*** ./dados.json ***!
  \********************/
/***/ ((module) => {

module.exports = JSON.parse('{"posts":[{"id":"1","video":"https://www.youtube.com/embed/-6JwElEt49w","title":"Git e GitHub: Como subir meu primeiro projeto? Como versionar um projeto? #BaseDev #DevIniciante","content":"Você que ta dando seus primeiros passos como dev, chegou a hora de aprender a usar o GitHub pra guardar seus projetos! Nesse vídeo vamos juntos subir um projeto do ZERO, explicando passo a passo, lendo as mensagens pra você de hoje em diante usar pra sempre!","date":"21/01/2022"},{"id":"2","video":"https://www.youtube.com/embed/aDKxJfJiM28","title":"CSS-in-JS na prática! Criando componentes com React e CSS no NextJS","content":"Você ai já ouviu falar de CSS in JS correto? E se eu ti disser que nesse vídeo você vai ver na prática as vantagens e vai inclusive criar a base de uma lib? �  então senta ai na cadeira, pega a pipoca e vamo pro vídeo!","date":"14/01/2022"},{"id":"3","video":"https://www.youtube.com/embed/R41_Qedrzik","title":"Como documentar códigos? Documentando Front End com Storybook!","content":"Como você documenta seus códigos hoje? Nesse vídeo vou mostrar passo a passo como faço pra adicionar o storybook em um projeto, documentando um componente, gerando a doc interativa dele e muito mais! Mostrando ali o REAL camino das pedras pra você começar a usar em seus ","date":"08/01/2022"},{"id":"4","video":"https://www.youtube.com/embed/R41_Qedrzik","title":"Como documentar códigos? Documentando Front End com Storybook!","content":"Como você documenta seus códigos hoje? Nesse vídeo vou mostrar passo a passo como faço pra adicionar o storybook em um projeto, documentando um componente, gerando a doc interativa dele e muito mais! Mostrando ali o REAL camino das pedras pra você começar a usar em seus ","date":"08/01/2022"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/index.jsx"));
module.exports = __webpack_exports__;

})();