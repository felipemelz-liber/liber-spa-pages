"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _styles = require("./styles");

var _DialogStyles = require("../DialogStyles");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var isClosed = function isClosed(open, transition) {
  return !open && !transition;
};

var isOpen = function isOpen(open, transition) {
  return open && !transition;
};

var isOpenning = function isOpenning(open, transition) {
  return open && transition;
};

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this));

    _this.handleTransitionEnd = function () {
      var check = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return function () {
        _this.openCloseTimeout = setTimeout(function () {
          if (check) {
            _this.setState({
              transition: false
            });
          }
        }, 2 * _this.props.duration);
      };
    };

    _this.getCardTransitionStyle = function (duration, position, animation, animateFrom) {
      var _ref;

      var positioning = position ? (_ref = {
        position: 'absolute'
      }, _defineProperty(_ref, position.fromY || 'top', "".concat(position.y, "px")), _defineProperty(_ref, position.fromX || 'left', "".concat(position.x, "px")), _ref) : {};
      return {
        entering: _objectSpread({
          opacity: 0,
          transform: "translateY(".concat(animateFrom, ")")
        }, positioning),
        entered: _objectSpread({
          opacity: 1,
          transform: 'translateY(0px)',
          transition: "all ".concat(duration, "ms ").concat(animation["in"])
        }, positioning),
        exiting: _objectSpread({
          opacity: 0,
          transform: "translateY(".concat(animateFrom, ")"),
          transition: "all ".concat(duration, "ms ").concat(animation.out)
        }, positioning),
        exited: _objectSpread({
          opacity: 0
        }, positioning)
      };
    };

    _this.handleEnterModal = function () {
      var onAppearStart = _this.props.onAppearStart;
      onAppearStart();
      _this.pos = (0, _utils.hideScrollBar)(document.body);
    };

    _this.handleLeaveModal = function () {
      var onLeaved = _this.props.onLeaved;
      onLeaved();
      (0, _utils.showScrollBar)(document.body, _this.pos);
    };

    _this.close = function () {
      _this.setState({
        open: false,
        transition: true
      }, _this.handleTransitionEnd());
    };

    _this.bgTransition = function (state) {
      var _this$props = _this.props,
          closable = _this$props.closable,
          duration = _this$props.duration;

      if (closable) {
        return _react["default"].createElement(_DialogStyles.Bg, {
          onClick: _this.close,
          style: (0, _utils.getBgTransitionStyle)(duration)[state]
        });
      }

      return _react["default"].createElement(_DialogStyles.Bg, {
        style: (0, _utils.getBgTransitionStyle)(duration)[state]
      });
    };

    _this.parseAnimation = function (animation) {
      if (!animation["in"] || !animation.out) {
        return {
          "in": animation,
          out: animation
        };
      }

      return animation;
    };

    _this.cardTransition = function (state) {
      var _this$props2 = _this.props,
          duration = _this$props2.duration,
          children = _this$props2.children,
          closeButton = _this$props2.closeButton,
          label = _this$props2.label,
          labelAlign = _this$props2.labelAlign,
          overflow = _this$props2.overflow,
          closeButtonPadding = _this$props2.closeButtonPadding,
          position = _this$props2.position,
          animation = _this$props2.animation,
          animateFrom = _this$props2.animateFrom,
          cardRef = _this$props2.cardRef,
          fullscreen = _this$props2.fullscreen;
      return _react["default"].createElement(_styles.Card, {
        fullscreen: fullscreen,
        ref: cardRef,
        style: _this.getCardTransitionStyle(duration, position, _this.parseAnimation(animation), animateFrom)[state],
        overflow: overflow
      }, label ? _react["default"].createElement(_styles.CardHeader, {
        labelAlign: labelAlign
      }, label) : null, closeButton ? _react["default"].createElement(_styles.CloseButton, {
        closeButtonPadding: closeButtonPadding,
        onClick: _this.close
      }, _react["default"].createElement(_styles.CloseIcon, null)) : null, children);
    };

    _this.handleEntered = function () {
      var onAppeared = _this.props.onAppeared;

      _this.setState(function (state) {
        if (isOpenning(state.open, state.transition) && !state.lastShow) {
          return {
            open: false
          };
        }

        return {
          transition: false
        };
      }, onAppeared);
    };

    if (props.show) {
      _this.pos = (0, _utils.hideScrollBar)(document.body);
    }

    _this.state = {
      lastShow: props.show,
      open: props.show,
      // either open or closed
      transition: false // oppening or closing

    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state = this.state,
          transition = _this$state.transition,
          open = _this$state.open;

      if (transition === true && open === false) {
        this.handleTransitionEnd(this.mounted)();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      clearTimeout(this.openCloseTimeout);
      (0, _utils.showScrollBar)(document.body, this.pos);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          duration = _this$props3.duration,
          onLeaveStart = _this$props3.onLeaveStart,
          elementId = _this$props3.elementId,
          insertComponent = _this$props3.insertComponent;
      var _this$state2 = this.state,
          open = _this$state2.open,
          transition = _this$state2.transition;
      var transitionSharedProps = {
        mountOnEnter: true,
        unmountOnExit: true,
        "in": open
      };
      return _reactDom["default"].createPortal(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DialogStyles.DialogContainer, {
        show: open || transition
      }, _react["default"].createElement(_reactTransitionGroup.Transition, _extends({}, transitionSharedProps, {
        timeout: {
          enter: duration,
          exit: 2 * duration
        }
      }), this.bgTransition), insertComponent, _react["default"].createElement(_reactTransitionGroup.Transition, _extends({}, transitionSharedProps, {
        onEnter: this.handleEnterModal,
        onEntered: this.handleEntered,
        onExit: onLeaveStart,
        onExited: this.handleLeaveModal,
        timeout: {
          enter: 2 * duration,
          exit: duration
        }
      }), this.cardTransition)), _react["default"].createElement(_DialogStyles.Global, null)), document.getElementById(elementId));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      /* Fechado */
      if (isClosed(state.open, state.transition)) {
        if (props.show && props.show !== state.lastShow) {
          return {
            open: true,
            transition: true,
            lastShow: props.show
          };
        }
      }
      /* Aberto */


      if (isOpen(state.open, state.transition)) {
        if (!props.show && props.show !== state.lastShow) {
          return {
            open: false,
            transition: true,
            lastShow: props.show
          };
        }
      }

      return {
        lastShow: props.show
      };
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  duration: _propTypes["default"].number,
  label: _propTypes["default"].string,
  labelAlign: _propTypes["default"].string,
  closable: _propTypes["default"].bool,
  closeButton: _propTypes["default"].bool,
  closeButtonPadding: _propTypes["default"].string,
  show: _propTypes["default"].bool,
  onAppearStart: _propTypes["default"].func,
  onAppeared: _propTypes["default"].func,
  onLeaveStart: _propTypes["default"].func,
  onLeaved: _propTypes["default"].func,
  overflow: _propTypes["default"].string,
  elementId: _propTypes["default"].string,
  animation: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    "in": _propTypes["default"].string,
    out: _propTypes["default"].string
  })]),
  animateFrom: _propTypes["default"].string,
  position: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number,
    fromX: _propTypes["default"].string,
    fromY: _propTypes["default"].string
  }),
  // eslint-disable-next-line react/forbid-prop-types
  cardRef: _propTypes["default"].any,
  insertComponent: _propTypes["default"].element,
  fullscreen: _propTypes["default"].bool
};
Modal.defaultProps = {
  children: null,
  duration: _utils.defaultDuration,
  label: '',
  labelAlign: 'left',
  closable: true,
  closeButton: false,
  closeButtonPadding: '10px 14px',
  show: false,
  onAppearStart: function onAppearStart() {},
  onAppeared: function onAppeared() {},
  onLeaveStart: function onLeaveStart() {},
  onLeaved: function onLeaved() {},
  overflow: '',
  elementId: 'modal',
  position: null,
  animation: {
    "in": 'cubic-bezier(.17,1.92,.3,.71)',
    out: 'cubic-bezier(1,.23,.76,-1.11)'
  },
  animateFrom: '-150px',
  cardRef: undefined,
  insertComponent: null,
  fullscreen: false
};
var _default = Modal;
exports["default"] = _default;