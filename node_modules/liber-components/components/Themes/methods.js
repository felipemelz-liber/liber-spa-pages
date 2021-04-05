"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLineHeight = exports.getFontSize = exports.getFontFamily = exports.getButtonStatesOverlays = exports.getTypographyColor = exports.getTypographyTones = exports.getColor = exports.hexToRgb = exports.handleThemeFromObject = exports.handleTheme = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.string.small");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.regexp.replace");

var _LiberNew = _interopRequireWildcard(require("./LiberNew"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var handleTheme = function handleTheme(theme, defaultValue, prop) {
  if (prop) {
    return prop;
  }

  if (theme) {
    return theme;
  }

  return defaultValue;
};

exports.handleTheme = handleTheme;

var toCamelCase = function toCamelCase(s) {
  return s ? s.replace(/(-\w)/g, function (m) {
    return m[1].toUpperCase();
  }) : s;
};

var handleThemeFromObject = function handleThemeFromObject() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var defaultValue = arguments.length > 2 ? arguments[2] : undefined;
  var prop = arguments.length > 3 ? arguments[3] : undefined;
  var acc = theme;
  var value = null;
  key.split('.').reduce(function (prevKey, currKey) {
    var curr = toCamelCase(currKey);
    var prev = toCamelCase(prevKey);

    if (acc) {
      value = acc[prev] ? acc[prev][curr] : null;
      acc = acc[prev];
      return curr;
    }

    return null;
  });
  return handleTheme(value, defaultValue, prop);
};

exports.handleThemeFromObject = handleThemeFromObject;

var hexToRgb = function hexToRgb(hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "rgba(".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16), ", ").concat(opacity, ")") : hex;
};

exports.hexToRgb = hexToRgb;

var getColor = function getColor(colorKey) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return function (_ref) {
    var _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? {} : _ref$theme,
        colorProp = _ref.color;
    var colors = theme.colors;
    var color = colors ? colors[colorKey || colorProp] : null;

    if (color) {
      return hexToRgb(color, opacity);
    }

    return hexToRgb(defaultValue, opacity);
  };
};

exports.getColor = getColor;

var getTypographyTones = function getTypographyTones(color) {
  var opacities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return color ? opacities.map(function (opacity) {
    return hexToRgb(color, opacity);
  }) : [];
};

exports.getTypographyTones = getTypographyTones;

var getTypographyColor = function getTypographyColor(type) {
  return function (_ref2) {
    var _ref2$theme = _ref2.theme,
        theme = _ref2$theme === void 0 ? {} : _ref2$theme,
        lightProp = _ref2.light,
        darkProp = _ref2.dark;
    var opacities = theme.opacities,
        colors = theme.colors;

    var _ref3 = opacities || {},
        typographyOpacities = _ref3.typography;

    var black = colors && colors.black ? colors.black : _LiberNew.BLACK;

    var _ref4 = typographyOpacities || {},
        light = _ref4.light,
        normal = _ref4.normal,
        dark = _ref4.dark;

    var _getTypographyTones = getTypographyTones(black, [light || 0.3, normal || 0.64, dark || 0.87]),
        _getTypographyTones2 = _slicedToArray(_getTypographyTones, 3),
        colorLight = _getTypographyTones2[0],
        colorNormal = _getTypographyTones2[1],
        colorDark = _getTypographyTones2[2];

    if (lightProp) {
      return colorLight;
    }

    if (darkProp) {
      return colorDark;
    }

    if (type) {
      return type === 'title' ? colorDark : colorNormal;
    }

    return colorNormal;
  };
};

exports.getTypographyColor = getTypographyColor;
var SOLID_BUTTON_DEFAULT_OPACITIES = {
  ripple: 0.32,
  pressed: 0.32,
  focus: 0.24,
  hover: 0.08
};
var FLAT_BUTTON_DEFAULT_OPACITIES = {
  ripple: 0.12,
  pressed: 0.12,
  focus: 0.12,
  hover: 0.06
};

var getButtonStatesOverlays = function getButtonStatesOverlays(color) {
  var isSolid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return function (_ref5) {
    var _ref5$theme = _ref5.theme,
        theme = _ref5$theme === void 0 ? {} : _ref5$theme;
    var opacities = theme.opacities,
        colors = theme.colors;

    var _ref6 = opacities || {},
        button = _ref6.button;

    var _ref7 = button || {},
        solid = _ref7.solid,
        flat = _ref7.flat;

    var _ref8 = isSolid ? solid || SOLID_BUTTON_DEFAULT_OPACITIES : flat || FLAT_BUTTON_DEFAULT_OPACITIES,
        ripple = _ref8.ripple,
        pressed = _ref8.pressed,
        focus = _ref8.focus,
        hover = _ref8.hover;

    var _ref9 = colors || {},
        white = _ref9.white,
        primary = _ref9.primary;

    var baseColorOverlay = isSolid ? white || _LiberNew.WHITE : color || primary || _LiberNew.PRIMARY;
    return {
      enabled: hexToRgb(baseColorOverlay, 0),
      ripple: hexToRgb(baseColorOverlay, ripple),
      pressed: hexToRgb(baseColorOverlay, pressed),
      focus: hexToRgb(baseColorOverlay, focus),
      hover: hexToRgb(baseColorOverlay, hover)
    };
  };
};

exports.getButtonStatesOverlays = getButtonStatesOverlays;
var FONT_FAMILY_TYPES = ['text', 'title'];

var getFontFamily = function getFontFamily() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';
  return function (_ref10) {
    var _ref10$theme = _ref10.theme,
        theme = _ref10$theme === void 0 ? {} : _ref10$theme;
    var selectedType = type;

    if (!FONT_FAMILY_TYPES.includes(type)) {
      selectedType = 'text';
    }

    var fonts = theme.fonts;
    return fonts && fonts[selectedType] ? fonts[selectedType] : _LiberNew["default"].fonts[selectedType];
  };
};

exports.getFontFamily = getFontFamily;
var SIZES = ['small', 'regular', 'large', 'xlarge'];

var getFontSize = function getFontSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  return function (_ref11) {
    var _ref11$theme = _ref11.theme,
        theme = _ref11$theme === void 0 ? {} : _ref11$theme,
        sizeProp = _ref11.size,
        small = _ref11.small,
        regular = _ref11.regular,
        large = _ref11.large,
        xlarge = _ref11.xlarge;
    var selectedType = type;

    if (!FONT_FAMILY_TYPES.includes(type)) {
      selectedType = 'text';
    }

    var selectedSize = sizeProp || size;

    if (!SIZES.includes(selectedSize)) {
      selectedSize = 'regular';
    }

    if (small) {
      selectedSize = 'small';
    }

    if (regular) {
      selectedSize = 'regular';
    }

    if (large) {
      selectedSize = 'large';
    }

    if (xlarge) {
      selectedSize = 'xlarge';
    }

    var fontSizes = theme.fontSizes;
    var sizes = fontSizes && fontSizes[selectedType] ? fontSizes[selectedType] : _LiberNew["default"].fontSizes[selectedType];
    return sizes ? sizes[selectedSize] : sizes.regular;
  };
};

exports.getFontSize = getFontSize;
var LINE_HEIGHT_MULTIPLIER = 1.5;

var getLineHeight = function getLineHeight() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  return function (_ref12) {
    var _ref12$theme = _ref12.theme,
        theme = _ref12$theme === void 0 ? {} : _ref12$theme,
        sizeProp = _ref12.size,
        small = _ref12.small,
        regular = _ref12.regular,
        large = _ref12.large,
        xlarge = _ref12.xlarge;
    var selectedType = type;

    if (!FONT_FAMILY_TYPES.includes(type)) {
      selectedType = 'text';
    }

    var selectedSize = sizeProp || size;

    if (!SIZES.includes(selectedSize)) {
      selectedSize = 'regular';
    }

    if (small) {
      selectedSize = 'small';
    }

    if (regular) {
      selectedSize = 'regular';
    }

    if (large) {
      selectedSize = 'large';
    }

    if (xlarge) {
      selectedSize = 'xlarge';
    }

    var fontSizes = theme.fontSizes;
    var sizes = fontSizes && fontSizes[selectedType] ? fontSizes[selectedType] : _LiberNew["default"].fontSizes[selectedType];
    var targetSize = sizes ? sizes[selectedSize] : sizes.regular;
    var lineHeight = "".concat(parseInt(parseInt((targetSize || '').replace('px', ''), 10) * LINE_HEIGHT_MULTIPLIER, 10), "px");
    return lineHeight;
  };
};

exports.getLineHeight = getLineHeight;