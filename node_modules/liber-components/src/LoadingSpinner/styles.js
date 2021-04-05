import styled, { keyframes } from 'styled-components';
import { handleThemeFromObject } from '../Themes';

export const Container = styled.span`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  animation: ${spin} 3s linear infinite;
  &,
  & span,
  & span::before {
    display: block;
    height: ${props => props.size || '32px'};
    width: ${props => props.size || '32px'};
  }
  & span,
  & span::before,
  & span::after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  & span {
    clip: ${props =>
      `rect(calc(${props.size || '32px'}/2), ${props.size || '32px'}, ${props.size || '32px'}, 0)`};
    animation: ${spin} 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  & span::before {
    content: '';
    border-top: ${props => props.thickness || '3px'} solid
      ${props => handleThemeFromObject(props.theme, 'loadingSpinner.color', '#4e4e4e', props.color)};
    border-radius: 50%;
    opacity: 0.5;
    animation: ${spin} 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  & span::after {
    content: '';
    border: ${props => props.thickness || '3px'} solid
      ${props => handleThemeFromObject(props.theme, 'loadingSpinner.color', '#4e4e4e', props.color)};
    border-radius: 50%;
  }
`;
