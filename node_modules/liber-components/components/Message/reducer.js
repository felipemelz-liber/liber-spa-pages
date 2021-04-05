"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.filter");

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = (0, _seamlessImmutable["default"])({
  messages: []
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.merge({
        messages: [].concat(_toConsumableArray(state.messages), [action.payload])
      });

    case 'REMOVE_MESSAGE':
      return state.merge({
        messages: state.messages.filter(function (msg) {
          return msg.id !== action.payload;
        })
      });

    case 'CLOSE_MESSAGE':
      {
        var index;

        if (action.payload) {
          index = state.messages.findIndex(function (toast) {
            return toast.id === action.payload;
          });
        } else {
          index = state.messages.length - 1;
        }

        var dispel = state.messages[index].set('show', false);
        return state.merge({
          messages: state.messages.setIn([index], dispel)
        });
      }

    default:
      return state;
  }
};

exports["default"] = _default;