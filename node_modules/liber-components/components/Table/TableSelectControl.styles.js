'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeselectIndicator = exports.Currency = exports.TotalSelectedTitles = exports.SelectedTitles = exports.Container = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require('../Icons');

var _Themes = require('../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'TableSelectControlstyles__Container',
  componentId: 'sc-16utq8u-0'
})(['width:100%;max-height:320px;display:flex;flex-direction:row;']);

var selectedColors = function selectedColors() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'empty';
  return {
    single: (0, _styledComponents.css)(['border:1px solid ', ';color:', ';', ':hover &{color:', ';border-color:', ';}'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
    }, Container, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkPetroleum', '#3C596B');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkPetroleum', '#3C596B');
    }),
    multiple: (0, _styledComponents.css)(['border:1px solid ', ';color:', ';', ':hover &{color:', ';border-color:', ';}'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.yellow', '#fabe00');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.yellow', '#fabe00');
    }, Container, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkYellow', '#F0B600');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkYellow', '#F0B600');
    }),
    empty: (0, _styledComponents.css)(['border:1px solid ', ';color:', ';'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey3', '#c6d1d8');
    })
  }[type];
};

var SelectedTitles = exports.SelectedTitles = _styledComponents2.default.div.withConfig({
  displayName: 'TableSelectControlstyles__SelectedTitles',
  componentId: 'sc-16utq8u-1'
})(['', ' font-size:', ';font-family:', ';padding:0 12px;border-radius:4px 0px 0px 4px;height:36px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;white-space:nowrap;transition:all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;'], function (props) {
  return selectedColors(props.type);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px;');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var totalSelectedColors = function totalSelectedColors() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'empty';
  return {
    single: (0, _styledComponents.css)(['border:1px solid ', ';color:', ';background-color:', ';', ':hover &{background-color:', ';border-color:', ';}'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
    }, Container, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkPetroleum', '#3C596B');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkPetroleum', '#3C596B');
    }),
    multiple: (0, _styledComponents.css)(['border:1px solid ', ';color:', ';background-color:', ';', ':hover &{background-color:', ';border-color:', ';}'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.yellow', '#fabe00');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.yellow', '#fabe00');
    }, Container, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkYellow', '#F0B600');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkYellow', '#F0B600');
    }),
    empty: (0, _styledComponents.css)(['border:1px solid ', ';color:', ';background-color:', ';pointer-events:none;'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey5', '#ecf0f3');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey3', '#c6d1d8');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey5', '#ecf0f3');
    })
  }[type];
};

var TotalSelectedTitles = exports.TotalSelectedTitles = _styledComponents2.default.button.withConfig({
  displayName: 'TableSelectControlstyles__TotalSelectedTitles',
  componentId: 'sc-16utq8u-2'
})(['', ' font-size:', ';font-family:', ';font-weight:', ';padding:0px 12px 0px 11px;display:flex;justify-content:flex-start;align-items:baseline;border-radius:0px 4px 4px 0px;transition:all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;white-space:nowrap;'], function (props) {
  return totalSelectedColors(props.type);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px;');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
});

var colorsCurrency = function colorsCurrency() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'empty';
  return {
    single: (0, _styledComponents.css)(['color:', ';'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
    }),
    multiple: (0, _styledComponents.css)(['color:', ';'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
    }),
    empty: (0, _styledComponents.css)(['color:', ';'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey3', '#c6d1d8');
    })
  }[type];
};

var Currency = exports.Currency = _styledComponents2.default.div.withConfig({
  displayName: 'TableSelectControlstyles__Currency',
  componentId: 'sc-16utq8u-3'
})(['', ' font-size:', ';font-family:', ';display:flex;flex-direction:column;justify-content:center;margin-right:4px;'], function (props) {
  return colorsCurrency(props.type);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px;');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var deselectColors = function deselectColors() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'empty';
  return {
    single: (0, _styledComponents.css)(['--x-color:', ';', ':hover &{--x-color:', ';}'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
    }, Container, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkPetroleum', '#3C596B');
    }),
    multiple: (0, _styledComponents.css)(['--x-color:', ';', ':hover &{--x-color:', ';}'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.yellow', '#fabe00');
    }, Container, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.darkYellow', '#F0B600');
    }),
    empty: (0, _styledComponents.css)(['--x-color:', ';'], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey5', '#ecf0f3');
    })
  }[type];
};

var Close = (0, _styledComponents2.default)(_Icons.MdClose).withConfig({
  displayName: 'TableSelectControlstyles__Close',
  componentId: 'sc-16utq8u-4'
})(['--size:16px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:var(--x-color);transition:fill 250ms cubic-bezier(0.23,1,0.32,1) 0ms;']);

var DeselectIndicator = exports.DeselectIndicator = _styledComponents2.default.span.withConfig({
  displayName: 'TableSelectControlstyles__DeselectIndicator',
  componentId: 'sc-16utq8u-5'
})(['', ' border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,0.12);background-color:#ffffff;margin-left:10px;border:0px;width:20px;height:20px;display:flex;justify-content:center;align-items:center;'], function (props) {
  return deselectColors(props.type);
});

DeselectIndicator.defaultProps = {
  children: _react2.default.createElement(Close, null)
};