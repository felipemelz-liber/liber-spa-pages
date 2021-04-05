"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _validarCpf = _interopRequireDefault(require("validar-cpf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginForm = require("./LoginForm.styles");

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _initialiseProps.call(_assertThisInitialized(_this)), _temp));
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          cpf = _this$state.cpf,
          pin = _this$state.pin,
          otp = _this$state.otp,
          errors = _this$state.errors;
      var _this$props = this.props,
          title = _this$props.title,
          logo = _this$props.logo,
          button = _this$props.button,
          containerProps = _this$props.containerProps;

      var submitButton = _react["default"].cloneElement(button, {
        type: 'submit'
      });

      return _react["default"].createElement(_LoginForm.LoginContainer, containerProps, _react["default"].createElement(_LoginForm.Form, {
        onSubmit: this.handleSubmit
      }, _react["default"].createElement(_LoginForm.Title, null, title), _react["default"].createElement(_Inputs.TextField, {
        label: "CPF",
        type: "text",
        value: cpf,
        onChange: this.handleFieldChange('cpf'),
        fullWidth: true,
        openLabel: true,
        errorMessage: errors.cpf,
        mask: "999.999.999-99",
        maskChar: null
      }), _react["default"].createElement(_Inputs.TextField, {
        label: "PIN",
        type: "password",
        value: pin,
        onChange: this.handleFieldChange('pin'),
        fullWidth: true,
        openLabel: true,
        maxLength: 4,
        errorMessage: errors.pin
      }), _react["default"].createElement(_Inputs.TextField, {
        label: "OTP",
        type: "number",
        value: otp,
        onChange: this.handleFieldChange('otp'),
        fullWidth: true,
        openLabel: true,
        errorMessage: errors.otp
      }), submitButton), logo && _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_LoginForm.FormSeparator, null), logo));
    }
  }]);

  return LoginForm;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    cpf: '',
    pin: '',
    otp: '',
    errors: {
      cpf: '',
      pin: '',
      otp: ''
    }
  };

  this.handleCallback = function (callback) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return function () {
        return callback.apply(void 0, args);
      };
    };
  };

  this.handleFieldChange = function (field) {
    return function (value) {
      var onFieldChange = _this2.props.onFieldChange;

      _this2.setState(_defineProperty({}, field, value), _this2.handleCallback(onFieldChange)(field, value));
    };
  };

  this.validateForm = function (cpf, pin, otp) {
    var errors = {};

    if (pin === '') {
      errors.pin = 'Campo obrigatório';
    }

    if (otp === '') {
      errors.otp = 'Campo obrigatório';
    }

    if (!(0, _validarCpf["default"])(cpf)) {
      errors.cpf = 'CPF Inválido';
    }

    if (cpf === '') {
      errors.cpf = 'Campo obrigatório';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
    };
  };

  this.handleSubmit = function (event) {
    event.preventDefault();
    var onSubmit = _this2.props.onSubmit;
    var _this2$state = _this2.state,
        cpf = _this2$state.cpf,
        pin = _this2$state.pin,
        otp = _this2$state.otp;

    var _this2$validateForm = _this2.validateForm(cpf, pin, otp),
        isValid = _this2$validateForm.isValid,
        errors = _this2$validateForm.errors;

    if (isValid) {
      _this2.setState({
        cpf: '',
        pin: '',
        otp: ''
      }, _this2.handleCallback(onSubmit)({
        cpf: cpf,
        pin: pin,
        otp: otp
      }));
    } else {
      _this2.setState({
        errors: errors
      });
    }
  };
};

LoginForm.propTypes = {
  title: _propTypes["default"].string,
  logo: _propTypes["default"].node,
  button: _propTypes["default"].node,
  onFieldChange: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  containerProps: _propTypes["default"].shape({
    container: _propTypes["default"].string,
    footer: _propTypes["default"].node
  })
};
LoginForm.defaultProps = {
  title: 'Autenticação',
  logo: _react["default"].createElement(_LoginForm.Logo, null),
  button: _react["default"].createElement(_LoginForm.Button, {
    type: "submit"
  }, "Entrar"),
  containerProps: {
    container: undefined,
    footer: undefined
  },
  onFieldChange: function onFieldChange() {},
  onSubmit: function onSubmit() {}
};
var _default = LoginForm;
exports["default"] = _default;