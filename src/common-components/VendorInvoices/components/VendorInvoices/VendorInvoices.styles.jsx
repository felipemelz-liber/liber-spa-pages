import styled, { createGlobalStyle } from 'styled-components';
import { handleThemeFromObject as getTheme, LoadingBunny, PrimaryLink } from 'liber-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DisableBootstrap = createGlobalStyle`
  label {
    display: unset;
    margin-bottom: unset;
  }
  th {
    box-sizing: content-box;
  }
`;

export const Title = styled.span`
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 0.13px;
  text-align: left;
  color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
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

export const TotalInvoices = styled(HeaderText)`
  font-weight: bold;
`;

export const Link = styled(HeaderText).attrs(() => ({ as: 'a' }))`
  font-weight: 500;
  color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
  margin-top: 12px;
  margin-bottom: 32px;
  width: fit-content;
`;

export const ButtonLink = styled(PrimaryLink).attrs(() => ({
  version: 2,
  size: 'large',
  outlined: true,
}))`
  margin-right: 16px;
`;

export const Bunny = styled(LoadingBunny)`
  width: 200px;
  height: 250px;
  position: absolute;
  z-index: 202;
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ loading }) => (loading ? 'none' : null)};
  opacity: ${({ loading }) => (loading ? '0.3' : '1')};
  background-color: white;
  transition: opacity 150ms ease-in-out;
  z-index: 201;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
