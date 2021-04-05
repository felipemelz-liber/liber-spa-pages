import styled, { css } from 'styled-components';
import ScrollArea from 'react-perfect-scrollbar';
import { handleThemeFromObject as getTheme } from '../Themes';
import { Checkbox as SquareCheckbox } from '../Inputs';

export const Container = styled.div`
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Checkbox = styled(SquareCheckbox)`
  margin-top: 0px;
  max-height: 18px;
  min-height: 16px;
  margin-left: auto;

  & > span{
    padding: 0px 16px 0px 0px;
  }

  & > span:before{
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }

  & > span:after{
    left: 5px;
    width: 6px;
    height: 10px;
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }
`;


export const Footer = styled.div`
  width: 100%;
  height: 48px;
  border-top: 1px solid ${props => getTheme(props.theme, 'colors.gray5', '#ecf0f3')};
  display: flex;
  justify-content: center;
  align-items: center;

  & > button{
    border-radius: 4px;
    border: 0px;
    padding: 10px 23px;
    background-color: transparent;
    line-height: 20px;
    font-size: ${props => getTheme(props.theme, 'font-sizes.mobileLarge', '14px')};
    font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
    font-weight: ${props => getTheme(props.theme, 'font-weights.medium', '500')};
    color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
    cursor: pointer
  }
`;

export const BoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${props => getTheme(props.theme, 'font-sizes.mobile-large', '14px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', '400')};
  line-height: 20px;
  white-space: nowrap;
`;

export const Tag = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${props => getTheme(props.theme, 'colors.grey5', '#ecf0f3')};
  font-size: ${props => getTheme(props.theme, 'font-izes.mobile-medium', '12px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', '400')};
  line-height: 20px;
  text-align: left;
  color: ${props => getTheme(props.theme, 'colors.grey4', '#6287a7')};
  margin-right: 12px;
`;

export const BoxTitle = styled.div`
  font-size: ${props => getTheme(props.theme, 'font-sizes.mobile-large', '14px')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', '500')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  line-height: 22px;
  text-align: left;
  color: var(--title-color);
  overflow: hidden;
  text-overflow:ellipsis;
  transition: color 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  margin-right: 12px;
`;


const unchecked = css`
  --title-color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
  color: ${props => getTheme(props.theme, 'colors.gray3', '#c6d1d8')};
`;
const checked = css`
  --title-color: ${props => getTheme(props.theme, 'colors.liber-blue', '#009dff')};
  color: ${props => getTheme(props.theme, 'colors.light-blue', '#4cbaff')};
`;

export const Box = styled.div`


  transition: color 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  border-top: 0px;
  border-right: 1px solid ${props => getTheme(props.theme, 'colors.gray5', '#ecf0f3')};
  border-bottom: 1px solid ${props => getTheme(props.theme, 'colors.gray5', '#ecf0f3')};
  border-left: 1px solid ${props => getTheme(props.theme, 'colors.gray5', '#ecf0f3')};
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  min-height: 91px;
  position: relative;
  cursor: pointer;

  ${props => (props.checked ? checked : unchecked)}
`;

export const Body = styled(ScrollArea)`
  padding: 16px 16px 0px 16px;
  overflow: auto;
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;

  & > div:first-child{
    border-top: 1px solid ${props => getTheme(props.theme, 'colors.gray5', '#ecf0f3')};
    border-radius: 4px 4px 0px 0px;
  }
  & > div:nth-last-child(3){
    border-radius: 0px 0px 4px 4px;
    margin-bottom: 16px;
  }

  & .ps__rail-y{
    margin-top: 16px;
    margin-bottom: 16px;
  }

  & .ps__thumb-y{
    background-color: #e2e2e2!important;
    right: 4px;
  }

  & .ps__rail-y:hover, & .ps--clicking{
    background-color: transparent!important;
  }

  & .ps__rail-y:hover .ps__thumb-y,  & .ps__rail-y.ps--clicking .ps__thumb-y{
    width: 8px;
  }

   & .ps__rail-y{
    z-index: 10;
  }
`;
