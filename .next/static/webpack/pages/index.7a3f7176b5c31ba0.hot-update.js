"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// import type { NextPage } from 'next'\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), wallet = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), collection = ref1[0], setCollectionAddress = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center py-8 gap-y-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full justify-center items-center gap-y-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: function(e) {\n                        setWalletAddress(e.target.value);\n                    },\n                    value: wallet,\n                    type: \"text\",\n                    placeholder: \"Add your wallet address\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: function(e) {\n                        setCollectionAddress(e.target.value);\n                    },\n                    value: collection,\n                    type: \"text\",\n                    placeholder: \"Add the collection address\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDOzs7QUFBNEI7QUFDRTtBQUNFO0FBRWhDLElBQU1HLElBQUksR0FBRyxXQUFNOztJQUVqQixJQUFtQ0QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF4Q0UsTUFBTSxHQUFzQkYsR0FBWSxHQUFsQyxFQUFFRyxnQkFBZ0IsR0FBSUgsR0FBWSxHQUFoQjtJQUMvQixJQUEyQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFoREksVUFBVSxHQUEwQkosSUFBWSxHQUF0QyxFQUFFSyxvQkFBb0IsR0FBSUwsSUFBWSxHQUFoQjtJQUV2QyxxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsd0RBQXdEO2tCQUNyRSw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsMERBQTBEOzs4QkFDekUsOERBQUNDLE9BQUs7b0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUc7d0JBQUNQLGdCQUFnQixDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUFDO29CQUFFQSxLQUFLLEVBQUVWLE1BQU07b0JBQUVXLElBQUksRUFBRSxNQUFNO29CQUFFQyxXQUFXLEVBQUMseUJBQXlCOzs7Ozt5QkFBUzs4QkFDbkksOERBQUNOLE9BQUs7b0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUc7d0JBQUNMLG9CQUFvQixDQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUFDO29CQUFFQSxLQUFLLEVBQUVSLFVBQVU7b0JBQUVTLElBQUksRUFBRSxNQUFNO29CQUFFQyxXQUFXLEVBQUMsNEJBQTRCOzs7Ozt5QkFBUzs7Ozs7O2lCQUM1STs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0FiS2IsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBZ0JWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIGNvbnN0IFt3YWxsZXQsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTggZ2FwLXktM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXktMlwiPlxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PntzZXRXYWxsZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX19IHZhbHVlPXt3YWxsZXR9IHR5cGU9e1widGV4dFwifSBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIHdhbGxldCBhZGRyZXNzXCI+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PntzZXRDb2xsZWN0aW9uQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9fSB2YWx1ZT17Y29sbGVjdGlvbn0gdHlwZT17XCJ0ZXh0XCJ9IHBsYWNlaG9sZGVyPVwiQWRkIHRoZSBjb2xsZWN0aW9uIGFkZHJlc3NcIj48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlU3RhdGUiLCJIb21lIiwid2FsbGV0Iiwic2V0V2FsbGV0QWRkcmVzcyIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uQWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});