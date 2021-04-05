import styled, { css } from 'styled-components';
import { media } from '../../Util';
import { handleThemeFromObject as getTheme } from '../../Themes';


const positions = ([posy, posx, diry, dirx], label) => {
  const upTop = label ? 'calc(100% + 10px)' : '100%';
  const position = {
    x: {
      left: dirx === 'right' ? '0px' : '100%',
      center: '50%',
      right: dirx === 'right' ? '100%' : '0px',
    },
    y: {
      top: diry === 'up' ? upTop : '0px',
      center: '50%',
      bottom: diry === 'up' ? '0px' : '100%',
    },
  };
  const direction = {
    x: {
      left: 'right',
      center: 'left',
      right: 'left',
    },
    y: {
      up: 'bottom',
      center: 'bottom',
      down: 'top',
    },
  };
  return css`${direction.y[diry]}:${position.y[posy]};${direction.x[dirx]}:${position.x[posx]};`;
};

export const CurrentBox = styled.div`
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', 500)};
  line-height: 22px;
  text-align: right;
  color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  position: relative;
  box-sizing: border-box;
  padding-right: 32px;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 9px);
    right: 0px;
    width: 0px;
    height: 0px;
    border-top: 5px solid ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    transform: scale(0.75);
    margin:7px;
  }
  ${media.large`
    &:after {
      transform: scale(1);
    }
  `}
`;

const open = css`
  transform: translateY(0px);
  opacity: 1;
  pointer-events: all;
`;

const close = css`
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
`;


export const DropDownContent = styled.div`
  position: absolute;
  z-index: 202;
  white-space: nowrap;
  min-width: 100%;
  min-height: 100%;
  max-width: ${props => props.containerSize && '100%'};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  background-color: ${props => getTheme(props.theme, 'colors.liber-white', '#fff')};;
  transition: all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  ${props => positions(props.position, props.hasLabel)}
  ${props => (props.open ? open : close)}
  overflow: hidden;
`;
