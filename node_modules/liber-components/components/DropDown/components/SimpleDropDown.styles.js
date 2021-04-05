"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownContent = exports.CurrentBox = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Util = require("../../Util");

var _Themes = require("../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &:after {\n      transform: scale(1);\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var positions = function positions(_ref, label) {
  var _ref2 = _slicedToArray(_ref, 4),
      posy = _ref2[0],
      posx = _ref2[1],
      diry = _ref2[2],
      dirx = _ref2[3];

  var upTop = label ? 'calc(100% + 10px)' : '100%';
  var position = {
    x: {
      left: dirx === 'right' ? '0px' : '100%',
      center: '50%',
      right: dirx === 'right' ? '100%' : '0px'
    },
    y: {
      top: diry === 'up' ? upTop : '0px',
      center: '50%',
      bottom: diry === 'up' ? '0px' : '100%'
    }
  };
  var direction = {
    x: {
      left: 'right',
      center: 'left',
      right: 'left'
    },
    y: {
      up: 'bottom',
      center: 'bottom',
      down: 'top'
    }
  };
  return (0, _styledComponents.css)(["", ":", ";", ":", ";"], direction.y[diry], position.y[posy], direction.x[dirx], position.x[posx]);
};

var CurrentBox = _styledComponents["default"].div.withConfig({
  displayName: "SimpleDropDownstyles__CurrentBox",
  componentId: "pcw063-0"
})(["font-weight:", ";line-height:22px;text-align:right;color:", ";font-family:", ";font-size:", ";position:relative;box-sizing:border-box;padding-right:32px;cursor:default;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;&:after{content:\"\";position:absolute;top:calc(50% - 9px);right:0px;width:0px;height:0px;border-top:5px solid ", ";border-right:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid transparent;transform:scale(0.75);margin:7px;}", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
}, _Util.media.large(_templateObject()));

exports.CurrentBox = CurrentBox;
var open = (0, _styledComponents.css)(["transform:translateY(0px);opacity:1;pointer-events:all;"]);
var close = (0, _styledComponents.css)(["transform:translateY(-10px);opacity:0;pointer-events:none;"]);

var DropDownContent = _styledComponents["default"].div.withConfig({
  displayName: "SimpleDropDownstyles__DropDownContent",
  componentId: "pcw063-1"
})(["position:absolute;z-index:202;white-space:nowrap;min-width:100%;min-height:100%;max-width:", ";border-radius:4px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.12);background-color:", ";;transition:all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;", " ", " overflow:hidden;"], function (props) {
  return props.containerSize && '100%';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liber-white', '#fff');
}, function (props) {
  return positions(props.position, props.hasLabel);
}, function (props) {
  return props.open ? open : close;
});

exports.DropDownContent = DropDownContent;