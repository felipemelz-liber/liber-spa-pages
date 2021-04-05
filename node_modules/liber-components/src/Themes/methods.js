import NewTheme, {
  PRIMARY as DEFAULT_PRIMARY,
  WHITE as DEFAULT_WHITE,
  BLACK as DEFAULT_BLACK,
} from './LiberNew';

export const handleTheme = (theme, defaultValue, prop) => {
  if (prop) {
    return prop;
  }
  if (theme) {
    return theme;
  }
  return defaultValue;
};

const toCamelCase = s => (s ? s.replace(/(-\w)/g, m => m[1].toUpperCase()) : s);

export const handleThemeFromObject = (theme = {}, key, defaultValue, prop) => {
  let acc = theme;
  let value = null;
  key.split('.').reduce((prevKey, currKey) => {
    const curr = toCamelCase(currKey);
    const prev = toCamelCase(prevKey);
    if (acc) {
      value = acc[prev] ? acc[prev][curr] : null;
      acc = acc[prev];
      return curr;
    }
    return null;
  });

  return handleTheme(value, defaultValue, prop);
};

export const hexToRgb = (hex, opacity = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}, ${opacity})`
    : hex;
};

export const getColor = (colorKey, defaultValue = '', opacity = 1) => ({
  theme = {},
  color: colorProp,
}) => {
  const { colors } = theme;
  const color = colors ? colors[colorKey || colorProp] : null;
  if (color) {
    return hexToRgb(color, opacity);
  }
  return hexToRgb(defaultValue, opacity);
};

export const getTypographyTones = (color, opacities = []) =>
  color ? opacities.map(opacity => hexToRgb(color, opacity)) : [];

export const getTypographyColor = type => ({ theme = {}, light: lightProp, dark: darkProp }) => {
  const { opacities, colors } = theme;
  const { typography: typographyOpacities } = opacities || {};

  const black = colors && colors.black ? colors.black : DEFAULT_BLACK;
  const { light, normal, dark } = typographyOpacities || {};

  const [colorLight, colorNormal, colorDark] = getTypographyTones(black, [
    light || 0.3,
    normal || 0.64,
    dark || 0.87,
  ]);

  if (lightProp) {
    return colorLight;
  }
  if (darkProp) {
    return colorDark;
  }
  if (type) {
    return type === 'title' ? colorDark : colorNormal;
  }
  return colorNormal;
};

const SOLID_BUTTON_DEFAULT_OPACITIES = {
  ripple: 0.32,
  pressed: 0.32,
  focus: 0.24,
  hover: 0.08,
};

const FLAT_BUTTON_DEFAULT_OPACITIES = {
  ripple: 0.12,
  pressed: 0.12,
  focus: 0.12,
  hover: 0.06,
};

export const getButtonStatesOverlays = (color, isSolid = true) => ({ theme = {} }) => {
  const { opacities, colors } = theme;
  const { button } = opacities || {};
  const { solid, flat } = button || {};

  const { ripple, pressed, focus, hover } = isSolid
    ? solid || SOLID_BUTTON_DEFAULT_OPACITIES
    : flat || FLAT_BUTTON_DEFAULT_OPACITIES;

  const { white, primary } = colors || {};

  const baseColorOverlay = isSolid ? white || DEFAULT_WHITE : color || primary || DEFAULT_PRIMARY;

  return {
    enabled: hexToRgb(baseColorOverlay, 0),
    ripple: hexToRgb(baseColorOverlay, ripple),
    pressed: hexToRgb(baseColorOverlay, pressed),
    focus: hexToRgb(baseColorOverlay, focus),
    hover: hexToRgb(baseColorOverlay, hover),
  };
};

const FONT_FAMILY_TYPES = ['text', 'title'];

export const getFontFamily = (type = 'text') => ({ theme = {} }) => {
  let selectedType = type;
  if (!FONT_FAMILY_TYPES.includes(type)) {
    selectedType = 'text';
  }
  const { fonts } = theme;

  return fonts && fonts[selectedType] ? fonts[selectedType] : NewTheme.fonts[selectedType];
};

const SIZES = ['small', 'regular', 'large', 'xlarge'];

export const getFontSize = (size = 'regular', type = 'text') => ({
  theme = {},
  size: sizeProp,
  small,
  regular,
  large,
  xlarge,
}) => {
  let selectedType = type;
  if (!FONT_FAMILY_TYPES.includes(type)) {
    selectedType = 'text';
  }
  let selectedSize = sizeProp || size;
  if (!SIZES.includes(selectedSize)) {
    selectedSize = 'regular';
  }
  if (small) {
    selectedSize = 'small';
  }
  if (regular) {
    selectedSize = 'regular';
  }
  if (large) {
    selectedSize = 'large';
  }
  if (xlarge) {
    selectedSize = 'xlarge';
  }

  const { fontSizes } = theme;

  const sizes =
    fontSizes && fontSizes[selectedType]
      ? fontSizes[selectedType]
      : NewTheme.fontSizes[selectedType];

  return sizes ? sizes[selectedSize] : sizes.regular;
};

const LINE_HEIGHT_MULTIPLIER = 1.5;

export const getLineHeight = (size = 'regular', type = 'text') => ({
  theme = {},
  size: sizeProp,
  small,
  regular,
  large,
  xlarge,
}) => {
  let selectedType = type;
  if (!FONT_FAMILY_TYPES.includes(type)) {
    selectedType = 'text';
  }
  let selectedSize = sizeProp || size;
  if (!SIZES.includes(selectedSize)) {
    selectedSize = 'regular';
  }
  if (small) {
    selectedSize = 'small';
  }
  if (regular) {
    selectedSize = 'regular';
  }
  if (large) {
    selectedSize = 'large';
  }
  if (xlarge) {
    selectedSize = 'xlarge';
  }

  const { fontSizes } = theme;
  const sizes =
    fontSizes && fontSizes[selectedType]
      ? fontSizes[selectedType]
      : NewTheme.fontSizes[selectedType];

  const targetSize = sizes ? sizes[selectedSize] : sizes.regular;

  const lineHeight = `${parseInt(
    parseInt((targetSize || '').replace('px', ''), 10) * LINE_HEIGHT_MULTIPLIER,
    10,
  )}px`;

  return lineHeight;
};
