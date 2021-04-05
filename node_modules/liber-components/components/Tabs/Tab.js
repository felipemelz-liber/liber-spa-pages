'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { 'data-ref': label },
    children
  );
};

Tab.propTypes = {
  label: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.any])
};

Tab.defaultProps = {
  label: '',
  children: ''
};

exports.default = Tab;