import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../Themes';

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
`;

const typography = ({ radius }) => css`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: ${2 * radius}px;
  letter-spacing: normal;
  text-align: left;
`;

const sizeStyles = ({ radius }) => css`
  border-radius: ${radius}px;
  min-width: ${2 * radius}px;
  height: ${radius * 2}px;
`;

const getStartingPoint = ({ childShape }) => (childShape === 'circle' ? '14%' : 0);

const getPosition = ({ position, visible }) => {
  const { vertical, horizontal } = position;

  switch (`${vertical}-${horizontal}`) {
    case 'bottom-right':
      return css`
        bottom: ${getStartingPoint};
        right: ${getStartingPoint};
        transform: scale(${visible ? 1 : 0}) translate(50%, 50%);
      `;
    case 'top-right':
      return css`
        top: ${getStartingPoint};
        right: ${getStartingPoint};
        transform: scale(${visible ? 1 : 0}) translate(50%, -50%);
      `;
    case 'bottom-left':
      return css`
        bottom: ${getStartingPoint};
        left: ${getStartingPoint};
        transform: scale(${visible ? 1 : 0}) translate(-50%, 50%);
      `;
    case 'top-left':
      return css`
        top: ${getStartingPoint};
        left: ${getStartingPoint};
        transform: scale(${visible ? 1 : 0}) translate(-50%, -50%);
      `;

    default:
      return css`
        bottom: ${getStartingPoint};
        right: ${getStartingPoint};
        transform: scale(${visible ? 1 : 0}) translate(50%, 50%);
      `;
  }
};

export const BadgeCircle = styled.span`
  z-index: 200;
  position: absolute;
  box-sizing: border-box;
  background-color: ${({ color, theme }) =>
    color || handleThemeFromObject(theme, 'colors.red', '#dc3545')};
  color: ${({ textColor }) => textColor || 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => `0px ${padding}px`};
  
  transition: transform 150ms;

  ${sizeStyles}
  ${typography}
  ${getPosition}
`;
