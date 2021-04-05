
import React from 'react';
import styled, { css } from 'styled-components';
import { MdCalendarBlank, MdCloseCircle } from '../../../Icons';
import { handleThemeFromObject } from '../../../Themes';

const getTheme = (value, fallback) => css`
    ${props => handleThemeFromObject(props.theme, value, fallback)}
`;

export const Container = styled.div`
  position: relative;
`;

const CleanIcon = ({ error, hide, ...props }) => <MdCalendarBlank {...props} />;  // eslint-disable-line
export const Icon = styled(CleanIcon)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: ${props => (props.error
    ? getTheme('colors.error', '#dc3545')
    : getTheme('colors.dark-text70', '#798e9b'))};
  position: absolute;
  right: 16px;
  top: calc(50% - 10px);
  pointer-events: none;
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;


`;

const closeShow = css`
  opacity: 1;
  pointer-events: all;
`;

const ClearClose = ({ show, ...props }) => <MdCloseCircle {...props} />;  // eslint-disable-line
export const Close = styled(ClearClose)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: ${getTheme('colors.dark-text70', '#798e9b')};
  position: absolute;
  right: 16px;
  top: calc(50% - 10px);
  opacity: 0;
  pointer-events: none;
  ${({ show }) => show && closeShow}
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  z-index: 2;
  cursor: pointer;
`;
