import styled, { css } from 'styled-components';
import { Card as RawCard } from '../../GenericStyles';
import { handleThemeFromObject } from '../../Themes';
import { FaTimes } from '../../Icons';

export const Card = styled(RawCard)`
  position: relative;
  ${({ fullscreen }) =>
    fullscreen
      ? css`
          height: 100vh !important;
          width: 100vw !important;
        `
      : css`
          max-width: 80vw;
          max-height: 80vh;
          min-width: 10vw;
          min-height: 10vh;
          height: unset;
        `}
  overflow: ${props => (props.overflow ? props.overflow : 'unset')};
  border-radius: 4px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
  background-color: ${props => handleThemeFromObject(props.theme, 'dialog.card', '#ffffff')};
  margin: 0px !important;
`;

export const CardHeader = styled.div`
  padding: 16px 24px;
  white-space: nowrap;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  text-align: ${props => props.labelAlign};
  color: ${props => handleThemeFromObject(props.theme, 'dialog.header', '#717171')};
  border-bottom: 1px solid
    ${props => handleThemeFromObject(props.theme, 'dialog.separator', '#e6e6e6')};
`;

export const CloseIcon = styled(FaTimes)`
  width: 23px;
  height: 23px;
  fill: ${props => handleThemeFromObject(props.theme, 'dialog.header', '#717171')};
`;

export const CloseButton = styled.div`
  position: absolute;
  padding: ${props => props.closeButtonPadding};
  top: 0;
  right: 0;
  cursor: pointer;
`;
