"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toastsStory = exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ToastContainer = _interopRequireDefault(require("./components/ToastContainer"));

var _actions = require("./actions");

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Row = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Row",
  componentId: "sc-1qxse74-0"
})(["margin:12px;display:flex;justify-content:flex-start;align-items:center;color:#405f71;& > button,& > span{margin-right:12px !important;}"]);

var Header = _styledComponents["default"].h3.withConfig({
  displayName: "indexstories__Header",
  componentId: "sc-1qxse74-1"
})(["font-family:Roboto;font-size:16px;font-weight:500;line-height:22px;text-align:left;color:#405f71;margin:12px;"]);

var _default = {
  title: 'Components 2.0|Toast',
  parameters: {
    jest: ['Tag']
  }
};
exports["default"] = _default;

var toastsStory = function toastsStory() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      toasts = _useState2[0],
      setToasts = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      largerToast = _useState4[0],
      setLargerToast = _useState4[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Header, null, "B\xE1sico"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)('Conteúdo da informação', 'info', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)('Conteúdo da informação', 'success', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)('Conteúdo da informação', 'warning', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)('Conteúdo da informação', 'error', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)('Conteúdo da informação', null, 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Simple")), _react["default"].createElement(Header, null, "Com Informa\xE7\xE3o extra"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        info: 'Há 10 minutos'
      }, 'info', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        info: 'Há 10 minutos'
      }, 'success', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        info: 'Há 10 minutos'
      }, 'warning', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        info: 'Há 10 minutos'
      }, 'error', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        info: 'Há 10 minutos'
      }, null, 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Simple")), _react["default"].createElement(Header, null, "Com um conte\xFAdo grande"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        content: "Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Donec fringilla arcu ante,\n                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.\n                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.\n                 Donec sagittis tortor iaculis turpis luctus,\n                 sed condimentum nunc hendrerit.\n                 Praesent ac tellus a arcu vulputate pharetra."
      }, 'info', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        content: "Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Donec fringilla arcu ante,\n                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.\n                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.\n                 Donec sagittis tortor iaculis turpis luctus,\n                 sed condimentum nunc hendrerit.\n                 Praesent ac tellus a arcu vulputate pharetra."
      }, 'success', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        content: "Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Donec fringilla arcu ante,\n                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.\n                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.\n                 Donec sagittis tortor iaculis turpis luctus,\n                 sed condimentum nunc hendrerit.\n                 Praesent ac tellus a arcu vulputate pharetra."
      }, 'warning', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        content: "Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Donec fringilla arcu ante,\n                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.\n                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.\n                 Donec sagittis tortor iaculis turpis luctus,\n                 sed condimentum nunc hendrerit.\n                 Praesent ac tellus a arcu vulputate pharetra."
      }, 'error', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      var id = (0, _actions.toast)({
        message: 'Conteúdo da informação',
        content: "Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Donec fringilla arcu ante,\n                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.\n                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.\n                 Donec sagittis tortor iaculis turpis luctus,\n                 sed condimentum nunc hendrerit.\n                 Praesent ac tellus a arcu vulputate pharetra."
      }, null, 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Simple")), _react["default"].createElement(Header, null, "Com width setado manualmente"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(true);
      var id = (0, _actions.toast)({
        message: 'Ops.. Algumas assinaturas não foram realizadas!',
        content: 'Veja as assinaturas pendentes e tente novamente'
      }, 'info', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(true);
      var id = (0, _actions.toast)({
        message: 'Ops.. Algumas assinaturas não foram realizadas!',
        content: 'Veja as assinaturas pendentes e tente novamente'
      }, 'success', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(true);
      var id = (0, _actions.toast)({
        message: 'Ops.. Algumas assinaturas não foram realizadas!',
        content: 'Veja as assinaturas pendentes e tente novamente'
      }, 'warning', 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(true);
      var id = (0, _actions.toast)({
        message: 'Ops.. Algumas assinaturas não foram realizadas!',
        content: 'Veja as assinaturas pendentes e tente novamente'
      }, 'error', 800000, 'abcdefghijk', 900);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(true);
      var id = (0, _actions.toast)({
        message: 'Ops.. Algumas assinaturas não foram realizadas!',
        content: 'Veja as assinaturas pendentes e tente novamente'
      }, null, 8000);
      setToasts([].concat(_toConsumableArray(toasts), [id]));
    }
  }, "Simple")), _react["default"].createElement(Row, null, "Id do ultimo toast :\xA0", toasts[toasts.length - 1]), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.SecondaryButton, {
    version: "2",
    onClick: function onClick() {
      setLargerToast(false);
      toasts.forEach(function ($toast) {
        (0, _actions.dispel)($toast);
      });
      setToasts([]);
    }
  }, "Fechar Todas")), largerToast ? _react["default"].createElement(_ToastContainer["default"], {
    customWidth: 850
  }) : _react["default"].createElement(_ToastContainer["default"], null));
};

exports.toastsStory = toastsStory;
toastsStory.story = {
  name: 'toasts'
};