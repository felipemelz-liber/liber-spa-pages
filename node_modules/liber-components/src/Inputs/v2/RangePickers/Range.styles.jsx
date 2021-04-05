import React from 'react';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import { handleThemeFromObject } from '../../../Themes';
import { TimeContainer } from '../TimePicker';
import { Unit } from '../../../Calendar/v2/MonthCalendar';

const getTheme = (value, fallback) => css`
  ${props => handleThemeFromObject(props.theme, value, fallback)}
`;

const ClearInput = ({ inputSize, ...props }) => <InputMask {...props} />; // eslint-disable-line
export const Input = styled(ClearInput).attrs(() => ({ size: '1' }))`
  font-family: ${getTheme('fontFamily', 'Roboto')};
  font-size: ${getTheme('font-sizes.p', '16px')};
  line-height: 20px;
  text-align: left;
  color: ${getTheme('colors.dark-text70', '#798e9b')};
  outline: 0;
  margin-right: 12px;
  border: 0px;
  background-color: transparent;

  width: ${props => props.inputSize || '100%'};

  &::-moz-focus-inner {
    border: 0;
  }

  &::placeholder {
    color: ${getTheme('colors.dark-text38', '#b6c2c9')};
  }
`;

export const Separator = styled.div`
  font-family: ${getTheme('fontFamily', 'Roboto')};
  font-size: ${getTheme('font-sizes.p', '16px')};
  line-height: 20px;
  text-align: left;
  color: ${getTheme('colors.dark-text38', '#b6c2c9')};
  margin-right: 12px;
  transition: opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  opacity: ${props => (props.show ? '1' : '0')};
  align-self: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.full};
  opacity: ${props => (props.hide ? '0' : '1')};
`;

export const InputShell = styled.div`
  height: 48px;
  border-radius: 4px;
  min-width: 340px;
  overflow: hidden;
  padding: 0px 36px 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  border: 1px solid ${getTheme('colors.border', '#e8ebee')};
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

  ${props =>
    props.disabled
      ? css`
          background-color: ${getTheme('colors.border', '#e8ebee')};
          pointer-events: none;
          cursor: default;
        `
      : css`
          background-color: ${getTheme('colors.white', '#ffffff')};
          cursor: text;
        `}

  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  & > input:not(:last-child){
    margin-right: 6px;
  }
`;

export const SelectionBody = styled.div`
  max-width: 340px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid #f4f5f7;
  &:last-child {
    border-right: 0px;
  }
`;

export const SelectionDateContainer = styled.div`
  padding: 32px;
  border-right: 1px solid #f4f5f7;
  &:last-child {
    border-right: 0px;
  }
`;

export const SelectionTimeContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  & > ${TimeContainer} {
    width: 100%;
  }
`;

const position = (show = 'date') =>
  ({
    date: css`
      transform: translate(0px);
    `,
    time: css`
      transform: translate(-340px);
    `,
  }[show]);

export const SelectionSlider = styled.div`
  width: 680px;
  display: flex;
  align-items: stretch;
  transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${props => position(props.show)}
`;

export const SelectionFooter = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${getTheme('colors.border', '#e8ebee')};
  margin-top: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

const checked = css`
  & > ${Unit} {
    margin-right: 0px;
  }
  & + * {
    margin-left: 4px;
  }
`;

const empty = css`
  background-color: transparent;
`;

const notEmpty = css`
  background-color: ${getTheme('colors.light-blue75', '#f0f9ff')};
`;

export const Range = styled(({ start, empty: e, ...props }) => <div {...props} />)`
${props => (props.e ? empty : notEmpty)}
  height: 36px;

  & > ${Unit}{
    margin-right: 4px;
    cursor: pointer!important;
  }
  ${props => props.checked && !props.start && checked}

  &:last-child > ${Unit}{
    margin-right: 0px!important;
    margin-left: 0px!important;
  }
`;

const $open = css`
  font-size: 12px;
  line-height: 14px;
  top: -7px;
`;
const closed = css`
  font-size: 20px;
  line-height: 22px;
  top: calc(50% - 11px);
`;

export const Label = styled.label`
  position: absolute;
  padding: 0px 6px;
  left: 6px;
  text-align: left;

  background-color: transparent;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  z-index: 1;

  ${props => (props.open ? $open : closed)}

  color: ${getTheme('colors.dark-text70', '#798e9b')};

  ${props =>
    props.error
      ? css`
          color: ${getTheme('colors.error', '#dc3545')};
        `
      : null}

  ${props =>
    props.disabled
      ? css`
          color: ${getTheme('colors.dark-text38', '#b6c2c9')};
        `
      : null}

  &:before{
    content: "";
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
