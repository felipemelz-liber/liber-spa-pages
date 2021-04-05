import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../../../../Themes';

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  overflow: ${({transitioning}) => transitioning ? 'hidden' : null};
`;

const handleActive = (active = 0) => `-${active * 100}%`;

export const TabContentDisplay = styled.div`
  display: flex;
  transition: margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  will-change: margin-left;
  margin-left: ${props => handleActive(props.active)};
  flex-direction: row;
  width: 100%;
`;

const hide = css`
  height: 0;
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
`;

export const TabContent = styled.div`
  flex-shrink: 0;
  width: 100%;
  transition: opacity 0.45s;
  ${props => !props.active && hide};
  color: ${props => getTheme(props.theme, 'colors.dark-text70', '#798e9b')};
`;

export const HeaderContainer = styled.div`
  position: relative;
`;

export const Slider = styled.span.attrs(({ active = 0, size = 225 }) => {
  const position = 24 + active * size;
  return {
    style: {
      '--slider-position': `${position}px`,
      '--slider-size': `${size}px`,
    },
  };
})`
  position: absolute;
  width: var(--slider-size);
  height: 0px;
  border-bottom: 2px solid
    ${props => getTheme(props.theme, 'colors.primary', '#009dff')};
  left: var(--slider-position);
  bottom: 0px;
  transition: left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
    width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  will-change: left, width;
`;
