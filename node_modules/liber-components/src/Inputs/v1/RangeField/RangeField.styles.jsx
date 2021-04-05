import styled, { css } from 'styled-components';
import { Card, CardContent as RawContent } from '../../../Card';
import { handleThemeFromObject as theme } from '../../../Themes';

export const FieldContainer = styled.div`
  position: relative;
`;

export const CardContent = styled(RawContent)`
  padding: 8px 16px;
  display:flex;
  flex-direction: column;
`;

export const FieldBox = styled.div`
  --color : ${(props) => {
    if (props.layout === 'open') return theme(props.theme, 'colors.liberBlue', '#019DFF');
    if (props.layout === 'unselected') return theme(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
    return theme(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
  }};
  width: 140px;
  height: 36px;
  line-height:36px;
  padding: 0 8px;
  color: ${props => theme(props.theme, 'colors.bluishDarkGrey', '#496072')};
  font-weight: ${props => theme(props.theme, 'fontWeights.bold', 500)};
  font-size: ${props => theme(props.theme, 'fontSizes.p', '16px')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border: 2px solid var(--color);
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:after{
    --height: 8px;
    --width: 7px;
    content: "";
    opacity: 0.8;
    border-top: var(--height) solid var(--color);
    border-right: var(--width) solid transparent;
    border-bottom: var(--height) solid transparent;
    border-left: var(--width) solid transparent;
    border-radius: 4px;
    position: absolute;
    right: 8px;
    top: calc(50% - (var(--height) - (var(--height)/2)));
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
`;


export const RangeContainer = styled(Card)`
  --width:260px;
  width: var(--width);
  height: 100px;
  margin-top: 2px;
  position: absolute;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${(props) => {
    if (props.open) {
      return css`
        pointer-events: auto;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
      transform: translateY(-42px);
    `;
  }}
  ${(props) => {
    if (props.position === 'left') return css`left: 0px;`;
    if (props.position === 'center') return css`left: calc(-1*(var(--width)/2) + 50%);`;
    if (props.position === 'right') return css`right: 0px;`;
    return '';
  }}
`;


export const Label = styled.div`
  color : ${(props) => {
    if (props.layout === 'open') return theme(props.theme, 'colors.liberBlue', '#019DFF');
    if (props.layout === 'unselected') return theme(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
    return theme(props.theme, 'colors.bluishBlack', '#496072');
  }};
  font-weight: ${props => theme(props.theme, 'fontWeights.medium', 500)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileLarge', '14px')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  line-height: 14px;
  margin: 8px 0px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;


export const ValueField = styled.input.attrs({
  type: 'number',
})`
  --field-color: ${props => theme(props.theme, 'colors.blueishMediumGrey', '#dde8ec')};
  border: 1px solid;
  border-color: var(--field-color);
  border-radius: 4px;
  width: 36px;
  height: 20px;
  color: ${props => theme(props.theme, 'colors.bluishBlack', '#496072')};
  text-align: center;
  line-height: 36px;
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  font-weight: ${props => theme(props.theme, 'fontWeights.regular', 400)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileLarge', '14px')};
  outline: none;
  -moz-appearance:textfield;

  &::-webkit-input-placeholder {
    color: var(--field-color);
  }
  &::-moz-placeholder {
    color: var(--field-color);
  }
  &:-ms-input-placeholder {
    color: var(--field-color);
  }
  &:-moz-placeholder {
    color: var(--field-color);
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ValueLabel = styled.label`
  display:flex;
  flex-direction: column;
  color: ${props => theme(props.theme, 'colors.bluishDarkGrey', '#7e8d95')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  font-weight: ${props => theme(props.theme, 'fontWeights.regular', 400)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileMedium', '12px')};
`;

export const ValueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RangeInputContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const range = css`
  -webkit-appearance: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  &:focus {
    outline: none!important;
    border: 0;
  }
  &::-moz-focus-outer {
    border: 0;
  }
`;

const thumb = css`
  width: 18px;
  height: 18px;
  border: 1px solid ${props => theme(props.theme, 'colors.blueishMediumGrey', '#dde8ec')};
  border-radius: 50%;
  box-shadow: 0px 2px 5px ${props => theme(props.theme, 'colors.mediumGrey2', '#cecece')};
  cursor: pointer;
  background-color: #fff;
  margin-top: -9px;
`;

const track = css`
  width: 100%;
  cursor: pointer;
  height: 0px;
  border-radius: 1px;
  border: 1px solid ${props => theme(props.theme, 'colors.mediumGrey2', '#cecece')};
`;


export const RangeInputFrom = styled.input.attrs({
  type: 'range',
})`
  position: absolute;
  ${range}

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    z-index: 3;
    ${thumb}
  }
  &::-moz-range-thumb {
    transform: scale(1);
    z-index: 2;
    ${thumb}
  }

  &::-webkit-slider-runnable-track{
    ${track}
  }
  &::-moz-range-track{
    ${track}
  }
`;
export const RangeInputTo = styled.input.attrs({
  type: 'range',
})`
  position: relative;

  ${range}

  &::-webkit-slider-runnable-track{
    ${track}
  }
  &::-moz-range-track{
    ${track}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    z-index: 3;
    ${thumb}

  }
  &::-moz-range-thumb {
    transform: scale(1);
    z-index: 2;
    ${thumb}
  }
`;

const Tooltip = styled.div.attrs(({ children }) => {
  let size = children.toString().length * 9.5;
  size = size < 20 ? 20 : size;
  return {
    style: {
      '--size': `${size}px`,
      '--half-size': `${size / 2}px`,
    },
  };
})`
  position: absolute;
  min-width: 20px;
  width: var(--size);
  height: 15px;
  padding: 0px 4px;
  box-sizing: border-box;
  color: ${props => theme(props.theme, 'colors.bluishDarkGrey', '#7e8d95')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  font-weight: ${props => theme(props.theme, 'fontWeights.medium', 500)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileMedium', '12px')};
  background-color:${props => theme(props.theme, 'colors.white', '#ffffff')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-shadow: 0px 2px 5px ${props => theme(props.theme, 'colors.mediumGrey2', '#cecece')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  z-index: 4;
  top: 10px;
  ${(props) => {
    if (props.unselected) {
      return css`
      opacity: 0;
      pointer-events: none;
    `;
    }
    return '';
  }}
`;

export const FromTooltip = styled(Tooltip)`left: calc(var(--from) - var(--half-size));`;
export const ToTooltip = styled(Tooltip)`left: calc(var(--to) - var(--half-size));`;


export const DiffBar = styled.span.attrs(({ from, to }) => ({
  style: {
    '--from': from,
    '--to': to,
  },
}))`
  --color: ${props => theme(props.theme, 'colors.liberBlue', '#009DFF')};
  height: 3px;
  width: calc(100% - 20px);
  z-index: 1;
  position: absolute;
  display: block;
  background: linear-gradient(to right,
    transparent var(--from), var(--color) 0,
    var(--color) var(--to), transparent 0
  ) no-repeat ;
`;
