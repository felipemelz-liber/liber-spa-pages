'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'indexstories__Container',
  componentId: 'sc-14c4d79-0'
})(['margin-left:80px;margin-top:80px;']);

var Content = _styledComponents2.default.div.withConfig({
  displayName: 'indexstories__Content',
  componentId: 'sc-14c4d79-1'
})(['width:128px;font-size:16px;']);

(0, _react3.storiesOf)('Components 1.0|Tooltip', module).addParameters({ jest: ['Tooltip'] }).add('default', function () {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      _index.Tooltip,
      { label: 'Prazo de Vencimento' },
      _react2.default.createElement(
        Content,
        null,
        '10 dias \xFAteis'
      )
    )
  );
});