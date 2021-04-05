import styled from 'styled-components';
import { getFontFamily, getFontSize, getLineHeight, getTypographyColor } from '../Themes';

export const Title = styled.div`
  font-family: ${getFontFamily('title')};
  font-size: ${getFontSize('', 'title')};
  line-height: ${getLineHeight('', 'title')};
  color: ${getTypographyColor('title')};
  font-weight: bold;
`;

export const Text = styled.div`
  font-family: ${getFontFamily()};
  font-size: ${getFontSize()};
  line-height: ${getLineHeight()};
  color: ${getTypographyColor()};
  font-weight: normal;
`;
