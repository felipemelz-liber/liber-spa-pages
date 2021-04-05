import React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from '../../../Icons';
import { handleThemeFromObject as getTheme } from '../../../Themes';

export const Container = styled.div`
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: row;
`;

const selectedColors = (type = 'empty') => ({
  single: css`
    border: 1px solid ${props => getTheme(props.theme, 'colors.v2.petroleum', '#4b6f85')};
    color: ${props => getTheme(props.theme, 'colors.v2.petroleum', '#4b6f85')};
    ${Container}:hover &{
      color: ${props => getTheme(props.theme, 'colors.v2.darkPetroleum', '#3C596B')};
      border-color: ${props => getTheme(props.theme, 'colors.v2.darkPetroleum', '#3C596B')};
    }
  `,
  multiple: css`
    border: 1px solid ${props => getTheme(props.theme, 'colors.v2.yellow', '#fabe00')};
    color: ${props => getTheme(props.theme, 'colors.v2.yellow', '#fabe00')};
    ${Container}:hover &{
      color: ${props => getTheme(props.theme, 'colors.v2.darkYellow', '#F0B600')};
      border-color: ${props => getTheme(props.theme, 'colors.v2.darkYellow', '#F0B600')};
    }
  `,
  empty: css`
    border: 1px solid ${props => getTheme(props.theme, 'colors.v2.white', '#ffffff')};
    color: ${props => getTheme(props.theme, 'colors.v2.grey3', '#c6d1d8')};
  `,
}[type]);

export const SelectedTitles = styled.div`
  ${props => selectedColors(props.type)}
  font-size: ${props => getTheme(props.theme, 'fontSizes.p', '16px;')};
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  padding: 0 12px;
  border-radius: 4px 0px 0px 4px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  transition: all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
`;

const totalSelectedColors = (type = 'empty') => ({
  single: css`
    border: 1px solid ${props => getTheme(props.theme, 'colors.v2.petroleum', '#4b6f85')};
    color: ${props => getTheme(props.theme, 'colors.v2.white', '#ffffff')};
    background-color: ${props => getTheme(props.theme, 'colors.v2.petroleum', '#4b6f85')};
    ${Container}:hover &{
      background-color: ${props => getTheme(props.theme, 'colors.v2.darkPetroleum', '#3C596B')};
      border-color: ${props => getTheme(props.theme, 'colors.v2.darkPetroleum', '#3C596B')};
    }
  `,
  multiple: css`
    border: 1px solid ${props => getTheme(props.theme, 'colors.v2.yellow', '#fabe00')};
    color: ${props => getTheme(props.theme, 'colors.v2.white', '#ffffff')};
    background-color: ${props => getTheme(props.theme, 'colors.v2.yellow', '#fabe00')};
    ${Container}:hover &{
      background-color: ${props => getTheme(props.theme, 'colors.v2.darkYellow', '#F0B600')};
      border-color: ${props => getTheme(props.theme, 'colors.v2.darkYellow', '#F0B600')};
    }
  `,
  empty: css`
    border: 1px solid ${props => getTheme(props.theme, 'colors.v2.grey5', '#ecf0f3')};
    color:  ${props => getTheme(props.theme, 'colors.v2.grey3', '#c6d1d8')};
    background-color: ${props => getTheme(props.theme, 'colors.v2.grey5', '#ecf0f3')};
    pointer-events: none;
  `,
}[type]);

export const TotalSelectedTitles = styled.button`
  ${props => totalSelectedColors(props.type)}
  font-size: ${props => getTheme(props.theme, 'fontSizes.p', '16px;')};
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'fontWeights.medium', 500)};
  padding: 0px 12px 0px 11px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0px 4px 4px 0px;
  transition: all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  white-space: nowrap;
`;

const colorsCurrency = (type = 'empty') => ({
  single: css`color: ${props => getTheme(props.theme, 'colors.v2.white', '#ffffff')};`,
  multiple: css`color: ${props => getTheme(props.theme, 'colors.v2.white', '#ffffff')};`,
  empty: css`color: ${props => getTheme(props.theme, 'colors.v2.grey3', '#c6d1d8')};`,
}[type]);

export const Currency = styled.div`
  ${props => colorsCurrency(props.type)}
  font-size: ${props => getTheme(props.theme, 'fontSizes.mobileMedium', '12px;')};
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 4px;
`;

const deselectColors = (type = 'empty') => ({
  single: css`
    --x-color: ${props => getTheme(props.theme, 'colors.v2.petroleum', '#4b6f85')};
    ${Container}:hover &{
      --x-color: ${props => getTheme(props.theme, 'colors.v2.darkPetroleum', '#3C596B')};
    }
  `,
  multiple: css`
    --x-color: ${props => getTheme(props.theme, 'colors.v2.yellow', '#fabe00')};
    ${Container}:hover &{
      --x-color: ${props => getTheme(props.theme, 'colors.v2.darkYellow', '#F0B600')};
    }
  `,
  empty: css`--x-color: ${props => getTheme(props.theme, 'colors.v2.grey5', '#ecf0f3')};`,
}[type]);


const Close = styled(MdClose)`
  --size: 16px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: var(--x-color);
  transition: fill 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
`;

export const DeselectIndicator = styled.span`
  ${props => deselectColors(props.type)}
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  margin-left: 10px;
  border: 0px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


DeselectIndicator.defaultProps = {
  children: <Close />,
};
