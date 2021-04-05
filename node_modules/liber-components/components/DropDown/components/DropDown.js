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

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _ClickOutside = _interopRequireDefault(require("../../Util/ClickOutside"));

var _styles = require("./styles");

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

var labelLookUp = function labelLookUp(value, children) {
  var label = null;

  _react["default"].Children.toArray(children).forEach(function (child) {
    if (child.props.value === value || child.props.children === value) {
      label = child.props.children;
    }
  });

  return label;
};

var DropDown =
/*#__PURE__*/
function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown(props) {
    var _this;

    _classCallCheck(this, DropDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).call(this));

    _initialiseProps.call(_assertThisInitialized(_this));

    var children = props.children,
        defaultValue = props.defaultValue;
    var value;
    var label;

    if (defaultValue) {
      value = defaultValue;
      label = labelLookUp(value, children);
    } else {
      value = children[0].props.value || children[0].props.children;
      label = children[0].props.children;
    }

    _this.state = {
      open: false,
      label: label
    };
    return _this;
  }

  _createClass(DropDown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          position = _this$props.position;
      var _this$state = this.state,
          label = _this$state.label,
          open = _this$state.open;
      var clones = children.map(function (child) {
        var childLabel = child.props.children;
        var value = child.props.value || childLabel;
        var action = child.props.hasAction || false;
        return (0, _react.cloneElement)(child, {
          key: childLabel,
          selected: childLabel === label,
          onClick: child.props.disabled || childLabel === label && !action ? null : function () {
            _this2.handleSelectOption(childLabel, value);
          }
        });
      });
      var opacity = {
        entering: '0',
        entered: '1'
      };
      var scaleY = {
        entering: '0.7',
        entered: '1'
      };
      return _react["default"].createElement(_styles.Box, null, _react["default"].createElement(_styles.Button, {
        onMouseDown: this.handleOpenClose
      }, this.state.label), _react["default"].createElement("div", null, _react["default"].createElement(_reactTransitionGroup.Transition, {
        mountOnEnter: true,
        unmountOnExit: true,
        "in": open,
        timeout: 100
      }, function (state) {
        return _react["default"].createElement(_ClickOutside["default"], {
          onOutsideClick: function onOutsideClick() {
            _this2.setState({
              open: false
            });
          }
        }, _react["default"].createElement(_styles.List, {
          opacity: opacity[state],
          scaleY: scaleY[state],
          position: position
        }, _this2.props.label ? _react["default"].createElement(_styles.Label, null, _this2.props.label) : null, clones));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var value = props.value,
          children = props.children;
      var lastValue = state.lastValue;

      if (value && value !== lastValue) {
        return {
          label: labelLookUp(value, children)
        };
      }

      return {};
    }
  }]);

  return DropDown;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.labelLookUp = function (value, children) {
    var label = null;

    _react["default"].Children.toArray(children).forEach(function (child) {
      if (child.props.value === value || child.props.children === value) {
        label = child.props.children;
      }
    });

    return label;
  };

  this.handleSelectOption = function (label, value) {
    _this3.setState({
      label: label,
      open: false
    }, function () {
      _this3.props.onSelect(value);
    });
  };

  this.handleOpenClose = function () {
    _this3.setState(function (state) {
      return {
        open: !state.open
      };
    });
  };
};

DropDown.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  label: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  position: _propTypes["default"].string,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
DropDown.defaultProps = {
  label: undefined,
  onSelect: function onSelect() {},
  defaultValue: null,
  value: null,
  position: null
};
var _default = DropDown;
exports["default"] = _default;