import styled from 'styled-components';
import { handleThemeFromObject } from '../../Themes';
import { handleColor } from '../../Util';

export const Label = styled.label`
  font-family: ${props => handleThemeFromObject(props.theme, 'tabs.label.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'tabs.label.fontSize', '20px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'tabs.label.fontWeight', '500')};
  text-transform: uppercase;
  background-color: ${props =>
    handleThemeFromObject(
      props.theme,
      'tabs.label.background',
      'transparent',
      props.labelBackgroundColor,
    )};
  color: ${props =>
    props.active
      ? handleThemeFromObject(props.theme, 'tabs.label.active', '#009dff', props.labelActiveColor)
      : handleThemeFromObject(props.theme, 'tabs.label.common', '#717171', props.labelCommonColor)};
  border-bottom: 1px solid
    ${props =>
      handleThemeFromObject(
        props.theme,
        'tabs.label.border',
        'transparent',
        props.labelBorderColor,
      )};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  flex-grow: 1;
  flex-basis: 50%;
  margin-bottom: 0px;

  & > input[type='radio'] {
    display: none;
  }

  &:hover {
    color: ${props =>
      handleThemeFromObject(props.theme, 'tabs.label.active', '#009dff', props.labelActiveColor)};
  }
`;

export const BasicHeader = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;
export const Header = styled(BasicHeader)`
  height: 60px;
  align-items: center;
  width: 100%;
`;

export const Slide = styled.div`
  background: ${props =>
    handleThemeFromObject(
      props.theme,
      'tabs.slider',
      '#009dff',
      props.color ? handleColor(props.color) : null,
    )};
  width: ${props => 100 / props.number}%;
  height: 4px;
  position: absolute;
  left: ${props => (100 / props.number) * props.current}%;
  top: calc(100% - 2px);
  transition: left 0.3s ease-out;
  border: 0px;
`;
