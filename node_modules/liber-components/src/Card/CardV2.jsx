import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../Themes';

const getTheme = (key, def) => css`${props => handleThemeFromObject(props.theme, key, def)}`;


const elevation = (level = '1') => ({
  1: css`${getTheme('box-shadows.1', css`box-shadow: 0 1px 2px 0 rgba(64, 95, 113, 0.12);`)}`,
  2: css`${getTheme('box-shadows.2', css`box-shadow: 0 2px 4px 0 rgba(64, 95, 113, 0.12);`)}`,
  3: css`${getTheme('box-shadows.3', css`box-shadow: 0 4px 12px 0 rgba(64, 95, 113, 0.12);`)}`,
}[level]);

const highlight = (color = 'default') => ({
  default: css`transparent`,
  dark: css`${getTheme('colors.dark-text', '#405f71')}`,
  primary: css`${getTheme('colors.primary', '#009dff')}`,
  success: css`${getTheme('colors.success', '#13ce66')}`,
  alert: css`${getTheme('colors.alert', '#fabe00')}`,
  error: css`${getTheme('colors.error', '#dc3545')}`,
}[color]);

export const Card = styled.div`
  ${props => elevation(props.elevation)}
  border-radius: 4px;
  background-color: ${getTheme('colors.white', '#ffffff')};
  min-width: 50px;
  min-height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const headerTg = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;
export const CardHeader = styled.div`
  ${getTheme('typography.subhead', headerTg)}
  font-family: ${getTheme('font-family', 'Roboto')};
  color: ${getTheme('colors.dark-text', '#405f71')};

  border-bottom: 1px solid ${getTheme('colors.border', '#e8ebee') || 'transparent'};

  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 24px;
  box-sizing: border-box;

  position: relative;

  &:after{
    content: "";
    position: absolute;
    bottom: -1px;
    height: 0px;
    left: 24px;
    width: calc(100% - 48px);
    border-bottom: 2px solid ${props => highlight(props.highlight)};
  }
`;

const contentTg = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const CardContent = styled.div`
  ${getTheme('typography.body', contentTg)}
  color: ${getTheme('colors.dar-text70', '#798e9b')};
  flex-grow: 1;
  padding: 24px;
`;

export const CardFooter = styled.div`
  ${getTheme('typography.subhead', headerTg)}
  font-family: ${getTheme('font-family', 'Roboto')};
  color: ${getTheme('colors.dark-text38', '#b6c2c9')};

  border-top: 1px solid ${getTheme('colors.border', '#e8ebee')};

  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

export const InnerCard = styled(Card)`
  box-shadow: unset;
  border: 1px solid ${getTheme('colors.border', '#e8ebee')};
  background-color: ${getTheme('colors.header', '#f9fafa')};
`;

export const InnerCardHeader = styled(CardHeader)`
 justify-content: left;
 text-align: flex-start;
 font-weight: ${getTheme('font-weights.regular', '400')};
`;
