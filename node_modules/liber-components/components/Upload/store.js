"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _reducers = _interopRequireDefault(require("./reducers"));

var _sagas = _interopRequireDefault(require("./sagas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();

var _default = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(sagaMiddleware));

exports["default"] = _default;
sagaMiddleware.run(_sagas["default"]);