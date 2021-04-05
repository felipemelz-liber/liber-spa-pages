import styled from 'styled-components';
import { handleThemeFromObject as getTheme } from '../Themes';

export const ListingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 22px;
  letter-spacing: 0.1px;
  text-align: left;
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', '400')};
  color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
`;

export const SelectContainer = styled.div`
  width: 94px;
  margin: 0px 12px;
`;
