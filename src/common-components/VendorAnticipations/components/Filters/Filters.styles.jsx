import styled from 'styled-components';
import { Button, handleThemeFromObject as getTheme } from 'liber-components';

export const FilterText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #405f71;
  margin-right: 16px;
`;

export const CleanFilters = styled(Button).attrs(() => ({ version: '2' }))`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
`;
