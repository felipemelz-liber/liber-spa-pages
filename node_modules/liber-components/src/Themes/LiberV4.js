import { css } from 'styled-components';
import { hexToRgb } from './methods';

export const LIBER_BLUE = '#009dff';
export const LIBER_BLUE2 = '#f9fcff';
export const LIBER_BLUE25 = '#bee6ff';
export const LIBER_BLUE50 = '#7ecdff';

export const LIGHT_BLUE = '#4cbaff';
export const LIGHT_BLUE2 = '#faddff';
export const LIGHT_BLUE25 = '#d1edff';
export const LIGHT_BLUE50 = '#a4dcff';
export const LIGHT_BLUE75 = '#f0f9ff';

export const DARK_BLUE = '#007ecc';
export const DARK_BLUE2 = '#f9fbfd';
export const DARK_BLUE25 = '#bedef2';
export const DARK_BLUE50 = '#7e8bde5';

export const PETROLEUM = '#4b6f85';
export const DARK_PETROLEUM = '#3C596B';

export const TURQUOISE = '#40b7c9';
export const TURQUOISE2 = '#fafdfd';
export const TURQUOISE25 = '#ceecf1';
export const TURQUOISE50 = '#9edae3';

export const TURQUOISE_BLUE = '#18d8ee';
export const TURQUOISE_BLUE2 = '#f9fefe';
export const TURQUOISE_BLUE25 = '#c4f5fa';
export const TURQUOISE_BLUE50 = '#8aebf6';

export const TURQUOISE_GREEN = '#2de8bf';
export const TURQUOISE_GREEN2 = '#fafefd';
export const TURQUOISE_GREEN25 = '#c9f9ee';
export const TURQUOISE_GREEN50 = '#2de88f';

export const DARK_TURQUOISE = '#537e86';

export const RED = '#dc3545';
export const RED2 = '#fefafa';
export const RED25 = '#f6cbcf';
export const RED50 = '#ed99a1';

export const LIGHT_RED = '#fdf3f4';

export const YELLOW = '#fabe00';
export const LIGHT_YELLOW = '#fffbf0';
export const DARK_YELLOW = '#F0B600';
export const YELLOW2 = '#fefdf9';
export const YELLOW25 = '#fdeebe';
export const YELLOW50 = '#fcse7e';

export const LIGHT_GREEN = '#13ce66';
export const LIGHT_GREEN2 = '#f9fdfb';
export const LIGHT_GREEN25 = '#c3f2d9';
export const LIGHT_GREEN75 = '#f1fcf6';

export const DARK_GREEN = '#00a345';

export const GRAY1 = '#eaf7ff';
export const GRAY2 = '#dce8f0';
export const GRAY3 = '#c6d1d8';
export const GRAY4 = '#6287a7';
export const GRAY5 = '#ecf0f3';
export const GRAY6 = '#d2dbe0';
export const GRAY7 = '#f9fafa';
export const GRAY8 = '#f6f8f9';

export const LIBER_WHITE = '#fafdff';
export const WHITE = '#ffffff';

export const CARROT = '#fa8a00';
export const CARROT2 = '#faf7f4';
export const CARROT25 = '#faddba';
export const CARROT50 = '#fac17c';

export const EGGPLANT = '#a15df7';
export const EGGPLANT2 = '#fcfbfe';
export const EGGPLANT25 = '#e7d5fc';
export const EGGPLANT50 = '#cfadfa';

/* LIGHT TEXT */
export const LIGHT_TEXT = '#fafdff';

export const LIGHT_TEXT70 = hexToRgb(LIGHT_TEXT, '0.7');

export const LIGHT_TEXT50 = hexToRgb(LIGHT_TEXT, '0.5');

export const LIGHT_TEXT25 = hexToRgb(LIGHT_TEXT, '0.25');

/* DARK TEXT */
export const DARK_TEXT = '#405f71';
export const DARK_TEXT70 = '#798e9b';
export const DARK_TEXT38 = '#b6c2c9';
export const DARK_TEXT6 = '#f4f5f7';

/* PRIMARY */
export const PRIMARY = LIBER_BLUE;
export const DARK_PRIMARY = '#0095f2';
export const RIPPLE_PRIMARY = '#008de5';

export const PRIMARY70 = '#4cbaff';
export const PRIMARY38 = '#9edaff';
export const PRIMARY6 = '#f0f9ff';

/* SECONDARY */

export const SECONDARY = '#f0f2f4';
export const DARK_SECONDARY = '#e7e9ea';
export const RIPPLE_SECONDARY = '#dddfe1';

/* SECONDARY */

/* SURFACES */
export const BORDER = '#e8ebee';
export const DARK_BORDER = '#cdd7df';

export const HEADER = '#f9fafa';

export const SURFACE = '#fafdff';

export const GENERAL_BACKGROUND = WHITE;

/* SUCCESS */

export const SUCCESS = LIGHT_GREEN;
export const DARK_SUCCESS = '#12c461';
export const RIPPLE_SUCCESS = '#11b95c';

export const SUCCESS70 = '#59dc93';
export const SUCCESS38 = '#a5ecc5';
export const SUCCESS6 = '#f1fcf6';

/* ALERT */

export const ALERT = YELLOW;
export const DARK_ALERT = '#edb400';
export const RIPPLE_ALERT = '#e1ab00';

export const ALERT70 = '#fbd14c';
export const ALERT38 = '#fde69e';
export const ALERT6 = '#fffbf0';

/* ERROR */

export const ERROR = RED;
export const DARK_ERROR = '#d13241';
export const RIPPLE_ERROR = '#c6303e';

export const ERROR70 = '#e6717c';
export const ERROR38 = '#f2b2b8';
export const ERROR6 = '#fdf3f4';

export const FONT_FAMILY = 'Roboto';

export const REGULAR = '400';
export const MEDIUM = '500';
export const BOLD = '700';
export const BLACK = '900';

export const H1 = '48px';
export const H2 = '40px';
export const H3 = '32px';
export const H4 = '24px';
export const H5 = '20px';
export const H6 = '18px';
export const P = '16px';
export const SMALL = '10px';
export const MOBILE_SMALL = '11px';
export const MOBILE_MEDIUM = '12px';
export const MOBILE_LARGE = '14px';

export const TYPOGRAPHY_H1 = css`
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
`;
export const TYPOGRAPHY_H2 = css`
  font-size: 36px;
  font-weight: 600;
  line-height: 50px;
`;

export const TYPOGRAPHY_H3 = css`
  font-size: 32px;
  font-weight: 600;
  line-height: 45px;
`;

export const TYPOGRAPHY_H4 = css`
  font-size: 28px;
  font-weight: 600;
  line-height: 39px;
`;

export const TYPOGRAPHY_H5 = css`
  font-size: 24px;
  font-weight: 600;
  line-height: 37px;
`;

export const TYPOGRAPHY_H6 = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

export const TYPOGRAPHY_SUBHEAD = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const TYPOGRAPHY_BODY = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const TYPOGRAPHY_BUTTON = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.25;
`;

export const TYPOGRAPHY_CAPTION_MD = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 1.4;
`;

export const TYPOGRAPHY_CAPTION = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 1.4;
`;

export const TYPOGRAPHY_OVERLINE_MD = css`
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1.5;
`;

export const TYPOGRAPHY_OVERLINE = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 1.5;
`;

export const BOX_SHADOW_1 = css`
  box-shadow: 0 1px 2px 0 rgba(64, 95, 113, 0.12);
`;

export const BOX_SHADOW_2 = css`
  box-shadow: 0 2px 4px 0 rgba(64, 95, 113, 0.12);
`;

export const BOX_SHADOW_3 = css`
  box-shadow: 0 4px 12px 0 rgba(64, 95, 113, 0.12);
`;

export const colors = {
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
  error6: ERROR6,
};

const typography = {
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
  overline: TYPOGRAPHY_OVERLINE,
};

const boxShadows = {
  1: BOX_SHADOW_1,
  2: BOX_SHADOW_2,
  3: BOX_SHADOW_3,
};

const fontSizes = {
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
  mobileLarge: MOBILE_LARGE,
};

const fontWeights = {
  regular: REGULAR,
  medium: MEDIUM,
  bold: BOLD,
  black: BLACK,
};

export default {
  colors,
  fontSizes,
  fontWeights,
  typography,
  boxShadows,
  fontFamily: FONT_FAMILY,
};
