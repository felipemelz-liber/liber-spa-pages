"use strict";

require("core-js/modules/es6.array.find");

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

require("jest-styled-components");

var _Switch = _interopRequireDefault(require("../Switch"));

var _Switch2 = require("../Switch.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Switch component tests', function () {
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact["default"]()
  });

  var onChange = _sinon["default"].spy();

  afterEach(function () {
    onChange.resetHistory();
  });
  afterAll(function () {
    onChange.restore();
  });
  it('should render Switch component correctly without props', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], null));
    expect((0, _enzymeToJson["default"])(wrapper)).toMatchSnapshot();
  });
  it('should render Switch component correctly with checked prop', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
      checked: true
    }));
    expect((0, _enzymeToJson["default"])(wrapper)).toMatchSnapshot();
  });
  it('should call onChange with true when current state is unchecked', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
      checked: false,
      onChange: onChange
    }));
    var container = wrapper.find(_Switch2.Container);
    container.simulate('click');
    expect(onChange.calledWith(true)).toBeTruthy();
  });
  it('should call onChange with false when current state is checked', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
      checked: true,
      onChange: onChange
    }));
    var container = wrapper.find(_Switch2.Container);
    container.simulate('click');
    expect(onChange.calledWith(false)).toBeTruthy();
  });
});