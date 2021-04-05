import styled from 'styled-components';
import Icon from '@mdi/react';
import { LoadingBunny, PrimaryButton } from 'liber-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ScreenTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 20px;

  & > svg {
    width: 32px;
    height: 32px;
    fill: #009dff;
    margin-right: 16px;
    margin-bottom: 2px;
    cursor: pointer;
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
  margin-right: 24px;
  height: 48px;
`;

export const StyledIcon = styled(Icon).attrs(() => ({
  color: '#4b6f85',
  size: '21',
}))`
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bunny = styled(LoadingBunny).attrs(() => ({ loop: true }))`
  width: 200px;
`;

export const Button = styled(PrimaryButton).attrs(() => ({ version: 2, size: 'large' }))`
  padding: 0px 34px;
  text-transform: uppercase;
`;

export const CancelButton = styled(Button).attrs(() => ({ outlined: true }))`
  margin-right: 16px;
`;
