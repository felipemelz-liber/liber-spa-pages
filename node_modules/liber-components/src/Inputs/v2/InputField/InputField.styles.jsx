import React from 'react';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import { FaInfoCircle, MdChevronDown, MdChevronUp, MdEye, MdEyeOff } from '../../../Icons';
import { handleThemeFromObject as getTheme } from '../../../Themes';

const chevronIcons = css`
  fill: #798e9b;
  width: 24px;
  height: 20px;
  cursor: pointer;
`;

const setLabelColor = (theme, valid, focused, error) => {
  if (error) return getTheme(theme, 'colors.red', '#dc3545');
  if (valid) return getTheme(theme, 'colors.petroleum', '#4b6f85');
  if (focused) return getTheme(theme, 'colors.liber-blue', '#009DFF');
  return getTheme(theme, 'colors.dark-text60', '#8c9fa9');
};

export const InputBase = styled.div`
  position: relative;
  padding-top: 10px;
  width: ${props => props.width};
  outline: none;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  * {
    background-color: transparent;
    border: none;
    color: ${props => getTheme(props.theme, 'colors.dark-text87', '#587383')};
    line-height: 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
  label {
    color: ${props => props.disabled && getTheme(props.theme, 'colors.dark-text38', '#b6c2c9')};
  }
  label:before {
    display: ${props => props.disabled && 'none'};
  }
  input {
    background-color: ${props =>
      props.disabled
        ? getTheme(props.theme, 'colors.border', '#e8ebee')
        : getTheme(props.theme, 'colors.white', '#ffffff')};
  }
`;

const getColor = ({ visible, theme }) =>
  visible ? getTheme(theme, 'colors.red', '#dc3545') : 'transparent';

export const InputError = styled.span`
  width: auto;
  text-align: left;
  padding: 12px 6px;
  font-size: 12px;
  line-height: 12px;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  color: ${getColor};
  &::before {
    content: '';
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  padding: 0px 6px;
  left: 6px;
  text-align: left;
  font-size: ${props => (props.focused || props.valid || props.open ? '12px' : '16px')};
  color: ${props => setLabelColor(props.theme, props.valid, props.focused, props.error)};
  background-color: transparent;
  top: ${props => (props.focused || props.valid || props.open ? '0px' : '20px')};
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    border-bottom: 3px solid ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
    left: 0px;
    top: calc(50% - 2px);
    width: 100%;
    z-index: -1;
  }
`;

export const InputHint = styled.div`
  position: absolute;
  top: 12px;
  padding: 10px 12px;
  color: ${props =>
    props.visible ? getTheme(props.theme, 'colors.dark-text38', '#b6c2c9') : 'transparent'};
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  overflow: hidden;
`;

export const InputPrefix = styled(InputHint)`
  display: flex;
  align-items: center;
  width: unset;
  height: 40px;
  box-sizing: border-box;
  color: ${props => {
    if (!props.visible) return 'transparent';
    if (props.error && props.visible) return getTheme(props.theme, 'colors.red', '#dc3545');
    if (props.valid) return getTheme(props.theme, 'colors.petroleum', '#4b6f85');
    return props.focused
      ? getTheme(props.theme, 'colors.primary', '#009dff')
      : getTheme(props.theme, 'colors.gray3', '#C6D1D8');
  }};
  & svg {
    --width: 16px;
    --height: 16px;
    min-height: var(--height);
    min-width: var(--width);
    fill: ${props => {
      if (!props.visible) return 'transparent';
      if (props.error) return getTheme(props.theme, 'colors.red', '#dc3545');
      return props.focused
        ? getTheme(props.theme, 'colors.primary', '#009dff')
        : getTheme(props.theme, 'colors.gray3', '#C6D1D8');
    }};
    transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const InputText = styled(({ error, ...props }) => <InputMask {...props} />)`
  padding: 10px;
  border-radius: 4px;
  border: solid 1px
    ${props =>
      props.error
        ? getTheme(props.theme, 'colors.red', '#dc3545')
        : getTheme(props.theme, 'colors.border', '#e8ebee')};
  width: 100%;
  padding-left: ${props => props.padding || null};
  padding-right: ${({ hasPasswordToggle }) => (hasPasswordToggle ? '36px' : null)};
  box-sizing: border-box;
  z-index: -2;

  &:focus {
    outline: 0;
    border: solid 1px
      ${props =>
        props.error
          ? getTheme(props.theme, 'colors.red', '#dc3545')
          : getTheme(props.theme, 'colors.primary', '#009dff')};
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &::placeholder {
    color: transparent;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    transition: background-color 99999s ease-in-out 0s;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SpinButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5px;
  padding-top: 3px;
`;

export const InputHelper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: ${props => (props.afterError ? 'relative' : 'absolute')};
  width: 100%;
  top: ${props => (props.afterError ? 'auto' : 'calc(42px + 12px + 2px)')};
  padding: ${props => (props.afterError ? '0px' : '12px 10px')};
  & > * {
    color: ${props => getTheme(props.theme, 'colors.dark-text38', '#b6c2c9')};
    fill: ${props => getTheme(props.theme, 'colors.dark-text38', '#b6c2c9')};
  }
`;

export const InputHelperIcon = styled(FaInfoCircle)`
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 1px 0px;
  top: calc(50% - 9px);
`;

export const ChevronDownIcon = styled(MdChevronDown)`
  ${chevronIcons}
`;

export const ChevronUpIcon = styled(MdChevronUp)`
  ${chevronIcons}
`;

export const InputHelperText = styled.div`
  margin-left: 18px;
  padding-left: 5px;
  font-size: 12px;
`;

export const InputAutoCompleteList = styled.div`
  position: absolute;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
`;

export const InputAutoCompleteItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  color: #8c9fa9;
  &:hover {
    background-color: ${props => getTheme(props.theme, 'colors.lightBlue75', '#f0f9ff')};
    color: ${props => getTheme(props.theme, 'colors.lightBlue', '#4cbaff')};
  }
`;

export const HighlightItem = styled.span`
  font-weight: 500;
  color: #009dff;
`;

export const PasswordToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 12px);
  height: 46px;
  align-items: center;
  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

export const VisibilityIcon = styled(({ passwordVisible, ...props }) =>
  passwordVisible ? <MdEyeOff {...props} /> : <MdEye {...props} />,
)`
  width: 24px;
  height: 24px;
  fill: #b6c2c9;
  pointer-events: all;
  cursor: pointer;
`;
