import styled, { keyframes } from 'styled-components';

export const BackgroundBar = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 12px;
  background-color: #e8e8e8;
  margin: 0px;
  overflow: hidden;
  height: ${({ height }) => height || 4}px;
`;

export const DeterminateBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${props => props.background || 'linear-gradient(to left, #009dff, #83deff)'};
  transition: width 0.3s linear;
  width: ${props => props.size || 0}%;
`;

const indeterminate = keyframes`
  0% {
    left: -35%;
    right: 100%
  }

  60% {
    left: 100%;
    right: -90%
  }

  100% {
    left: 100%;
    right: -90%
  }
`;

const indeterminateShort = keyframes`
  0% {
    left: -200%;
    right: 100%
  }

  60% {
    left: 107%;
    right: -8%
  }

  100% {
    left: 107%;
    right: -8%
  }
`;

export const IndeterminateBar = styled.div`
  background: ${props => props.background || 'linear-gradient(to left, #83deff, #009dff, #83deff)'};
  &:before {
    content: '';
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${indeterminate} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${indeterminateShort} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }
`;
