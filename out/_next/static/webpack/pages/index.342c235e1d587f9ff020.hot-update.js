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
                alt: "High class Sydney escort agency",
                height: "40",
                width: "133"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItems__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
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
                    lineNumber: 118,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
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
            lineNumber: 133,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-layer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-layer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-overlay-close",
            onClick: handleToggleSearchModal,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "search-overlay-close-line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "search-overlay-close-line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
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
                lineNumber: 144,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "flaticon-search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXJTdHlsZUZpdmUiLCJSZWFjdCIsInVzZVN0YXRlIiwibWVudSIsInNldE1lbnUiLCJ0b2dnbGVOYXZiYXIiLCJ1c2VFZmZlY3QiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUbyIsImlzQWN0aXZlU2VhcmNoTW9kYWwiLCJzZXRBY3RpdmVTZWFyY2hNb2RhbCIsImhhbmRsZVRvZ2dsZVNlYXJjaE1vZGFsIiwiaXNBY3RpdmVTaWRlYmFyTW9kYWwiLCJzZXRBY3RpdmVTaWRlYmFyTW9kYWwiLCJoYW5kbGVUb2dnbGVTaWRlYmFyTW9kYWwiLCJjbGFzc09uZSIsImNsYXNzVHdvIiwiaGFuZGxlU2VsZWN0IiwiZXZlbnRLZXkiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLHdCQUNGQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURFO0FBQUE7QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNiQyxPQURhOztBQUcxQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCRCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0gsR0FGRDs7QUFJQUYsOENBQUssQ0FBQ0ssU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWhCO0FBQ0FELFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtB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QUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUtJO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFzQyxtQkFBTyxFQUFFRSx1QkFBL0M7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQVVJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG1DQUNJO0FBQUEsc0NBQ0k7QUFBTyxvQkFBSSxFQUFDLE1BQVo7QUFBbUIseUJBQVMsRUFBQyxjQUE3QjtBQUE0QywyQkFBVyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnSEgsQ0FwSkQ7O0dBQU1uQixlOztLQUFBQSxlO0FBc0pTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDJjMjM1ZTFkNTg3ZjlmZjAyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE9mZkNhbnZhcywgT2ZmQ2FudmFzQm9keSwgT2ZmQ2FudmFzTWVudSB9IGZyb20gXCJyZWFjdC1vZmZjYW52YXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vdXRpbHMvQWN0aXZlTGluayc7XHJcbi8vIGltcG9ydCBsb2dvV2hpdGUgZnJvbSBcIi4vbG9nby13aGl0ZS5wbmdcIjtcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSBcIi4vbG9nby5wbmdcIjtcclxuaW1wb3J0IE1lbnVJdGVtcyBmcm9tIFwiLi9NZW51SXRlbXNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBOYXZiYXJTdHlsZUZpdmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TWVudSghbWVudSlcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApOyBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIFNlYXJjaCBNb2RhbFxyXG4gICAgY29uc3QgW2lzQWN0aXZlU2VhcmNoTW9kYWwsIHNldEFjdGl2ZVNlYXJjaE1vZGFsXSA9IHVzZVN0YXRlKFwiZmFsc2VcIik7XHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVTZWFyY2hNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVTZWFyY2hNb2RhbCghaXNBY3RpdmVTZWFyY2hNb2RhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNpZGViYXIgTW9kYWxcclxuICAgIGNvbnN0IFtpc0FjdGl2ZVNpZGViYXJNb2RhbCwgc2V0QWN0aXZlU2lkZWJhck1vZGFsXSA9IHVzZVN0YXRlKFwiZmFsc2VcIik7XHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVTaWRlYmFyTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlU2lkZWJhck1vZGFsKCFpc0FjdGl2ZVNpZGViYXJNb2RhbCk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdCBjbGFzc09uZSA9IG1lbnUgPyAnY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlJyA6ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvdyc7XHJcbiAgICBjb25zdCBjbGFzc1R3byA9IG1lbnUgPyAnbmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQnIDogJ25hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0ICBjb2xsYXBzZWQnO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChldmVudEtleSkgPT4gYWxlcnQoYHNlbGVjdGVkICR7ZXZlbnRLZXl9YCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXItYXJlYSBuYXZiYXItc3R5bGUtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltZyBsZWZ0LWltZ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJIaWdoIGNsYXNzIFN5ZG5leSBlc2NvcnQgYWdlbmN5XCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxMzNcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ299IGFsdD1cIkxhdGUgTmlnaHQgQmFiZXMgLSBTeWRuZXkgZXNjb3J0c1wiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1R3b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgdG9wLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciBtaWRkbGUtYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyIGJvdHRvbS1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG48TWVudUl0ZW1zIHRvZ2dsZU5hdmJhcj17dG9nZ2xlTmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbnsvKiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzLW9wdGlvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIiBvbkNsaWNrPXtoYW5kbGVUb2dnbGVTZWFyY2hNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICA8T2ZmQ2FudmFzXHJcbiAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezMwMH1cclxuICAgICAgICBlZmZlY3Q9e1wicGFyYWxsYXhcIn1cclxuICAgICAgICBpc01lbnVPcGVuZWQ9e21lbnV9XHJcbiAgICAgICAgcG9zaXRpb249e1wibGVmdFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPE9mZkNhbnZhc0JvZHk+XHJcblxyXG4gICAgICAgIDwvT2ZmQ2FudmFzQm9keT5cclxuICAgICAgICA8T2ZmQ2FudmFzTWVudSBcclxuICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dC1pbWcgbGVmdC1pbWdcIlxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28td2hpdGUucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiSGlnaCBjbGFzcyBTeWRuZXkgZXNjb3J0IGFnZW5jeVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxMzNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nb1doaXRlfSBhbHQ9J0VzY29ydHMgaW4gU3lkbmV5JyBzdHlsZT17e2hlaWdodDo0MH19Lz4gKi99XHJcbjxNZW51SXRlbXMgLz5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1tZW51LWJ0blwiIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1tZW51XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9PZmZDYW52YXNNZW51PlxyXG4gICAgICA8L09mZkNhbnZhcz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU2VhcmNoIEZvcm0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VhcmNoLW92ZXJsYXkgJHtpc0FjdGl2ZVNlYXJjaE1vZGFsID8gXCJcIiA6IFwic2VhcmNoLW92ZXJsYXktYWN0aXZlXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5LWxheWVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktbGF5ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1sYXllclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZVNlYXJjaE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5LWNsb3NlLWxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1jbG9zZS1saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXQtc2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBFbmQgU2VhcmNoIEZvcm0gKi99XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJTdHlsZUZpdmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=