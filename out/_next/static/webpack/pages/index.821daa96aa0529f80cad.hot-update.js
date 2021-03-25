webpackHotUpdate_N_E("pages/index",{

/***/ "./components/_App/Navbar.js":
/*!***********************************!*\
  !*** ./components/_App/Navbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_src_lnbsydneyescorts_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-offcanvas */ "./node_modules/react-offcanvas/lib/index.js");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_offcanvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuItems */ "./components/_App/MenuItems.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\src\\lnbsydneyescorts\\components\\_App\\Navbar.js",
    _this = undefined,
    _s = $RefreshSig$();



 // import logoWhite from "./logo-white.png";
// import logo from "./logo.png";




var NavbarStyleFive = function NavbarStyleFive() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(C_src_lnbsydneyescorts_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      menu = _React$useState2[0],
      setMenu = _React$useState2[1];

  var toggleNavbar = function toggleNavbar() {
    setMenu(!menu);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var elementId = document.getElementById("navbar");
    document.addEventListener("scroll", function () {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }); // Search Modal

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("false"),
      isActiveSearchModal = _useState[0],
      setActiveSearchModal = _useState[1];

  var handleToggleSearchModal = function handleToggleSearchModal() {
    setActiveSearchModal(!isActiveSearchModal);
  }; // Sidebar Modal


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("false"),
      isActiveSidebarModal = _useState2[0],
      setActiveSidebarModal = _useState2[1];

  var handleToggleSidebarModal = function handleToggleSidebarModal() {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  var classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  var classTwo = menu ? 'navbar-toggler navbar-toggler-right' : 'navbar-toggler navbar-toggler-right  collapsed';

  var handleSelect = function handleSelect(eventKey) {
    return alert("selected ".concat(eventKey));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "navbar",
      className: "navbar-area navbar-style-two",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "navbar navbar-expand-lg navbar-light",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "navbar-brand",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  className: "about-img left-img",
                  src: "/images/logo.png",
                  alt: "High class Sydney escort agency",
                  width: "133",
                  height: "40"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: toggleNavbar,
              className: classTwo,
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarSupportedContent",
              "aria-controls": "navbarSupportedContent",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "icon-bar top-bar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "icon-bar middle-bar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "icon-bar bottom-bar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classOne,
              id: "navbarSupportedContent",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItems__WEBPACK_IMPORTED_MODULE_5__["default"], {
                toggleNavbar: toggleNavbar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 1
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_offcanvas__WEBPACK_IMPORTED_MODULE_3__["OffCanvas"], {
            width: 300,
            transitionDuration: 300,
            effect: "parallax",
            isMenuOpened: menu,
            position: "left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_offcanvas__WEBPACK_IMPORTED_MODULE_3__["OffCanvasBody"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_offcanvas__WEBPACK_IMPORTED_MODULE_3__["OffCanvasMenu"], {
              className: "mobile-menu",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
                className: "about-img left-img",
                src: "/images/logo-white.png",
                alt: "High class Sydney escort agency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItems__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 1
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "option-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side-menu-btn",
                  onClick: toggleNavbar,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "flaticon-menu"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 1
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search-overlay ".concat(isActiveSearchModal ? "" : "search-overlay-active"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-table",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-table-cell",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-layer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-layer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-layer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-close",
            onClick: handleToggleSearchModal,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "search-overlay-close-line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "search-overlay-close-line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-form",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "input-search",
                placeholder: "Search here..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "flaticon-search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_s(NavbarStyleFive, "lv9lIKBtyA/1jrqVBFy+7laxwI0=");

_c = NavbarStyleFive;
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyleFive);

var _c;

$RefreshReg$(_c, "NavbarStyleFive");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXJTdHlsZUZpdmUiLCJSZWFjdCIsInVzZVN0YXRlIiwibWVudSIsInNldE1lbnUiLCJ0b2dnbGVOYXZiYXIiLCJ1c2VFZmZlY3QiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUbyIsImlzQWN0aXZlU2VhcmNoTW9kYWwiLCJzZXRBY3RpdmVTZWFyY2hNb2RhbCIsImhhbmRsZVRvZ2dsZVNlYXJjaE1vZGFsIiwiaXNBY3RpdmVTaWRlYmFyTW9kYWwiLCJzZXRBY3RpdmVTaWRlYmFyTW9kYWwiLCJoYW5kbGVUb2dnbGVTaWRlYmFyTW9kYWwiLCJjbGFzc09uZSIsImNsYXNzVHdvIiwiaGFuZGxlU2VsZWN0IiwiZXZlbnRLZXkiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLHdCQUNGQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURFO0FBQUE7QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNiQyxPQURhOztBQUcxQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCRCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0gsR0FGRDs7QUFJQUYsOENBQUssQ0FBQ0ssU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWhCO0FBQ0FELFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtB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SixlQUVJO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBS0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQXNDLG1CQUFPLEVBQUVFLHVCQUEvQztBQUFBLG9DQUNJO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBVUk7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFPLG9CQUFJLEVBQUMsTUFBWjtBQUFtQix5QkFBUyxFQUFDLGNBQTdCO0FBQTRDLDJCQUFXLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQUEsdUNBQ0k7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThHSCxDQWxKRDs7R0FBTW5CLGU7O0tBQUFBLGU7QUFvSlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgyMWRhYTk2YWEwNTI5ZjgwY2FkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT2ZmQ2FudmFzLCBPZmZDYW52YXNCb2R5LCBPZmZDYW52YXNNZW51IH0gZnJvbSBcInJlYWN0LW9mZmNhbnZhc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi91dGlscy9BY3RpdmVMaW5rJztcclxuLy8gaW1wb3J0IGxvZ29XaGl0ZSBmcm9tIFwiLi9sb2dvLXdoaXRlLnBuZ1wiO1xyXG4vLyBpbXBvcnQgbG9nbyBmcm9tIFwiLi9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgTWVudUl0ZW1zIGZyb20gXCIuL01lbnVJdGVtc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IE5hdmJhclN0eWxlRml2ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcclxuICAgICAgICBzZXRNZW51KCFtZW51KVxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QuYWRkKFwiaXMtc3RpY2t5XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zdGlja3lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gU2VhcmNoIE1vZGFsXHJcbiAgICBjb25zdCBbaXNBY3RpdmVTZWFyY2hNb2RhbCwgc2V0QWN0aXZlU2VhcmNoTW9kYWxdID0gdXNlU3RhdGUoXCJmYWxzZVwiKTtcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZVNlYXJjaE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZVNlYXJjaE1vZGFsKCFpc0FjdGl2ZVNlYXJjaE1vZGFsKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2lkZWJhciBNb2RhbFxyXG4gICAgY29uc3QgW2lzQWN0aXZlU2lkZWJhck1vZGFsLCBzZXRBY3RpdmVTaWRlYmFyTW9kYWxdID0gdXNlU3RhdGUoXCJmYWxzZVwiKTtcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZVNpZGViYXJNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVTaWRlYmFyTW9kYWwoIWlzQWN0aXZlU2lkZWJhck1vZGFsKTtcclxuICAgIH07XHJcbiBcclxuICAgIGNvbnN0IGNsYXNzT25lID0gbWVudSA/ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnIDogJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93JztcclxuICAgIGNvbnN0IGNsYXNzVHdvID0gbWVudSA/ICduYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCcgOiAnbmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQgIGNvbGxhcHNlZCc7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGV2ZW50S2V5KSA9PiBhbGVydChgc2VsZWN0ZWQgJHtldmVudEtleX1gKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhIG5hdmJhci1zdHlsZS10d29cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXQtaW1nIGxlZnQtaW1nXCJcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkhpZ2ggY2xhc3MgU3lkbmV5IGVzY29ydCBhZ2VuY3lcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjEzM1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nb30gYWx0PVwiTGF0ZSBOaWdodCBCYWJlcyAtIFN5ZG5leSBlc2NvcnRzXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzVHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciB0b3AtYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyIG1pZGRsZS1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgYm90dG9tLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc09uZX0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbjxNZW51SXRlbXMgdG9nZ2xlTmF2YmFyPXt0b2dnbGVOYXZiYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuey8qIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMtb3B0aW9uIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZVNlYXJjaE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgIDxPZmZDYW52YXNcclxuICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17MzAwfVxyXG4gICAgICAgIGVmZmVjdD17XCJwYXJhbGxheFwifVxyXG4gICAgICAgIGlzTWVudU9wZW5lZD17bWVudX1cclxuICAgICAgICBwb3NpdGlvbj17XCJsZWZ0XCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8T2ZmQ2FudmFzQm9keT5cclxuXHJcbiAgICAgICAgPC9PZmZDYW52YXNCb2R5PlxyXG4gICAgICAgIDxPZmZDYW52YXNNZW51IFxyXG4gICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltZyBsZWZ0LWltZ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby13aGl0ZS5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJIaWdoIGNsYXNzIFN5ZG5leSBlc2NvcnQgYWdlbmN5XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ29XaGl0ZX0gYWx0PSdFc2NvcnRzIGluIFN5ZG5leScgc3R5bGU9e3toZWlnaHQ6NDB9fS8+ICovfVxyXG48TWVudUl0ZW1zIC8+XHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtbWVudS1idG5cIiBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tbWVudVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvT2ZmQ2FudmFzTWVudT5cclxuICAgICAgPC9PZmZDYW52YXM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFNlYXJjaCBGb3JtICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlYXJjaC1vdmVybGF5ICR7aXNBY3RpdmVTZWFyY2hNb2RhbCA/IFwiXCIgOiBcInNlYXJjaC1vdmVybGF5LWFjdGl2ZVwifWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1sYXllclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5LWxheWVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktbGF5ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVUb2dnbGVTZWFyY2hNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1jbG9zZS1saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktY2xvc2UtbGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogRW5kIFNlYXJjaCBGb3JtICovfVxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyU3R5bGVGaXZlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9