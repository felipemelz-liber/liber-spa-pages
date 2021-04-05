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
  color: ${props =>
    handleThemeFromObject(props.theme, 'radioButton.label', '#a4a4a4', props.labelColor)};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    outline: none;
  }

  &:focus > div:before {
    border-color: ${props =>
      handleThemeFromObject(props.theme, 'radioButton.focus', '#4cbaff')} !important;
    transform: scale(1.25);
  }

  & input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }
  & input[type='radio']:checked + div:before,
  input[type='checkbox']:checked + div:before {
    border-color: ${props =>
      handleThemeFromObject(props.theme, 'radioButton.color', '#009dff', props.color)};
    border-width: 2px;
    animation: ${ripple} 0.2s linear forwards;
  }
  & input[type='radio']:checked + div:after,
  input[type='checkbox']:checked + div:after {
    transform: scale(1);
  }
  & div {
    display: inline-flex;
    height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    font-weight: normal;
  }
  & div:before,
  & div:after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transition: all 0.3s ease;
    transition-property: transform, border-color;
  }
  & div:before {
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid
      ${props => handleThemeFromObject(props.theme, 'radioButton.emptyBorder', '#E6E6E6')};
    background-color: ${props =>
      handleThemeFromObject(props.theme, 'radioButton.emptyBg', '#FAFAFA')};
    /* box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.16); */
  }
  & div:after {
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    transform: scale(0);
    background: ${props =>
      handleThemeFromObject(props.theme, 'radioButton.color', '#009dff', props.color)};
  }
`;
