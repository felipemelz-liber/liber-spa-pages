import styled, { css } from 'styled-components';
import { TextField as RawField, CardFooter, Button, handleThemeFromObject } from 'liber-components';

const getTheme = (key, fallback) =>
  css`
    ${({ theme }) => handleThemeFromObject(theme, key, fallback)}
  `;

export const TextField = styled(RawField).attrs(() => ({ version: 2 }))`
  margin-bottom: 16px;
`;

export const Box = styled.div`
  width: 100%;
  height: 86px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;

export const TagsContainer = styled.div`
  padding: 0px 20px;
  padding-bottom: 20px;
`;

export const DialogContent = styled.div`
  width: 320px;
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
