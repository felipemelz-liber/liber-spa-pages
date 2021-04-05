import { css } from 'styled-components';

export default (color, config) => {
  const { defaultColor, position } = {
    defaultColor: '#cecece',
    position: -1,
    ...config,
  };
  if (!color) {
    return defaultColor;
  }
  if (Array.isArray(color)) {
    if (position > -1) {
      return color[position];
    }
    return `linear-gradient(to left, ${color.join(', ')})`;
  }
  return color;
};

export const generateColorAndFill = (color, important) => css`
  color: ${color} ${important ? '!important' : ''};
  fill: ${color} ${important ? '!important' : ''};
`;
