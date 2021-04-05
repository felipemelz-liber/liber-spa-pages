import styled, { css } from 'styled-components';
import { CenterTab, ChildContainer } from '../SimpleTab/SimpleTab.styles';
import { handleThemeFromObject } from '../../../../Themes';

const getTheme = (key, fallback) => {
  return css`
    ${({ theme }) => handleThemeFromObject(theme, key, fallback)}
  `;
};

export const Tab = styled(CenterTab)`
  position: relative;
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth}px;
    `}
  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 9px);
    right: 11px;
    width: 0px;
    height: 0px;
    border-top: 5px solid ${getTheme('colors.petroleum', '#4b6f85')};
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    transform: scale(0.75);
    margin: 7px;
  }
`;

const toogleView = ({ open }) => {
  if (open) {
    return css`
      opacity: 1;
      transform: translateY(0);
    `;
  }
  return css`
    opacity: 0;
    transform: translateY(-15px);
    pointer-events: none;
  `;
};

export const Content = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: -1px;
  border: solid 1px ${({ strongBorder }) =>
    strongBorder ? getTheme('colors.darkBorder', '#cdd7df') : getTheme('colors.grey5', '#ecf0f3')};
  border-top: 0px;
  border-radius: 0px 0px 4px 4px;
  background-color: #fff;
  width: 100%;
  transition: all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  z-index: 300;
  ${toogleView}

  & > ${CenterTab} {
    border: 0px;
    background-color: transparent;
    width: 100%;
    height: 36px;
  }
  & ${ChildContainer} {
    pointer-events: none;
  }
`;
