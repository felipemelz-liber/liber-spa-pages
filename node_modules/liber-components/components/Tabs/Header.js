'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var children = _ref.children,
      labels = _ref.labels,
      slider = _ref.slider,
      header = _ref.header,
      asList = _ref.asList;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    asList ? children(labels, slider, header) : children(labels)
  );
};

Header.propTypes = {
  children: _propTypes2.default.func,
  labels: _propTypes2.default.oneOfType([_propTypes2.default.any]),
  slider: _propTypes2.default.oneOfType([_propTypes2.default.any]),
  header: _propTypes2.default.oneOfType([_propTypes2.default.any]),
  asList: _propTypes2.default.bool
};

Header.defaultProps = {
  children: function children() {},
  labels: null,
  slider: null,
  header: null,
  asList: false
};

exports.default = Header;