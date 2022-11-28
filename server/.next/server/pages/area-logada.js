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
exports.id = "pages/area-logada";
exports.ids = ["pages/area-logada"];
exports.modules = {

/***/ "./pages/area-logada.js":
/*!******************************!*\
  !*** ./pages/area-logada.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (/* binding */ LoggedScreen)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getServerSideProps(context) {\n    const cookies = nookies__WEBPACK_IMPORTED_MODULE_3___default().get(context);\n    console.log('Cookies', cookies);\n    const SENHA_SECRETA = '123456';\n    const senhaInformadaPeloUsuario = cookies.SENHA_SECRETA;\n    const isAutorizado = SENHA_SECRETA === senhaInformadaPeloUsuario;\n    if (!isAutorizado) {\n        console.log('N\\xc3O Autorizado!!!');\n        return {\n            redirect: {\n                permanent: false,\n                destination: '/?status=401'\n            }\n        };\n    }\n    console.log('Autorizado!!!');\n    return {\n        props: {}\n    };\n}\nfunction LoggedScreen(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            border: '1px solid #F9703E',\n            flexDirection: 'column',\n            maxWidth: '400px',\n            marginTop: '20%',\n            marginHorizontal: 'auto',\n            padding: '32px',\n            borderRadius: '4px',\n            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                styleSheet: {\n                    marginVertical: '32px'\n                },\n                children: \"Voc\\xea acessou uma \\xe1rea protegida!\"\n            }, void 0, false, {\n                fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/area-logada.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                label: \"Logout\",\n                onClick: ()=>{\n                    nookies__WEBPACK_IMPORTED_MODULE_3___default().destroy(null, 'SENHA_SECRETA');\n                    router.push('/');\n                },\n                colorVariant: \"neutral\",\n                variant: \"secondary\"\n            }, void 0, false, {\n                fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/area-logada.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/giovanafurlan/Documentos/Alura-Nextjs/server/pages/area-logada.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcmVhLWxvZ2FkYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNqQjtBQUNWO0FBRXRCLGVBQWVLLGtCQUFrQixDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUNqRCxLQUFLLENBQUNDLE9BQU8sR0FBR0gsa0RBQVcsQ0FBQ0UsT0FBTztJQUNuQ0csT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUyxVQUFFSCxPQUFPO0lBQzlCLEtBQUssQ0FBQ0ksYUFBYSxHQUFHLENBQVE7SUFDOUIsS0FBSyxDQUFDQyx5QkFBeUIsR0FBR0wsT0FBTyxDQUFDSSxhQUFhO0lBQ3ZELEtBQUssQ0FBQ0UsWUFBWSxHQUFHRixhQUFhLEtBQUtDLHlCQUF5QjtJQUVoRSxFQUFFLEdBQUVDLFlBQVksRUFBRSxDQUFDO1FBQ2pCSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQjtRQUM5QixNQUFLLENBQUMsQ0FBQztZQUNOSSxRQUFRLEVBQUUsQ0FBQztnQkFDVEMsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCQyxXQUFXLEVBQUUsQ0FBYztZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRFAsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZTtJQUMzQixNQUFNLENBQUMsQ0FBQztRQUNOTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztBQUNILENBQUM7QUFFYyxRQUFRLENBQUNDLFlBQVksQ0FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDM0MsS0FBSyxDQUFDRSxNQUFNLEdBQUdoQixzREFBUztJQUN4QixNQUFNLDZFQUNISCxxREFBRztRQUNGb0IsVUFBVSxFQUFFLENBQUM7WUFDWEMsTUFBTSxFQUFFLENBQW1CO1lBQzNCQyxhQUFhLEVBQUUsQ0FBUTtZQUN2QkMsUUFBUSxFQUFFLENBQU87WUFDakJDLFNBQVMsRUFBRSxDQUFLO1lBQ2hCQyxnQkFBZ0IsRUFBRSxDQUFNO1lBQ3hCQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxZQUFZLEVBQUUsQ0FBSztZQUNuQkMsU0FBUyxFQUFFLENBQWtDO1FBQy9DLENBQUM7O3dGQUVBM0Isc0RBQUk7Z0JBQUNtQixVQUFVLEVBQUUsQ0FBQztvQkFBQ1MsY0FBYyxFQUFFLENBQU07Z0JBQUMsQ0FBQzswQkFBRSxDQUU5Qzs7Ozs7O3dGQUVDM0Isd0RBQU07Z0JBQ0w0QixLQUFLLEVBQUMsQ0FBUTtnQkFDZEMsT0FBTyxNQUFRLENBQUM7b0JBQ2QzQixzREFBZSxDQUFDLElBQUksRUFBRSxDQUFlO29CQUNyQ2UsTUFBTSxDQUFDYyxJQUFJLENBQUMsQ0FBRztnQkFDakIsQ0FBQztnQkFDREMsWUFBWSxFQUFDLENBQVM7Z0JBQ3RCQyxPQUFPLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7O0FBSTNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hMi4zLy4vcGFnZXMvYXJlYS1sb2dhZGEuanM/ZDY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGNvbnRleHQpO1xuICBjb25zb2xlLmxvZygnQ29va2llcycsIGNvb2tpZXMpO1xuICBjb25zdCBTRU5IQV9TRUNSRVRBID0gJzEyMzQ1Nic7XG4gIGNvbnN0IHNlbmhhSW5mb3JtYWRhUGVsb1VzdWFyaW8gPSBjb29raWVzLlNFTkhBX1NFQ1JFVEE7XG4gIGNvbnN0IGlzQXV0b3JpemFkbyA9IFNFTkhBX1NFQ1JFVEEgPT09IHNlbmhhSW5mb3JtYWRhUGVsb1VzdWFyaW87XG4gIFxuICBpZighaXNBdXRvcml6YWRvKSB7XG4gICAgY29uc29sZS5sb2coJ07Dg08gQXV0b3JpemFkbyEhIScpO1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICBkZXN0aW5hdGlvbjogJy8/c3RhdHVzPTQwMScsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdBdXRvcml6YWRvISEhJyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nZ2VkU2NyZWVuKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNGOTcwM0UnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWF4V2lkdGg6ICc0MDBweCcsXG4gICAgICAgIG1hcmdpblRvcDogJzIwJScsXG4gICAgICAgIG1hcmdpbkhvcml6b250YWw6ICdhdXRvJyxcbiAgICAgICAgcGFkZGluZzogJzMycHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDVweCAwIHJnYmEoMjU1LDY5LDAsMC4yKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUZXh0IHN0eWxlU2hlZXQ9e3sgbWFyZ2luVmVydGljYWw6ICczMnB4JyB9fT5cbiAgICAgICAgVm9jw6ogYWNlc3NvdSB1bWEgw6FyZWEgcHJvdGVnaWRhIVxuICAgICAgPC9UZXh0PlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGxhYmVsPSdMb2dvdXQnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBub29raWVzLmRlc3Ryb3kobnVsbCwgJ1NFTkhBX1NFQ1JFVEEnKTtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH19XG4gICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcbiAgICAgICAgdmFyaWFudD0nc2Vjb25kYXJ5J1xuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiQnV0dG9uIiwidXNlUm91dGVyIiwibm9va2llcyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJjb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIlNFTkhBX1NFQ1JFVEEiLCJzZW5oYUluZm9ybWFkYVBlbG9Vc3VhcmlvIiwiaXNBdXRvcml6YWRvIiwicmVkaXJlY3QiLCJwZXJtYW5lbnQiLCJkZXN0aW5hdGlvbiIsInByb3BzIiwiTG9nZ2VkU2NyZWVuIiwicm91dGVyIiwic3R5bGVTaGVldCIsImJvcmRlciIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkhvcml6b250YWwiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWFyZ2luVmVydGljYWwiLCJsYWJlbCIsIm9uQ2xpY2siLCJkZXN0cm95IiwicHVzaCIsImNvbG9yVmFyaWFudCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/area-logada.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/area-logada.js"));
module.exports = __webpack_exports__;

})();