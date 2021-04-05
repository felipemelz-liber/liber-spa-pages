import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../../Themes';
import Resisable from '../Resizable';
import { CardContent } from '../../Card';
import { media } from '../../Util';
import { Button, Link } from '../../Buttons/v1/StyledButtons';


export const Value = styled(Resisable)`
  font-family: ${props => handleThemeFromObject(props.theme, 'actionDisplay.value.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'actionDisplay.value.fontSize', '28px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'actionDisplay.value.fontWeight', '700')};
  color: ${props => handleThemeFromObject(props.theme, 'actionDisplay.value.color', '#717171')};
  line-height: 0.8em;
  transition: all 100ms linear;
  position: relative;
  margin-left: ${props => (props.prefix && props.prefix.length > 0 ? '26px' : null)};
  margin-bottom: 8px;
  box-sizing: border-box;

  ${props => (props.prefix && props.prefix.length > 0
    ? css`
      &:before {
        position: absolute;
        content: "${props.prefix}";
        font-size: 50%;
        line-height: 50%;
        top: 5px;
        right: 100%;
      }
    ` : null
  )}
`;

export const Label = styled.div`
  font-family: ${props => handleThemeFromObject(props.theme, 'actionDisplay.label.fontFamily', 'Roboto')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'actionDisplay.label.fontWeight', '400')};
  font-size: ${props => handleThemeFromObject(props.theme, 'actionDisplay.label.fontSize', '20px')};
  color: ${props => handleThemeFromObject(props.theme, 'actionDisplay.label', '#717171')};
  text-align: center;
  transition: all 100ms linear;
`;

export const ActionContainer = styled.div`
  height: 0px;
  margin-top: 15px;
  box-sizing: border-box;
  opacity: 0;
  width: 80%;
  text-align: center;
  & button {
    margin-bottom: 10px;
    font-size: 20px;
  }
  transition: all 100ms linear;
  & ${Button} {
    min-width: 50%;
    width: unset;
  }
  & ${Link} {
    min-width: 50%;
    width: unset;
  }
${media.large`
    margin-top: 0px;

    & ${Button} {
      width: 100%;
      height: 30px;
    }
    & ${Link} {
      width: 100%;
      height: 30px;
    }
`}
`;

export const Display = styled.div`
  height: 100%;
  width: 100%;
  flex-basis: 100%;
  flex-grow: 1;
  background-color: ${props => handleThemeFromObject(props.theme, 'actionDisplay.display.background', '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 17px 25px;
  box-sizing: border-box;
  position: relative;

  --resize: scale(0.9);

  &:after {
    display: ${props => (props.divider ? null : 'none')};
    position: absolute;
    top: 20%;
    right: 0px;
    content: '';
    width: 0px;
    height: 60%;
    border-right: 2px solid #e6e6e6;
  }
  &:last-child:after {
    display: none;
  }

  & ${ActionContainer} {
    height: ${props => (props.hasAction ? '50px' : null)};
    opacity: ${props => (props.hasAction ? '1' : null)};
  }
  ${media.large`
    flex-basis: ${props => props.size || '50%'};
    background-color: ${props => handleThemeFromObject(props.theme, 'actionDisplay.display.background', '#fff')};
    padding: 12px;

    &:hover {
      background-color: ${props => (handleThemeFromObject(
    props.theme,
    'actionDisplay.display.hover.background',
    'rgba(230, 230, 230, 0.2)',
  ))};
    }
    &:hover ${ActionContainer} {
      height: ${props => (props.hasAction ? '50px' : null)};
      opacity: ${props => (props.hasAction ? '1' : null)};
    }
    &:hover ${Value}:before {
      transform: ${props => (props.hasAction ? 'var(--resize)' : null)};
    }
    &:hover ${Value}{
      transform: ${props => (props.hasAction ? 'var(--resize)' : null)};
      color: ${props => (props.hasAction
    ? handleThemeFromObject(props.theme, 'actionDisplay.display.hover.value', '#4cbaff')
    : null)};
    }
    &:hover ${Label} {
      transform: ${props => (props.hasAction ? 'var(--resize)' : null)};
      color: ${props => (props.hasAction
    ? handleThemeFromObject(props.theme, 'actionDisplay.display.hover.label', '#4cbaff')
    : null)};
    }
    & ${ActionContainer} {
      height: 0px;
      opacity: 0;
    }
`}
`;

export const DisplayRow = styled(CardContent)`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`;
