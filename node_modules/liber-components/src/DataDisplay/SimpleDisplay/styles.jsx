import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../../Themes';
import Resisable from '../Resizable';
import { media } from '../../Util';

export const Label = styled.div`
  font-family: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.label.fontFamily', 'Roboto')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.label.fontWeight', '400')};
  font-size: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.label.fontSize', '20px')};
  color: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.label.color', '#717171', props.color)};
  text-align: center;
  transition: all 100ms linear;
`;

export const Value = styled(Resisable)`
  font-family: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.value.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.value.fontSize', '28px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.value.fontWeight', '700')};
  color: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.value.color', '#717171')};
  line-height: 0.8em;
  transition: all 100ms linear;
  position: relative;
  margin-left: ${props => (props.prefix && props.prefix.length > 0 ? '26px' : null)};
  margin-bottom: 10px;
  box-sizing: border-box;

  ${props => (props.prefix && props.prefix.length > 0 ?
    css`
      &:before {
        position:absolute;
        content: "${props.prefix}";
        font-size: 50%;
        line-height: 50%;
        top: 5px;
        right: 100%;
      }
    ` : null)}
  }}
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 25px 0px;
  flex-basis: 50%;
  max-width: unset;
  max-height: 114px;
  min-height: 0;
  min-width: 0;
  border-left: ${props => (props.colorBar ? `10px solid ${props.colorBar}` : null)};
  cursor: ${props => (props.hasClick ? 'pointer' : null)};
  color: ${props => handleThemeFromObject(props.theme, 'simpleDisplay.container.color', '#717171')};
  box-sizing: border-box;

  ${media.large`
    max-width: 50%;
    background-color: ${props => (props.highlight ?
    handleThemeFromObject(props.theme, 'simpleDisplay.container.highlight.background', 'rgba(230,230,230, 0.2)')
    : null)};
    color: ${props => (props.highlight ?
    handleThemeFromObject(props.theme, 'simpleDisplay.container.highlight.value', '#009dff')
    :
    handleThemeFromObject(props.theme, 'simpleDisplay.container.color', '#717171')
  )};
    max-height: unset;
    padding: 0px;

    & ${Value} {
      font-size:  ${props => (props.highlight ? '34px' : null)};
      color: ${props => (props.highlight ?
    handleThemeFromObject(props.theme, 'simpleDisplay.container.highlight.value', '#4cbaff')
    : null)};
    }
    & ${Label} {
      color: ${props => (props.highlight ?
    handleThemeFromObject(props.theme, 'simpleDisplay.container.highlight.label', '#4cbaff')
    : null)} ;
    }
    &:hover {
      background-color: ${props => (
    handleThemeFromObject(props.theme, 'simpleDisplay.container.hover.background', 'rgba(230,230,230, 0.2)')
  )};
    }
    &:hover ${Value} {
      font-size: 34px;
      color: ${props => (
    props.hasClick
      ? handleThemeFromObject(props.theme, 'simpleDisplay.container.hover.value', '#4cbaff')
      : null
  )};
    }
    &:hover ${Label} {
      color: ${props => (
    props.hasClick
      ? handleThemeFromObject(props.theme, 'simpleDisplay.container.hover.label', '#4cbaff')
      : null
  )};
    }
    &:after {
      display: ${props => (props.divider ? null : 'none')};
      position: absolute;
      top: 20%;
      right: -1px;
      content: '';
      width: 0px;
      height: 60%;
      border-right: 2px solid #e6e6e6;
    }
    &:last-child:after {
      display: none;
    }
`}
`;
