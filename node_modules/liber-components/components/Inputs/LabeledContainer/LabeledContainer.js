'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LabeledContainer = function LabeledContainer(_ref) {
  var children = _ref.children,
      errorMessage = _ref.errorMessage,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ['children', 'errorMessage', 'label']);

  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      _styles.LabelContainer,
      null,
      _react2.default.createElement(
        'span',
        null,
        label
      ),
      _react2.default.createElement(
        _styles2.InputError,
        { visible: Boolean(errorMessage) },
        errorMessage
      )
    ),
    children
  );
};

LabeledContainer.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
  errorMessage: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired
};

LabeledContainer.defaultProps = {
  children: null,
  errorMessage: ''
};

exports.default = LabeledContainer;