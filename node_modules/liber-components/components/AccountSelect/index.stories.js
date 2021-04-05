"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customActionButtonLabel = exports.withoutActionButton = exports.controled = exports.defaultStory = exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccountSelect = _interopRequireDefault(require("./AccountSelect"));

var _accounts = _interopRequireDefault(require("./accounts"));

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

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-18gzyim-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;& > div{width:296px;}"]);

var Selection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Selection, _React$Component);

  function Selection(props) {
    var _this;

    _classCallCheck(this, Selection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Selection).call(this, props));
    _this.state = {
      selection: 0,
      accounts: []
    };
    return _this;
  }

  _createClass(Selection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          accounts: _accounts["default"]
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          selection = _this$state.selection,
          accs = _this$state.accounts;
      return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_AccountSelect["default"], {
        accounts: accs,
        selection: selection,
        onSelect: function onSelect(account) {
          return _this3.setState({
            selection: account.id
          });
        }
      })));
    }
  }]);

  return Selection;
}(_react["default"].Component);

var _default = {
  title: 'Components 2.0|Account Select',
  parameters: {
    jest: ['AccountSelect']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_AccountSelect["default"], {
    accounts: _accounts["default"],
    onSelect: function onSelect(account) {
      return alert("Conta do ".concat(account.bankName, " selecionada"));
    }
  })));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var controled = function controled() {
  return _react["default"].createElement(Selection, null);
};

exports.controled = controled;

var withoutActionButton = function withoutActionButton() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_AccountSelect["default"], {
    accounts: _accounts["default"],
    action: false
  })));
};

exports.withoutActionButton = withoutActionButton;

var customActionButtonLabel = function customActionButtonLabel() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_AccountSelect["default"], {
    accounts: _accounts["default"],
    actionLabel: "Customizado",
    onAction: function onAction() {
      return alert('Action');
    }
  })));
};

exports.customActionButtonLabel = customActionButtonLabel;