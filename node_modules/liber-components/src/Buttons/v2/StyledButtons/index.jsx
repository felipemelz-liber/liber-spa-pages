import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { handleThemeFromObject as getTheme, hexToRgb } from '../../../Themes';

const buttonRipple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 0.8;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`;

const buttonSize = (size = 'medium') =>
  ({
    small: css`
      height: 28px;
      min-width: 28px;
      padding: 16px 0px;
    `,
    medium: css`
      height: 36px;
      min-width: 36px;
    `,
    large: css`
      --icon-size: 20px;
      height: 48px;
      min-width: 48px;
      font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
    `,
  }[size]);

const defaultTypography = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.25;
`;

export const Button = styled.button.attrs(({ children, size = 'medium' }) => {
  const sizes = {
    small: '8px',
    medium: '8px',
    large: '12px',
  };
  return {
    style: {
      '--svg-margin': React.Children.toArray(children).length > 1 ? sizes[size] : '0px',
    },
  };
})`
  --inner-button-text-color: var(--button-text-color, ${props =>
    getTheme(props.theme, 'colors.dark-text', '#587383')});
  --inner-button-ripple-color: var(--button-ripple-color, ${props =>
    getTheme(props.theme, 'colors.dark-text25', hexToRgb('#587383', '0.25'))});
  padding: 24px 0px;

  ${props => getTheme(props.theme, 'typography.button', defaultTypography)}


  ${props => buttonSize(props.size)}

  background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  color: var(--inner-button-text-color);
  border:${({ outlined }) => (outlined ? `1px solid var(--inner-button-text-color)` : '0px')};
  border-radius: ${props => (props.circle ? '100%' : '4px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  cursor: pointer;
  padding: 0 16px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }

  &:disabled {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  &:after {
    content: '';
    --ripple-color: ;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: var(--inner-button-ripple-color);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${buttonRipple} 0.8s ease-out;
  }

  & > svg{
    min-width: var(--icon-size, 16px)!important;
    max-width: var(--icon-size, 16px)!important;
    min-height: var(--icon-size, 16px)!important;
    max-height: var(--icon-size, 16px)!important;
    fill: var(--inner-button-text-color);
    margin-right: var(--svg-margin, 12px);
  }
`;

export const Link = styled(Button).attrs(({ disabled }) => disabled || { as: 'a' })`
  text-decoration: none;
  &:hover {
    color: var(--button-text-color);
  }
`;

const getColorScheme = ({ color, theme }) => {
  switch (color) {
    case 'danger':
      return css`
        --button-text-color: #ff5b56;
        --button-ripple-color: rgba(255, 91, 86, 0.24);
        &:hover {
          background-color: rgba(255, 91, 86, 0.08);
        }
      `;
    case 'primary':
    default:
      return css`
        --button-text-color: ${getTheme(theme, 'colors.primary', '#009dff')};
        --button-ripple-color: rgba(0, 157, 255, 0.24);
        &:hover {
          background-color: rgba(0, 157, 255, 0.08);
        }
      `;
  }
};

export const FlatButton = styled(Button)`
  background-color: transparent;
  ${getColorScheme}
`;

FlatButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger']),
};

FlatButton.defaultProps = {
  color: 'primary',
};

export const FlatLink = styled(FlatButton).attrs(({ disabled }) => disabled || { as: 'a' })`
  text-decoration: none;
`;

FlatButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger']),
};

FlatButton.defaultProps = {
  color: 'primary',
};

export const PrimaryButton = styled(Button)`
  ${({ theme, outlined }) =>
    outlined
      ? css`
          --button-text-color: ${getTheme(theme, 'colors.primary', '#009dff')};
          --button-ripple-color: ${getTheme(theme, 'colors.primary38', '#9edaff')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.primary6', '#f0f9ff')};
          }
        `
      : css`
          background-color: ${getTheme(theme, 'colors.primary', '#009dff')};
          --button-text-color: ${getTheme(theme, 'colors.light-text', '#fafdff')};
          --button-ripple-color: ${getTheme(theme, 'colors.ripple-primary', '#008de5')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.dark-primary', '#007ecc')};
          }
        `}
`;

export const PrimaryLink = styled(PrimaryButton).attrs(({ disabled }) => disabled || { as: 'a' })`
  text-decoration: none;
  &:hover {
    color: var(--button-text-color);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => getTheme(props.theme, 'colors.secondary', '#f0f2f4')};
  --button-ripple-color: ${props => getTheme(props.theme, 'colors.ripple-secondary', '#dddfe1')};
  &:hover {
    background-color: ${props => getTheme(props.theme, 'colors.dark-secondary', '#d2dbe0')};
  }
`;

export const SecondaryLink = styled(SecondaryButton).attrs(
  ({ disabled }) => disabled || { as: 'a' },
)`
  text-decoration: none;
  &:hover {
    color: var(--button-text-color);
  }
`;

export const SuccessButton = styled(Button)`
  ${({ theme, outlined }) =>
    outlined
      ? css`
          --button-text-color: ${getTheme(theme, 'colors.success', '#13ce66')};
          --button-ripple-color: ${getTheme(theme, 'colors.success38', '#a5ecc5')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.success6', '#f1fcf6')};
          }
        `
      : css`
          background-color: ${getTheme(theme, 'colors.success', '#13ce66')};
          --button-text-color: ${getTheme(theme, 'colors.light-text', '#fafdff')};
          --button-ripple-color: ${getTheme(theme, 'colors.ripple-success', '#11b95c')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.dark-success', '#0DAB53')};
          }
        `}
`;

export const SuccessLink = styled(SuccessButton).attrs(({ disabled }) => disabled || { as: 'a' })`
  text-decoration: none;
  &:hover {
    color: var(--button-text-color);
  }
`;

export const AlertButton = styled(Button)`
  ${({ theme, outlined }) =>
    outlined
      ? css`
          --button-text-color: ${getTheme(theme, 'colors.alert', '#fabe00')};
          --button-ripple-color: ${getTheme(theme, 'colors.alert38', '#fde69e')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.alert6', '#fffbf0')};
          }
        `
      : css`
          background-color: ${getTheme(theme, 'colors.alert', '#fabe00')};
          --button-text-color: ${getTheme(theme, 'colors.light-text', '#fafdff')};
          --button-ripple-color: ${getTheme(theme, 'colors.ripple-alert', '#e1ab00')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.dark-alert', '#F0B600')};
          }
        `}
`;

export const AlertLink = styled(AlertButton).attrs(({ disabled }) => disabled || { as: 'a' })`
  text-decoration: none;
  &:hover {
    color: var(--button-text-color);
  }
`;

export const ErrorButton = styled(Button)`
  ${({ theme, outlined }) =>
    outlined
      ? css`
          --button-text-color: ${getTheme(theme, 'colors.error', '#dc3545')};
          --button-ripple-color: ${getTheme(theme, 'colors.error38', '#f2b2b8')};
          &:hover {
            background-color: ${getTheme(theme, 'colors.error6', '#fdf3f4')};
          }
        `
      : css`
          background-color: ${props => getTheme(props.theme, 'colors.error', '#dc3545')};
          --button-text-color: ${props => getTheme(props.theme, 'colors.light-text', '#fafdff')};
          --button-ripple-color: ${props =>
            getTheme(props.theme, 'colors.ripple-error', '#c6303e')};

          &:hover {
            background-color: ${props => getTheme(props.theme, 'colors.dark-error', '#bd2130')};
          }
        `}
`;

export const ErrorLink = styled(ErrorButton).attrs(({ disabled }) => disabled || { as: 'a' })`
  text-decoration: none;
  &:hover {
    color: var(--button-text-color);
  }
`;
