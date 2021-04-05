"use strict";

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tabs = require("./tabs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabLabel = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__TabLabel",
  componentId: "sga7l1-0"
})(["& > div{padding:4px;}"]);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sga7l1-1"
})(["margin:30px;"]);

var Content = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Content",
  componentId: "sga7l1-2"
})(["height:120px;width:100%;"]);

var TabsComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabsComponent, _React$Component);

  function TabsComponent() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, TabsComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabsComponent)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      activeTab: 0
    }, _this.handleChangeTab = function (index) {
      _this.setState({
        activeTab: index
      });
    }, _temp));
  }

  _createClass(TabsComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_tabs.Tabs, {
        type: "center",
        version: "2",
        onChange: this.handleChangeTab,
        activeTab: this.state.activeTab
      }, _react["default"].createElement(_tabs.Tab, {
        version: "2",
        label: "Todos"
      }, "Todos Content"), _react["default"].createElement(_tabs.Tab, {
        version: "2",
        label: "Disponível",
        tooltip: "tooltip"
      }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabs.Tab, {
        version: "2",
        label: "Em Negociação"
      }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabs.Tab, {
        version: "2",
        label: "Antecipados"
      }, "Antecipados Content"), _react["default"].createElement(_tabs.Tab, {
        version: "2",
        label: "Vencidos"
      }, "Vencidos Content"));
    }
  }]);

  return TabsComponent;
}(_react["default"].Component);

(0, _react2.storiesOf)('Components 1.0|Tabs', module).addParameters({
  jest: ['Tabs']
}).add('default', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.Tabs, null, _react["default"].createElement(_tabs.TabHeader, null, function (labels) {
    return _react["default"].createElement(TabLabel, null, labels);
  }), _react["default"].createElement(_tabs.Tab, {
    label: "Todos"
  }, "Todos"), _react["default"].createElement(_tabs.Tab, {
    label: "Disponível"
  }, "Dispon\xEDvel"), _react["default"].createElement(_tabs.Tab, {
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o"), _react["default"].createElement(_tabs.Tab, {
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o"), _react["default"].createElement(_tabs.Tab, {
    label: "Antecipados"
  }, "Antecipados"), _react["default"].createElement(_tabs.Tab, {
    label: "Vencidos"
  }, "Vencidos")));
});
(0, _react2.storiesOf)('Components 2.0|SimpleTabs', module).addParameters({
  jest: ['SimpleTabs']
}).add('center', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.SimpleTabs, null, _react["default"].createElement(_tabs.SimpleTab, {
    href: "#"
  }, "Todos"), _react["default"].createElement(_tabs.SimpleTab, {
    href: "#",
    tooltip: "tooltip",
    active: true
  }, "Dispon\xEDveis"), _react["default"].createElement(_tabs.SimpleTab, {
    href: "#",
    disabled: true
  }, "Em Negocia\xE7\xE3o")));
}).add('left', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.SimpleTabs, {
    left: true
  }, _react["default"].createElement(_tabs.SimpleTab, {
    href: "#",
    left: true,
    active: true
  }, "Todos"), _react["default"].createElement(_tabs.SimpleTab, {
    href: "#",
    left: true,
    tooltip: "tooltip"
  }, "Dispon\xEDveis"), _react["default"].createElement(_tabs.SimpleTab, {
    href: "#",
    left: true,
    disabled: true
  }, "Em Negocia\xE7\xE3o")));
});
(0, _react2.storiesOf)('Components 2.0|Tabs', module).addParameters({
  jest: ['Tabs']
}).add('center', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.Tabs, {
    version: "2"
  }, _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Todos"
  }, "Todos Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Antecipados"
  }, "Antecipados Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content")));
}).add('with strong border', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.Tabs, {
    strongBorder: true,
    version: "2"
  }, _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Todos"
  }, "Todos Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Antecipados"
  }, "Antecipados Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content")));
}).add('controlled tabs', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(TabsComponent, null));
}).add('left', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.Tabs, {
    version: "2",
    type: "left"
  }, _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Todos"
  }, "Todos"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Antecipados"
  }, "Antecipados Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content"), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content")));
}).add('With DropDown', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabs.Tabs, {
    version: "2"
  }, _react["default"].createElement(_tabs.DropDownTab, null, _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Todos 1"
  }, _react["default"].createElement(Content, null, "Todos Content")), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Todos 2"
  }, _react["default"].createElement(Content, null, "Todos Content 2 "))), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, _react["default"].createElement(Content, null, "Dispon\xEDvel Content")), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Em Negociação"
  }, _react["default"].createElement(Content, null, "Em Negocia\xE7\xE3o Content")), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Antecipados"
  }, _react["default"].createElement(Content, null, "Antecipados Content")), _react["default"].createElement(_tabs.Tab, {
    version: "2",
    label: "Vencidos"
  }, _react["default"].createElement(Content, null, "Vencidos Content"))));
});