import styled, { css, keyframes } from 'styled-components';
import { handleThemeFromObject } from '../../../Themes';

const buttonRipple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`;

const base = css`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.base.background', '#a4a4a4')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.base.color', '#ffffff')
  )};
  border: 0px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  padding: 0 16px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }

  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.base.backgroundHover', '#717171')
  )};
  }

  &:disabled {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.disabled.background', '#a4a4a4')
  )} !important;
    border: none !important;
    color: ${props => handleThemeFromObject(props.theme, 'buttons.disabled.color', '#ffffff')} !important;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: ${props => (
    handleThemeFromObject(props.theme, 'buttons.base.backgroundHover', 'rgba(206, 206, 206, 0.5)')
  )};
    opacity: 0.5;
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${buttonRipple} 0.8s ease-out;
  }
`;

export const Button = styled.button`
  width: ${props => (props.width ? props.width : null)};
  min-width: ${props => (props.minWidth ? props.minWidth : null)};
  max-width: ${props => (props.maxWidth ? props.maxwidth : null)};

  height: ${props => (props.height ? props.height : '40px')};
  min-height: ${props => (props.minHeight ? props.minHeight : null)};
  max-height: ${props => (props.maxHeight ? props.maxHeight : null)};

  margin: ${props => (props.margin && typeof props.margin === 'string' ? props.margin : null)};
  ${(props) => {
    if (props.margin) {
      return `
        margin-top: ${props.margin.top || null};
        margin-right: ${props.margin.right || null};
        margin-bottom: ${props.margin.bottom || null};
        margin-left: ${props.margin.left || null};
      `;
    }
    return null;
  }}
  ${base}
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.background', '#009dff')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.color', '#ffffff')
  )};
  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.backgroundHover', '#007ecc')
  )};
  }
  &:after {
    background: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.ripple', 'rgba(0,157,255, 0.5)')
  )}
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.background', '#ffffff')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.color', '#009dff')
  )} !important;
  border: 2px solid ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.border', '#009dff')
  )};
  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.backgroundHover', '#007ecc')
  )};
    color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.colorHover', '#ffffff')
  )} !important;
    border: 2px solid ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.borderHover', '#007ecc')
  )};
  }
  &:after {
    background: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.borderHover', 'rgba(0,157,255, 0.5)')
  )};
  }
`;

export const SuccessButton = styled(Button)`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.background', '#13CE66')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.color', '#ffffff')
  )};
  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.backgroundHover', '#0DAB53')
  )};
  }
  &:after {
    background: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.ripple', 'rgba(19,206,102, 0.5)')
  )};
  }
`;

export const Link = styled.a`
  width: ${props => (props.width ? props.width : null)};
  min-width: ${props => (props.minWidth ? props.minWidth : null)};
  max-width: ${props => (props.maxWidth ? props.maxwidth : null)};

  height: ${props => (props.height ? props.height : '40px')};
  min-height: ${props => (props.minHeight ? props.minHeight : null)};
  max-height: ${props => (props.maxHeight ? props.maxHeight : null)};

  margin: ${props => (props.margin && typeof props.margin === 'string' ? props.margin : null)};
  ${(props) => {
    if (props.margin) {
      return `
          margin-top: ${props.margin.top || null};
          margin-right: ${props.margin.right || null};
          margin-bottom: ${props.margin.bottom || null};
          margin-left: ${props.margin.left || null};
`;
    }
    return null;
  }}

  text-decoration: none;
  ${base}
`;

export const PrimaryLink = styled(Link)`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.background', '#009dff')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.color', '#ffffff')
  )} !important;
  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.backgroundHover', '#007ecc')
  )};
  }
  &:after {
    background: ${props => (
    handleThemeFromObject(props.theme, 'buttons.primary.ripple', 'rgba(0,157,255, 0.5)')
  )};
  }
`;

export const SecondaryLink = styled(Link)`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.background', '#ffffff')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.color', '#009dff')
  )} !important;
  border: 2px solid ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.border', '#009dff')
  )};
  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.backgroundHover', '#007ecc')
  )};
    color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.colorHover', '#ffffff')
  )} !important;
    border: 2px solid ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.borderHover', '#007ecc')
  )};
  }
  &:after {
    background:  ${props => (
    handleThemeFromObject(props.theme, 'buttons.secondary.ripple', 'rgba(0,157,255, 0.5)')
  )};
  }
`;

export const SuccessLink = styled(Link)`
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.background', '#13CE66')
  )};
  color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.color', '#ffffff')
  )} !important;
  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.backgroundHover', '#0DAB53')
  )};
  }
  &:after {
    background: ${props => (
    handleThemeFromObject(props.theme, 'buttons.success.ripple', 'rgba(19, 206, 102, 0.5)')
  )};
  }
`;
