"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

require("jest-styled-components");

var _Switch = require("../Switch.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Switch styled component tests', function () {
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact["default"]()
  });
  it('should render switch Container correctly without props', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch.Container, null));
    expect((0, _enzymeToJson["default"])(wrapper)).toMatchSnapshot();
  });
  it('should render switch Container correctly with checked prop', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch.Container, {
      checked: true
    }));
    expect((0, _enzymeToJson["default"])(wrapper)).toMatchSnapshot();
  });
  it('should render switch Circle correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch.Circle, null));
    expect((0, _enzymeToJson["default"])(wrapper)).toMatchSnapshot();
  });
});