"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalTag = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.regexp.split");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalTag = require("./ModalTag.styles");

var _Dialog = require("../Dialog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var close = function close(callback) {
  return function () {
    callback(false);
  };
};

var toogle = function toogle(callback, current) {
  return function () {
    callback(!current);
  };
};

var isOutOfBoundsOnTop = function isOutOfBoundsOnTop(tagRect, modalRect, offset) {
  return tagRect.y - offset - modalRect.height < 0;
};

var isOutOfBoundsOnBottom = function isOutOfBoundsOnBottom(tagRect, modalRect, offset) {
  return tagRect.y + tagRect.height + offset + modalRect.height > window.innerHeight;
};

var isOutOfBoundsOnLeft = function isOutOfBoundsOnLeft(tagRect, modalRect) {
  return tagRect.x + tagRect.width - modalRect.width < 0;
};

var isOutOfBoundsOnRight = function isOutOfBoundsOnRight(tagRect, modalRect) {
  return tagRect.x + modalRect.width > window.innerWidth;
};

var getMountBasedOnViewport = function getMountBasedOnViewport(mount, tagRect, modalRect, offset, overflow) {
  var _mount$split = mount.split('-'),
      _mount$split2 = _slicedToArray(_mount$split, 2),
      verticalMount = _mount$split2[0],
      horizontalMount = _mount$split2[1];

  if (verticalMount === 'top' && isOutOfBoundsOnTop(tagRect, modalRect, offset)) {
    verticalMount = overflow === 'position' ? 'bottom' : 'center';
  }

  if (verticalMount === 'bottom' && isOutOfBoundsOnBottom(tagRect, modalRect, offset)) {
    verticalMount = overflow === 'position' ? 'top' : 'center';
  }

  if (horizontalMount === 'right' && isOutOfBoundsOnLeft(tagRect, modalRect)) {
    horizontalMount = overflow === 'position' ? 'left' : 'center';
  }

  if (horizontalMount === 'left' && isOutOfBoundsOnRight(tagRect, modalRect)) {
    horizontalMount = overflow === 'position' ? 'right' : 'center';
  }

  return [verticalMount, horizontalMount].join('-');
};

var getModalPosition = function getModalPosition(tag, mount, offset) {
  var tagRect = tag.getBoundingClientRect();
  return {
    'bottom-left': {
      x: tagRect.x,
      y: tagRect.y + tagRect.height + offset,
      fromX: 'left'
    },
    'bottom-right': {
      x: window.innerWidth - tagRect.x - tagRect.width,
      y: tagRect.y + tagRect.height + offset,
      fromX: 'right'
    },
    'top-left': {
      x: tagRect.x,
      y: window.innerHeight - tagRect.y + offset,
      fromX: 'left',
      fromY: 'bottom'
    },
    'top-right': {
      x: window.innerWidth - tagRect.x - tagRect.width,
      y: window.innerHeight - tagRect.y + offset,
      fromX: 'right',
      fromY: 'bottom'
    },
    'center-left': {
      x: tagRect.x,
      fromX: 'left'
    },
    'center-right': {
      x: window.innerWidth - tagRect.x - tagRect.width,
      fromX: 'right'
    },
    'bottom-center': {
      y: tagRect.y + tagRect.height + offset
    },
    'top-center': {
      y: window.innerHeight - tagRect.y + offset,
      fromY: 'bottom'
    },
    center: {}
  }[mount];
};

var getFloatingPosition = function getFloatingPosition(tag) {
  var rect = tag.getBoundingClientRect();
  return {
    x: rect.x,
    y: rect.y
  };
};

var closeTab = function closeTab(callback) {
  return function (event) {
    event.stopPropagation();
    callback(event);
  };
};

var ModalTag = function ModalTag(_ref) {
  var label = _ref.label,
      children = _ref.children,
      elementId = _ref.elementId,
      mount = _ref.mount,
      dialogOffset = _ref.dialogOffset,
      overflow = _ref.overflow,
      props = _objectWithoutProperties(_ref, ["label", "children", "elementId", "mount", "dialogOffset", "overflow"]);

  var tag = _react["default"].useRef(null);

  var modal = _react["default"].useRef(null);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stateShow = _React$useState2[0],
      changeStateShow = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(mount),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      viewportMount = _React$useState4[0],
      setViewportMount = _React$useState4[1];

  var _props$show = props.show,
      show = _props$show === void 0 ? stateShow : _props$show,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? changeStateShow : _props$onChange,
      closable = props.closable,
      onClose = props.onClose,
      className = props.className,
      tagProps = _objectWithoutProperties(props, ["show", "onChange", "closable", "onClose", "className"]);

  _react["default"].useEffect(function () {
    if (modal.current && tag.current) {
      var modalRect = modal.current.getBoundingClientRect();
      var tagRect = tag.current.getBoundingClientRect();
      var newMount = getMountBasedOnViewport(mount, tagRect, modalRect, dialogOffset, overflow);

      if (viewportMount !== newMount) {
        setViewportMount(newMount);
      }
    }
  }, [show]);

  var modalPosition = tag.current ? getModalPosition(tag.current, viewportMount, dialogOffset) : {};
  var floatPosition = tag.current ? getFloatingPosition(tag.current) : {};
  return _react["default"].createElement(_ModalTag.Container, null, _react["default"].createElement(_ModalTag.WhiteTag, _extends({}, tagProps, {
    ref: tag,
    onClick: toogle(onChange, show),
    closable: closable,
    onClose: closeTab(onClose),
    className: className
  }), label), _react["default"].createElement(_Dialog.Modal, {
    cardRef: modal,
    show: show,
    elementId: elementId,
    position: modalPosition,
    animation: "ease-in-out",
    animateFrom: "-16px",
    duration: 120,
    onLeaved: close(onChange),
    insertComponent: _react["default"].createElement(_ModalTag.FloatingTag, {
      className: className,
      closable: closable,
      position: floatPosition
    }, label)
  }, children));
};

exports.ModalTag = ModalTag;
ModalTag.propTypes = {
  show: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  elementId: _propTypes["default"].string,
  mount: _propTypes["default"].string,
  dialogOffset: _propTypes["default"].number,
  children: _propTypes["default"].element,
  closable: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  className: _propTypes["default"].string,
  rect: _propTypes["default"].objectOf(_propTypes["default"].any),
  overflow: _propTypes["default"].oneOf(['center', 'position'])
};
ModalTag.defaultProps = {
  label: '',
  elementId: 'modal',
  mount: 'bottom-left',
  dialogOffset: 16,
  children: '',
  show: undefined,
  closable: false,
  onChange: undefined,
  className: undefined,
  rect: null,
  onClose: function onClose() {},
  overflow: 'position'
};
var _default = ModalTag;
exports["default"] = _default;