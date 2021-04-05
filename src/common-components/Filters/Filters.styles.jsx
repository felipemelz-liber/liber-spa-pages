import styled, { css } from 'styled-components';
import { ModalTag, CardFooter, Button, handleThemeFromObject, TextField } from 'liber-components';

const getTheme = (key, fallback) =>
  css`
    ${({ theme }) => handleThemeFromObject(theme, key, fallback)}
  `;

export const Container = styled.div`
  min-height: 68px;
  width: 100%;
  border-right: 1px solid #cdd7df;
  border-left: 1px solid #cdd7df;
  padding: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const GreyFilterTag = styled(ModalTag)`
  font-weight: 400;
`;

export const Label = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  text-align: left;
  color: #405f71;
  margin-right: 16px;
`;

export const Footer = styled(CardFooter)`
  width: 100%;
  min-height: 52px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 0px 0px 4px 4px;
  padding-top: unset;
  padding-bottom: unset;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
`;

export const ClearButton = styled(Button).attrs(() => ({ version: '2' }))`
  font-weight: 400;
`;

export const FilterButton = styled(Button).attrs(() => ({ version: '2' }))`
  font-weight: 400;
  color: ${getTheme('colors.liber', '#009dff')};
`;

export const Field = styled(TextField)``;

export const CleanAll = styled(FilterButton)`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
`;

export const Filtered = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.1px;
  text-align: right;
  color: #405f71;
  margin-left: auto;
`;
