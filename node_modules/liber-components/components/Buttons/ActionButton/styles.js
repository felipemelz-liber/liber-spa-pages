'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Label = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: ', ';\n    opacity: ', ';\n  '], ['\n    width: ', ';\n    opacity: ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-right: ', ';\n  '], ['\n    margin-right: ', ';\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Util = require('../../Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = exports.Label = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Label',
  componentId: 'sc-1u3e9hj-0'
})(['text-align:center;width:unset;opacity:1;transition:all 300ms  ', ';white-space:nowrap;color:inherit;', ' ', ''], function (props) {
  return props.hover ? 'ease-out' : 'ease-in';
}, _Util.media.large(_templateObject, function (props) {
  return props.hover ? props.size || '0px' : '0px';
}, function (props) {
  return props.hover ? '1' : '0';
}), _Util.media.extraLarge(_templateObject, function (props) {
  return props.hover ? props.size || '0px' : '0px';
}, function (props) {
  return props.hover ? '1' : '0';
}));

var Icon = exports.Icon = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Icon',
  componentId: 'sc-1u3e9hj-1'
})(['margin-right:15px;transition:margin 300ms  ', ';', ' ', ''], function (props) {
  return props.hover ? 'ease-out' : 'ease-in';
}, _Util.media.large(_templateObject2, function (props) {
  return props.hover ? '15px' : '0px';
}), _Util.media.extraLarge(_templateObject2, function (props) {
  return props.hover ? '15px' : '0px';
}));