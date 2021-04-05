import styled from 'styled-components';
import { media } from '../../../Util';
import { handleThemeFromObject } from '../../../Themes';

export const AccordionBox = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: ${props =>
    props.open
      ? handleThemeFromObject(props.theme, 'accordion.boxBackgroundOpen', '#fff')
      : handleThemeFromObject(props.theme, 'accordion.boxBackgroundClosed', '#f9f9f9')};
  border: ${props =>
    props.open
      ? `1px solid ${handleThemeFromObject(props.theme, 'accordion.boxBorderOpen', '#fff')}`
      : `solid 1px ${handleThemeFromObject(
          props.theme,
          'accordion.boxBorderClosed',
          'rgba(150, 150, 150, 0.18)',
        )}`};
  transition: all 400ms ${props => (props.open ? 'ease-in' : 'ease-out')};
  &:hover {
    background-color: ${props =>
      props.open
        ? handleThemeFromObject(props.theme, 'accordion.boxBackgroundOpen', '#fff')
        : handleThemeFromObject(props.theme, 'accordion.boxBackgroundHover', '#f3f3f3')};
  }
`;

export const ShowBox = styled.div`
  max-height: ${props => (props.open ? props.size : '0px')};
  transition: max-height 400ms ${props => (props.open ? 'ease-in' : 'ease-out')};
  overflow: hidden;
`;

export const AccordionAction = styled.div`
  padding: 20px 50px;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  background-color: ${props => (props.open ? props.color || 'transparent' : 'transparent')};
  width: 100%;
  transition: all 400ms ${props => (props.open ? 'ease-in' : 'ease-out')};
  position: relative;

  ${media.large`
    padding: 30px 50px;
  `}

  &:after {
    position: absolute;
    top: calc(50% - 4px);
    left: 15px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 8px solid
      ${props =>
        props.open
          ? handleThemeFromObject(props.theme, 'accordion.actionBorderTopOpen', '#009dff')
          : handleThemeFromObject(props.theme, 'accordion.actionBorderTopClosed', '#4e4e4e')};
    pointer-events: none;
    transform: ${props => (props.open ? 'rotate(0deg)' : 'rotate(-90deg)')};
    transition: all 400ms ${props => (props.open ? 'ease-in' : 'ease-out')};
  }
`;
