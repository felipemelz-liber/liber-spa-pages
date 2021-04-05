import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FaCheck, FaTimes } from '../../../Icons';
import { handleThemeFromObject } from '../../../Themes';
import { generateColorAndFill } from '../../../Util';
import { Button } from '../StyledButtons';

export const ModalButton = styled(Button)`
  background-color: transparent !important;
  font-size: 18px;
  align-items: center;
  white-space: nowrap;
  ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.base.background', '#a4a4a4'))}

  &:hover {
    ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.base.backgroundHover', '#717171'))}
  }
  &:disabled {
    background-color: transparent !important;
    ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.base.background', '#a4a4a4'), true)}
  }
  &:after { display: none; }
`;

export const ModalPrimaryButton = styled(ModalButton)`
  ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.primary.background', '#009dff'))}
  &:hover {
    ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.primary.backgroundHover', '#007ecc'))}
  }
`;

const Icons = css`
  width: 18px;
  height: 18px;
  margin: auto;
  margin-right: 16px;
`;

export const SuccessIcon = styled(FaCheck)`
  ${Icons}
`;

export const SuccessButton = styled(ModalButton)`
  ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.success.background', '#13ce66'))}
  &:hover {
    ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.success.backgroundHover', '#0DAB53'))}
  }
`;

export const ModalSuccessButton = ({ children, hasIcon, ...props }) => (
  <SuccessButton {...props}>
    { hasIcon ? <SuccessIcon /> : null }
    { children }
  </SuccessButton>
);

ModalSuccessButton.propTypes = {
  hasIcon: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.any]),
};

ModalSuccessButton.defaultProps = {
  children: null,
  hasIcon: false,
};

export const DangerIcon = styled(FaTimes)`
  ${Icons}
`;

export const DangerButton = styled(ModalButton)`
  ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.danger.background', '#DC3545'))}
  &:hover {
    ${props => generateColorAndFill(handleThemeFromObject(props.theme, 'buttons.danger.backgroundHover', '#bd2130'))}
  }
`;

export const ModalDangerButton = ({ children, hasIcon, ...props }) => (
  <DangerButton {...props}>
    { hasIcon ? <DangerIcon /> : null }
    { children }
  </DangerButton>
);

ModalDangerButton.propTypes = {
  hasIcon: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.any]),
};

ModalDangerButton.defaultProps = {
  children: null,
  hasIcon: false,
};
