"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Float = exports.Arrow = exports.Container = void 0;

require("core-js/modules/es7.array.includes");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../Themes");

var _Icons = require("../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var arrowSize = 18;
var CONTENT_MOUNT = {
  start: {
    percentage: 0,
    arrowSubtraction: 0,
    arrowOffset: arrowSize
  },
  middle: {
    percentage: 50,
    arrowSubtraction: 18,
    arrowOffset: 0
  },
  end: {
    percentage: 100,
    arrowSubtraction: 36,
    arrowOffset: -1 * arrowSize
  },
  unset: {
    percentage: 50,
    arrowSubtraction: 18,
    arrowOffset: 0
  }
};

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1oomni5-0"
})(["position:relative;width:20px;height:20px;font-family:inherit;font-size:12px;font-weight:500;fill:", ";color:", ";display:flex;align-items:center;justify-content:center;&:hover{fill:", ";}@media (max-width:992px){width:28px;height:28px;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tooltip.fill', '#a4a4a4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tooltip.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tooltip.hover', '#009DFF');
});

exports.Container = Container;

var positionFloat = function positionFloat(props) {
  var position = props.position,
      contentPosition = props.contentPosition;
  var _CONTENT_MOUNT$conten = CONTENT_MOUNT[contentPosition],
      arrowOffset = _CONTENT_MOUNT$conten.arrowOffset,
      percentage = _CONTENT_MOUNT$conten.percentage;

  switch (position) {
    /** floater tooltip styles */
    case 'mouse-right':
      return (0, _styledComponents.css)(["right:auto;transform:translate(", "px,-50%);"], props.mousePadding);

    case 'mouse-left':
      return (0, _styledComponents.css)(["left:auto;transform:translate(calc(-100% - ", "px),-50%);"], props.mousePadding);

    case 'mouse-top':
      return (0, _styledComponents.css)(["top:auto;transform:translate(-50%,calc(-100% - ", "px));"], props.mousePadding);

    case 'mouse-bottom':
      return (0, _styledComponents.css)(["right:auto;transform:translate(-50%,", "px);"], props.mousePadding);

    case 'content-right':
      return (0, _styledComponents.css)(["right:auto;transform:translate(", "px,calc(-", "% - ", "px));"], props.mousePadding, percentage, arrowOffset);

    case 'content-left':
      return (0, _styledComponents.css)(["left:auto;transform:translate( calc(-100% - ", "px),calc(-", "% - ", "px) );"], props.mousePadding, percentage, arrowOffset);

    case 'content-top':
      return (0, _styledComponents.css)(["top:auto;transform:translate( calc(-", "% - ", "px),calc(-100% - ", "px) );"], percentage, arrowOffset, props.mousePadding);

    case 'content-bottom':
      return (0, _styledComponents.css)(["bottom:auto;transform:translate(calc(-", "% - ", "px),", "px);"], percentage, arrowOffset, props.mousePadding);

    /* fixed tooltip styles */

    case 'bottom-right':
      return (0, _styledComponents.css)(["left:0px;right:auto;top:", ";transform:translate(30px,30px);"], props.visible ? '0px' : '10px');

    case 'bottom-center':
      return (0, _styledComponents.css)(["top:", ";transform:translate(0px,30px);"], props.visible ? '0px' : '10px');

    case 'bottom-left':
      return (0, _styledComponents.css)(["left:auto;right:0px;top:", ";transform:translate(-30px,30px);"], props.visible ? '0px' : '10px');

    case 'center-right':
      return (0, _styledComponents.css)(["bottom:50%;right:auto;left:", ";transform:translate(30px,30px);"], props.visible ? '0px' : '10px');

    case 'center-left':
      return (0, _styledComponents.css)(["bottom:50%;left:auto;right:", ";transform:translate(-30px,30px);"], props.visible ? '0px' : '-10px');

    case 'top-right':
      return (0, _styledComponents.css)(["left:0px;right:auto;bottom:", ";transform:translate(30px,-30px);"], props.visible ? '0px' : '-10px');

    case 'top-center':
      return (0, _styledComponents.css)(["bottom:", ";transform:translate(0px,-30px);"], props.visible ? '0px' : '-10px');

    case 'top-left':
    default:
      return (0, _styledComponents.css)(["left:auto;right:0px;bottom:", ";transform:translate(-30px,-30px);"], props.visible ? '0px' : '-10px');
  }
};

var positionArrow = function positionArrow(props) {
  var mount = props.mount,
      contentPosition = props.contentPosition;
  var _CONTENT_MOUNT$conten2 = CONTENT_MOUNT[contentPosition],
      percentage = _CONTENT_MOUNT$conten2.percentage,
      arrowSubtraction = _CONTENT_MOUNT$conten2.arrowSubtraction;

  switch (mount) {
    case 'left':
      return (0, _styledComponents.css)(["width:5px !important;height:36px !important;top:calc((", "%) - ", "px);left:100%;"], percentage, arrowSubtraction);

    case 'top':
      return (0, _styledComponents.css)(["width:36px !important;height:5px !important;left:calc((", "%) - ", "px);top:100%;"], percentage, arrowSubtraction);

    case 'bottom':
      return (0, _styledComponents.css)(["width:36px !important;height:5px !important;left:calc((", "%) - ", "px);bottom:100%;"], percentage, arrowSubtraction);

    case 'right':
    default:
      return (0, _styledComponents.css)(["width:5px !important;height:36px !important;top:calc((", "%) - ", "px);right:100%;"], percentage, arrowSubtraction);
  }
};

var positionArrowAfter = function positionArrowAfter(props) {
  switch (props.mount) {
    case 'left':
      return (0, _styledComponents.css)(["top:calc(50% - 7.5px);right:calc(100% - 7.5px);"]);

    case 'top':
      return (0, _styledComponents.css)(["left:calc(50% - 7.5px);bottom:calc(100% - 7.5px);"]);

    case 'bottom':
      return (0, _styledComponents.css)(["left:calc(50% - 7.5px);top:calc(100% - 7.5px);"]);

    case 'right':
    default:
      return (0, _styledComponents.css)(["top:calc(50% - 7.5px);left:calc(100% - 7.5px);"]);
  }
};

var Arrow = _styledComponents["default"].div.withConfig({
  displayName: "styles__Arrow",
  componentId: "sc-1oomni5-1"
})(["position:absolute;", " overflow:hidden;pointer-events:none;padding:8px;box-sizing:border-box;&::after{content:'';position:absolute;pointer-events:none;width:15px;height:15px;background:#fff;transform:rotate(45deg);", " box-shadow:0 2px 6px 0 rgba(0,0,0,0.2);}"], function (props) {
  return positionArrow(props);
}, function (props) {
  return positionArrowAfter(props);
});

exports.Arrow = Arrow;
var mousePositions = ['mouse-right', 'mouse-left', 'mouse-top', 'mouse-bottom', 'content-right', 'content-left', 'content-top', 'content-bottom'];

var Float = _styledComponents["default"].div.attrs(function (_ref) {
  var position = _ref.position,
      x = _ref.x,
      y = _ref.y;
  return {
    style: {
      left: mousePositions.includes(position) ? x : undefined,
      top: mousePositions.includes(position) ? y : undefined
    }
  };
}).withConfig({
  displayName: "styles__Float",
  componentId: "sc-1oomni5-2"
})(["position:absolute;border-radius:4px;background-color:", ";box-shadow:0 2px 6px 0 rgba(0,0,0,0.2);z-index:9999;display:block;pointer-events:", ";opacity:", ";transition:", ";color:", ";font-size:", ";font-weight:", ";line-height:20px;", " & *{pointer-events:none;}& > h6{font-weight:bold;margin:0px;opacity:0.75;font-family:inherit;font-size:14px;text-align:left;color:", ";background-color:", ";padding:6px 0px;text-align:center;user-select:none;}& > div{display:flex;width:auto;justify-content:flex-start;align-items:center;padding:12px;overflow:hidden;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#fff');
}, function (props) {
  return props.visible && !props.hoverable ? 'auto' : 'none';
}, function (props) {
  return props.visible ? '1' : '0';
}, function (props) {
  return mousePositions.includes(props.position) ? null : 'all 0.1s ease';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey4', '#6287a7');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', '400');
}, function (props) {
  return positionFloat(props);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tooltip.floatPrimary', '#009DFF');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tooltip.floatBgSecondary', '#fafafa');
});

exports.Float = Float;
var Icon = (0, _styledComponents["default"])(_Icons.FaQuestionCircle).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1oomni5-3"
})(["width:inherit;height:inherit;cursor:pointer;"]);
exports.Icon = Icon;