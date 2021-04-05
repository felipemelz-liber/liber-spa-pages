import styled from 'styled-components';
import { handleThemeFromObject } from 'Themes';

export const empty = null;

export const Slider = styled.input`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  appearance: none;
  height: 8.5px;
  background-color: ${props => handleThemeFromObject(props.theme, 'barChart.slider.background', '#fff')};
  outline: none;
  border-radius: 4.25px;
  border: solid 2px ${props => handleThemeFromObject(props.theme, 'barChart.slider.border', '#dfe3eb')};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0px;
    width: 55px;
    height: 6px;
    border-radius: 3px;
    background-color: ${props => handleThemeFromObject(props.theme, 'barChart.slider.border', '#dfe3eb')};;
  }

  &::-moz-range-thumb {
    border: 0px;
    width: 55px;
    height: 6px;
    border-radius: 3px;
    background-color: ${props => handleThemeFromObject(props.theme, 'barChart.slider.border', '#dfe3eb')};;
  }

  &::-ms-thumb {
    border: 0px;
    width: 55px;
    height: 6px;
    border-radius: 3px;
    background-color: ${props => handleThemeFromObject(props.theme, 'barChart.slider.border', '#dfe3eb')};;
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &::-moz-range-track {
    background-color: ${props => handleThemeFromObject(props.theme, 'barChart.slider.background', '#fff')};
  }
`;

Slider.defaultProps = {
  type: 'range',
  valueAsNumber: true,
};
