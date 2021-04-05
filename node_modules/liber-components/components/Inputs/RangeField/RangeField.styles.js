'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiffBar = exports.ToTooltip = exports.FromTooltip = exports.RangeInputTo = exports.RangeInputFrom = exports.RangeInputContainer = exports.ValueContainer = exports.ValueLabel = exports.ValueField = exports.Label = exports.RangeContainer = exports.FieldBox = exports.CardContent = exports.FieldContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Card = require('../../Card');

var _Themes = require('../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldContainer = exports.FieldContainer = _styledComponents2.default.div.withConfig({
  displayName: 'RangeFieldstyles__FieldContainer',
  componentId: 'sc-1ao7egd-0'
})(['position:relative;']);

var CardContent = exports.CardContent = (0, _styledComponents2.default)(_Card.CardContent).withConfig({
  displayName: 'RangeFieldstyles__CardContent',
  componentId: 'sc-1ao7egd-1'
})(['padding:8px 16px;display:flex;flex-direction:column;']);

var FieldBox = exports.FieldBox = _styledComponents2.default.div.withConfig({
  displayName: 'RangeFieldstyles__FieldBox',
  componentId: 'sc-1ao7egd-2'
})(['--color:', ';width:140px;height:36px;line-height:36px;padding:0 8px;color:', ';font-weight:', ';font-size:', ';font-family:', ';transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;border:2px solid var(--color);border-radius:4px;position:relative;cursor:pointer;&:after{--height:8px;--width:7px;content:"";opacity:0.8;border-top:var(--height) solid var(--color);border-right:var(--width) solid transparent;border-bottom:var(--height) solid transparent;border-left:var(--width) solid transparent;border-radius:4px;position:absolute;right:8px;top:calc(50% - (var(--height) - (var(--height)/2)));transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;}'], function (props) {
  if (props.layout === 'open') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#019DFF');
  if (props.layout === 'unselected') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.bold', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var RangeContainer = exports.RangeContainer = (0, _styledComponents2.default)(_Card.Card).withConfig({
  displayName: 'RangeFieldstyles__RangeContainer',
  componentId: 'sc-1ao7egd-3'
})(['--width:260px;width:var(--width);height:100px;margin-top:2px;position:absolute;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;', ' ', ''], function (props) {
  if (props.open) {
    return (0, _styledComponents.css)(['pointer-events:auto;']);
  }
  return (0, _styledComponents.css)(['opacity:0;pointer-events:none;transform:translateY(-42px);']);
}, function (props) {
  if (props.position === 'left') return (0, _styledComponents.css)(['left:0px;']);
  if (props.position === 'center') return (0, _styledComponents.css)(['left:calc(-1*(var(--width)/2) + 50%);']);
  if (props.position === 'right') return (0, _styledComponents.css)(['right:0px;']);
  return '';
});

var Label = exports.Label = _styledComponents2.default.div.withConfig({
  displayName: 'RangeFieldstyles__Label',
  componentId: 'sc-1ao7egd-4'
})(['color:', ';font-weight:', ';font-size:', ';font-family:', ';line-height:14px;margin:8px 0px;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;'], function (props) {
  if (props.layout === 'open') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#019DFF');
  if (props.layout === 'unselected') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishBlack', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var ValueField = exports.ValueField = _styledComponents2.default.input.attrs({
  type: 'number'
}).withConfig({
  displayName: 'RangeFieldstyles__ValueField',
  componentId: 'sc-1ao7egd-5'
})(['--field-color:', ';border:1px solid;border-color:var(--field-color);border-radius:4px;width:36px;height:20px;color:', ';text-align:center;line-height:36px;font-family:', ';font-weight:', ';font-size:', ';outline:none;-moz-appearance:textfield;&::-webkit-input-placeholder{color:var(--field-color);}&::-moz-placeholder{color:var(--field-color);}&:-ms-input-placeholder{color:var(--field-color);}&:-moz-placeholder{color:var(--field-color);}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.blueishMediumGrey', '#dde8ec');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishBlack', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
});

var ValueLabel = exports.ValueLabel = _styledComponents2.default.label.withConfig({
  displayName: 'RangeFieldstyles__ValueLabel',
  componentId: 'sc-1ao7egd-6'
})(['display:flex;flex-direction:column;color:', ';font-family:', ';font-weight:', ';font-size:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7e8d95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
});

var ValueContainer = exports.ValueContainer = _styledComponents2.default.div.withConfig({
  displayName: 'RangeFieldstyles__ValueContainer',
  componentId: 'sc-1ao7egd-7'
})(['width:100%;display:flex;justify-content:space-between;align-items:center;']);

var RangeInputContainer = exports.RangeInputContainer = _styledComponents2.default.div.withConfig({
  displayName: 'RangeFieldstyles__RangeInputContainer',
  componentId: 'sc-1ao7egd-8'
})(['width:100%;flex-grow:1;position:relative;display:flex;justify-content:center;align-items:center;']);

var range = (0, _styledComponents.css)(['-webkit-appearance:none;padding:0;margin:0;display:inline-block;vertical-align:top;width:100%;&:focus{outline:none!important;border:0;}&::-moz-focus-outer{border:0;}']);

var thumb = (0, _styledComponents.css)(['width:18px;height:18px;border:1px solid ', ';border-radius:50%;box-shadow:0px 2px 5px ', ';cursor:pointer;background-color:#fff;margin-top:-9px;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.blueishMediumGrey', '#dde8ec');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey2', '#cecece');
});

var track = (0, _styledComponents.css)(['width:100%;cursor:pointer;height:0px;border-radius:1px;border:1px solid ', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey2', '#cecece');
});

var RangeInputFrom = exports.RangeInputFrom = _styledComponents2.default.input.attrs({
  type: 'range'
}).withConfig({
  displayName: 'RangeFieldstyles__RangeInputFrom',
  componentId: 'sc-1ao7egd-9'
})(['position:absolute;', ' &::-webkit-slider-thumb{-webkit-appearance:none;position:relative;z-index:3;', '}&::-moz-range-thumb{transform:scale(1);z-index:2;', '}&::-webkit-slider-runnable-track{', '}&::-moz-range-track{', '}'], range, thumb, thumb, track, track);
var RangeInputTo = exports.RangeInputTo = _styledComponents2.default.input.attrs({
  type: 'range'
}).withConfig({
  displayName: 'RangeFieldstyles__RangeInputTo',
  componentId: 'sc-1ao7egd-10'
})(['position:relative;', ' &::-webkit-slider-runnable-track{', '}&::-moz-range-track{', '}&::-webkit-slider-thumb{-webkit-appearance:none;position:relative;z-index:3;', '}&::-moz-range-thumb{transform:scale(1);z-index:2;', '}'], range, track, track, thumb, thumb);

var Tooltip = _styledComponents2.default.div.attrs(function (_ref) {
  var children = _ref.children;

  var size = children.toString().length * 9.5;
  size = size < 20 ? 20 : size;
  return {
    style: {
      '--size': size + 'px',
      '--half-size': size / 2 + 'px'
    }
  };
}).withConfig({
  displayName: 'RangeFieldstyles__Tooltip',
  componentId: 'sc-1ao7egd-11'
})(['position:absolute;min-width:20px;width:var(--size);height:15px;padding:0px 4px;box-sizing:border-box;color:', ';font-family:', ';font-weight:', ';font-size:', ';background-color:', ';transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;box-shadow:0px 2px 5px ', ';display:flex;justify-content:center;align-items:center;border-radius:4px;z-index:4;top:10px;', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7e8d95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey2', '#cecece');
}, function (props) {
  if (props.unselected) {
    return (0, _styledComponents.css)(['opacity:0;pointer-events:none;']);
  }
  return '';
});

var FromTooltip = exports.FromTooltip = (0, _styledComponents2.default)(Tooltip).withConfig({
  displayName: 'RangeFieldstyles__FromTooltip',
  componentId: 'sc-1ao7egd-12'
})(['left:calc(var(--from) - var(--half-size));']);
var ToTooltip = exports.ToTooltip = (0, _styledComponents2.default)(Tooltip).withConfig({
  displayName: 'RangeFieldstyles__ToTooltip',
  componentId: 'sc-1ao7egd-13'
})(['left:calc(var(--to) - var(--half-size));']);

var DiffBar = exports.DiffBar = _styledComponents2.default.span.attrs(function (_ref2) {
  var from = _ref2.from,
      to = _ref2.to;
  return {
    style: {
      '--from': from,
      '--to': to
    }
  };
}).withConfig({
  displayName: 'RangeFieldstyles__DiffBar',
  componentId: 'sc-1ao7egd-14'
})(['--color:', ';height:3px;width:calc(100% - 20px);z-index:1;position:absolute;display:block;background:linear-gradient(to right,transparent var(--from),var(--color) 0,var(--color) var(--to),transparent 0 ) no-repeat;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#009DFF');
});