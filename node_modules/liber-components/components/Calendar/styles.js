'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekNav = exports.WeekCellLink = exports.WeekCell = exports.WeekDayValue = exports.WeekBody = exports.NavButton = exports.Right = exports.Left = exports.CalendarBody = exports.Cell = exports.FilterLabel = exports.FiltersBox = exports.FilterRow = exports.Row = exports.Week = exports.Month = exports.WeekDay = exports.DayLink = exports.Day = exports.Tooltip = exports.DataContainer = exports.FloatingDots = exports.BiggerDot = exports.Dot = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    left: ', ';\n  '], ['\n    left: ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 11px;\n  '], ['\n    font-size: 11px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 65px;\n    font-size: 13px;\n  '], ['\n    width: 65px;\n    font-size: 13px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 18px;\n    width: 36px;\n    height: 36px;\n  '], ['\n    font-size: 18px;\n    width: 36px;\n    height: 36px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 20px;\n    width: 40px;\n    height: 40px;\n  '], ['\n    font-size: 20px;\n    width: 40px;\n    height: 40px;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    width: 35.1px;\n    font-size: ', ';\n  '], ['\n    width: 35.1px;\n    font-size: ', ';\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    width: 54.1px;\n    font-size: ', ';\n  '], ['\n    width: 54.1px;\n    font-size: ', ';\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    width: 260px;\n    flex-grow: 0;\n  '], ['\n    width: 260px;\n    flex-grow: 0;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    width: 250px;\n    flex-grow: 0;\n  '], ['\n    width: 250px;\n    flex-grow: 0;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    min-height: 40px;\n    max-height: 40px;\n  '], ['\n    min-height: 40px;\n    max-height: 40px;\n  ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    min-height: 43px;\n    max-height: 43px;\n  '], ['\n    min-height: 43px;\n    max-height: 43px;\n  ']),
    _templateObject12 = _taggedTemplateLiteral(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']),
    _templateObject13 = _taggedTemplateLiteral(['\n    font-size: 14px;\n    flex-wrap: nowrap;\n    & > * {\n      margin-bottom: 0px !important;\n    }\n  '], ['\n    font-size: 14px;\n    flex-wrap: nowrap;\n    & > * {\n      margin-bottom: 0px !important;\n    }\n  ']),
    _templateObject14 = _taggedTemplateLiteral(['\n    margin: 0 15px;\n  '], ['\n    margin: 0 15px;\n  ']),
    _templateObject15 = _taggedTemplateLiteral(['\n    margin: 0 10px;\n  '], ['\n    margin: 0 10px;\n  ']),
    _templateObject16 = _taggedTemplateLiteral(['\n    font-size: 20px;\n  '], ['\n    font-size: 20px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../Themes');

var _Card = require('../Card');

var _Icons = require('../Icons');

var _Buttons = require('../Buttons');

var _Util = require('../Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dot = exports.Dot = _styledComponents2.default.span.withConfig({
  displayName: 'styles__Dot',
  componentId: 'sc-1rl2k1l-0'
})(['width:6px;height:6px;background-color:', ';box-shadow:0 2px 4px 0 rgba(0,0,0,0.12);display:inline-block;border-radius:3px;margin-right:8px;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.dot', '#cecece', props.color);
});

var BiggerDot = exports.BiggerDot = (0, _styledComponents2.default)(Dot).withConfig({
  displayName: 'styles__BiggerDot',
  componentId: 'sc-1rl2k1l-1'
})(['width:unset;height:18px;width:unset;min-width:18px;border-radius:9px;display:inline-flex;justify-content:center;align-items:center;font-size:14px;color:', ';margin-right:0px;margin-bottom:5px;font-weight:bold;padding:0 5px;overflow:hidden;box-sizing:border-box;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.biggerDot', '#fff');
});

var FloatingDots = exports.FloatingDots = _styledComponents2.default.div.withConfig({
  displayName: 'styles__FloatingDots',
  componentId: 'sc-1rl2k1l-2'
})(['position:absolute;top:4px;left:', ';width:18px;display:flex;overflow:hidden;flex-wrap:wrap;& ', '{margin-bottom:2px;margin-right:2px;}', ' ', ' ', ' ', ''], function (props) {
  return props.today ? '32px' : '27px';
}, Dot, _Util.media.small(_templateObject, function (props) {
  return props.today ? '36px' : '31px';
}), _Util.media.medium(_templateObject, function (props) {
  return props.today ? '36px' : '31px';
}), _Util.media.large(_templateObject, function (props) {
  return props.today ? '40px' : '35px';
}), _Util.media.extraLarge(_templateObject, function (props) {
  return props.today ? '40px' : '35px';
}));

var DataContainer = exports.DataContainer = _styledComponents2.default.div.withConfig({
  displayName: 'styles__DataContainer',
  componentId: 'sc-1rl2k1l-3'
})(['display:flex;flex-direction:column;justify-content:flex-start;align-items:center;font-family:inherit;font-size:11px;text-align:center;color:', ';text-transform:none;margin-bottom:12px;width:unset;', ' ', ' ', ' ', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.dataContainer', '#717171');
}, _Util.media.small(_templateObject2), _Util.media.medium(_templateObject2), _Util.media.large(_templateObject3), _Util.media.extraLarge(_templateObject3));

var tooltipPosition = function tooltipPosition(position) {
  switch (position) {
    case 'right':
      return (0, _styledComponents.css)(['bottom:30px;left:30px;']);
    case 'left':
      return (0, _styledComponents.css)(['bottom:30px;right:30px;']);
    case 'middle':
    default:
      return (0, _styledComponents.css)(['bottom:40px;left:calc(50% - calc(148px / 2));']);
  }
};

var Tooltip = exports.Tooltip = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Tooltip',
  componentId: 'sc-1rl2k1l-4'
})(['position:absolute;', ' font-family:inherit;font-size:12px;font-weight:500;width:148px;border-radius:4px;background-color:', ';box-shadow:0 2px 6px 0 rgba(0,0,0,0.2);color:', ';padding:8px;display:', ';z-index:1000;box-sizing:border-box;& > h6{margin:0px;opacity:0.75;font-family:inherit;font-size:12px;font-weight:bold;text-align:left;color:', ';text-transform:capitalize;text-align:center;}& > div{display:flex;justify-content:flex-start;align-items:center;}'], function (props) {
  return tooltipPosition(props.position);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.tooltip.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.tooltip.color', '#717171');
}, function (props) {
  return props.hide ? 'none!important' : 'none';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.tooltip.color', '#717171');
});

var Day = exports.Day = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Day',
  componentId: 'sc-1rl2k1l-5'
})(['position:relative;font-family:', ';font-size:', ';width:28px;height:28px;border:0px;margin:0px;padding:0px;border-radius:20px;user-select:none;cursor:', ';background:', ';box-shadow:', ';font-weight:', ';color:', ';display:flex;justify-content:center;align-items:center;&:hover{background-color:rgba(230,230,230,0.5);font-weight:', ';}&:hover > ', '{display:block;}&:hover ', '{display:', ';}', ' ', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.fontSize', '14px');
}, function (props) {
  return props.pointer && !props.disabled ? 'pointer' : null;
}, function (props) {
  return props.today ? (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.background', 'linear-gradient(to bottom, #00ccff, #009dff)') : 'transparent';
}, function (props) {
  return props.today ? '0 2px 6px 0 rgba(0, 0, 0, 0.05)' : null;
}, function (props) {
  return props.today ? (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.fontWeightToday', '700') : (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.fontWeight', '400');
}, function (props) {
  if (props.today) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.color', '#fff');
  }
  if (props.disabled) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.disabled', 'rgb(113,113,113, 0.34)');
  }
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.default', '#717171');
}, function (props) {
  return props.today ? (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.fontWeightToday', '700') : (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today.fontWeightHighlight', '500');
}, Tooltip, FloatingDots, function (props) {
  return props.showDot ? null : 'none';
}, _Util.media.small(_templateObject4), _Util.media.large(_templateObject5));

var DayLink = exports.DayLink = _styledComponents2.default.a.withConfig({
  displayName: 'styles__DayLink',
  componentId: 'sc-1rl2k1l-6'
})(['text-decoration:none;position:relative;font-family:inherit;font-size:14px;width:28px;height:28px;border:0px;margin:0px;padding:0px;border-radius:20px;user-select:none;cursor:', ';background:', ';box-shadow:', ';font-weight:', ';color:', ';display:flex;justify-content:center;align-items:center;&:hover{background-color:rgba(230,230,230,0.5);color:', ';}&:hover > ', '{display:block;}&:hover ', '{display:', ';}', ' ', ' ', ' ', ''], function (props) {
  return props.pointer && !props.disabled ? 'pointer' : null;
}, function (props) {
  return props.today ? (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.background', 'linear-gradient(to bottom, #00ccff, #009dff)') : 'transparent';
}, function (props) {
  return props.today ? '0 2px 6px 0 rgba(0, 0, 0, 0.05)' : null;
}, function (props) {
  return props.today ? 'bold' : '500';
}, function (props) {
  if (props.today) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.today', '#fff');
  }
  if (props.disabled) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.disabled', 'rgb(113,113,113, 0.34)');
  }
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.default', '#717171');
}, function (props) {
  if (props.today) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.today', '#fff');
  }
  if (props.disabled) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.disabled', 'rgb(113,113,113, 0.34)');
  }
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.link.default', '#717171');
}, Tooltip, FloatingDots, function (props) {
  return props.showDot ? null : 'none';
}, _Util.media.small(_templateObject4), _Util.media.medium(_templateObject4), _Util.media.large(_templateObject5), _Util.media.extraLarge(_templateObject5));

var WeekDay = exports.WeekDay = _styledComponents2.default.div.withConfig({
  displayName: 'styles__WeekDay',
  componentId: 'sc-1rl2k1l-7'
})(['width:30px;height:24px;font-family:', ';font-size:', ';font-weight:', ';text-align:center;color:', ';text-transform:uppercase;', ' ', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.week.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.week.fontSize', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.week.fontWeight', '700');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.week.color', '#009dff');
}, _Util.media.small(_templateObject6, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.week.fontSizeSmall', '14px');
}), _Util.media.large(_templateObject7, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.week.fontSizeLarge', '20px');
}));

var Month = exports.Month = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Month',
  componentId: 'sc-1rl2k1l-8'
})(['font-family:', ';font-size:', ';font-weight:', ';text-align:center;color:', ';text-transform:uppercase;width:unset;flex-grow:1;', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.month.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.month.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.month.fontWeight', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.month,color', '#717171');
}, _Util.media.large(_templateObject8));

var Week = exports.Week = (0, _styledComponents2.default)(Month).withConfig({
  displayName: 'styles__Week',
  componentId: 'sc-1rl2k1l-9'
})(['font-size:', ';width:unset;flex-grow:1;', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.month.fontSize', '20px');
}, _Util.media.large(_templateObject9));

var Row = exports.Row = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Row',
  componentId: 'sc-1rl2k1l-10'
})(['display:flex;justify-content:space-between;align-items:center;width:100%;min-height:36px;max-height:36px;', ' ', ' ', ' ', ''], _Util.media.small(_templateObject10), _Util.media.medium(_templateObject10), _Util.media.large(_templateObject11), _Util.media.extraLarge(_templateObject11));

var FilterRow = exports.FilterRow = (0, _styledComponents2.default)(Row).withConfig({
  displayName: 'styles__FilterRow',
  componentId: 'sc-1rl2k1l-11'
})(['justify-content:flex-start;color:', ' !important;font-size:14px;font-weight:500;align-items:flex-start;min-height:unset;max-height:unset;', ' ', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.filterRow', '#717171');
}, _Util.media.large(_templateObject12), _Util.media.extraLarge(_templateObject12));

var FiltersBox = exports.FiltersBox = (0, _styledComponents2.default)(FilterRow).withConfig({
  displayName: 'styles__FiltersBox',
  componentId: 'sc-1rl2k1l-12'
})(['flex-wrap:wrap;font-size:10px;& > *:not(:last-child){margin-bottom:10px;}', ' ', ''], _Util.media.large(_templateObject13), _Util.media.extraLarge(_templateObject13));

var FilterLabel = exports.FilterLabel = _styledComponents2.default.div.withConfig({
  displayName: 'styles__FilterLabel',
  componentId: 'sc-1rl2k1l-13'
})(['font-family:inherit;font-size:14px;font-weight:900;text-align:center;color:', ';margin-right:20px;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.filterLabel', '#717171');
});

var Cell = exports.Cell = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Cell',
  componentId: 'sc-1rl2k1l-14'
})(['flex-grow:1;display:flex;justify-content:center;align-items:center;']);

var CalendarBody = exports.CalendarBody = (0, _styledComponents2.default)(_Card.CardContent).withConfig({
  displayName: 'styles__CalendarBody',
  componentId: 'sc-1rl2k1l-15'
})(['flex-grow:1;display:flex;flex-direction:column;align-items:center;padding:', ';'], function (props) {
  return props.week ? '0px' : '10px';
});

var Left = exports.Left = (0, _styledComponents2.default)(_Icons.FaAngleLeft).withConfig({
  displayName: 'styles__Left',
  componentId: 'sc-1rl2k1l-16'
})(['width:24px;height:24px;fill:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.left', '#009dff');
});

var Right = exports.Right = (0, _styledComponents2.default)(_Icons.FaAngleRight).withConfig({
  displayName: 'styles__Right',
  componentId: 'sc-1rl2k1l-17'
})(['width:24px;height:24px;fill:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.right', '#009dff');
});

var NavButton = exports.NavButton = (0, _styledComponents2.default)(_Buttons.Button).withConfig({
  displayName: 'styles__NavButton',
  componentId: 'sc-1rl2k1l-18'
})(['background-color:transparent;border-radius:50%;padding:0px;width:40px;height:40px;&:hover{background-color:', ';}margin:0px;& > svg{fill:', ';}', ' ', ' ', ' ', ''], function (props) {
  return props.disabled ? null : 'rgba(230, 230, 230, 0.5)';
}, function (props) {
  return props.disabled ? 'rgba(230, 230, 230, 0.5)' : null;
}, _Util.media.small(_templateObject14), _Util.media.medium(_templateObject14), _Util.media.large(_templateObject15), _Util.media.extraLarge(_templateObject15));

var WeekBody = exports.WeekBody = _styledComponents2.default.div.withConfig({
  displayName: 'styles__WeekBody',
  componentId: 'sc-1rl2k1l-19'
})(['flex-grow:1;display:flex;justify-content:space-evenly;width:100%;']);

var WeekDayValue = exports.WeekDayValue = _styledComponents2.default.div.withConfig({
  displayName: 'styles__WeekDayValue',
  componentId: 'sc-1rl2k1l-20'
})(['display:inline-flex;flex-direction:column;font-family:inherit;font-size:18px;width:47px;font-weight:500;margin-bottom:12px;color:', ';align-items:center;text-transform:uppercase;', ' ', ''], function (props) {
  if (props.today) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.today', '#009dff');
  }
  if (props.disabled) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.disabled', 'rgb(113,113,113, 0.34)');
  }
  return (0, _Themes.handleThemeFromObject)(props.theme, 'calendar.date.default', '#717171');
}, _Util.media.large(_templateObject16), _Util.media.extraLarge(_templateObject16));

var WeekCell = exports.WeekCell = _styledComponents2.default.div.withConfig({
  displayName: 'styles__WeekCell',
  componentId: 'sc-1rl2k1l-21'
})(['flex-basis:20%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;border-width:2px;border-style:solid;min-height:300px;border-image:linear-gradient(to bottom,rgba(230,230,230,0.3),rgba(230,230,230,0)) 1 100%;&:last-child{border:0px;}padding-top:5px;cursor:', ';border-top:0px;border-left:0px;&:hover{background-image:linear-gradient(to bottom,rgba(230,230,230,0.3),rgba(230,230,230,0));}&:hover > ', '{font-weight:900;}&:hover ', '{font-weight:900;}'], function (props) {
  return props.pointer && !props.disabled ? 'pointer' : null;
}, WeekDayValue, DataContainer);

var WeekCellLink = exports.WeekCellLink = _styledComponents2.default.a.withConfig({
  displayName: 'styles__WeekCellLink',
  componentId: 'sc-1rl2k1l-22'
})(['text-decoration:none;flex-basis:20%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;border-width:2px;border-style:solid;min-height:300px;border-image:linear-gradient(to bottom,rgba(230,230,230,0.3),rgba(230,230,230,0)) 1 100%;&:last-child{border:0px;}padding-top:5px;cursor:', ';border-top:0px;border-left:0px;&:hover{background-image:linear-gradient(to bottom,rgba(230,230,230,0.3),rgba(230,230,230,0));}&:hover > ', '{font-weight:900;}&:hover ', '{font-weight:900;}'], function (props) {
  return props.pointer && !props.disabled ? 'pointer' : null;
}, WeekDayValue, DataContainer);

var WeekNav = exports.WeekNav = (0, _styledComponents2.default)(Row).withConfig({
  displayName: 'styles__WeekNav',
  componentId: 'sc-1rl2k1l-23'
})(['padding:15px 0px;border-bottom:2px solid rgba(230,230,230,0.3);']);