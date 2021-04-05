"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Carousel = _interopRequireDefault(require("./Carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BannerContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__BannerContainer",
  componentId: "auu4ff-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:0 18px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 1.0|Carousel',
  parameters: {
    jest: ['Carousel']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Carousel["default"], null, _react["default"].createElement(BannerContainer, null, "Conteudo 1"), _react["default"].createElement(BannerContainer, null, "Conteudo 2"), _react["default"].createElement(BannerContainer, null, "Conteudo 3"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};