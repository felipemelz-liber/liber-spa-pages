import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { handleThemeFromObject } from '../../Themes';
import { media } from '../../Util';
import { FaEllipsisV } from '../../Icons';

export const Box = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${props => handleThemeFromObject(props.theme, 'dropdown.button.color', '#717171')};
  cursor: pointer;
  border: 0px;
  padding: 5px 38px 5px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: ${props => handleThemeFromObject(props.theme, 'dropdown.button.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'dropdown.button.fontSizeSmall', '16px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'dropdown.button.fontWeight', '400')};
  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }
  &:hover {
    background-color: ${props => handleThemeFromObject(props.theme, 'dropdown.button.hover', 'rgba(230,230,230,0.3)')}
  }
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 3px);
    right: 10px;
    width: 0px;
    height: 0px;
    border-top: 5px solid ${props => handleThemeFromObject(props.theme, 'dropdown.button.caret', '#009eff')};
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    transform: scale(0.75);
  }
  ${media.large`
    font-size: ${props => handleThemeFromObject(props.theme, 'dropdown.button.fontSizeLarge', '22px')};
    &:after {
      transform: scale(1);
    }
  `}
`;

export const ButtonMenu = styled(Button)`
  padding: 5px;
  &:after { display: none; }
`;

export const Icon = styled(FaEllipsisV)`
  display: block;
  height: 25px;
  width: 25px;
  fill: ${props => handleThemeFromObject(props.theme, 'dropdown.menu.icon', '#9898ae')};;
`;

export const Label = styled.li`
  padding: 5px 0px;
  border-radius: 2px;
  background-color: ${props => handleThemeFromObject(props.theme, 'dropdown.label.background', '#ffffff')};
  color: ${props => handleThemeFromObject(props.theme, 'dropdown.label.color', '#717171')};
  border-bottom: 1px solid ${props => handleThemeFromObject(props.theme, 'dropdown.label.border', '#e6e6e6')};
  font-weight: bold;
  text-align: center;
  user-select: none;
`;

export const positions = position => ({
  'bottom-right': css`top: 100%;right: 0px;`,
  'bottom-center-right': css`top: 100%;right: 50%;`,
  'bottom-center-left': css`top: 100%;left: 50%;`,
  'bottom-left': css`top: 100%;left: 0px;`,
  'center-right': css`top: 50%;right: 0px;`,
  'center-from-right': css`top: 50%;right: 50%;`,
  'center-from-left': css`top: 50%;left: 50%;`,
  'center-left': css`top: 50%;left: 0px;`,
  'top-right': css`top: 0px;right: 0px;`,
  'top-center-right': css`top: 0px;right: 50%;`,
  'top-left': css`top: 0px;left: 0px;`,
  'over-top-right': css`bottom: 100%;right: 0px;`,
  'over-top-center-right': css`bottom: 100%;right: 50%;`,
  'over-top-left': css`bottom: 100%;left: 0px;`,
}[position] || css`top: 0px;left: 0px;`);

export const List = styled.ul`
  list-style-type: none;
  position: absolute;
  ${(props) => { positions(props.position); }}
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  background-color: ${props => handleThemeFromObject(props.theme, 'dropdown.list.background', '#ffffff')};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px ${props => handleThemeFromObject(props.theme, 'dropdown.list.border', 'rgba(230, 230, 230, 0.2)')};
  border-radius: 2px;
  z-index: 5;
  margin: 0px;
  padding: 0px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;

  opacity: ${props => props.opacity || '0'};
  transition: all 100ms ease-in-out;
  transform-origin: top left;
  transform: scaleY(${props => props.scaleY || '0.7'});
  ${media.large`
    font-size: 16px;
  `}
  ${media.extraLarge`
    font-size: 16px;
  `}
`;

export const Option = styled.li`
  padding: 5px 40px 5px 20px;
  border-radius: 2px;
  background-color: ${props => (props.selected
    ? handleThemeFromObject(props.theme, 'dropdown.option.selected.background', 'rgba(223, 227, 235, 0.3)')
    : handleThemeFromObject(props.theme, 'dropdown.option.unselected.background', '#ffffff')
  )};
  color: ${props => (props.disabled || props.selected
    ? handleThemeFromObject(props.theme, 'dropdown.option.selected.color', '#009dff')
    : handleThemeFromObject(props.theme, 'dropdown.option.unselected.color', '#717171')
  )};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${props => handleThemeFromObject(props.theme, 'dropdown.option.hover.background', '#009dff')};
    color: ${props => handleThemeFromObject(props.theme, 'dropdown.option.hover.color', '#ffffff')};
  }
`;

Option.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export const MenuOption = styled(Option)`
  background-color: ${props => handleThemeFromObject(props.theme, 'dropdown.menu.option.background', '#ffffff')};
  color: ${props => handleThemeFromObject(props.theme, 'dropdown.menu.option.color', '#a4a4a4')};

  &:hover {
    background-color: ${props => (
    handleThemeFromObject(props.theme, 'dropdown.menu.option.hover.background', '#e6e6e6')
  )};
    color: ${props => handleThemeFromObject(props.theme, 'dropdown.menu.option.hover.color', '#009dff')};
  }
`;

MenuOption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};
