export const PRIMARY = '#009dff';
export const SECONDARY = '#002874';
export const SUCCESS = '#008000';
export const ERROR = '#da2d16';
export const WHITE = '#f9fafa';
export const BLACK = '#23272f';

const TITLE_FONT_FAMILY = 'Open Sans';
const TEXT_FONT_FAMILY = 'Nunito';

const colors = {
  primary: PRIMARY,
  secondary: SECONDARY,
  success: SUCCESS,
  error: ERROR,
  white: WHITE,
  black: BLACK,
};

const fonts = {
  title: TITLE_FONT_FAMILY,
  text: TEXT_FONT_FAMILY,
};

const fontSizes = {
  title: {
    small: '20px',
    regular: '24px',
    large: '32px',
    xlarge: '36px',
  },
  text: {
    small: '12px',
    regular: '14px',
    large: '16px',
    xlarge: '18px',
  },
};

const opacities = {
  typography: {
    light: 0.3,
    normal: 0.64,
    dark: 0.87,
  },
  button: {
    solid: {
      ripple: 0.32,
      pressed: 0.32,
      focus: 0.24,
      hover: 0.08,
    },
    flat: {
      ripple: 0.12,
      pressed: 0.12,
      focus: 0.12,
      hover: 0.06,
    },
  },
};

export default {
  colors,
  fonts,
  fontSizes,
  opacities,
};
