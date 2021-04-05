"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _KeyValueDropDown = _interopRequireDefault(require("../KeyValueDropDown"));

var _AcccountSelect = require("./AcccountSelect.styles");

var _Assets = require("../Assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AccountSelect =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AccountSelect, _PureComponent);

  function AccountSelect(props) {
    var _this;

    _classCallCheck(this, AccountSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccountSelect).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var account = props.accounts[0] || {
      id: -1,
      bankName: ''
    };
    _this.state = {
      selected: account.id,
      name: account.bankName
    };
    return _this;
  }

  _createClass(AccountSelect, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          selected = _this$state.selected,
          name = _this$state.name;
      var _this$props = this.props,
          accounts = _this$props.accounts,
          action = _this$props.action,
          actionLabel = _this$props.actionLabel,
          onAction = _this$props.onAction;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Assets.PsGlobalStyle, null), _react["default"].createElement(_KeyValueDropDown["default"], {
        label: name,
        keyLabel: "Banco",
        containerSize: true
      }, _react["default"].createElement(_AcccountSelect.Container, null, accounts.length !== 0 && _react["default"].createElement(_AcccountSelect.Body, null, this.renderOptions(accounts, selected)), action && _react["default"].createElement(_AcccountSelect.Footer, null, _react["default"].createElement("button", {
        onClick: onAction,
        type: "button"
      }, actionLabel)))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.selected !== null) {
        var account = props.accounts.find(function (acc) {
          return acc.id === props.selected;
        });
        return {
          selected: props.selected,
          name: account.bankName
        };
      }

      if (state.selected === -1 && props.accounts[0]) {
        return {
          selected: props.accounts[0].id,
          name: props.accounts[0].bankName
        };
      }

      return state;
    }
  }]);

  return AccountSelect;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.savingsComplementLabel = function (bankCode) {
    return {
      '001': 'Variação: ',
      104: 'Operação: ',
      341: 'Complemento: '
    }[bankCode] || 'Número da poupança: ';
  };

  this.renderAccountInfo = function (kind, bankCode, account, digit, savingsComplement) {
    return _react["default"].createElement(_AcccountSelect.BoxRow, null, kind.toUpperCase(), ": ", account, digit !== '' && "-".concat(digit), kind === 'ci' && ['001', '104', '341'].includes(bankCode) && " | ".concat(_this2.savingsComplementLabel(bankCode)).concat(savingsComplement));
  };

  this.selectionCallback = function (account, onSelect) {
    return onSelect(account);
  };

  this.handleSelectAccount = function (selected) {
    return function () {
      var _this2$props = _this2.props,
          accounts = _this2$props.accounts,
          onSelect = _this2$props.onSelect;
      var account = accounts.find(function (acc) {
        return acc.id === selected;
      });

      _this2.setState({
        selected: selected,
        name: account.bankName
      }, _this2.selectionCallback(account, onSelect));
    };
  };

  this.renderOptions = function (accounts, selected) {
    return accounts.map(function (account) {
      var checked = selected === account.id;
      return _react["default"].createElement(_AcccountSelect.Box, {
        key: account.id,
        checked: checked,
        onClick: _this2.handleSelectAccount(account.id)
      }, _react["default"].createElement(_AcccountSelect.BoxRow, null, _react["default"].createElement(_AcccountSelect.BoxTitle, null, account.bankName), account.conjunct && _react["default"].createElement(_AcccountSelect.Tag, null, "Conjunta"), _react["default"].createElement(_AcccountSelect.Checkbox, {
        id: "account-checkbox-".concat(account.id),
        checked: checked
      })), _react["default"].createElement(_AcccountSelect.BoxRow, null, "Ag: ", account.agency, account.agencyDigit !== '' && "-".concat(account.agencyDigit)), _this2.renderAccountInfo(account.kind, account.bankCode, account.account, account.accountDigit, account.savingsComplement));
    });
  };
};

AccountSelect.propTypes = {
  accounts: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    "default": _propTypes["default"].bool,
    kind: _propTypes["default"].string,
    agency: _propTypes["default"].string,
    agencyDigit: _propTypes["default"].string,
    account: _propTypes["default"].string,
    accountDigit: _propTypes["default"].string,
    conjunct: _propTypes["default"].bool,
    bankCode: _propTypes["default"].string,
    bankName: _propTypes["default"].string,
    savingsComplement: _propTypes["default"].string,
    id: _propTypes["default"].number
  })),
  onSelect: _propTypes["default"].func,
  selected: _propTypes["default"].number,
  // eslint-disable-line
  action: _propTypes["default"].bool,
  actionLabel: _propTypes["default"].string,
  onAction: _propTypes["default"].func
};
AccountSelect.defaultProps = {
  accounts: [],
  selected: null,
  action: true,
  actionLabel: 'CADASTRAR',
  onSelect: function onSelect() {},
  onAction: function onAction() {}
};
var _default = AccountSelect;
exports["default"] = _default;