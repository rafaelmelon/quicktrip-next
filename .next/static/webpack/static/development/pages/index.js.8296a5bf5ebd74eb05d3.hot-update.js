webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map/index.tsx":
/*!**********************************!*\
  !*** ./components/Map/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Collapsible */ "./components/Collapsible/index.tsx");
var _jsxFileName = "/Users/rafaelmelon/Sites/quicktrip-next/components/Map/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Map = function Map() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isCollapsed = _useState[0],
      toggleCollapse = _useState[1];

  var handleToggleCollapse = function handleToggleCollapse() {
    toggleCollapse(!isCollapsed);
  };

  var DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../Mapbox */ "./components/Mapbox/index.tsx"));
  }, {
    ssr: false,
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! ../Mapbox */ "./components/Mapbox/index.tsx")];
      },
      modules: ['../Mapbox']
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DynamicComponentWithNoSSR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleToggleCollapse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Hello World"), __jsx(_Collapsible__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "title",
    isCollapsed: isCollapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.8296a5bf5ebd74eb05d3.hot-update.js.map