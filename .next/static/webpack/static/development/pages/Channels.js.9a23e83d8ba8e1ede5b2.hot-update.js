webpackHotUpdate("static\\development\\pages\\Channels.js",{

/***/ "./pages/Channels.js":
/*!***************************!*\
  !*** ./pages/Channels.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Channels; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\panag\\Documents\\Programming\\projects\\tv_app\\pages\\Channels.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    width: 580px !important;\n    margin: 0 auto !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var channelNames = [{
  name: 'Ant 1',
  url: "https://antennalivesp-lh.akamaihd.net/i/live_1@715138/index_800_av-p.m3u8"
}, {
  name: 'Alpha',
  url: "https://alphalive-i.akamaihd.net/hls/live/682300/live/high/prog_index.m3u8"
}, {
  name: 'Mega',
  url: "https://c98db5952cb54b358365984178fb898a.msvdn.net/live/S86713049/gonOwuUacAxM/playlist.m3u8"
}, {
  name: 'Star',
  url: "https://cdnapisec.siliconweb.com/p/713821/sp/0/playManifest/entryId/1_fp7fyi3j/format/applehttp/protocol/https/flavorParamId/0/manifest.m3u8"
}, {
  name: 'Skai',
  url: "https://youtu.be/CmqbY_Gzsdo"
}, {
  name: 'Ert 1',
  url: "https://ert-live.siliconweb.com/media/ert_1/ert_1medium.m3u8"
}, {
  name: 'Ert 2',
  url: "https://ert-live.siliconweb.com/media/ert_2/ert_2medium.m3u8"
}, {
  name: 'Ert Sports',
  url: "https://ert-live.siliconweb.com/media/ert_sports/ert_sportshigh.m3u8"
}];
var StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());

var Channels = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Channels, _React$Component);

  var _super = _createSuper(Channels);

  function Channels(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Channels);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "createButtons", function () {
      var buttons = [];
      channelNames.forEach(function (channel) {
        buttons.push(__jsx("button", {
          key: channel.name,
          type: "button",
          className: "btn btn-outline-info mt-2 mr-2",
          onClick: _this.changeChannel,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 26
          }
        }, channel.name));
      });
      return buttons;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeChannel", function (event) {
      // this.clearPlayer();
      console.log("name: ".concat(_this.state.name, ", url: ").concat(_this.state.url, ", playing: ").concat(_this.state.playing));
      var name = event.target.textContent;
      var ch = channelNames.filter(function (channel) {
        return channel.name === name;
      });

      _this.setState({
        activeChannel: event.target.textContent,
        url: ch[0].url,
        playing: true,
        loaded: 0,
        pip: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clearPlayer", function () {
      _this.setState({
        url: '',
        playing: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "ref", function (player) {
      _this.player = player;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "playChannel", function () {
      if (_this.state.activeChannel != '') {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("p", {
          className: "text-center",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 19
          }
        }, "loaded: ", _this.state.loaded), __jsx(react_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
          ref: _this.ref,
          className: "react-player",
          width: "50%",
          height: "50%",
          url: _this.state.url,
          pip: _this.state.pip,
          light: _this.state.light,
          playing: _this.state.playing,
          controls: _this.state.controls,
          volume: _this.state.volume,
          muted: _this.state.muted,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 17
          }
        }));
      } else {
        return __jsx("p", {
          className: "text-center",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 20
          }
        }, "my nigga error!");
      }
    });

    _this.state = {
      activeChannel: '',
      url: null,
      playing: true,
      controls: true,
      volume: 0.8,
      muted: false,
      loaded: 0,
      pip: false,
      light: false
    }; // this.selectChannel = this.selectChannel.bind(this);

    _this.playChannel = _this.playChannel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.clearPlayer = _this.clearPlayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.changeChannel = _this.changeChannel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Channels, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clearPlayer();
    } // create the channel buttons function

  }, {
    key: "render",
    value: function render() {
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }
      }, __jsx(StyledDiv, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }, this.createButtons()), __jsx("hr", {
        className: "hr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }), __jsx("button", {
        key: "one",
        type: "button",
        className: "btn btn-outline-info mt-2 mr-2",
        onClick: this.clearPlayer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }, "Stop"), __jsx("hr", {
        className: "hr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }), this.playChannel());
    }
  }]);

  return Channels;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=Channels.js.9a23e83d8ba8e1ede5b2.hot-update.js.map