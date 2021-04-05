"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BLACK = exports.WHITE = exports.ERROR = exports.SUCCESS = exports.SECONDARY = exports.PRIMARY = void 0;
var PRIMARY = '#009dff';
exports.PRIMARY = PRIMARY;
var SECONDARY = '#002874';
exports.SECONDARY = SECONDARY;
var SUCCESS = '#008000';
exports.SUCCESS = SUCCESS;
var ERROR = '#da2d16';
exports.ERROR = ERROR;
var WHITE = '#f9fafa';
exports.WHITE = WHITE;
var BLACK = '#23272f';
exports.BLACK = BLACK;
var TITLE_FONT_FAMILY = 'Open Sans';
var TEXT_FONT_FAMILY = 'Nunito';
var colors = {
  primary: PRIMARY,
  secondary: SECONDARY,
  success: SUCCESS,
  error: ERROR,
  white: WHITE,
  black: BLACK
};
var fonts = {
  title: TITLE_FONT_FAMILY,
  text: TEXT_FONT_FAMILY
};
var fontSizes = {
  title: {
    small: '20px',
    regular: '24px',
    large: '32px',
    xlarge: '36px'
  },
  text: {
    small: '12px',
    regular: '14px',
    large: '16px',
    xlarge: '18px'
  }
};
var opacities = {
  typography: {
    light: 0.3,
    normal: 0.64,
    dark: 0.87
  },
  button: {
    solid: {
      ripple: 0.32,
      pressed: 0.32,
      focus: 0.24,
      hover: 0.08
    },
    flat: {
      ripple: 0.12,
      pressed: 0.12,
      focus: 0.12,
      hover: 0.06
    }
  }
};
var _default = {
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  opacities: opacities
};
exports["default"] = _default;