import styled, { css } from 'styled-components';
import { ModalTag, CardFooter, Button, handleThemeFromObject, TextField } from 'liber-components';

const getTheme = (key, fallback) =>
  css`
    ${({ theme }) => handleThemeFromObject(theme, key, fallback)}
  `;

const isGray = ({ gray }) => {
  if (gray)
    return css`
      background-color: #f4f5f7;
      border-color: #f4f5f7;
    `;
  return null;
};

export const FilterTag = styled(ModalTag)`
  font-weight: 400;
  ${isGray}
`;

export const SelectedLabelContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SelectedSwitch = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transform: ${props => (props.switch ? 'translateY(-26px)' : 'translateY(0px)')};
  transition: transform 250ms ease-in-out;
`;

export const SelectedLabelOption = styled.span`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: center;
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
