'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOptionList = exports.SelectLabel = exports.SelectItem = exports.SearchableOptionList = exports.OptionList = exports.SelectBox = undefined;

var _templateObject = _taggedTemplateLiteral(['transition: all 300ms ease;'], ['transition: all 300ms ease;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactVirtualized = require('react-virtualized');

var _Themes = require('../../Themes');

var _css = require('../../Util/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectBox = exports.SelectBox = _styledComponents2.default.div.withConfig({
  displayName: 'styles__SelectBox',
  componentId: 'sc-14s38bp-0'
})(['cursor:pointer;width:100%;padding:8px 0px;border-bottom:2px solid ', ' !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&:focus{outline:0;}&::-moz-focus-inner{border:0;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.inactive', '#e6e6e6');
});

var itemHeight = 35;

var OptionList = exports.OptionList = (0, _styledComponents2.default)(_reactVirtualized.List).withConfig({
  displayName: 'styles__OptionList',
  componentId: 'sc-14s38bp-1'
})(['position:absolute;top:0px;left:0px;width:100%;background-color:#fafafa !important;box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);z-index:5;padding:0px;margin:0px;list-style-type:none;overflow-y:auto;user-select:none;transform-origin:top;', ' ', ' &:focus{outline:0;}&::-moz-focus-inner{border:0;}'], (0, _css.disableOnTest)(_templateObject), function (props) {
  return props.open ? (0, _styledComponents.css)(['opacity:1;transform:scaleY(1);']) : (0, _styledComponents.css)(['opacity:0;transform:scaleY(0);']);
});

var SearchableOptionList = exports.SearchableOptionList = (0, _styledComponents2.default)(OptionList).withConfig({
  displayName: 'styles__SearchableOptionList',
  componentId: 'sc-14s38bp-2'
})(['top:42px;']);

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

var SelectItem = exports.SelectItem = _styledComponents2.default.div.withConfig({
  displayName: 'styles__SelectItem',
  componentId: 'sc-14s38bp-3'
})(['line-height:', 'px;text-align:left;padding:8px 10px;box-sizing:border-box;vertical-align:middle;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:', ';user-select:none;font-weight:500;pointer-events:', ';& div{color:', ' !important;& > span{color:', ';}}'], itemHeight * 2 / 3, function (props) {
  return getSelectItemBackgroundColor(props.theme, props.selected, props.focused);
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return getSelectItemColor(props.theme, props.selected, props.focused, props.disabled);
}, function (props) {
  return getSelectItemHighlightColor(props.theme, props.focused, '#009dff');
});

var SelectLabel = exports.SelectLabel = (0, _styledComponents2.default)(SelectItem).withConfig({
  displayName: 'styles__SelectLabel',
  componentId: 'sc-14s38bp-4'
})(['background-color:', ';'], function (props) {
  return getSelectLabelBackgroundColor(props.theme, props.selected, props.focused);
});

var SelectOptionList = exports.SelectOptionList = function SelectOptionList(_ref) {
  var id = _ref.id,
      children = _ref.children,
      optionLabel = _ref.optionLabel,
      itemFocused = _ref.itemFocused,
      rowRenderer = _ref.rowRenderer,
      searchable = _ref.searchable,
      isOpen = _ref.isOpen;

  var ListComponent = searchable ? SearchableOptionList : OptionList;
  return _react2.default.createElement(
    _reactVirtualized.AutoSizer,
    null,
    function (_ref2) {
      var width = _ref2.width;
      return _react2.default.createElement(ListComponent, {
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
    }
  );
};

SelectOptionList.propTypes = {
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.any]),
  rowRenderer: _propTypes2.default.func.isRequired,
  optionLabel: _propTypes2.default.string,
  itemFocused: _propTypes2.default.number,
  searchable: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool
};

SelectOptionList.defaultProps = {
  children: [],
  optionLabel: '',
  itemFocused: -1,
  searchable: false,
  isOpen: false
};