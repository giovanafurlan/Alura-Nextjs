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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeScreen)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction HomeScreen() {\n    const [senha, setSenha] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('12345');\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log('HomeScreen', router);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            border: '1px solid #F9703E',\n            flexDirection: 'column',\n            maxWidth: {\n                xs: '100%',\n                sm: '400px'\n            },\n            marginTop: '20%',\n            marginHorizontal: {\n                xs: '16px',\n                sm: 'auto'\n            },\n            padding: '32px',\n            borderRadius: '4px',\n            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>{\n                e.preventDefault();\n                if (senha) {\n                    nookies__WEBPACK_IMPORTED_MODULE_4___default().set(null, 'SENHA_SECRETA', senha, {\n                        maxAge: 30 * 24 * 60 * 60,\n                        path: '/'\n                    });\n                    router.push('/area-logada');\n                } else {\n                    alert('Informe uma senha!');\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    flexDirection: 'column'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        label: \"Qual \\xe9 a senha secreta?\",\n                        value: senha,\n                        onChange: (e)=>setSenha(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        label: \"Acessar\"\n                    }, void 0, false, {\n                        fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDb0M7QUFDdEI7QUFDVjtBQUdkLFFBQVEsQ0FBQ00sVUFBVSxHQUFHLENBQUM7SUFDcEMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsSUFBSVIscURBQWMsQ0FBQyxDQUFPO0lBQ2hELEtBQUssQ0FBQ1UsTUFBTSxHQUFHTixzREFBUztJQUN4Qk8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFRixNQUFNO0lBQ2hDLE1BQU0sNkVBQ0hULHFEQUFHO1FBQ0ZZLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLE1BQU0sRUFBRSxDQUFtQjtZQUMzQkMsYUFBYSxFQUFFLENBQVE7WUFDdkJDLFFBQVEsRUFBRSxDQUFDQztnQkFBQUEsRUFBRSxFQUFFLENBQU07Z0JBQUVDLEVBQUUsRUFBRSxDQUFPO1lBQUEsQ0FBQztZQUNuQ0MsU0FBUyxFQUFFLENBQUs7WUFDaEJDLGdCQUFnQixFQUFFLENBQUNIO2dCQUFBQSxFQUFFLEVBQUUsQ0FBTTtnQkFBRUMsRUFBRSxFQUFFLENBQU07WUFBQSxDQUFDO1lBQzFDRyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxZQUFZLEVBQUUsQ0FBSztZQUNuQkMsU0FBUyxFQUFFLENBQWtDO1FBQy9DLENBQUM7OEZBRUFDLENBQUk7WUFDSEMsUUFBUSxHQUFHQyxDQUFDLEdBQUssQ0FBQztnQkFDaEJBLENBQUMsQ0FBQ0MsY0FBYztnQkFDaEIsRUFBRSxFQUFDcEIsS0FBSyxFQUFFLENBQUM7b0JBQ1RGLGtEQUFXLENBQUMsSUFBSSxFQUFFLENBQWUsZ0JBQUVFLEtBQUssRUFBRSxDQUFDO3dCQUN6Q3NCLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO3dCQUN6QkMsSUFBSSxFQUFFLENBQUc7b0JBQ1gsQ0FBQztvQkFDRHBCLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQyxDQUFjO2dCQUM1QixDQUFDLE1BQU0sQ0FBQztvQkFDTkMsS0FBSyxDQUFDLENBQW9CO2dCQUM1QixDQUFDO1lBQ0gsQ0FBQztrR0FFQS9CLHFEQUFHO2dCQUFDWSxVQUFVLEVBQUUsQ0FBQztvQkFBQ0UsYUFBYSxFQUFFLENBQVE7Z0JBQUMsQ0FBQzs7Z0dBQ3pDYiwyREFBUzt3QkFDUitCLEtBQUssRUFBQyxDQUF5Qjt3QkFDL0JDLEtBQUssRUFBRTNCLEtBQUs7d0JBQ1o0QixRQUFRLEdBQUdULENBQUMsR0FBS2xCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ1UsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Z0dBRXpDL0Isd0RBQU07d0JBQ0xrQyxJQUFJLEVBQUMsQ0FBUTt3QkFDYkosS0FBSyxFQUFDLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2EyLjMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IG5vb2tpZXMgZnJvbSAnbm9va2llcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVNjcmVlbigpIHtcbiAgY29uc3QgW3NlbmhhLCBzZXRTZW5oYV0gPSBSZWFjdC51c2VTdGF0ZSgnMTIzNDUnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKCdIb21lU2NyZWVuJywgcm91dGVyKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRjk3MDNFJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIG1heFdpZHRoOiB7eHM6ICcxMDAlJywgc206ICc0MDBweCd9LFxuICAgICAgICBtYXJnaW5Ub3A6ICcyMCUnLFxuICAgICAgICBtYXJnaW5Ib3Jpem9udGFsOiB7eHM6ICcxNnB4Jywgc206ICdhdXRvJ30sXG4gICAgICAgIHBhZGRpbmc6ICczMnB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCA1cHggMCByZ2JhKDI1NSw2OSwwLDAuMiknLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYoc2VuaGEpIHtcbiAgICAgICAgICAgIG5vb2tpZXMuc2V0KG51bGwsICdTRU5IQV9TRUNSRVRBJywgc2VuaGEsIHtcbiAgICAgICAgICAgICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2FyZWEtbG9nYWRhJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbmZvcm1lIHVtYSBzZW5oYSEnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlF1YWwgw6kgYSBzZW5oYSBzZWNyZXRhP1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VuaGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbmhhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGxhYmVsPSdBY2Vzc2FyJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwidXNlUm91dGVyIiwibm9va2llcyIsIkhvbWVTY3JlZW4iLCJzZW5oYSIsInNldFNlbmhhIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwic3R5bGVTaGVldCIsImJvcmRlciIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsInhzIiwic20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Ib3Jpem9udGFsIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldCIsIm1heEFnZSIsInBhdGgiLCJwdXNoIiwiYWxlcnQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();