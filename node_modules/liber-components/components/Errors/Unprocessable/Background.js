"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cls1 = _styledComponents["default"].rect.withConfig({
  displayName: "Background__Cls1",
  componentId: "sc-4e8u5h-0"
})(["fill:#f8feff;"]);

var Cls2 = _styledComponents["default"].path.withConfig({
  displayName: "Background__Cls2",
  componentId: "sc-4e8u5h-1"
})(["fill:#eefaff;"]);

var Cls3 = _styledComponents["default"].path.withConfig({
  displayName: "Background__Cls3",
  componentId: "sc-4e8u5h-2"
})(["fill:#fff;"]);

var Background = function Background(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1366 768"
  }, _react["default"].createElement("g", {
    id: "Fundo_422",
    "data-name": "Fundo 422",
    transform: "translate(-1406 1)"
  }, _react["default"].createElement(Cls1, {
    id: "Tela",
    width: "1366",
    height: "768",
    transform: "translate(1406 -1)"
  }), _react["default"].createElement(Cls2, {
    id: "Path_262",
    "data-name": "Path 262",
    d: "M2425.5,692.614s64.554,112.657,148.452,46.855-5.331-148.849-5.331-148.849,177.667,24.676, 179.312-120.089-161.216-154.636-161.216-154.636,105.064-142.872-21.492-246.975c-126.385-103.961-216.372, 14.289-216.372,14.289s2.886-36.641-7.506-84.209H1455.877c-11.013,28.2-15.745,60.833-10.831,96.456A142.671, 142.671,0,0,0,1406,86.29V767H2425.77C2431.243,725.1,2425.5,692.614,2425.5,692.614Z"
  }), _react["default"].createElement(Cls3, {
    id: "Path_263",
    "data-name": "Path 263",
    d: "M2408.332,653.69s55.589,97.013,127.837,40.348-4.591-128.178-4.591-128.178,153, 21.249,154.411-103.413-138.828-133.162-138.828-133.162, 90.474-123.032-18.508-212.679c-108.834-89.524-186.325,12.3-186.325,12.3S2347.467,63.664, 2316.333-1H1874.96c-12.043,18.441-17.693,31.378-17.693,31.378A160.9,160.9,0,0,0, 1835.251-1H1612.129c-33.267,31.03-56.317,80.9-48.1,140.458,0,0-76.5-32.583-109.079,31.165s39.665, 110.5,39.665,110.5-43.175-3.826-88.613,14.233V613.771c50.85,23.581,101.362,27.17,101.362,27.17s-73.664, 48.165-18.416,121.829c1.108,1.478,2.237,2.872,3.375,4.23H1626.1c7.291-4.9,11.594-8.48,11.594-8.48a75.909, 75.909,0,0,0,2.715,8.48h359.153l0-.016.007.016H2396.04C2418.413,710.766,2408.332,653.69,2408.332,653.69Z"
  })));
};

Background.propTypes = {
  className: _propTypes["default"].string
};
Background.defaultProps = {
  className: ''
};
var _default = Background;
exports["default"] = _default;