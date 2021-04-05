import React from 'react';
import styled, { css } from 'styled-components';
import ScrollArea from 'react-perfect-scrollbar';
import { MdChevronDown, MdCloseCircle, MdCheck } from '../../../Icons';
import { handleThemeFromObject } from '../../../Themes';
import { Tag as RawTag } from '../../../Tags';

const getTheme = (value, fallback) => css`
  ${props => handleThemeFromObject(props.theme, value, fallback)}
`;

export const Tag = styled(RawTag)`
  white-space: nowrap;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: 300px;
`;

const bg = props =>
  props.disabled
    ? css`
        background-color: ${getTheme('colors.border', '#e8ebee')};
        cursor: default;
      `
    : css`
        background-color: ${getTheme('colors.white', '#ffffff')};
        cursor: text;
      `;

export const InputShell = styled.div`
  height: 48px;
  border-radius: 4px;
  width: 100%;
  outline:0;


  padding: 0px 68px 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  transition:
      border 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: border;
  border: 1px solid ${getTheme('colors.border', '#e8ebee')};


  ${bg}
  ${props =>
    props.basic
      ? null
      : css`
          cursor: default;
        `}
        
  ${props =>
    props.open
      ? css`
          border: 1px solid ${getTheme('colors.primary', '#009dff')};
        `
      : null}
  ${props =>
    props.error
      ? css`
          border: 1px solid ${getTheme('colors.error', '#dc3545')};
        `
      : null}


  & > input:not(:last-child){
    margin-right: 6px;
  }
`;

export const Input = styled.input.attrs(({ multiple }) => ({
  type: 'text',
  size: multiple ? '1' : undefined,
}))`
  font-family: ${getTheme('fontFamily', 'Roboto')};
  font-size: ${getTheme('font-sizes.p', '16px')};
  line-height: 20px;
  text-align: left;
  color: ${getTheme('colors.dark-text70', '#798e9b')};
  outline: 0;
  border: 0px;
  ${bg}
  ${props =>
    props.basic
      ? null
      : css`
          cursor: default;
          pointer-events: none;
        `}

&:focus {
    width: 100%;
    width: fill-available;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &::placeholder {
    color: ${getTheme('colors.dark-text38', '#b6c2c9')};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    transition: background-color 99999s ease-in-out 0s;
  }

  ${props =>
    props.static
      ? css`
          pointer-events: none;
        `
      : null}
`;

export const OptionsContainer = styled(ScrollArea)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 12px 0px;
  max-height: 224px;
  overflow: auto;
  box-sizing: border-box;

  & > div:first-of-type {
    border-top: 1px solid ${getTheme('colors.gray5', '#ecf0f3')};
    border-radius: 4px 4px 0px 0px;
  }

  & .ps__rail-y {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  & .ps__thumb-y {
    background-color: #e2e2e2 !important;
    right: 4px;
  }

  & .ps__rail-y:hover,
  & .ps--clicking {
    background-color: transparent !important;
  }

  & .ps__rail-y:hover .ps__thumb-y,
  & .ps__rail-y.ps--clicking .ps__thumb-y {
    width: 8px;
  }

  & .ps__rail-y {
    z-index: 10;
  }
`;

export const Option = styled.div`
  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
        `
      : null}
  ${props =>
    !props.raw
      ? css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 16px;
    color: ${getTheme('colors.dark-text70', '#798e9b')};
    font-family: ${getTheme('fontFamily', 'Roboto')};
    font-size: ${getTheme('font-sizes.p', '16px')};
    line-height: 22px;
    min-height: 40px;
    white-space: nowrap;
    cursor: pointer;
    transition:
      color 200ms cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    will-change: color, background-color;


    &:hover{
      color: ${getTheme('colors.primary70', '#4cbaff')};
      background-color: ${getTheme('colors.primary6', '#f0f9ff')};
    }
    & > div > span{
      color: ${getTheme('colors.primary', '#009dff')};
    }

    ${({ checked }) =>
      checked
        ? css`
            color: ${getTheme('colors.dark-text', '#405f71')};
          `
        : null}
    ${({ focused }) =>
      focused
        ? css`
            color: ${getTheme('colors.primary70', '#4cbaff')};
            background-color: ${getTheme('colors.primary6', '#f0f9ff')};
          `
        : null}
     ${({ disabled }) =>
       disabled
         ? css`
             color: ${getTheme('colors.dark-text38', '#b6c2c9')};
           `
         : null}
  `
      : null}
`;

const pos = css`
  position: absolute;
  right: 16px;
  top: calc(50% - 10px);
`;

export const Check = styled(MdCheck)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: ${getTheme('dark-text', '#405f71')};
  margin-left: auto;
`;

export const Icon = styled(({ hide, error, ...props }) => <MdChevronDown {...props} />)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);

  pointer-events: none;
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  transition: opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${pos}
  ${({ error }) =>
    error
      ? css`
          fill: ${getTheme('colors.error', '#dc3545')};
        `
      : css`
          fill: ${getTheme('colors.dark-text70', '#798e9b')};
        `}
`;

const closeShow = css`
  opacity: 1;
  pointer-events: all;
`;

export const Close = styled(({ show, ...props }) => <MdCloseCircle {...props} />)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: ${getTheme('colors.dark-text70', '#798e9b')};
  opacity: 0;
  pointer-events: none;
  ${({ show }) => show && closeShow}
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  z-index: 2;
  cursor: pointer;
  ${pos}
`;

export const Hint = styled.div`
  position: absolute;
  top: calc(50% - 22px);
  left: 6px;
  padding: 10px 12px;
  color: ${props => (props.visible ? getTheme('colors.dark-text38', '#b6c2c9') : 'transparent')};
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  overflow: hidden;
`;

export const Error = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  width: auto;
  text-align: left;
  padding: 12px 6px;
  color: ${props => (props.visible ? getTheme('colors.error', '#dc3545') : 'transparent')};
  font-size: 12px;
  line-height: 12px;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:before {
    content: '';
  }
`;

const setColor = (open, error, disabled) => {
  if (disabled) return getTheme('colors.dark-text38', '#b6c2c9');
  if (error) return getTheme('colors.error', '#dc3545');
  if (open) return getTheme('colors.primary', '#009dff');
  return getTheme('colors.dark-text60', '#8c9fa9');
};

const $open = css`
  font-size: var(--open-label-font-size, 12px);
  line-height: 14px;
  top: -7px;
`;
const closed = css`
  font-size: var(--closed-label-font-size, 20px);
  line-height: 22px;
  top: calc(50% - 11px);
`;

const labelBehavior = props => {
  const { focused, valid, open, error, disabled } = props;

  return css`
    color: ${setColor(open, error, disabled)};
    ${(focused || valid || open) && !disabled ? $open : closed}
  `;
};

export const Label = styled.label`
  position: absolute;
  padding: 0px 6px;
  left: 6px;
  text-align: left;
  font-family: Roboto;

  background-color: transparent;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  z-index: 1;

  ${labelBehavior}

  &:before {
    content: '';
    position: absolute;
    ${props =>
      props.disabled
        ? css`
            border-bottom: 0px;
          `
        : css`
            border-bottom: 3px solid ${getTheme('colors.white', '#ffffff')};
          `}
    left: 0px;
    top: calc(50%);
    width: 100%;
    z-index: -1;
  }
`;
