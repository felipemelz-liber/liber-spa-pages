import styled, { css } from 'styled-components';
import { media } from '../Util';
import { handleThemeFromObject as getTheme } from '../Themes';
import { FaChevronDown } from '../Icons';


const getPos = (size, index) => {
  const pos = size && index ? -1 * size * parseFloat(index) : 0;
  return `${pos}px`;
};


export const Carousels = styled.div`
  display: flex;
  transform: translateX(${props => getPos(props.size, props.index)});
  transition: transform .5s ease-in-out;
  width: 100%;
  height: 100%;

  & > *{
    min-width: 100%;
    min-height: 100%;
  }
`;

const inner = css`
  position: absolute;
  bottom: 0px;
  left:0px;
  opacity: 0.2;
  transition: opacity .25s ease-in-out;
`;

const outer = css``;


export const DotsContainer = styled.div`
  min-height: 30px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  ${props => (props.inner ? inner : outer)};
`;


export const Dot = styled.span`
  min-width: 10px;
  min-height: 10px;
  border-radius: 50%;
  border: 2px solid var(--color);
  margin: 0px 4px;
  background-color: ${props => (props.current ? 'var(--color)' : 'transparent')};
  cursor: pointer;
`;

const chavron = css`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  fill: var(--color);
  cursor: pointer;
  opacity: 0.2;
  transition: opacity .25s ease-in-out;
`;


export const LeftChavron = styled(FaChevronDown)`
  transform: rotate(90deg);
  left: 10px;
  ${chavron}

`;


export const RightChavron = styled(FaChevronDown)`
  transform: rotate(-90deg);
  right: 10px;
  ${chavron}
`;

export const Hidden = styled.div`
  --color: ${props => getTheme(props.theme, 'colors.v2.gray1', '#eaf7ff')};
  width: ${props => `${props.width}px` || '600px'};
  height: ${props => `${props.height}px` || '150px'};
  overflow: hidden;
  position: relative;

  &:hover > *{
    opacity: 1;
  }

  & ${LeftChavron}, & ${RightChavron}{
    pointer-events: none;

    ${media.large`
      pointer-events: all;
    `}
  }
`;

export const Body = styled.div`
  position: relative;
  --color: ${props => getTheme(props.theme, 'colors.v2.liberBlue', '#eaf7ff')};
`;
