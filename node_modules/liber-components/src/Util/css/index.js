import { css } from 'styled-components';

export const generateMinMax = (side, size) => css`
  min-${side}: ${size};
  max-${side}: ${size};
`;

export const disableOnTest = args =>
  process.env.NODE_ENV === 'test' || process.env.RAILS_ENV === 'test' ? null : css(args);
