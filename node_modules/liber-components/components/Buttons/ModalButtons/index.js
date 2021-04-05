'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDangerButton = exports.DangerButton = exports.DangerIcon = exports.ModalSuccessButton = exports.SuccessButton = exports.SuccessIcon = exports.ModalPrimaryButton = exports.ModalButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require('../../Icons');

var _Themes = require('../../Themes');

var _Util = require('../../Util');

var _StyledButtons = require('../StyledButtons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ModalButton = exports.ModalButton = (0, _styledComponents2.default)(_StyledButtons.Button).withConfig({
  displayName: 'ModalButtons__ModalButton',
  componentId: 'sc-18e6bqt-0'
})(['background-color:transparent !important;font-size:18px;align-items:center;white-space:nowrap;', ' &:hover{', '}&:disabled{background-color:transparent !important;', '}&:after{display:none;}'], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.background', '#a4a4a4'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.backgroundHover', '#717171'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.background', '#a4a4a4'), true);
});

var ModalPrimaryButton = exports.ModalPrimaryButton = (0, _styledComponents2.default)(ModalButton).withConfig({
  displayName: 'ModalButtons__ModalPrimaryButton',
  componentId: 'sc-18e6bqt-1'
})(['', ' &:hover{', '}'], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.background', '#009dff'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.backgroundHover', '#007ecc'));
});

var Icons = (0, _styledComponents.css)(['width:18px;height:18px;margin:auto;margin-right:16px;']);

var SuccessIcon = exports.SuccessIcon = (0, _styledComponents2.default)(_Icons.FaCheck).withConfig({
  displayName: 'ModalButtons__SuccessIcon',
  componentId: 'sc-18e6bqt-2'
})(['', ''], Icons);

var SuccessButton = exports.SuccessButton = (0, _styledComponents2.default)(ModalButton).withConfig({
  displayName: 'ModalButtons__SuccessButton',
  componentId: 'sc-18e6bqt-3'
})(['', ' &:hover{', '}'], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.background', '#13ce66'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.backgroundHover', '#0DAB53'));
});

var ModalSuccessButton = function ModalSuccessButton(_ref) {
  var children = _ref.children,
      hasIcon = _ref.hasIcon,
      props = _objectWithoutProperties(_ref, ['children', 'hasIcon']);

  return _react2.default.createElement(
    SuccessButton,
    props,
    hasIcon ? _react2.default.createElement(SuccessIcon, null) : null,
    children
  );
};

exports.ModalSuccessButton = ModalSuccessButton;
ModalSuccessButton.propTypes = {
  hasIcon: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.any])
};

ModalSuccessButton.defaultProps = {
  children: null,
  hasIcon: false
};

var DangerIcon = exports.DangerIcon = (0, _styledComponents2.default)(_Icons.FaTimes).withConfig({
  displayName: 'ModalButtons__DangerIcon',
  componentId: 'sc-18e6bqt-4'
})(['', ''], Icons);

var DangerButton = exports.DangerButton = (0, _styledComponents2.default)(ModalButton).withConfig({
  displayName: 'ModalButtons__DangerButton',
  componentId: 'sc-18e6bqt-5'
})(['', ' &:hover{', '}'], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.danger.background', '#DC3545'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.danger.backgroundHover', '#bd2130'));
});

var ModalDangerButton = function ModalDangerButton(_ref2) {
  var children = _ref2.children,
      hasIcon = _ref2.hasIcon,
      props = _objectWithoutProperties(_ref2, ['children', 'hasIcon']);

  return _react2.default.createElement(
    DangerButton,
    props,
    hasIcon ? _react2.default.createElement(DangerIcon, null) : null,
    children
  );
};

exports.ModalDangerButton = ModalDangerButton;
ModalDangerButton.propTypes = {
  hasIcon: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.any])
};

ModalDangerButton.defaultProps = {
  children: null,
  hasIcon: false
};