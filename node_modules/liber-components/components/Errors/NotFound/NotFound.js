"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotFound = function NotFound(_ref) {
  var linkComponent = _ref.linkComponent,
      url = _ref.url;

  var link = _react["default"].cloneElement(linkComponent, {
    href: url
  });

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_styles.DesktopContainer, null, _react["default"].createElement(_styles2.DesktopBackground, null), _react["default"].createElement(_styles2.DesktopIllustration, null), _react["default"].createElement(_styles2.DesktopContent, null, _react["default"].createElement(_styles2.DesktopMessageBox, null, _react["default"].createElement("h1", null, "Acho que pegamos uma trilha errada..."), _react["default"].createElement("h3", null, "N\xE3o encontrei essa p\xE1gina."), link))), _react["default"].createElement(_styles.MobileContainer, null, _react["default"].createElement(_styles.MobileBackground, null), _react["default"].createElement(_styles2.MobileIllustration, null), _react["default"].createElement(_styles2.MobileContent, null, _react["default"].createElement(_styles2.MobileBrand, null), _react["default"].createElement(_styles2.MobileMessageBox, null, _react["default"].createElement("h1", null, "Acho que pegamos uma trilha errada..."), _react["default"].createElement("h3", null, "N\xE3o encontrei essa p\xE1gina."), link))));
};

NotFound.propTypes = {
  url: _propTypes["default"].string,
  linkComponent: _propTypes["default"].oneOfType([_propTypes["default"].any])
};
NotFound.defaultProps = {
  url: '/',
  linkComponent: _react["default"].createElement(_styles2.GreenLink, null, "Voltar \xE0 p\xE1gina inicial")
};
var _default = NotFound;
exports["default"] = _default;