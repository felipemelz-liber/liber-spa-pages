"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Inputs = require("../../Inputs");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Filter =
/*#__PURE__*/
function (_Component) {
  _inherits(Filter, _Component);

  function Filter(props) {
    var _this;

    _classCallCheck(this, Filter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this));

    _this.handleFilterChange = function (filter) {
      var filteredState = {};
      var onFilter = _this.props.onFilter;
      var data = JSON.parse(JSON.stringify(_this.props.data.content));
      Object.keys(data).forEach(function (key) {
        var toFilter = data[key].options[filter];

        if (toFilter) {
          data[key].options[filter].show = !_this.state[filter];
        }
      });
      filteredState[filter] = !_this.state[filter];

      _this.setState(filteredState, function () {
        onFilter(data);
      });
    };

    _this.state = {};
    Object.keys(props.data.options).forEach(function (key) {
      _this.state[key] = true;
    });
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          filterColor = _this$props.filterColor;
      var mappedFilters = Object.keys(data.options).map(function (key) {
        return _react["default"].createElement(_Inputs.RadioButton, {
          key: key,
          name: key,
          id: key,
          color: typeof filterColor === 'string' ? filterColor : filterColor[key],
          labelColor: "#717171",
          type: "checkbox",
          checked: _this2.state[key],
          onChange: function onChange() {
            _this2.handleFilterChange(key);
          }
        }, data.options[key]);
      });
      return _react["default"].createElement(_styles.FilterRow, null, _react["default"].createElement(_styles.FilterLabel, null, "Mostrar:"), _react["default"].createElement(_styles.FiltersBox, null, mappedFilters));
    }
  }]);

  return Filter;
}(_react.Component);

Filter.propTypes = {
  filterColor: _propTypes["default"].oneOfType([_propTypes["default"].objectOf(_propTypes["default"].string), _propTypes["default"].string]),
  data: _propTypes["default"].shape({
    options: _propTypes["default"].objectOf(_propTypes["default"].string),
    content: _propTypes["default"].objectOf(_propTypes["default"].any)
  }).isRequired,
  onFilter: _propTypes["default"].func
};
Filter.defaultProps = {
  filterColor: '#cecece',
  onFilter: function onFilter() {}
};
var _default = Filter;
exports["default"] = _default;