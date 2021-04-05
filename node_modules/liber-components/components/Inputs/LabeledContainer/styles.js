'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelContainer = exports.LabelContainer = _styledComponents2.default.div.withConfig({
  displayName: 'styles__LabelContainer',
  componentId: 'sc-1ije5ti-0'
})(['font-family:\'Roboto\',sans-serif;font-size:16px;font-weight:normal;display:flex;align-content:flex-start;color:', ';& > span{margin-right:15px;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'labeledContainer.color', '#a4a4a4');
});