"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MOBILE_LARGE = exports.MOBILE_MEDIUM = exports.MOBILE_SMALL = exports.SMALL = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.BLACK = exports.BOLD = exports.MEDIUM = exports.REGULAR = exports.FONT_FAMILY = exports.LIGHT_GREEN_GRAPH = exports.LIGHT_GREEN_2 = exports.LIGHT_GREEN_1 = exports.BLUISH_BLACK = exports.BLUISH_DARK_GREY = exports.BLUISH_MEDIUM_DARK_GREY = exports.BLUISH_MEDIUM_GREY = exports.BLUISH_MEDIUM_LIGHT_GREY = exports.BLUISH_LIGHT_GREY = exports.AMARELO_WARNING = exports.VERMELHO_HOVER = exports.VERMELHO_DANGER = exports.VERDE_HOVER = exports.VERDE_PRINCIPAL = exports.TRANSPARENTE = exports.PRETO_LIBER = exports.DASHBOARD_CINZA_ESCURO = exports.CINZA_CLARO_2 = exports.CINZA_CLARO = exports.CINZA_MEDIO_2 = exports.CINZA_MEDIO = exports.CINZA_ESCURO = exports.BRANCO_LIBER = exports.BRANCO = exports.AZUL_ACTION = exports.AZUL_HOVER = exports.AZUL_LIBER_ALT = exports.AZUL_LIBER = exports.MEDIUM_LIGHT_LIBER_BLUE = exports.LIGHT_LIBER_BLUE = void 0;

var _methods = require("./methods");

var _LiberV = require("./LiberV4");

var LIGHT_LIBER_BLUE = '#E3F5FF';
exports.LIGHT_LIBER_BLUE = LIGHT_LIBER_BLUE;
var MEDIUM_LIGHT_LIBER_BLUE = '#BEE6FF';
exports.MEDIUM_LIGHT_LIBER_BLUE = MEDIUM_LIGHT_LIBER_BLUE;
var AZUL_LIBER = '#009dff';
exports.AZUL_LIBER = AZUL_LIBER;
var AZUL_LIBER_ALT = '#00ccff';
exports.AZUL_LIBER_ALT = AZUL_LIBER_ALT;
var AZUL_HOVER = '#007ecc';
exports.AZUL_HOVER = AZUL_HOVER;
var AZUL_ACTION = '#4cbaff';
exports.AZUL_ACTION = AZUL_ACTION;
var BRANCO = '#ffffff';
exports.BRANCO = BRANCO;
var BRANCO_LIBER = '#fafafa';
exports.BRANCO_LIBER = BRANCO_LIBER;
var CINZA_ESCURO = '#717171';
exports.CINZA_ESCURO = CINZA_ESCURO;
var CINZA_MEDIO = '#a4a4a4';
exports.CINZA_MEDIO = CINZA_MEDIO;
var CINZA_MEDIO_2 = '#cecece';
exports.CINZA_MEDIO_2 = CINZA_MEDIO_2;
var CINZA_CLARO = '#f7f7f7';
exports.CINZA_CLARO = CINZA_CLARO;
var CINZA_CLARO_2 = '#f3f3f3';
exports.CINZA_CLARO_2 = CINZA_CLARO_2;
var DASHBOARD_CINZA_ESCURO = '#9898ae';
exports.DASHBOARD_CINZA_ESCURO = DASHBOARD_CINZA_ESCURO;
var PRETO_LIBER = '#4e4e4e';
exports.PRETO_LIBER = PRETO_LIBER;
var TRANSPARENTE = 'transparent';
exports.TRANSPARENTE = TRANSPARENTE;
var VERDE_PRINCIPAL = '#13CE66';
exports.VERDE_PRINCIPAL = VERDE_PRINCIPAL;
var VERDE_HOVER = '#0DAB53';
exports.VERDE_HOVER = VERDE_HOVER;
var VERMELHO_DANGER = '#DC3545';
exports.VERMELHO_DANGER = VERMELHO_DANGER;
var VERMELHO_HOVER = '#bd2130';
exports.VERMELHO_HOVER = VERMELHO_HOVER;
var AMARELO_WARNING = '#ffdb6a';
exports.AMARELO_WARNING = AMARELO_WARNING;
var BLUISH_LIGHT_GREY = '#f1f5f7';
exports.BLUISH_LIGHT_GREY = BLUISH_LIGHT_GREY;
var BLUISH_MEDIUM_LIGHT_GREY = '#ebf1f3';
exports.BLUISH_MEDIUM_LIGHT_GREY = BLUISH_MEDIUM_LIGHT_GREY;
var BLUISH_MEDIUM_GREY = '#dde8ec';
exports.BLUISH_MEDIUM_GREY = BLUISH_MEDIUM_GREY;
var BLUISH_MEDIUM_DARK_GREY = '#c7cfd3';
exports.BLUISH_MEDIUM_DARK_GREY = BLUISH_MEDIUM_DARK_GREY;
var BLUISH_DARK_GREY = '#7e8d95';
exports.BLUISH_DARK_GREY = BLUISH_DARK_GREY;
var BLUISH_BLACK = '#496072';
exports.BLUISH_BLACK = BLUISH_BLACK;
var LIGHT_GREEN_1 = '#B0F1E2';
exports.LIGHT_GREEN_1 = LIGHT_GREEN_1;
var LIGHT_GREEN_2 = '#92E6B8';
exports.LIGHT_GREEN_2 = LIGHT_GREEN_2;
var LIGHT_GREEN_GRAPH = '#2DE8BF';
exports.LIGHT_GREEN_GRAPH = LIGHT_GREEN_GRAPH;
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
var colors = {
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
  v2: _LiberV.colors
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
var accordion = {
  actionBorderTopOpen: AZUL_LIBER,
  actionBorderTopClosed: PRETO_LIBER,
  boxBackgroundOpen: BRANCO,
  boxBackgroundClosed: CINZA_CLARO,
  boxBackgroundHover: CINZA_CLARO_2,
  boxBorderOpen: BRANCO,
  boxBorderClosed: 'rgba(150, 150, 150, 0.18)'
};
var actionDisplay = {
  value: {
    fontFamily: FONT_FAMILY,
    fontSize: '28px',
    // Doesn't have a value in the StyleGuide.
    fontWeight: BOLD,
    color: CINZA_ESCURO
  },
  label: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: REGULAR,
    color: CINZA_ESCURO
  },
  display: {
    background: BRANCO,
    hover: {
      background: 'rgba(230,230,230, 0.2)',
      value: AZUL_ACTION,
      label: AZUL_ACTION
    }
  }
};
var barChart = {
  separator: BLUISH_MEDIUM_GREY,
  color: LIGHT_GREEN_GRAPH,
  xAxis: {
    stroke: BLUISH_MEDIUM_GREY,
    tick: BLUISH_DARK_GREY,
    fontFamily: FONT_FAMILY,
    fontSize: MOBILE_MEDIUM,
    fontWeight: MEDIUM
  },
  yAxis: {
    grid: BLUISH_MEDIUM_GREY,
    tick: BLUISH_DARK_GREY,
    fontFamily: FONT_FAMILY,
    fontSize: {
      small: SMALL,
      large: P
    },
    fontWeight: MEDIUM
  },
  slider: {
    background: BRANCO,
    border: BLUISH_MEDIUM_GREY
  },
  timeComponents: {
    label: AZUL_LIBER,
    line: AZUL_LIBER,
    markedDay: AZUL_LIBER,
    rect: BLUISH_MEDIUM_GREY
  }
};
var barDisplay = {
  value: {
    fontFamily: FONT_FAMILY,
    fontSizeSmall: H3,
    fontSizeLarge: H2,
    fontWeight: REGULAR,
    color: CINZA_ESCURO
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: MEDIUM,
    color: CINZA_ESCURO
  },
  bar: '#a7a7a7'
};
var buttons = {
  base: {
    ripple: 'rgba(206, 206, 206, 0.5)',
    background: CINZA_MEDIO,
    backgroundHover: CINZA_ESCURO,
    color: BRANCO
  },
  disabled: {
    background: CINZA_MEDIO,
    color: BRANCO
  },
  primary: {
    ripple: 'rgba(0,157,255, 0.5)',
    background: AZUL_LIBER,
    backgroundHover: AZUL_HOVER,
    color: BRANCO
  },
  secondary: {
    ripple: 'rgba(0,157,255, 0.5)',
    background: BRANCO,
    backgroundHover: AZUL_HOVER,
    border: AZUL_LIBER,
    color: AZUL_LIBER,
    colorHover: BRANCO,
    borderHover: 'rgba(0,157,255, 0.5)'
  },
  success: {
    ripple: 'rgba(19,206,102, 0.5)',
    background: VERDE_PRINCIPAL,
    backgroundHover: VERDE_HOVER,
    color: BRANCO
  },
  danger: {
    background: VERMELHO_DANGER,
    backgroundHover: VERMELHO_HOVER
  }
};
var calendar = {
  biggerDot: BRANCO,
  dot: CINZA_MEDIO_2,
  dataContainer: CINZA_ESCURO,
  tooltip: {
    background: BRANCO,
    color: CINZA_ESCURO
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
      fontSize: MOBILE_MEDIUM
    },
    disabled: 'rgb(113,113,113, 0.34)',
    "default": CINZA_ESCURO,
    background: "linear-gradient(to bottom, ".concat(AZUL_LIBER_ALT, ", ").concat(AZUL_LIBER, ")"),
    link: {
      today: BRANCO,
      disabled: 'rgb(113,113,113, 0.34)',
      "default": CINZA_ESCURO,
      background: "linear-gradient(to bottom, ".concat(AZUL_LIBER_ALT, ", ").concat(AZUL_LIBER, ")")
    }
  },
  month: {
    color: CINZA_ESCURO,
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: MEDIUM
  },
  week: {
    color: AZUL_LIBER,
    fontFamily: FONT_FAMILY,
    fontWeight: BOLD,
    fontSizeLarge: H5,
    fontSizeSmall: MOBILE_MEDIUM,
    fontSize: MOBILE_MEDIUM
  },
  filterRow: CINZA_ESCURO,
  filterLabel: CINZA_ESCURO,
  left: AZUL_LIBER,
  right: AZUL_LIBER
};
var card = {
  background: BRANCO,
  border: CINZA_CLARO_2,
  title: {
    background: AZUL_LIBER,
    color: BRANCO
  },
  header: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: MEDIUM,
    background: BRANCO_LIBER,
    color: CINZA_ESCURO
  },
  footer: {
    background: BRANCO_LIBER
  },
  listItem: {
    hover: 'rgba(230, 230, 230, 0.5)'
  }
};
var chartContainer = {
  defaultColors: ['#18d8ee', LIGHT_GREEN_GRAPH, '#537e86', '#40b7c9']
};
var checkbox = {
  label: CINZA_MEDIO,
  color: AZUL_LIBER,
  border: CINZA_MEDIO_2,
  background: BRANCO,
  v2: {
    label: _LiberV.colors.gray3,
    color: _LiberV.colors.liberBlue,
    border: _LiberV.colors.gray3,
    background: _LiberV.colors.liberWhite
  }
};
var dialog = {
  background: CINZA_ESCURO,
  card: BRANCO,
  header: CINZA_ESCURO,
  separator: CINZA_CLARO_2
};
var dropdown = {
  button: {
    color: CINZA_ESCURO,
    hover: 'rgba(230, 230, 230, 0.3)',
    caret: AZUL_LIBER,
    fontFamily: FONT_FAMILY,
    fontWeight: REGULAR,
    fontSizeSmall: P,
    fontSizeLarge: '22px'
  },
  label: {
    background: BRANCO,
    border: CINZA_CLARO_2,
    color: CINZA_ESCURO
  },
  list: {
    background: BRANCO,
    border: 'rgba(230, 230, 230, 0.2)'
  },
  menu: {
    icon: DASHBOARD_CINZA_ESCURO,
    option: {
      background: BRANCO,
      color: CINZA_MEDIO,
      hover: {
        background: CINZA_CLARO_2,
        color: AZUL_LIBER
      }
    }
  },
  option: {
    background: BRANCO,
    selected: {
      background: 'rgba(223, 227, 235, 0.3)',
      color: AZUL_LIBER
    },
    unselected: {
      background: BRANCO,
      color: CINZA_ESCURO
    },
    hover: {
      background: AZUL_LIBER,
      color: BRANCO
    }
  }
};
var dropzone = {
  color: CINZA_MEDIO
};
var fields = {
  disabled: (0, _methods.hexToRgb)(CINZA_MEDIO, 0.3),
  inactive: CINZA_CLARO_2,
  primary: AZUL_LIBER,
  secondary: CINZA_MEDIO,
  hover: BRANCO,
  helper: CINZA_MEDIO_2,
  caret: {
    circle: CINZA_CLARO_2,
    selected: PRETO_LIBER,
    unselected: CINZA_MEDIO
  },
  select: {
    "default": BRANCO_LIBER,
    focused: AZUL_LIBER,
    selected: CINZA_CLARO_2,
    label: {
      background: CINZA_CLARO_2,
      color: CINZA_ESCURO
    }
  },
  v2: {
    text: _LiberV.colors.petroleum,
    danger: _LiberV.colors.red,
    inactive: _LiberV.colors.gray3,
    primary: _LiberV.colors.liberBlue,
    secondary: _LiberV.colors.gray2,
    hover: _LiberV.colors.white,
    helper: _LiberV.colors.gray3,
    caret: {
      circle: _LiberV.colors.gray3,
      selected: _LiberV.colors.petroleum,
      unselected: _LiberV.colors.gray2
    },
    select: {
      "default": _LiberV.colors.liberWhite,
      focused: _LiberV.colors.liberBlue,
      selected: _LiberV.colors.gray3,
      label: {
        background: _LiberV.colors.gray3,
        color: _LiberV.colors.gray4
      }
    }
  }
};
var infoLabel = {
  color: CINZA_MEDIO,
  fill: CINZA_MEDIO
};
var labeledContainer = {
  color: CINZA_MEDIO
};
var loadingSpinner = {
  color: PRETO_LIBER
};
var pieChart = {
  tooltip: AZUL_LIBER,
  flyout: {
    fill: BRANCO_LIBER,
    stroke: CINZA_MEDIO_2
  },
  colorScale: ['#18d8ee', '#537e86', LIGHT_GREEN_GRAPH, '#40b7c9']
};
var progressBar = {
  background: BRANCO_LIBER,
  label: PRETO_LIBER,
  step: {
    active: AZUL_LIBER,
    complete: AZUL_ACTION,
    inactive: CINZA_MEDIO
  }
};
var radioButton = {
  label: _LiberV.colors.gray3,
  color: _LiberV.colors.lightBlue,
  focus: _LiberV.colors.lightBlue,
  emptyBorder: _LiberV.colors.gray2,
  emptyBg: _LiberV.colors.liberWhite
};
var simpleDisplay = {
  label: {
    fontFamily: FONT_FAMILY,
    fontSize: H5,
    fontWeight: REGULAR,
    color: CINZA_ESCURO
  },
  value: {
    fontFamily: FONT_FAMILY,
    fontSize: '28px',
    // Doesn't have a value in the StyleGuide.
    fontWeight: BOLD,
    color: CINZA_ESCURO
  },
  container: {
    color: CINZA_ESCURO,
    highlight: {
      background: 'rgba(230,230,230, 0.2)',
      label: AZUL_ACTION,
      value: AZUL_ACTION
    },
    hover: {
      background: 'rgba(230,230,230, 0.2)',
      label: AZUL_ACTION,
      value: AZUL_ACTION
    }
  }
};
var tabs = {
  slider: AZUL_LIBER,
  label: {
    active: AZUL_LIBER,
    common: CINZA_ESCURO,
    background: TRANSPARENTE,
    border: TRANSPARENTE,
    fontFamily: FONT_FAMILY,
    fontWeight: MEDIUM,
    fontSize: H5
  }
};
var table = {
  header: {
    border: AZUL_LIBER,
    color: AZUL_LIBER
  },
  body: {
    color: PRETO_LIBER
  },
  row: {
    even: CINZA_CLARO,
    odd: TRANSPARENTE,
    hover: CINZA_CLARO_2,
    selected: {
      even: 'rgba(221, 241, 255, 0.5)',
      odd: 'rgba(235, 247, 255, 0.4)',
      hover: 'rgba(221, 241, 255, 0.7)'
    }
  },
  check: {
    border: AZUL_LIBER,
    checked: VERDE_PRINCIPAL,
    unchecked: TRANSPARENTE,
    icon: BRANCO
  }
};
var tooltip = {
  fill: CINZA_MEDIO,
  color: CINZA_ESCURO,
  hover: AZUL_LIBER,
  floatBgPrimary: BRANCO,
  floatBgSecondary: BRANCO_LIBER,
  floatPrimary: AZUL_LIBER
};
var toast = {
  background: BRANCO,
  color: CINZA_ESCURO,
  info: AZUL_LIBER,
  success: VERDE_PRINCIPAL,
  error: VERMELHO_DANGER,
  warning: AMARELO_WARNING,
  empty: CINZA_ESCURO
};
var alert = {
  background: {
    "default": _LiberV.colors.lightBlue75,
    success: _LiberV.colors.lightGreen75,
    warning: _LiberV.colors.lightYellow,
    danger: _LiberV.colors.lightRed
  },
  border: {
    "default": _LiberV.colors.liberBlue,
    success: _LiberV.colors.lightGreen,
    warning: _LiberV.colors.yellow,
    danger: _LiberV.colors.red
  }
};
var _default = {
  accordion: accordion,
  actionDisplay: actionDisplay,
  alert: alert,
  barChart: barChart,
  barDisplay: barDisplay,
  buttons: buttons,
  calendar: calendar,
  card: card,
  chartContainer: chartContainer,
  checkbox: checkbox,
  dialog: dialog,
  dropdown: dropdown,
  dropzone: dropzone,
  fields: fields,
  infoLabel: infoLabel,
  labeledContainer: labeledContainer,
  loadingSpinner: loadingSpinner,
  pieChart: pieChart,
  progressBar: progressBar,
  radioButton: radioButton,
  simpleDisplay: simpleDisplay,
  tabs: tabs,
  table: table,
  tooltip: tooltip,
  toast: toast,
  colors: colors,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  fontFamily: FONT_FAMILY
};
exports["default"] = _default;