"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getContentPositioning = function getContentPositioning(_ref) {
  var position = _ref.position,
      size = _ref.size,
      fitScreen = _ref.fitScreen,
      drawerSize = _ref.drawerSize;
  var width;
  var height;

  switch (position) {
    case 'right':
      width = fitScreen ? '100vw' : "".concat(size, "px");
      height = drawerSize ? "".concat(drawerSize, "px") : '100vh';
      return "\n        height: ".concat(height, ";\n        width: ").concat(width, ";\n        top: ").concat(drawerSize ? null : '0', ";\n        right: 0;\n        border-radius: ").concat(drawerSize ? '4px 0px 0px 4px' : null, ";\n      ");

    case 'top':
      height = fitScreen ? '100vh' : "".concat(size, "px");
      width = drawerSize ? "".concat(drawerSize, "px") : '100vw';
      return "\n        height: ".concat(height, ";\n        width: ").concat(width, ";\n        top: 0;\n        left: ").concat(drawerSize ? null : '0', ";\n        border-radius: ").concat(drawerSize ? '0px 0px 4px 4px' : null, ";\n    ");

    case 'bottom':
      height = fitScreen ? '100vh' : "".concat(size, "px");
      width = drawerSize ? "".concat(drawerSize, "px") : '100vw';
      return "\n        height: ".concat(height, ";\n        width: ").concat(width, ";\n        bottom: 0;\n        left: ").concat(drawerSize ? null : '0', ";\n        border-radius: ").concat(drawerSize ? '4px 4px 0px 0px' : null, ";\n    ");

    case 'left':
    default:
      width = fitScreen ? '100vw' : "".concat(size, "px");
      height = drawerSize ? "".concat(drawerSize, "px") : '100vh';
      return "\n        height: ".concat(height, ";\n        width: ").concat(width, ";\n        top: ").concat(drawerSize ? null : '0', ";\n        left: 0;\n        border-radius: ").concat(drawerSize ? '0px 4px 4px 0px' : null, ";\n      ");
  }
};

var Content = _styledComponents["default"].div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-54hecm-0"
})(["position:fixed;height:100vh;background-color:", ";", " pointer-events:all;box-shadow:0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dialog.card', '#fff');
}, function (props) {
  return getContentPositioning(props);
});

exports.Content = Content;