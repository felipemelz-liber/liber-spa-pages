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

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

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

var Drawer =
/*#__PURE__*/
function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer(props) {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drawer).call(this));

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

    _this.getTranslateFunctions = function (pos, size, fit) {
      var width;
      var height;

      switch (pos) {
        case 'right':
          width = fit ? '100vw' : "".concat(size, "px");
          return {
            closed: "translateX(".concat(width, ")"),
            openned: 'translateX(0px)'
          };

        case 'top':
          height = fit ? '100vh' : "".concat(size, "px");
          return {
            closed: "translateY(-".concat(height, ")"),
            openned: 'translateY(0px)'
          };

        case 'bottom':
          height = fit ? '100vh' : "".concat(size, "px");
          return {
            closed: "translateY(".concat(height, ")"),
            openned: 'translateY(0px)'
          };

        case 'left':
        default:
          width = fit ? '100vw' : "".concat(size, "px");
          return {
            closed: "translateX(-".concat(width, ")"),
            openned: 'translateX(0px)'
          };
      }
    };

    _this.getContentTransitionStyle = function (duration, position, size, fitScreen) {
      var _this$getTranslateFun = _this.getTranslateFunctions(position, size, fitScreen),
          closed = _this$getTranslateFun.closed,
          openned = _this$getTranslateFun.openned;

      return {
        entering: {
          opacity: 0,
          transform: closed
        },
        entered: {
          opacity: 1,
          transform: openned,
          transition: "all ".concat(duration, "ms cubic-bezier(0, 0, 0.2, 1)")
        },
        exiting: {
          opacity: 0,
          transform: closed,
          transition: "all ".concat(duration, "ms cubic-bezier(0.4, 0, 0.2, 1)")
        },
        exited: {
          opacity: 0
        }
      };
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

    _this.handleEnterDrawer = function () {
      var _this$props = _this.props,
          onAppearStart = _this$props.onAppearStart,
          blockNavigation = _this$props.blockNavigation;
      onAppearStart();
      if (blockNavigation) _this.pos = (0, _utils.hideScrollBar)(document.body);
    };

    _this.handleLeaveDrawer = function () {
      var _this$props2 = _this.props,
          onLeaved = _this$props2.onLeaved,
          blockNavigation = _this$props2.blockNavigation;
      onLeaved();
      if (blockNavigation) (0, _utils.showScrollBar)(document.body, _this.pos);
    };

    _this.close = function () {
      _this.setState({
        open: false,
        transition: true
      }, _this.handleTransitionEnd());
    };

    _this.bgTransition = function (state) {
      var _this$props3 = _this.props,
          closable = _this$props3.closable,
          duration = _this$props3.duration;

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

    _this.ContentTransition = function (state) {
      var _this$props4 = _this.props,
          duration = _this$props4.duration,
          children = _this$props4.children,
          size = _this$props4.size,
          position = _this$props4.position,
          fitScreen = _this$props4.fitScreen,
          drawerSize = _this$props4.drawerSize;
      return _react["default"].createElement(_styles.Content, {
        size: size,
        position: position,
        fitScreen: fitScreen,
        drawerSize: drawerSize,
        style: _this.getContentTransitionStyle(duration, position, size, fitScreen)[state]
      }, children);
    };

    if (props.show && props.blockNavigation) {
      _this.pos = (0, _utils.hideScrollBar)(document.body);
    }

    _this.state = {
      open: props.show,
      lastShow: props.show,
      transition: false
    };
    return _this;
  }

  _createClass(Drawer, [{
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
      var blockNavigation = this.props.blockNavigation;
      this.mounted = false;
      clearTimeout(this.openCloseTimeout);
      if (blockNavigation) (0, _utils.showScrollBar)(document.body, this.pos);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          duration = _this$props5.duration,
          onLeaveStart = _this$props5.onLeaveStart,
          elementId = _this$props5.elementId,
          blockNavigation = _this$props5.blockNavigation;
      var _this$state2 = this.state,
          open = _this$state2.open,
          transition = _this$state2.transition;
      var transitionSharedProps = {
        mountOnEnter: true,
        unmountOnExit: true,
        "in": open
      };
      return _reactDom["default"].createPortal(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DialogStyles.DialogContainer, {
        show: open || transition,
        blockNavigation: blockNavigation
      }, blockNavigation ? _react["default"].createElement(_reactTransitionGroup.Transition, _extends({}, transitionSharedProps, {
        timeout: {
          enter: duration,
          exit: 2 * duration
        }
      }), this.bgTransition) : null, _react["default"].createElement(_reactTransitionGroup.Transition, _extends({}, transitionSharedProps, {
        onEnter: this.handleEnterDrawer,
        onEntered: this.handleEntered,
        onExit: onLeaveStart,
        onExited: this.handleLeaveDrawer,
        timeout: {
          enter: 2 * duration,
          exit: duration
        }
      }), this.ContentTransition)), _react["default"].createElement(_DialogStyles.Global, null)), document.getElementById(elementId));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var open = state.open,
          transition = state.transition,
          lastShow = state.lastShow;
      var show = props.show;
      /* Fechado */

      if (isClosed(open, transition)) {
        if (show && show !== lastShow) {
          return {
            open: true,
            transition: true,
            lastShow: show
          };
        }
      }
      /* Aberto */


      if (isOpen(open, transition)) {
        if (!show && show !== lastShow) {
          return {
            open: false,
            transition: true,
            lastShow: show
          };
        }
      }

      return {
        lastShow: show
      };
    }
  }]);

  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].any)]),
  position: _propTypes["default"].oneOf(['right', 'left', 'top', 'bottom']),
  size: _propTypes["default"].number,
  fitScreen: _propTypes["default"].bool,
  duration: _propTypes["default"].number,
  closable: _propTypes["default"].bool,
  show: _propTypes["default"].bool,
  onAppearStart: _propTypes["default"].func,
  onAppeared: _propTypes["default"].func,
  onLeaveStart: _propTypes["default"].func,
  onLeaved: _propTypes["default"].func,
  elementId: _propTypes["default"].string,
  blockNavigation: _propTypes["default"].bool,
  drawerSize: _propTypes["default"].number
};
Drawer.defaultProps = {
  children: null,
  duration: _utils.defaultDuration,
  size: 250,
  fitScreen: false,
  position: 'left',
  closable: true,
  show: false,
  onAppearStart: function onAppearStart() {},
  onAppeared: function onAppeared() {},
  onLeaveStart: function onLeaveStart() {},
  onLeaved: function onLeaved() {},
  elementId: 'modal',
  blockNavigation: true,
  drawerSize: null
};
var _default = Drawer;
exports["default"] = _default;