import { hexToRgb } from './methods';
import { colors as v4Colors } from './LiberV4';

export const LIGHT_LIBER_BLUE = '#E3F5FF';
export const MEDIUM_LIGHT_LIBER_BLUE = '#BEE6FF';
export const AZUL_LIBER = '#009dff';
export const AZUL_LIBER_ALT = '#00ccff';
export const AZUL_HOVER = '#007ecc';
export const AZUL_ACTION = '#4cbaff';
export const BRANCO = '#ffffff';
export const BRANCO_LIBER = '#fafafa';
export const CINZA_ESCURO = '#717171';
export const CINZA_MEDIO = '#a4a4a4';
export const CINZA_MEDIO_2 = '#cecece';
export const CINZA_CLARO = '#f7f7f7';
export const CINZA_CLARO_2 = '#f3f3f3';
export const DASHBOARD_CINZA_ESCURO = '#9898ae';
export const PRETO_LIBER = '#4e4e4e';
export const TRANSPARENTE = 'transparent';
export const VERDE_PRINCIPAL = '#13CE66';
export const VERDE_HOVER = '#0DAB53';
export const VERMELHO_DANGER = '#DC3545';
export const VERMELHO_HOVER = '#bd2130';
export const AMARELO_WARNING = '#ffdb6a';

export const BLUISH_LIGHT_GREY = '#f1f5f7';
export const BLUISH_MEDIUM_LIGHT_GREY = '#ebf1f3';
export const BLUISH_MEDIUM_GREY = '#dde8ec';
export const BLUISH_MEDIUM_DARK_GREY = '#c7cfd3';
export const BLUISH_DARK_GREY = '#7e8d95';
export const BLUISH_BLACK = '#496072';

export const LIGHT_GREEN_1 = '#B0F1E2';
export const LIGHT_GREEN_2 = '#92E6B8';
export const LIGHT_GREEN_GRAPH = '#2DE8BF';

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

const colors = {
  lightLiberBlue: LIGHT_LIBER_BLUE,
  mediumLightLiberBlue: MEDIUM_LIGHT_LIBER_BLUE,
  liberBlue: AZUL_LIBER,
  liberBlueAlt: AZUL_LIBER_ALT,
  hoverBlue: AZUL_HOVER,
  actionBlue: AZUL_ACTION,
  white: BRANCO,
  liberWhite: BRANCO_LIBER,
  darkGrey: CINZA_ESCURO,
  mediumGrey: CINZA_MEDIO,
  mediumGrey2: CINZA_MEDIO_2,
  lightGrey: CINZA_CLARO,
  lightGrey2: CINZA_CLARO_2,
  dashboardDarkGrey: DASHBOARD_CINZA_ESCURO,
  liberBlack: PRETO_LIBER,
  transparent: TRANSPARENTE,
  successGreen: VERDE_PRINCIPAL,
  hoverGreen: VERDE_HOVER,
  dangerRed: VERMELHO_DANGER,
  hoverRed: VERMELHO_HOVER,
  warningYellow: AMARELO_WARNING,
  bluishLightGrey: BLUISH_LIGHT_GREY,
  bluishMediumLightGrey: BLUISH_MEDIUM_LIGHT_GREY,
  bluishMediumGrey: BLUISH_MEDIUM_GREY,
  bluishMediumDarkGrey: BLUISH_MEDIUM_DARK_GREY,
  bluishDarkGrey: BLUISH_DARK_GREY,
  bluishBlack: BLUISH_BLACK,
  lightGreen1: LIGHT_GREEN_1,
  lightGreen2: LIGHT_GREEN_2,
  lightGreenGraph: LIGHT_GREEN_GRAPH,
  v2: v4Colors,
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

const accordion = {
  actionBorderTopOpen: AZUL_LIBER,
  actionBorderTopClosed: PRETO_LIBER,
  boxBackgroundOpen: BRANCO,
  boxBackgroundClosed: CINZA_CLARO,
  boxBackgroundHover: CINZA_CLARO_2,
  boxBorderOpen: BRANCO,
  boxBorderClosed: 'rgba(150, 150, 150, 0.18)',
};

const actionDisplay = {
  value: {
    fontFamily: FONT_FAMILY,
    fontSize: '28px', // Doesn't have a value in the StyleGuide.
    fontWeight: BOLD,
    color: CINZA_ESCURO,
  },
  label: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: REGULAR,
    color: CINZA_ESCURO,
  },
  display: {
    background: BRANCO,
    hover: {
      background: 'rgba(230,230,230, 0.2)',
      value: AZUL_ACTION,
      label: AZUL_ACTION,
    },
  },
};

const barChart = {
  separator: BLUISH_MEDIUM_GREY,
  color: LIGHT_GREEN_GRAPH,
  xAxis: {
    stroke: BLUISH_MEDIUM_GREY,
    tick: BLUISH_DARK_GREY,
    fontFamily: FONT_FAMILY,
    fontSize: MOBILE_MEDIUM,
    fontWeight: MEDIUM,
  },
  yAxis: {
    grid: BLUISH_MEDIUM_GREY,
    tick: BLUISH_DARK_GREY,
    fontFamily: FONT_FAMILY,
    fontSize: {
      small: SMALL,
      large: P,
    },
    fontWeight: MEDIUM,
  },
  slider: {
    background: BRANCO,
    border: BLUISH_MEDIUM_GREY,
  },
  timeComponents: {
    label: AZUL_LIBER,
    line: AZUL_LIBER,
    markedDay: AZUL_LIBER,
    rect: BLUISH_MEDIUM_GREY,
  },
};

const barDisplay = {
  value: {
    fontFamily: FONT_FAMILY,
    fontSizeSmall: H3,
    fontSizeLarge: H2,
    fontWeight: REGULAR,
    color: CINZA_ESCURO,
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: MEDIUM,
    color: CINZA_ESCURO,
  },
  bar: '#a7a7a7',
};

const buttons = {
  base: {
    ripple: 'rgba(206, 206, 206, 0.5)',
    background: CINZA_MEDIO,
    backgroundHover: CINZA_ESCURO,
    color: BRANCO,
  },
  disabled: {
    background: CINZA_MEDIO,
    color: BRANCO,
  },
  primary: {
    ripple: 'rgba(0,157,255, 0.5)',
    background: AZUL_LIBER,
    backgroundHover: AZUL_HOVER,
    color: BRANCO,
  },
  secondary: {
    ripple: 'rgba(0,157,255, 0.5)',
    background: BRANCO,
    backgroundHover: AZUL_HOVER,
    border: AZUL_LIBER,
    color: AZUL_LIBER,
    colorHover: BRANCO,
    borderHover: 'rgba(0,157,255, 0.5)',
  },
  success: {
    ripple: 'rgba(19,206,102, 0.5)',
    background: VERDE_PRINCIPAL,
    backgroundHover: VERDE_HOVER,
    color: BRANCO,
  },
  danger: {
    background: VERMELHO_DANGER,
    backgroundHover: VERMELHO_HOVER,
  },
};

const calendar = {
  biggerDot: BRANCO,
  dot: CINZA_MEDIO_2,
  dataContainer: CINZA_ESCURO,
  tooltip: {
    background: BRANCO,
    color: CINZA_ESCURO,
  },
  date: {
    today: {
      color: BRANCO,
      fontFamily: FONT_FAMILY,
      fontWeight: REGULAR,
      fontWeightHighlight: MEDIUM,
      fontWeightToday: BOLD,
      fontSizeLarge: H5,
      fontSizeSmall: '18px',
      fontSize: MOBILE_MEDIUM,
    },
    disabled: 'rgb(113,113,113, 0.34)',
    default: CINZA_ESCURO,
    background: `linear-gradient(to bottom, ${AZUL_LIBER_ALT}, ${AZUL_LIBER})`,
    link: {
      today: BRANCO,
      disabled: 'rgb(113,113,113, 0.34)',
      default: CINZA_ESCURO,
      background: `linear-gradient(to bottom, ${AZUL_LIBER_ALT}, ${AZUL_LIBER})`,
    },
  },
  month: {
    color: CINZA_ESCURO,
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: MEDIUM,
  },
  week: {
    color: AZUL_LIBER,
    fontFamily: FONT_FAMILY,
    fontWeight: BOLD,
    fontSizeLarge: H5,
    fontSizeSmall: MOBILE_MEDIUM,
    fontSize: MOBILE_MEDIUM,
  },
  filterRow: CINZA_ESCURO,
  filterLabel: CINZA_ESCURO,
  left: AZUL_LIBER,
  right: AZUL_LIBER,
};

const card = {
  background: BRANCO,
  border: CINZA_CLARO_2,
  title: {
    background: AZUL_LIBER,
    color: BRANCO,
  },
  header: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: MEDIUM,
    background: BRANCO_LIBER,
    color: CINZA_ESCURO,
  },
  footer: {
    background: BRANCO_LIBER,
  },
  listItem: {
    hover: 'rgba(230, 230, 230, 0.5)',
  },
};

const chartContainer = {
  defaultColors: ['#18d8ee', LIGHT_GREEN_GRAPH, '#537e86', '#40b7c9'],
};

const checkbox = {
  label: CINZA_MEDIO,
  color: AZUL_LIBER,
  border: CINZA_MEDIO_2,
  background: BRANCO,
  v2: {
    label: v4Colors.gray3,
    color: v4Colors.liberBlue,
    border: v4Colors.gray3,
    background: v4Colors.liberWhite,
  },
};

const dialog = {
  background: CINZA_ESCURO,
  card: BRANCO,
  header: CINZA_ESCURO,
  separator: CINZA_CLARO_2,
};

const dropdown = {
  button: {
    color: CINZA_ESCURO,
    hover: 'rgba(230, 230, 230, 0.3)',
    caret: AZUL_LIBER,
    fontFamily: FONT_FAMILY,
    fontWeight: REGULAR,
    fontSizeSmall: P,
    fontSizeLarge: '22px',
  },
  label: {
    background: BRANCO,
    border: CINZA_CLARO_2,
    color: CINZA_ESCURO,
  },
  list: {
    background: BRANCO,
    border: 'rgba(230, 230, 230, 0.2)',
  },
  menu: {
    icon: DASHBOARD_CINZA_ESCURO,
    option: {
      background: BRANCO,
      color: CINZA_MEDIO,
      hover: {
        background: CINZA_CLARO_2,
        color: AZUL_LIBER,
      },
    },
  },
  option: {
    background: BRANCO,
    selected: {
      background: 'rgba(223, 227, 235, 0.3)',
      color: AZUL_LIBER,
    },
    unselected: {
      background: BRANCO,
      color: CINZA_ESCURO,
    },
    hover: {
      background: AZUL_LIBER,
      color: BRANCO,
    },
  },
};

const dropzone = {
  color: CINZA_MEDIO,
};

const fields = {
  disabled: hexToRgb(CINZA_MEDIO, 0.3),
  inactive: CINZA_CLARO_2,
  primary: AZUL_LIBER,
  secondary: CINZA_MEDIO,
  hover: BRANCO,
  helper: CINZA_MEDIO_2,
  caret: {
    circle: CINZA_CLARO_2,
    selected: PRETO_LIBER,
    unselected: CINZA_MEDIO,
  },
  select: {
    default: BRANCO_LIBER,
    focused: AZUL_LIBER,
    selected: CINZA_CLARO_2,
    label: {
      background: CINZA_CLARO_2,
      color: CINZA_ESCURO,
    },
  },
  v2: {
    text: v4Colors.petroleum,
    danger: v4Colors.red,
    inactive: v4Colors.gray3,
    primary: v4Colors.liberBlue,
    secondary: v4Colors.gray2,
    hover: v4Colors.white,
    helper: v4Colors.gray3,
    caret: {
      circle: v4Colors.gray3,
      selected: v4Colors.petroleum,
      unselected: v4Colors.gray2,
    },
    select: {
      default: v4Colors.liberWhite,
      focused: v4Colors.liberBlue,
      selected: v4Colors.gray3,
      label: {
        background: v4Colors.gray3,
        color: v4Colors.gray4,
      },
    },
  },
};

const infoLabel = {
  color: CINZA_MEDIO,
  fill: CINZA_MEDIO,
};

const labeledContainer = {
  color: CINZA_MEDIO,
};

const loadingSpinner = {
  color: PRETO_LIBER,
};

const pieChart = {
  tooltip: AZUL_LIBER,
  flyout: {
    fill: BRANCO_LIBER,
    stroke: CINZA_MEDIO_2,
  },
  colorScale: ['#18d8ee', '#537e86', LIGHT_GREEN_GRAPH, '#40b7c9'],
};

const progressBar = {
  background: BRANCO_LIBER,
  label: PRETO_LIBER,
  step: {
    active: AZUL_LIBER,
    complete: AZUL_ACTION,
    inactive: CINZA_MEDIO,
  },
};

const radioButton = {
  label: v4Colors.gray3,
  color: v4Colors.lightBlue,
  focus: v4Colors.lightBlue,
  emptyBorder: v4Colors.gray2,
  emptyBg: v4Colors.liberWhite,
};

const simpleDisplay = {
  label: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: REGULAR,
    color: CINZA_ESCURO,
  },
  value: {
    fontFamily: FONT_FAMILY,
    fontSize: '28px', // Doesn't have a value in the StyleGuide.
    fontWeight: BOLD,
    color: CINZA_ESCURO,
  },
  container: {
    color: CINZA_ESCURO,
    highlight: {
      background: 'rgba(230,230,230, 0.2)',
      label: AZUL_ACTION,
      value: AZUL_ACTION,
    },
    hover: {
      background: 'rgba(230,230,230, 0.2)',
      label: AZUL_ACTION,
      value: AZUL_ACTION,
    },
  },
};

const tabs = {
  slider: AZUL_LIBER,
  label: {
    active: AZUL_LIBER,
    common: CINZA_ESCURO,
    background: TRANSPARENTE,
    border: TRANSPARENTE,
    fontFamily: FONT_FAMILY,
    fontWeight: MEDIUM,
    fontSize: H5,
  },
};

const table = {
  header: {
    border: AZUL_LIBER,
    color: AZUL_LIBER,
  },
  body: {
    color: PRETO_LIBER,
  },
  row: {
    even: CINZA_CLARO,
    odd: TRANSPARENTE,
    hover: CINZA_CLARO_2,
    selected: {
      even: 'rgba(221, 241, 255, 0.5)',
      odd: 'rgba(235, 247, 255, 0.4)',
      hover: 'rgba(221, 241, 255, 0.7)',
    },
  },
  check: {
    border: AZUL_LIBER,
    checked: VERDE_PRINCIPAL,
    unchecked: TRANSPARENTE,
    icon: BRANCO,
  },
};

const tooltip = {
  fill: CINZA_MEDIO,
  color: CINZA_ESCURO,
  hover: AZUL_LIBER,
  floatBgPrimary: BRANCO,
  floatBgSecondary: BRANCO_LIBER,
  floatPrimary: AZUL_LIBER,
};

const toast = {
  background: BRANCO,
  color: CINZA_ESCURO,
  info: AZUL_LIBER,
  success: VERDE_PRINCIPAL,
  error: VERMELHO_DANGER,
  warning: AMARELO_WARNING,
  empty: CINZA_ESCURO,
};

const alert = {
  background: {
    default: v4Colors.lightBlue75,
    success: v4Colors.lightGreen75,
    warning: v4Colors.lightYellow,
    danger: v4Colors.lightRed,
  },
  border: {
    default: v4Colors.liberBlue,
    success: v4Colors.lightGreen,
    warning: v4Colors.yellow,
    danger: v4Colors.red,
  },
};

export default {
  accordion,
  actionDisplay,
  alert,
  barChart,
  barDisplay,
  buttons,
  calendar,
  card,
  chartContainer,
  checkbox,
  dialog,
  dropdown,
  dropzone,
  fields,
  infoLabel,
  labeledContainer,
  loadingSpinner,
  pieChart,
  progressBar,
  radioButton,
  simpleDisplay,
  tabs,
  table,
  tooltip,
  toast,
  colors,
  fontSizes,
  fontWeights,
  fontFamily: FONT_FAMILY,
};
