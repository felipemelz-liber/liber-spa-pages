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
exports.typography = exports.colors = exports["default"] = void 0;

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.regexp.split");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _LiberNew = _interopRequireDefault(require("./LiberNew"));

var _methods = require("./methods");

var _Typography = require("../Typography");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "newstories__Container",
  componentId: "sc-8vzpcm-0"
})(["width:80%;display:flex;flex-wrap:wrap;"]);

var Row = _styledComponents["default"].div.withConfig({
  displayName: "newstories__Row",
  componentId: "sc-8vzpcm-1"
})(["display:flex;align-items:center;margin:16px;width:fit-content;border-radius:8px;div{font-family:", ";}"], (0, _methods.getFontFamily)('title'));

var Column = _styledComponents["default"].div.withConfig({
  displayName: "newstories__Column",
  componentId: "sc-8vzpcm-2"
})(["display:flex;flex-direction:column;width:fit-content;max-width:385px;padding:0px 16px;"]);

var PaddingContainer = _styledComponents["default"].div.withConfig({
  displayName: "newstories__PaddingContainer",
  componentId: "sc-8vzpcm-3"
})(["padding:8px 16px;"]);

var Box = _styledComponents["default"].div.withConfig({
  displayName: "newstories__Box",
  componentId: "sc-8vzpcm-4"
})(["width:200px;border-radius:4px;overflow:hidden;flex-direction:column;justify-content:flex-start;align-items:center;margin-right:16px;"]);

var MainColor = _styledComponents["default"].div.withConfig({
  displayName: "newstories__MainColor",
  componentId: "sc-8vzpcm-5"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:12px;position:relative;"], function (_ref) {
  var color = _ref.color,
      opacity = _ref.opacity;
  return (0, _methods.getColor)(color, null, opacity);
}, (0, _methods.getColor)('white'));

var _default = {
  title: 'UI|Theme NEW!'
};
exports["default"] = _default;
var colorsTypes = [{
  color: 'primary',
  opacity: 1
}, {
  color: 'secondary',
  opacity: 1
}, {
  color: 'success',
  opacity: 1
}, {
  color: 'error',
  opacity: 1
}];
var blacks = [{
  color: 'black',
  opacity: 1
}, {
  color: 'black',
  opacity: 0.87
}, {
  color: 'black',
  opacity: 0.64
}, {
  color: 'black',
  opacity: 0.3
}];

var formatPercentage = function formatPercentage(number) {
  var decimal = String(number).split('.')[1];

  if (decimal) {
    return "".concat(decimal).concat(decimal.length === 1 ? '0' : '', "%");
  }

  return '';
};

var colors = function colors() {
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _LiberNew["default"]
  }, _react["default"].createElement(Container, null, _react["default"].createElement(Row, null, colorsTypes.map(function (_ref2) {
    var color = _ref2.color,
        opacity = _ref2.opacity;
    return _react["default"].createElement(Box, null, _react["default"].createElement(MainColor, {
      color: color,
      opacity: opacity
    }, _react["default"].createElement("b", null, color)));
  })), _react["default"].createElement(Row, null, blacks.map(function (_ref3) {
    var color = _ref3.color,
        opacity = _ref3.opacity;
    return _react["default"].createElement(Box, null, _react["default"].createElement(MainColor, {
      color: color,
      opacity: opacity
    }, _react["default"].createElement("b", null, color, " ", formatPercentage(opacity))));
  }))));
};

exports.colors = colors;
var titles = [{
  size: 'xlarge',
  label: 'Título Extra Grande'
}, {
  size: 'large',
  label: 'Título Grande'
}, {
  size: 'regular',
  label: 'Título Regular'
}, {
  size: 'small',
  label: 'Título Pequeno'
}];
var texts = [{
  size: 'xlarge',
  label: 'Este é um texto grande. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.'
}, {
  size: 'large',
  label: 'Este é um texto regular. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.'
}, {
  size: 'regular',
  label: 'Este é um texto pequeno. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.'
}, {
  size: 'small',
  label: 'Este é um texto muito pequeno. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.'
}];

var typography = function typography() {
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _LiberNew["default"]
  }, _react["default"].createElement(Container, null, _react["default"].createElement(Column, null, texts.map(function (_ref4) {
    var size = _ref4.size,
        label = _ref4.label;
    return _react["default"].createElement(PaddingContainer, {
      key: size
    }, _react["default"].createElement(_Typography.Text, {
      size: size
    }, label), _react["default"].createElement("br", null));
  })), _react["default"].createElement(Column, null, titles.map(function (_ref5) {
    var size = _ref5.size,
        label = _ref5.label;
    return _react["default"].createElement(PaddingContainer, {
      key: size
    }, _react["default"].createElement(_Typography.Title, {
      size: size
    }, label));
  }))));
};

exports.typography = typography;
colors.story = {
  name: 'Colors'
};