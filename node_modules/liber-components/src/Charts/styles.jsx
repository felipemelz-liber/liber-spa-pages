import styled from 'styled-components';
import { VictoryContainer, VictoryZoomContainer } from 'victory';

export const GraphContainer = styled(VictoryContainer)`
  width: unset!important;
  height: unset!important;
  & > svg {
    width: ${props => (props.width ? `${props.width}px` : 'unset')} !important;
    height: ${props => (props.height ? `${props.height}px` : 'unset')} !important;
  }
`;

export const GraphZoomContainer = styled(VictoryZoomContainer)`
  width: unset!important;
  height: unset!important;
  & > svg {
    width: ${props => (props.width ? `${props.width}px` : 'unset')} !important;
    height: ${props => (props.height ? `${props.height}px` : 'unset')} !important;
  }
`;
export const GraphVoronoiContainer = styled.div`
  width: unset!important;
  height: unset!important;
  & svg {
    width: ${props => (props.width ? `${props.width}px` : 'unset')}!important;
    height: ${props => (props.height ? `${props.height}px` : 'unset')}!important;
  }
`;

export const Slider = styled.input`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  appearance: none;
  height: 8.5px;
  background-color: #fff;
  outline: none;
  border-radius: 4.25px;
  border: solid 2px #dfe3eb;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0px;
    width: 55px;
    height: 6px;
    border-radius: 3px;
    background-color: #dfe3eb;
  }

  &::-moz-range-thumb {
    border: 0px;
    width: 55px;
    height: 6px;
    border-radius: 3px;
    background-color: #dfe3eb;
  }


  &::-ms-thumb {
    border: 0px;
    width: 55px;
    height: 6px;
    border-radius: 3px;
    background-color: #dfe3eb;
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &::-moz-range-track {
    background-color: #fff;
  }
`;

Slider.defaultProps = {
  type: 'range',
  valueAsNumber: true,
};
