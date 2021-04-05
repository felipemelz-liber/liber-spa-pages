import styled from 'styled-components';
import { handleThemeFromObject as getTheme } from 'liber-components';
import RawIcon from '@mdi/react';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center;
`;

export const SelectedText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #405f71;
  display: flex;
  align-items: center;
`;

export const Icon = styled(RawIcon)`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

export const SelectActions = styled(SelectedText)`
  color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
  margin-left: 24px;
  cursor: pointer;
  & > ${Icon} {
    fill: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
  }
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;
