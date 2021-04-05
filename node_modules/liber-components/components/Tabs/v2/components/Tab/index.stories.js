"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDropDown = exports.left = exports.controlledTabs = exports.withStrongBorder = exports.center = exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tabsComponents = require("../../../tabsComponents");

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

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-1iocyhf-0"
})(["margin:30px;"]);

var Content = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Content",
  componentId: "sc-1iocyhf-1"
})(["height:320px;width:100%;"]);

var TabsComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabsComponent, _React$Component);

  function TabsComponent(props) {
    var _this;

    _classCallCheck(this, TabsComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabsComponent).call(this, props));

    _this.handleChangeTab = function (index) {
      _this.setState({
        activeTab: index
      });
    };

    _this.state = {
      activeTab: 0
    };
    return _this;
  }

  _createClass(TabsComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_tabsComponents.Tabs, {
        type: "center",
        version: "2",
        onChange: this.handleChangeTab,
        activeTab: this.state.activeTab
      }, _react["default"].createElement(_tabsComponents.Tab, {
        version: "2",
        label: "Todos"
      }, "Todos Content"), _react["default"].createElement(_tabsComponents.Tab, {
        version: "2",
        label: "Disponível",
        tooltip: "tooltip"
      }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabsComponents.Tab, {
        version: "2",
        label: "Em Negociação"
      }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabsComponents.Tab, {
        version: "2",
        label: "Antecipados"
      }, "Antecipados Content"), _react["default"].createElement(_tabsComponents.Tab, {
        version: "2",
        label: "Vencidos"
      }, "Vencidos Content"));
    }
  }]);

  return TabsComponent;
}(_react["default"].Component);

var _default = {
  title: 'Components 2.0|Tabs',
  parameters: {
    jest: ['Tabs']
  }
};
exports["default"] = _default;

var center = function center() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.Tabs, {
    version: "2"
  }, _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Todos"
  }, "Todos Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Antecipados"
  }, "Antecipados Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content")));
};

exports.center = center;

var withStrongBorder = function withStrongBorder() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.Tabs, {
    strongBorder: true,
    version: "2"
  }, _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Todos"
  }, "Todos Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Antecipados"
  }, "Antecipados Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content")));
};

exports.withStrongBorder = withStrongBorder;

var controlledTabs = function controlledTabs() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(TabsComponent, null));
};

exports.controlledTabs = controlledTabs;

var left = function left() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.Tabs, {
    version: "2",
    type: "left"
  }, _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Todos"
  }, "Todos Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, "Dispon\xEDvel Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Antecipados"
  }, "Antecipados Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content"), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Vencidos"
  }, "Vencidos Content")));
};

exports.left = left;

var withDropDown = function withDropDown() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.Tabs, {
    version: "2",
    strongBorder: true
  }, _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Disponível",
    tooltip: "tooltip"
  }, _react["default"].createElement(Content, null, "Dispon\xEDvel Content")), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Em Negociação"
  }, _react["default"].createElement(Content, null, "Em Negocia\xE7\xE3o Content")), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Antecipados"
  }, _react["default"].createElement(Content, null, "Antecipados Content")), _react["default"].createElement(_tabsComponents.DropDownTab, {
    minWidth: 275,
    strongBorder: true,
    label: "Aguardando"
  }, _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Aguardando Aceite"
  }, _react["default"].createElement(Content, null, "Aguardando Aceite Content")), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Aguardando Formalização"
  }, _react["default"].createElement(Content, null, "Aguardando Formaliza\xE7\xE3o Content")), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Aguardando Pagamento"
  }, _react["default"].createElement(Content, null, "Aguardando Pagamento Content"))), _react["default"].createElement(_tabsComponents.Tab, {
    version: "2",
    label: "Vencidos"
  }, _react["default"].createElement(Content, null, "Vencidos Content"))));
};

exports.withDropDown = withDropDown;