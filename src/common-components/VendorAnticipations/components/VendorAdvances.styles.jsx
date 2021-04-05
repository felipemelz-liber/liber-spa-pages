import styled, { createGlobalStyle } from 'styled-components';
import { LoadingBunny, Link, handleThemeFromObject as getTheme } from 'liber-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 36px;
`;

export const SubTitle = styled.span`
  font-family: Roboto;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.08px;
  text-align: left;
  color: #4b6f85;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const HeaderText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #6287a7;
  margin-bottom: 56px;
`;

export const HelpLink = styled(HeaderText).attrs(() => ({ as: 'a' }))`
  font-weight: 500;
  color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
  margin-top: 12px;
  margin-bottom: 56px;
  width: fit-content;
`;

export const DownloadLink = styled(Link).attrs(() => ({ version: 2, size: 'small' }))`
  --button-text-color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
  --button-ripple-color: ${({ theme }) => getTheme(theme, 'colors.primary38', '#9edaff')};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => getTheme(theme, 'colors.primary6', '#f0f9ff')};
  }
`;

export const DisableBootstrap = createGlobalStyle`
  label{
    display: unset;
    margin-bottom: unset;
  }
`;

export const ScreenTitle = styled.span`
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 0.13px;
  text-align: left;
  color: #009dff;
`;

export const LoadingBlock = styled.div`
  flex-grow: 1;
  display: flex;
  opacity: ${props => (props.loading ? props.opacity || '0.3' : '1')};
  pointer-events: ${props => (props.loading ? 'none' : null)};
  transition: opacity 150ms ease-in-out;
  display: inherit;
  flex-direction: inherit;
  position: inherit;
  min-height: ${props => (props.loading ? '250px' : null)};
`;

export const Loading = styled(LoadingBunny)`
  width: 200px;
  position: absolute;
  left: 50%;
  margin-top: 90px;
  transform: translate(-50%);
`;

export const PaymentWarning = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #4b6f85;
  margin-top: 32px;

  & > svg {
    fill: #4b6f85;
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
  }
`;

export const BlockingContainer = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
