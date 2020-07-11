webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var react_hls_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hls-player */ "./node_modules/react-hls-player/dist/react-hls-player.js");
/* harmony import */ var react_hls_player__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hls_player__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\panag\\Documents\\Programming\\projects\\tv_app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import Channels from './components/Channels';

var channels = {
  Ant1: "https://antennalivesp-lh.akamaihd.net/i/live_1@715138/index_800_av-p.m3u8",
  Alpha: "https://alphalive-i.akamaihd.net/hls/live/682300/live/high/prog_index.m3u8"
};
var pageContent = {
  title: 'Greek Tv',
  subTitle: 'Web Application',
  description: 'This is an application to directly watch the major Greek TV channels. \n React Framework along with Next.js were used to create the main application. The streaming service for each channel is given by the m3u8 file type apart from one that is using youtube live streaming. \n For this reason two React Players were used, the react-hls-player from devchort and the react-player from CookPete. \n The styling of the page was done with bootstrap and the solaris bootswatch theme. \n A detailed tutorial regarding the building proccess is provided in the About page. \n Thank you for your visit.',
  stepOneTitle: 'Step 1: Click to watch!',
  stepOneDescription: "Click on a channel from the menu to start watching.\n    There is a Channels page that contains a different approach of the application.",
  stepTwoTitle: 'Step 2: Enjoy!',
  stepTwoDescription: "For the individual pages, there is no need for anything else to do.\n    For channels page, you have to select a channel from the availiable buttons.\n    There is also a stop channel button to stop the streaming proccess."
};

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "Layout",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "card text-white border-secondary mt-5 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }
      }, __jsx("h1", {
        className: "display-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }
      }, pageContent.title, " | ", __jsx("span", {
        className: "display-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 77
        }
      }, pageContent.subTitle))), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: "card-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 29
        }
      }, pageContent.description)), __jsx("div", {
        className: "card-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "btn btn-primary btn-lg",
        href: "#",
        role: "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 29
        }
      }, "Git Repository"))), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, "How to watch:"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card text-white border-secondary mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 33
        }
      }, __jsx("h4", {
        "class": "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 37
        }
      }, pageContent.stepOneTitle)), __jsx("div", {
        "class": "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 33
        }
      }, __jsx("p", {
        "class": "card-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 37
        }
      }, pageContent.stepTwoDescription)))), __jsx("div", {
        className: "col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "card text-white border-secondary mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 33
        }
      }, __jsx("h4", {
        "class": "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 37
        }
      }, pageContent.stepTwoTitle)), __jsx("div", {
        "class": "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }
      }, __jsx("p", {
        "class": "card-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 37
        }
      }, pageContent.stepTwoDescription)))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // class Index extends React.Component {
//     render() {
//         return (
//             <Layout className="Layout">
//                 <div className="container">
//                     <div className="card text-white border-secondary mt-5 mb-5">
//                         <div className="card-header">
//                             <h1 className="display-3">Greek Tv | <span className="display-6">Web Application</span></h1>
//                         </div>
//                         <div className="card-body">
//                             <p className="card-text">This is an application to directly watch Greek Tv channels.</p>
//                             <p className="card-text">It was made with Next.js, a bootswatch template theme and React HLS Player.</p>
//                             <p className="card-text">A tutorial for how it was build can be found on the About page.</p>
//                         </div>
//                         <div className="card-footer">
//                             <a className="btn btn-primary btn-lg" href="#" role="button">Git Repository</a>
//                         </div>
//                     </div>
//                     <h2>How to watch:</h2>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="card text-white border-secondary mb-3">
//                                 <div class="card-header">
//                                 <h4 class="card-title">Step 1: Click a Channel</h4>
//                                 </div>
//                                 <div class="card-body">
//                                     <p class="card-text">Navigate through the availiable channels on the menu bar.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div class="card text-white border-secondary mb-3">
//                                 <div class="card-header">
//                                 <h4 class="card-title">Step 2: Enjoy!</h4></div>
//                                 <div class="card-body">
//                                     <p class="card-text">You do not have to click anything else. Playback starts automatically</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//         )
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.65c2a2be97ff5706622f.hot-update.js.map