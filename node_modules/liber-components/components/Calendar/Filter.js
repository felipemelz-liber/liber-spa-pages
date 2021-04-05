'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Inputs = require('../Inputs');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          filterColor = _props.filterColor;


      var mappedFilters = Object.keys(data.options).map(function (key) {
        return _react2.default.createElement(
          _Inputs.RadioButton,
          {
            key: key,
            name: key,
            id: key,
            color: typeof filterColor === 'string' ? filterColor : filterColor[key],
            labelColor: '#717171',
            type: 'checkbox',
            checked: _this2.state[key],
            onChange: function onChange() {
              _this2.handleFilterChange(key);
            }
          },
          data.options[key]
        );
      });
      return _react2.default.createElement(
        _styles.FilterRow,
        null,
        _react2.default.createElement(
          _styles.FilterLabel,
          null,
          'Mostrar:'
        ),
        _react2.default.createElement(
          _styles.FiltersBox,
          null,
          mappedFilters
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

Filter.propTypes = {
  filterColor: _propTypes2.default.oneOfType([_propTypes2.default.objectOf(_propTypes2.default.string), _propTypes2.default.string]),
  data: _propTypes2.default.shape({
    options: _propTypes2.default.objectOf(_propTypes2.default.string),
    content: _propTypes2.default.objectOf(_propTypes2.default.any)
  }).isRequired,
  onFilter: _propTypes2.default.func
};
Filter.defaultProps = {
  filterColor: '#cecece',
  onFilter: function onFilter() {}
};

exports.default = Filter;