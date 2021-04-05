"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOptionList = exports.SelectLabel = exports.SelectItem = exports.SearchableOptionList = exports.OptionList = exports.SelectBox = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactVirtualized = require("react-virtualized");

var _Themes = require("../../../Themes");

var _css = require("../../../Util/css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["transition: all 300ms ease;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectBox = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__SelectBox",
  componentId: "sc-1fxzu3t-0"
})(["cursor:pointer;width:100%;padding:8px 0px;border-bottom:2px solid ", " !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&:focus{outline:0;}&::-moz-focus-inner{border:0;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.inactive', '#e6e6e6');
});

exports.SelectBox = SelectBox;
var itemHeight = 35;
var OptionList = (0, _styledComponents["default"])(_reactVirtualized.List).withConfig({
  displayName: "SelectFieldstyles__OptionList",
  componentId: "sc-1fxzu3t-1"
})(["position:absolute;top:0px;left:0px;width:100%;background-color:#fafafa !important;box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);z-index:5;padding:0px;margin:0px;list-style-type:none;overflow-y:auto;user-select:none;transform-origin:top;", " ", " &:focus{outline:0;}&::-moz-focus-inner{border:0;}"], (0, _css.disableOnTest)(_templateObject()), function (props) {
  return props.open ? (0, _styledComponents.css)(["opacity:1;transform:scaleY(1);"]) : (0, _styledComponents.css)(["opacity:0;transform:scaleY(0);"]);
});
exports.OptionList = OptionList;
var SearchableOptionList = (0, _styledComponents["default"])(OptionList).withConfig({
  displayName: "SelectFieldstyles__SearchableOptionList",
  componentId: "sc-1fxzu3t-2"
})(["top:42px;"]);
exports.SearchableOptionList = SearchableOptionList;

var getSelectItemBackgroundColor = function getSelectItemBackgroundColor(theme, selected, focused) {
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'fields.select.focused', '#009DFF');
  if (selected) return (0, _Themes.handleThemeFromObject)(theme, 'fields.select.selected', '#e6e6e6');
  return (0, _Themes.handleThemeFromObject)(theme, 'fields.select.default', '#fafafa');
};

var getSelectItemColor = function getSelectItemColor(theme, selected, focused, disabled) {
  if (disabled) return (0, _Themes.handleThemeFromObject)(theme, 'fields.disabled', (0, _Themes.hexToRgb)('#a4a4a4', '0.3'));
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'fields.hover', '#ffffff');
  if (selected) return (0, _Themes.handleThemeFromObject)(theme, 'fields.primary', '#009DFF');
  return (0, _Themes.handleThemeFromObject)(theme, 'fields.secondary', '#a4a4a4');
};

var getSelectItemHighlightColor = function getSelectItemHighlightColor(theme, focused) {
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'fields.hover', '#ffffff');
  return (0, _Themes.handleThemeFromObject)(theme, 'fields.primary', '#009DFF');
};

var getSelectLabelBackgroundColor = function getSelectLabelBackgroundColor(theme, selected, focused) {
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'fields.select.focused', '#009DFF');
  if (selected) return (0, _Themes.handleThemeFromObject)(theme, 'fields.select.selected', '#e6e6e6');
  return (0, _Themes.handleThemeFromObject)(theme, 'fields.select.label.background', '#e6e6e6');
};

var SelectItem = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__SelectItem",
  componentId: "sc-1fxzu3t-3"
})(["line-height:", "px;text-align:left;padding:8px 10px;box-sizing:border-box;vertical-align:middle;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:", ";user-select:none;font-weight:500;pointer-events:", ";& div{color:", " !important;& > span{color:", ";}}"], itemHeight * 2 / 3, function (props) {
  return getSelectItemBackgroundColor(props.theme, props.selected, props.focused);
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return getSelectItemColor(props.theme, props.selected, props.focused, props.disabled);
}, function (props) {
  return getSelectItemHighlightColor(props.theme, props.focused, '#009dff');
});

exports.SelectItem = SelectItem;
var SelectLabel = (0, _styledComponents["default"])(SelectItem).withConfig({
  displayName: "SelectFieldstyles__SelectLabel",
  componentId: "sc-1fxzu3t-4"
})(["background-color:", ";"], function (props) {
  return getSelectLabelBackgroundColor(props.theme, props.selected, props.focused);
});
exports.SelectLabel = SelectLabel;

var SelectOptionList = function SelectOptionList(_ref) {
  var id = _ref.id,
      children = _ref.children,
      optionLabel = _ref.optionLabel,
      itemFocused = _ref.itemFocused,
      rowRenderer = _ref.rowRenderer,
      searchable = _ref.searchable,
      isOpen = _ref.isOpen;
  var ListComponent = searchable ? SearchableOptionList : OptionList;
  return _react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref2) {
    var width = _ref2.width;
    return _react["default"].createElement(ListComponent, {
      id: id,
      list: children,
      optionLabel: optionLabel,
      itemFocused: itemFocused,
      width: width || 300,
      height: children.length < 5 ? children.length * itemHeight : 5 * itemHeight,
      rowCount: children.length,
      rowHeight: itemHeight,
      rowRenderer: rowRenderer,
      scrollToIndex: itemFocused,
      open: isOpen,
      tabIndex: -1
    });
  });
};

exports.SelectOptionList = SelectOptionList;
SelectOptionList.propTypes = {
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  rowRenderer: _propTypes["default"].func.isRequired,
  optionLabel: _propTypes["default"].string,
  itemFocused: _propTypes["default"].number,
  searchable: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool
};
SelectOptionList.defaultProps = {
  children: [],
  optionLabel: '',
  itemFocused: -1,
  searchable: false,
  isOpen: false
};