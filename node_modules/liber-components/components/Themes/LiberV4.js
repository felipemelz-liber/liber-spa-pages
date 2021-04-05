"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR70 = exports.RIPPLE_ERROR = exports.DARK_ERROR = exports.ERROR = exports.ALERT6 = exports.ALERT38 = exports.ALERT70 = exports.RIPPLE_ALERT = exports.DARK_ALERT = exports.ALERT = exports.SUCCESS6 = exports.SUCCESS38 = exports.SUCCESS70 = exports.RIPPLE_SUCCESS = exports.DARK_SUCCESS = exports.SUCCESS = exports.GENERAL_BACKGROUND = exports.SURFACE = exports.HEADER = exports.DARK_BORDER = exports.BORDER = exports.RIPPLE_SECONDARY = exports.DARK_SECONDARY = exports.SECONDARY = exports.PRIMARY6 = exports.PRIMARY38 = exports.PRIMARY70 = exports.RIPPLE_PRIMARY = exports.DARK_PRIMARY = exports.PRIMARY = exports.DARK_TEXT6 = exports.DARK_TEXT38 = exports.DARK_TEXT70 = exports.DARK_TEXT = exports.LIGHT_TEXT25 = exports.LIGHT_TEXT50 = exports.LIGHT_TEXT70 = exports.LIGHT_TEXT = exports.EGGPLANT50 = exports.EGGPLANT25 = exports.EGGPLANT2 = exports.EGGPLANT = exports.CARROT50 = exports.CARROT25 = exports.CARROT2 = exports.CARROT = exports.WHITE = exports.LIBER_WHITE = exports.GRAY8 = exports.GRAY7 = exports.GRAY6 = exports.GRAY5 = exports.GRAY4 = exports.GRAY3 = exports.GRAY2 = exports.GRAY1 = exports.DARK_GREEN = exports.LIGHT_GREEN75 = exports.LIGHT_GREEN25 = exports.LIGHT_GREEN2 = exports.LIGHT_GREEN = exports.YELLOW50 = exports.YELLOW25 = exports.YELLOW2 = exports.DARK_YELLOW = exports.LIGHT_YELLOW = exports.YELLOW = exports.LIGHT_RED = exports.RED50 = exports.RED25 = exports.RED2 = exports.RED = exports.DARK_TURQUOISE = exports.TURQUOISE_GREEN50 = exports.TURQUOISE_GREEN25 = exports.TURQUOISE_GREEN2 = exports.TURQUOISE_GREEN = exports.TURQUOISE_BLUE50 = exports.TURQUOISE_BLUE25 = exports.TURQUOISE_BLUE2 = exports.TURQUOISE_BLUE = exports.TURQUOISE50 = exports.TURQUOISE25 = exports.TURQUOISE2 = exports.TURQUOISE = exports.DARK_PETROLEUM = exports.PETROLEUM = exports.DARK_BLUE50 = exports.DARK_BLUE25 = exports.DARK_BLUE2 = exports.DARK_BLUE = exports.LIGHT_BLUE75 = exports.LIGHT_BLUE50 = exports.LIGHT_BLUE25 = exports.LIGHT_BLUE2 = exports.LIGHT_BLUE = exports.LIBER_BLUE50 = exports.LIBER_BLUE25 = exports.LIBER_BLUE2 = exports.LIBER_BLUE = void 0;
exports["default"] = exports.colors = exports.BOX_SHADOW_3 = exports.BOX_SHADOW_2 = exports.BOX_SHADOW_1 = exports.TYPOGRAPHY_OVERLINE = exports.TYPOGRAPHY_OVERLINE_MD = exports.TYPOGRAPHY_CAPTION = exports.TYPOGRAPHY_CAPTION_MD = exports.TYPOGRAPHY_BUTTON = exports.TYPOGRAPHY_BODY = exports.TYPOGRAPHY_SUBHEAD = exports.TYPOGRAPHY_H6 = exports.TYPOGRAPHY_H5 = exports.TYPOGRAPHY_H4 = exports.TYPOGRAPHY_H3 = exports.TYPOGRAPHY_H2 = exports.TYPOGRAPHY_H1 = exports.MOBILE_LARGE = exports.MOBILE_MEDIUM = exports.MOBILE_SMALL = exports.SMALL = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.BLACK = exports.BOLD = exports.MEDIUM = exports.REGULAR = exports.FONT_FAMILY = exports.ERROR6 = exports.ERROR38 = void 0;

var _styledComponents = require("styled-components");

var _methods = require("./methods");

var LIBER_BLUE = '#009dff';
exports.LIBER_BLUE = LIBER_BLUE;
var LIBER_BLUE2 = '#f9fcff';
exports.LIBER_BLUE2 = LIBER_BLUE2;
var LIBER_BLUE25 = '#bee6ff';
exports.LIBER_BLUE25 = LIBER_BLUE25;
var LIBER_BLUE50 = '#7ecdff';
exports.LIBER_BLUE50 = LIBER_BLUE50;
var LIGHT_BLUE = '#4cbaff';
exports.LIGHT_BLUE = LIGHT_BLUE;
var LIGHT_BLUE2 = '#faddff';
exports.LIGHT_BLUE2 = LIGHT_BLUE2;
var LIGHT_BLUE25 = '#d1edff';
exports.LIGHT_BLUE25 = LIGHT_BLUE25;
var LIGHT_BLUE50 = '#a4dcff';
exports.LIGHT_BLUE50 = LIGHT_BLUE50;
var LIGHT_BLUE75 = '#f0f9ff';
exports.LIGHT_BLUE75 = LIGHT_BLUE75;
var DARK_BLUE = '#007ecc';
exports.DARK_BLUE = DARK_BLUE;
var DARK_BLUE2 = '#f9fbfd';
exports.DARK_BLUE2 = DARK_BLUE2;
var DARK_BLUE25 = '#bedef2';
exports.DARK_BLUE25 = DARK_BLUE25;
var DARK_BLUE50 = '#7e8bde5';
exports.DARK_BLUE50 = DARK_BLUE50;
var PETROLEUM = '#4b6f85';
exports.PETROLEUM = PETROLEUM;
var DARK_PETROLEUM = '#3C596B';
exports.DARK_PETROLEUM = DARK_PETROLEUM;
var TURQUOISE = '#40b7c9';
exports.TURQUOISE = TURQUOISE;
var TURQUOISE2 = '#fafdfd';
exports.TURQUOISE2 = TURQUOISE2;
var TURQUOISE25 = '#ceecf1';
exports.TURQUOISE25 = TURQUOISE25;
var TURQUOISE50 = '#9edae3';
exports.TURQUOISE50 = TURQUOISE50;
var TURQUOISE_BLUE = '#18d8ee';
exports.TURQUOISE_BLUE = TURQUOISE_BLUE;
var TURQUOISE_BLUE2 = '#f9fefe';
exports.TURQUOISE_BLUE2 = TURQUOISE_BLUE2;
var TURQUOISE_BLUE25 = '#c4f5fa';
exports.TURQUOISE_BLUE25 = TURQUOISE_BLUE25;
var TURQUOISE_BLUE50 = '#8aebf6';
exports.TURQUOISE_BLUE50 = TURQUOISE_BLUE50;
var TURQUOISE_GREEN = '#2de8bf';
exports.TURQUOISE_GREEN = TURQUOISE_GREEN;
var TURQUOISE_GREEN2 = '#fafefd';
exports.TURQUOISE_GREEN2 = TURQUOISE_GREEN2;
var TURQUOISE_GREEN25 = '#c9f9ee';
exports.TURQUOISE_GREEN25 = TURQUOISE_GREEN25;
var TURQUOISE_GREEN50 = '#2de88f';
exports.TURQUOISE_GREEN50 = TURQUOISE_GREEN50;
var DARK_TURQUOISE = '#537e86';
exports.DARK_TURQUOISE = DARK_TURQUOISE;
var RED = '#dc3545';
exports.RED = RED;
var RED2 = '#fefafa';
exports.RED2 = RED2;
var RED25 = '#f6cbcf';
exports.RED25 = RED25;
var RED50 = '#ed99a1';
exports.RED50 = RED50;
var LIGHT_RED = '#fdf3f4';
exports.LIGHT_RED = LIGHT_RED;
var YELLOW = '#fabe00';
exports.YELLOW = YELLOW;
var LIGHT_YELLOW = '#fffbf0';
exports.LIGHT_YELLOW = LIGHT_YELLOW;
var DARK_YELLOW = '#F0B600';
exports.DARK_YELLOW = DARK_YELLOW;
var YELLOW2 = '#fefdf9';
exports.YELLOW2 = YELLOW2;
var YELLOW25 = '#fdeebe';
exports.YELLOW25 = YELLOW25;
var YELLOW50 = '#fcse7e';
exports.YELLOW50 = YELLOW50;
var LIGHT_GREEN = '#13ce66';
exports.LIGHT_GREEN = LIGHT_GREEN;
var LIGHT_GREEN2 = '#f9fdfb';
exports.LIGHT_GREEN2 = LIGHT_GREEN2;
var LIGHT_GREEN25 = '#c3f2d9';
exports.LIGHT_GREEN25 = LIGHT_GREEN25;
var LIGHT_GREEN75 = '#f1fcf6';
exports.LIGHT_GREEN75 = LIGHT_GREEN75;
var DARK_GREEN = '#00a345';
exports.DARK_GREEN = DARK_GREEN;
var GRAY1 = '#eaf7ff';
exports.GRAY1 = GRAY1;
var GRAY2 = '#dce8f0';
exports.GRAY2 = GRAY2;
var GRAY3 = '#c6d1d8';
exports.GRAY3 = GRAY3;
var GRAY4 = '#6287a7';
exports.GRAY4 = GRAY4;
var GRAY5 = '#ecf0f3';
exports.GRAY5 = GRAY5;
var GRAY6 = '#d2dbe0';
exports.GRAY6 = GRAY6;
var GRAY7 = '#f9fafa';
exports.GRAY7 = GRAY7;
var GRAY8 = '#f6f8f9';
exports.GRAY8 = GRAY8;
var LIBER_WHITE = '#fafdff';
exports.LIBER_WHITE = LIBER_WHITE;
var WHITE = '#ffffff';
exports.WHITE = WHITE;
var CARROT = '#fa8a00';
exports.CARROT = CARROT;
var CARROT2 = '#faf7f4';
exports.CARROT2 = CARROT2;
var CARROT25 = '#faddba';
exports.CARROT25 = CARROT25;
var CARROT50 = '#fac17c';
exports.CARROT50 = CARROT50;
var EGGPLANT = '#a15df7';
exports.EGGPLANT = EGGPLANT;
var EGGPLANT2 = '#fcfbfe';
exports.EGGPLANT2 = EGGPLANT2;
var EGGPLANT25 = '#e7d5fc';
exports.EGGPLANT25 = EGGPLANT25;
var EGGPLANT50 = '#cfadfa';
/* LIGHT TEXT */

exports.EGGPLANT50 = EGGPLANT50;
var LIGHT_TEXT = '#fafdff';
exports.LIGHT_TEXT = LIGHT_TEXT;
var LIGHT_TEXT70 = (0, _methods.hexToRgb)(LIGHT_TEXT, '0.7');
exports.LIGHT_TEXT70 = LIGHT_TEXT70;
var LIGHT_TEXT50 = (0, _methods.hexToRgb)(LIGHT_TEXT, '0.5');
exports.LIGHT_TEXT50 = LIGHT_TEXT50;
var LIGHT_TEXT25 = (0, _methods.hexToRgb)(LIGHT_TEXT, '0.25');
/* DARK TEXT */

exports.LIGHT_TEXT25 = LIGHT_TEXT25;
var DARK_TEXT = '#405f71';
exports.DARK_TEXT = DARK_TEXT;
var DARK_TEXT70 = '#798e9b';
exports.DARK_TEXT70 = DARK_TEXT70;
var DARK_TEXT38 = '#b6c2c9';
exports.DARK_TEXT38 = DARK_TEXT38;
var DARK_TEXT6 = '#f4f5f7';
/* PRIMARY */

exports.DARK_TEXT6 = DARK_TEXT6;
var PRIMARY = LIBER_BLUE;
exports.PRIMARY = PRIMARY;
var DARK_PRIMARY = '#0095f2';
exports.DARK_PRIMARY = DARK_PRIMARY;
var RIPPLE_PRIMARY = '#008de5';
exports.RIPPLE_PRIMARY = RIPPLE_PRIMARY;
var PRIMARY70 = '#4cbaff';
exports.PRIMARY70 = PRIMARY70;
var PRIMARY38 = '#9edaff';
exports.PRIMARY38 = PRIMARY38;
var PRIMARY6 = '#f0f9ff';
/* SECONDARY */

exports.PRIMARY6 = PRIMARY6;
var SECONDARY = '#f0f2f4';
exports.SECONDARY = SECONDARY;
var DARK_SECONDARY = '#e7e9ea';
exports.DARK_SECONDARY = DARK_SECONDARY;
var RIPPLE_SECONDARY = '#dddfe1';
/* SECONDARY */

/* SURFACES */

exports.RIPPLE_SECONDARY = RIPPLE_SECONDARY;
var BORDER = '#e8ebee';
exports.BORDER = BORDER;
var DARK_BORDER = '#cdd7df';
exports.DARK_BORDER = DARK_BORDER;
var HEADER = '#f9fafa';
exports.HEADER = HEADER;
var SURFACE = '#fafdff';
exports.SURFACE = SURFACE;
var GENERAL_BACKGROUND = WHITE;
/* SUCCESS */

exports.GENERAL_BACKGROUND = GENERAL_BACKGROUND;
var SUCCESS = LIGHT_GREEN;
exports.SUCCESS = SUCCESS;
var DARK_SUCCESS = '#12c461';
exports.DARK_SUCCESS = DARK_SUCCESS;
var RIPPLE_SUCCESS = '#11b95c';
exports.RIPPLE_SUCCESS = RIPPLE_SUCCESS;
var SUCCESS70 = '#59dc93';
exports.SUCCESS70 = SUCCESS70;
var SUCCESS38 = '#a5ecc5';
exports.SUCCESS38 = SUCCESS38;
var SUCCESS6 = '#f1fcf6';
/* ALERT */

exports.SUCCESS6 = SUCCESS6;
var ALERT = YELLOW;
exports.ALERT = ALERT;
var DARK_ALERT = '#edb400';
exports.DARK_ALERT = DARK_ALERT;
var RIPPLE_ALERT = '#e1ab00';
exports.RIPPLE_ALERT = RIPPLE_ALERT;
var ALERT70 = '#fbd14c';
exports.ALERT70 = ALERT70;
var ALERT38 = '#fde69e';
exports.ALERT38 = ALERT38;
var ALERT6 = '#fffbf0';
/* ERROR */

exports.ALERT6 = ALERT6;
var ERROR = RED;
exports.ERROR = ERROR;
var DARK_ERROR = '#d13241';
exports.DARK_ERROR = DARK_ERROR;
var RIPPLE_ERROR = '#c6303e';
exports.RIPPLE_ERROR = RIPPLE_ERROR;
var ERROR70 = '#e6717c';
exports.ERROR70 = ERROR70;
var ERROR38 = '#f2b2b8';
exports.ERROR38 = ERROR38;
var ERROR6 = '#fdf3f4';
exports.ERROR6 = ERROR6;
var FONT_FAMILY = 'Roboto';
exports.FONT_FAMILY = FONT_FAMILY;
var REGULAR = '400';
exports.REGULAR = REGULAR;
var MEDIUM = '500';
exports.MEDIUM = MEDIUM;
var BOLD = '700';
exports.BOLD = BOLD;
var BLACK = '900';
exports.BLACK = BLACK;
var H1 = '48px';
exports.H1 = H1;
var H2 = '40px';
exports.H2 = H2;
var H3 = '32px';
exports.H3 = H3;
var H4 = '24px';
exports.H4 = H4;
var H5 = '20px';
exports.H5 = H5;
var H6 = '18px';
exports.H6 = H6;
var P = '16px';
exports.P = P;
var SMALL = '10px';
exports.SMALL = SMALL;
var MOBILE_SMALL = '11px';
exports.MOBILE_SMALL = MOBILE_SMALL;
var MOBILE_MEDIUM = '12px';
exports.MOBILE_MEDIUM = MOBILE_MEDIUM;
var MOBILE_LARGE = '14px';
exports.MOBILE_LARGE = MOBILE_LARGE;
var TYPOGRAPHY_H1 = (0, _styledComponents.css)(["font-size:40px;font-weight:600;line-height:56px;"]);
exports.TYPOGRAPHY_H1 = TYPOGRAPHY_H1;
var TYPOGRAPHY_H2 = (0, _styledComponents.css)(["font-size:36px;font-weight:600;line-height:50px;"]);
exports.TYPOGRAPHY_H2 = TYPOGRAPHY_H2;
var TYPOGRAPHY_H3 = (0, _styledComponents.css)(["font-size:32px;font-weight:600;line-height:45px;"]);
exports.TYPOGRAPHY_H3 = TYPOGRAPHY_H3;
var TYPOGRAPHY_H4 = (0, _styledComponents.css)(["font-size:28px;font-weight:600;line-height:39px;"]);
exports.TYPOGRAPHY_H4 = TYPOGRAPHY_H4;
var TYPOGRAPHY_H5 = (0, _styledComponents.css)(["font-size:24px;font-weight:600;line-height:37px;"]);
exports.TYPOGRAPHY_H5 = TYPOGRAPHY_H5;
var TYPOGRAPHY_H6 = (0, _styledComponents.css)(["font-size:20px;font-weight:600;line-height:28px;"]);
exports.TYPOGRAPHY_H6 = TYPOGRAPHY_H6;
var TYPOGRAPHY_SUBHEAD = (0, _styledComponents.css)(["font-size:16px;font-weight:500;line-height:22px;"]);
exports.TYPOGRAPHY_SUBHEAD = TYPOGRAPHY_SUBHEAD;
var TYPOGRAPHY_BODY = (0, _styledComponents.css)(["font-size:16px;font-weight:400;line-height:22px;"]);
exports.TYPOGRAPHY_BODY = TYPOGRAPHY_BODY;
var TYPOGRAPHY_BUTTON = (0, _styledComponents.css)(["font-size:14px;font-weight:500;line-height:20px;letter-spacing:1.25;"]);
exports.TYPOGRAPHY_BUTTON = TYPOGRAPHY_BUTTON;
var TYPOGRAPHY_CAPTION_MD = (0, _styledComponents.css)(["font-size:12px;font-weight:500;line-height:17px;letter-spacing:1.4;"]);
exports.TYPOGRAPHY_CAPTION_MD = TYPOGRAPHY_CAPTION_MD;
var TYPOGRAPHY_CAPTION = (0, _styledComponents.css)(["font-size:12px;font-weight:400;line-height:17px;letter-spacing:1.4;"]);
exports.TYPOGRAPHY_CAPTION = TYPOGRAPHY_CAPTION;
var TYPOGRAPHY_OVERLINE_MD = (0, _styledComponents.css)(["font-size:10px;font-weight:500;line-height:14px;letter-spacing:1.5;"]);
exports.TYPOGRAPHY_OVERLINE_MD = TYPOGRAPHY_OVERLINE_MD;
var TYPOGRAPHY_OVERLINE = (0, _styledComponents.css)(["font-size:10px;font-weight:400;line-height:14px;letter-spacing:1.5;"]);
exports.TYPOGRAPHY_OVERLINE = TYPOGRAPHY_OVERLINE;
var BOX_SHADOW_1 = (0, _styledComponents.css)(["box-shadow:0 1px 2px 0 rgba(64,95,113,0.12);"]);
exports.BOX_SHADOW_1 = BOX_SHADOW_1;
var BOX_SHADOW_2 = (0, _styledComponents.css)(["box-shadow:0 2px 4px 0 rgba(64,95,113,0.12);"]);
exports.BOX_SHADOW_2 = BOX_SHADOW_2;
var BOX_SHADOW_3 = (0, _styledComponents.css)(["box-shadow:0 4px 12px 0 rgba(64,95,113,0.12);"]);
exports.BOX_SHADOW_3 = BOX_SHADOW_3;
var colors = {
  liberBlue: LIBER_BLUE,
  liberBlue2: LIBER_BLUE2,
  liberBlue25: LIBER_BLUE25,
  liberBlue50: LIBER_BLUE50,
  lightBlue: LIGHT_BLUE,
  lightBlue2: LIGHT_BLUE2,
  lightBlue25: LIGHT_BLUE25,
  lightBlue50: LIGHT_BLUE50,
  lightBlue75: LIGHT_BLUE75,
  darkBlue: DARK_BLUE,
  darkBlue2: DARK_BLUE2,
  darkBlue25: DARK_BLUE25,
  darkBlue50: DARK_BLUE50,
  petroleum: PETROLEUM,
  darkPetroleum: DARK_PETROLEUM,
  turquoise: TURQUOISE,
  turquoise2: TURQUOISE2,
  turquoise25: TURQUOISE25,
  turquoise50: TURQUOISE50,
  turquoiseBlue: TURQUOISE_BLUE,
  turquoiseBlue2: TURQUOISE_BLUE2,
  turquoiseBlue25: TURQUOISE_BLUE25,
  turquoiseBlue50: TURQUOISE_BLUE50,
  turquoiseGreen: TURQUOISE_GREEN,
  turquoiseGreen2: TURQUOISE_GREEN2,
  turquoiseGreen25: TURQUOISE_GREEN25,
  turquoiseGreen50: TURQUOISE_GREEN50,
  darkTurquoise: DARK_TURQUOISE,
  red: RED,
  red2: RED2,
  red25: RED25,
  red50: RED50,
  lightRed: LIGHT_RED,
  yellow: YELLOW,
  lightYellow: LIGHT_YELLOW,
  darkYellow: DARK_YELLOW,
  yellow2: YELLOW2,
  yellow25: YELLOW25,
  yellow50: YELLOW50,
  lightGreen: LIGHT_GREEN,
  lightGreen2: LIGHT_GREEN2,
  lightGreen25: LIGHT_GREEN25,
  lightGreen75: LIGHT_GREEN75,
  darkGreen: DARK_GREEN,
  gray1: GRAY1,
  gray2: GRAY2,
  gray3: GRAY3,
  gray4: GRAY4,
  gray5: GRAY5,
  gray6: GRAY6,
  gray7: GRAY7,
  gray8: GRAY8,
  liberWhite: LIBER_WHITE,
  white: WHITE,
  carrot: CARROT,
  carrot2: CARROT2,
  carrot25: CARROT25,
  carrot50: CARROT50,
  eggplant: EGGPLANT,
  eggplant2: EGGPLANT2,
  eggplant25: EGGPLANT25,
  eggplant50: EGGPLANT50,
  lightText: LIGHT_TEXT,
  lightText70: LIGHT_TEXT70,
  lightText50: LIGHT_TEXT50,
  lightText25: LIGHT_TEXT25,
  darkText: DARK_TEXT,
  darkText70: DARK_TEXT70,
  darkText38: DARK_TEXT38,
  darkText6: DARK_TEXT6,
  primary: PRIMARY,
  primary70: PRIMARY70,
  primary38: PRIMARY38,
  primary6: PRIMARY6,
  darkPrimary: DARK_PRIMARY,
  ripplePrimary: RIPPLE_PRIMARY,
  secondary: SECONDARY,
  darkSecondary: DARK_SECONDARY,
  rippleSecondary: RIPPLE_SECONDARY,
  border: BORDER,
  darkBorder: DARK_BORDER,
  header: HEADER,
  surface: SURFACE,
  generalBackground: GENERAL_BACKGROUND,
  success: SUCCESS,
  darkSuccess: DARK_SUCCESS,
  rippleSuccess: RIPPLE_SUCCESS,
  success70: SUCCESS70,
  success38: SUCCESS38,
  success6: SUCCESS6,
  alert: ALERT,
  darkAlert: DARK_ALERT,
  rippleAlert: RIPPLE_ALERT,
  alert70: ALERT70,
  alert38: ALERT38,
  alert6: ALERT6,
  error: ERROR,
  darkError: DARK_ERROR,
  rippleError: RIPPLE_ERROR,
  error70: ERROR70,
  error38: ERROR38,
  error6: ERROR6
};
exports.colors = colors;
var typography = {
  h1: TYPOGRAPHY_H1,
  h2: TYPOGRAPHY_H2,
  h3: TYPOGRAPHY_H3,
  h4: TYPOGRAPHY_H4,
  h5: TYPOGRAPHY_H5,
  h6: TYPOGRAPHY_H6,
  subhead: TYPOGRAPHY_SUBHEAD,
  body: TYPOGRAPHY_BODY,
  button: TYPOGRAPHY_BUTTON,
  captionMD: TYPOGRAPHY_CAPTION_MD,
  caption: TYPOGRAPHY_CAPTION,
  overlineMD: TYPOGRAPHY_OVERLINE_MD,
  overline: TYPOGRAPHY_OVERLINE
};
var boxShadows = {
  1: BOX_SHADOW_1,
  2: BOX_SHADOW_2,
  3: BOX_SHADOW_3
};
var fontSizes = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  small: SMALL,
  mobileSmall: MOBILE_SMALL,
  mobileMedium: MOBILE_MEDIUM,
  mobileLarge: MOBILE_LARGE
};
var fontWeights = {
  regular: REGULAR,
  medium: MEDIUM,
  bold: BOLD,
  black: BLACK
};
var _default = {
  colors: colors,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  typography: typography,
  boxShadows: boxShadows,
  fontFamily: FONT_FAMILY
};
exports["default"] = _default;