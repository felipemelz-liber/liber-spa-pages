import React from 'react';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import { Unit } from '../../../Calendar/v2/MonthCalendar';
import { MdCalendarBlank, MdCloseCircle } from '../../../Icons';
import { handleThemeFromObject } from '../../../Themes';
import { TimeContainer } from '../TimePicker';

const getTheme = (value, fallback) => css`
  ${props => handleThemeFromObject(props.theme, value, fallback)}
`;

export const Container = styled.div`
  position: relative;
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

  padding: 0px 68px 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  ${bg}

  ${props =>
    props.error
      ? css`
          border: 1px solid ${getTheme('colors.error', '#dc3545')};
        `
      : css`
          border: 1px solid ${getTheme('colors.border', '#e8ebee')};
        `}

  & > input:not(:last-child) {
    margin-right: 6px;
  }
`;

const Input = styled(InputMask)`
  font-family: ${getTheme('fontFamily', 'Roboto')};
  font-size: ${getTheme('font-sizes.p', '16px')};
  line-height: 20px;
  text-align: left;
  color: ${getTheme('colors.dark-text70', '#798e9b')};
  outline: 0;
  border: 0px;
  ${bg}

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
`;

export const TimeInput = styled(Input)`
  width: 65px;
`;

TimeInput.defaultProps = {
  mask: '99:99:99',
  maskChar: null,
};

export const DateInput = styled(Input)`
  width: 88px;
`;

DateInput.defaultProps = {
  mask: '99/99/9999',
  maskChar: null,
};

export const InputSeparator = styled.span`
  font-family: ${getTheme('fontFamily', 'Roboto')};
  font-size: ${getTheme('font-sizes.p', '16px')};
  line-height: 20px;
  text-align: left;
  color: ${getTheme('colors.dark-text38', '#b6c2c9')};
  margin-right: 10px;
  transition: opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  opacity: ${props => (props.show ? '1' : '0')};
`;

const pos = css`
  position: absolute;
  right: 16px;
  top: calc(50% - 10px);
`;

export const Icon = styled(({ hide, ...props }) => <MdCalendarBlank {...props} />)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);

  pointer-events: none;
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  transition: opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${pos}
  ${props =>
    props.error
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

const setColor = (valid, error, disabled) => {
  if (disabled) return getTheme('colors.dark-text38', '#b6c2c9');
  if (error) return getTheme('colors.error', '#dc3545');
  if (valid) return getTheme('colors.petroleum', '#4b6f85');
  return getTheme('colors.dark-text60', '#8c9fa9');
};

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

const labelBehavior = props => {
  const { focused, valid, open, error, disabled } = props;

  return css`
    color: ${setColor(valid, error, disabled)};
    ${(focused || valid || open) && !disabled ? $open : closed}
  `;
};

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

export const Row = styled.div.attrs(({ size = 264 }) => ({
  style: {
    '--clock-container-size': `${size}px`,
    '--last-unit-margin': `${size - 64}px`,
  },
}))`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;
export const PickerBody = styled.div`
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

const position = (show = 'calendar') =>
  ({
    calendar: css`
      transform: translate(0px);
    `,
    clock: css`
      transform: translate(-340px);
    `,
  }[show]);

export const PickerSlider = styled.div`
  width: 680px;
  display: flex;
  align-items: flex-start;
  transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${props => position(props.show)}
`;

export const CalendarContainer = styled.div`
  padding: 32px;
  border-right: 1px solid #f4f5f7;
  &:last-child {
    border-right: 0px;
  }
`;

export const ClockContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  & > ${TimeContainer} {
    width: 100%;
  }
`;

export const ActionFooter = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${getTheme('colors.border', '#e8ebee')};
  margin-top: auto;
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
