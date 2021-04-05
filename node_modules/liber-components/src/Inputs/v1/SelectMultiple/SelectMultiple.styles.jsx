import styled, { css } from 'styled-components';
import { Card, CardContent as RawContent } from '../../../Card';
import { handleThemeFromObject as theme } from '../../../Themes';
import RawCheckbox from '../Checkbox';


export const FieldContainer = styled.div`
  position: relative;
`;

export const FieldBox = styled.div`
  --color : ${(props) => {
    if (props.layout === 'open') return theme(props.theme, 'colors.liberBlue', '#019DFF');
    if (props.layout === 'unselected') return theme(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
    return theme(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
  }};
  min-width: 140px;
  max-width: 140px;
  height: 36px;
  line-height:36px;
  padding: 0 30px 0 8px;
  color: ${props => theme(props.theme, 'colors.bluishDarkGrey', '#496072')};
  font-weight: ${props => theme(props.theme, 'fontWeights.bold', 500)};
  font-size: ${props => theme(props.theme, 'fontSizes.p', '16px')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border: 2px solid var(--color);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

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

  & span {
    display:block;
    overflow:hidden;
  }
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

export const CardContent = styled(RawContent)`
  padding: 8px 8px 0px 8px;
  display:flex;
  flex-direction: column;
`;

export const SelectionContainer = styled(Card)`
  --width:340px;
  width: var(--width);
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

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px 8px 8px;
`;

export const SelectCounter = styled.span`
  color: ${props => theme(props.theme, 'colors.bluishDarkGrey', '#7E8D95')};
  font-weight: ${props => theme(props.theme, 'fontWeights.regular', 400)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileMedium', '12px')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
`;

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Checkbox = styled(RawCheckbox)`
  color: ${props => theme(props.theme, 'colors.bluishDarkGrey', '#7E8D95')};
  font-weight: ${props => theme(props.theme, 'fontWeights.regular', 400)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileMedium', '12px')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
  cursor: pointer;
  margin: 0px;

   ${(props) => {
    if (!props.header) {
      return css`
        padding: 6px 8px 4px 8px;
        border: 1px solid ${
  props.checked
    ? theme(props.theme, 'colors.mediumLightLiberBlue', '#BEE6FF')
    : theme(props.theme, 'colors.mediumGrey2', '#cecece')
};
        border-radius: 4px;
        background-color: ${
  props.checked
    ? theme(props.theme, 'colors.lightLiberBlue', '#E3F5FF')
    : theme(props.theme, 'colors.liberWhite', '#fafafa')
};
        margin-right: 8px;
        margin-bottom: 8px;
    `;
    } return '';
  }}

  & > span {
    padding: 0px 0px 0px 25px;
  }

  & > span:before{
    width: 17px;
    height: 17px;
    background-color: ${props => theme(props.theme, 'colors.liberWhite', '#fafafa')};
    border-radius: 4px;
  }
  &  > span:after{
    width: 6px;
    height: 12px;
  }
`;


export const Tooltip = styled.div`
  color: ${props => theme(props.theme, 'colors.mediumGrey', '#A4A4A4')};
  font-weight: ${props => theme(props.theme, 'fontWeights.medium', 500)};
  font-size: ${props => theme(props.theme, 'fontSizes.mobileMedium', '12px')};
  font-family:${props => theme(props.theme, 'fontFamily', 'Roboto')};
`;
