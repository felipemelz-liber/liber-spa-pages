import styled, { keyframes } from 'styled-components';
import { handleThemeFromObject } from '../../../Themes';

const ripple = keyframes`
  0% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0);
  }
  50% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
  }
`;

export default styled.label`
  margin-top: 16px;
  min-height: 20px;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  & input[type='checkbox'] {
    display: none;
  }
  & input[type='checkbox']:checked + span:before {
    border-color: ${props =>
      handleThemeFromObject(props.theme, 'checkbox.v2.color', '#009dff', props.color)};
    background-color: ${props =>
      handleThemeFromObject(props.theme, 'checkbox.v2.color', '#009dff', props.color)};
    animation: ${ripple} 0.2s linear forwards;
  }
  & input[type='checkbox']:checked + span:after {
    transform: rotateZ(37deg) scale(1);
  }
  & span {
    display: inline-flex;
    justify-content: flex-start;
    align-items: ${props => props.labelAlign};
    height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    font-weight: normal;
    color: ${props =>
      handleThemeFromObject(props.theme, 'checkbox.v2.label', '#c6d1d8', props.labelColor)};
    font-size: ${props => handleThemeFromObject(props.theme, 'fontSizes.mobileLarge', '14px')};
    font-weight: ${props => handleThemeFromObject(props.theme, 'fontWeights.regular', '400')};
    font-family: ${props => handleThemeFromObject(props.theme, 'fontFamily', 'Roboto')};
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    transition: all 0.3s ease;
    transition-property: transform, border-color;
  }
  & span:before {
    left: 0;
    top: 0;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    border: 1px solid
      ${props => handleThemeFromObject(props.theme, 'checkbox.v2.border', '#cecece')};
    background-color: ${props =>
      handleThemeFromObject(props.theme, 'checkbox.v2.background', '#fafdff')};
  }
  & span:after {
    top: 1px;
    left: 6px;
    width: 7px;
    height: 14px;
    transform: rotateZ(37deg) scale(0);
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #fafafa;
    border-bottom: 2px solid #fafafa;
  }
`;
