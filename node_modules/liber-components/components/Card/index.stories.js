"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInnerCardAndHeader = exports.withInnerCard = exports.footer = exports.highlightedHeader = exports.header = exports.simple = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Cards = require("./Cards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { action } from '@storybook/addon-actions';
var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-1az4mog-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var Content = (0, _styledComponents["default"])(_Cards.CardContent).withConfig({
  displayName: "indexstories__Content",
  componentId: "sc-1az4mog-1"
})(["width:346px;"]);
var text = "\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Duis id pretium sapien, vel vehicula dolor.\n  Vestibulum vel diam eu ante mollis eleifend.\n  In condimentum est eu finibus faucibus.\n  Nam congue urna nec tellus fringilla, quis euismod nulla tempus.\n  Aenean convallis aliquam odio, a rutrum lorem mattis in.\n  Aliquam eu eros vel ligula accumsan varius at vitae elit.\n  Nunc orci urna, feugiat at consequat et, tempus et diam.\n  Aenean ex ipsum, mattis at luctus id, suscipit quis urna.\n  Nulla facilisi. Suspendisse quis mauris nibh.\n  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n  Etiam molestie pulvinar erat id dapibus.\n  Integer sit amet lorem dapibus, pharetra neque vel, semper diam.\n  Pellentesque pharetra ipsum quis posuere sollicitudin.\n  Vivamus tempus feugiat quam, vitae eleifend justo blandit a.\n  Maecenas ipsum metus, tempus viverra ultrices eu, posuere et erat.\n";
var _default = {
  title: 'Components 2.0|Card',
  parameters: {
    jest: ['CardV2']
  }
};
exports["default"] = _default;

var simple = function simple() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Cards.Card, {
    version: "2",
    elevation: "3"
  }, _react["default"].createElement(Content, {
    version: "2"
  }, text)));
};

exports.simple = simple;

var header = function header() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Cards.Card, {
    version: "2",
    elevation: "3"
  }, _react["default"].createElement(_Cards.CardHeader, {
    version: "2"
  }, "Texto de exemplo para o cabe\xE7alho"), _react["default"].createElement(Content, {
    version: "2"
  }, text)));
};

exports.header = header;

var highlightedHeader = function highlightedHeader() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Cards.Card, {
    version: "2",
    elevation: "3"
  }, _react["default"].createElement(_Cards.CardHeader, {
    version: "2",
    highlight: "primary"
  }, "Texto de exemplo para o cabe\xE7alho"), _react["default"].createElement(Content, {
    version: "2"
  }, text)));
};

exports.highlightedHeader = highlightedHeader;
highlightedHeader.story = {
  name: 'highlighted header'
};

var footer = function footer() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Cards.Card, {
    version: "2",
    elevation: "3"
  }, _react["default"].createElement(Content, {
    version: "2"
  }, text), _react["default"].createElement(_Cards.CardFooter, {
    version: "2"
  }, "Exemplo de rodap\xE9 quando houver")));
};

exports.footer = footer;

var withInnerCard = function withInnerCard() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Cards.Card, {
    version: "2",
    elevation: "3"
  }, _react["default"].createElement(Content, {
    version: "2"
  }, _react["default"].createElement(_Cards.InnerCard, null, _react["default"].createElement(_Cards.CardContent, null, text)))));
};

exports.withInnerCard = withInnerCard;
withInnerCard.story = {
  name: 'with inner card'
};

var withInnerCardAndHeader = function withInnerCardAndHeader() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Cards.Card, {
    version: "2",
    elevation: "3"
  }, _react["default"].createElement(Content, {
    version: "2"
  }, _react["default"].createElement(_Cards.InnerCard, null, _react["default"].createElement(_Cards.InnerCardHeader, null, "Texto de exemplo"), _react["default"].createElement(_Cards.CardContent, null, text)))));
};

exports.withInnerCardAndHeader = withInnerCardAndHeader;
withInnerCardAndHeader.story = {
  name: 'with inner card and header'
};