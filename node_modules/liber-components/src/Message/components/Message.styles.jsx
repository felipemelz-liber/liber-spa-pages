import styled, { css, keyframes } from 'styled-components';
import { handleThemeFromObject } from '../../Themes';

const getTheme = (key, def) => css`${props => handleThemeFromObject(props.theme, key, def)}`;

export const Fixed = styled.div`
  position: fixed;
  top: 16px;
  left: calc(50% - 250px);
  width: 500px;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const backgrounds = (type = 'basic') => ({
  basic: css`${getTheme('colors.white', '#ffffff')}`,
  dark: css`${getTheme('colors.dark-text', '#405f71')}`,
  success: css`${getTheme('colors.success', '#13ce66')}`,
  alert: css`${getTheme('colors.alert', '#fabe00')}`,
  error: css`${getTheme('colors.error', '#dc3545')}`,
  primary: css`${getTheme('colors.primary', '#009dff')}`,
}[type]);

const colors = (type = 'basic') => ({
  basic: css`${getTheme('colors.dark-text', '#405f71')}`,
  dark: css`${getTheme('colors.white', '#ffffff')}`,
  success: css`${getTheme('colors.white', '#ffffff')}`,
  alert: css`${getTheme('colors.white', '#ffffff')}`,
  error: css`${getTheme('colors.white', '#ffffff')}`,
  primary: css`${getTheme('colors.white', '#ffffff')}`,
}[type]);

export const Message = styled.div`
  --message-bg: ${props => backgrounds(props.type)};
  color: ${props => colors(props.type)};
  padding: 16px 24px;
  border-radius: 4px;
  border: 0px;
  margin-bottom: 16px;
  max-width: 480px;
  overflow: hidden;
  box-sizing: border-box;
  ${getTheme('box-shadows.3', css`box-shadow: 0 4px 12px 0 rgba(64, 95, 113, 0.12);`)}
  background-color: var(--message-bg);

  font-size: ${getTheme('font-sizes.mobile-large', '14px')};
  line-height: 20px;
  font-weight: ${getTheme('font-weights.regular', '400')};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MsgContent = styled.div.attrs(({ children }) => ({
  style: {
    '--margin-elipsis': children.length <= 120 ? '-1em' : 'unset',
  },
}))`
  flex-grow: 1;

  overflow: hidden;
  position: relative;
  max-height: 40px;
  text-align: justify;
  padding-right: 1em;
  margin-right: var(--margin-elipsis);

  &:before{
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after{
    content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: var(--message-bg);
  }
`;


export const Action = styled.div`
  margin-left: 24px;
  height: 100%;
`;

const enter = keyframes`
  100% {
    max-height: 150px;
    opacity: 1;
  }
  0% {
    max-height: 0;
    opacity: 0;
  }
`;

const leave = keyframes`
 0% {
    max-height: 150px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
`;

export const AnimationContainer = styled.div`
  animation: ${props => (props.state === 'entering' || props.state === 'entered' ? enter : leave)} forwards;
  animation-duration: ${props => props.duration}ms;
  /* overflow: hidden; */
`;
