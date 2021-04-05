import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../Themes';

const getTheme = (key, fallback) =>
  css`
    ${props => handleThemeFromObject(props.theme, key, fallback)}
  `;

const ANIMATION_TIME = '450ms';

const fontFamily = css`
  ${getTheme('font-family', 'Roboto')}
`;
const p = css`
  ${getTheme('font-sizes.p', '16px')}
`;
const medium = css`
  ${getTheme('font-wights.medium', '500')}
`;

const white = css`
  ${getTheme('colors.white', '#ffffff')}
`;
const primary = css`
  ${getTheme('colors.primary', '#009dff')}
`;
const primary6 = css`
  ${getTheme('colors.primary6', '#f0f9ff')}
`;
const darkText38 = css`
  ${getTheme('colors.dark-text38', '#b6c2c9')}
`;
const header = css`
  ${getTheme('colors.header', '#f9fafa')}
`;

export const Label = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  font-family: ${fontFamily};
  font-size: ${p};
  font-weight: ${medium};
  line-height: 15px;
  text-align: center;
  white-space: nowrap;
  transition: color ${props => props.animationTime || ANIMATION_TIME} cubic-bezier(0.23, 1, 0.32, 1)
    0ms;

  ${props =>
    props.checked
      ? css`
          color: ${primary};
          transition-delay: ${props.animationTime || ANIMATION_TIME};
        `
      : css`
          color: ${darkText38};
        `}
`;

const handleStageTypes = (type = 'basic') =>
  ({
    basic: css`
      --base-color: ${white};
      --base-bg: ${darkText38};
    `,
    checked: css`
      --base-color: ${primary6};
      --base-bg: ${primary};
      transition-delay: ${props => props.animationTime || ANIMATION_TIME};
    `,
    final: css`
      --base-color: ${darkText38};
      --base-bg: ${header};
    `,
  }[type]);

export const Step = styled.div`
  --size: 28px;

  max-width: var(--size);
  min-width: var(--size);
  max-height: var(--size);
  min-height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  font-family: ${fontFamily};
  font-size: ${p};
  font-weight: ${medium};
  line-height: 22px;
  text-align: center;
  background-color: var(--base-bg);
  border-radius: 50%;

  color: var(--base-color);
  transition: all ${props => props.animationTime || ANIMATION_TIME} cubic-bezier(0.23, 1, 0.32, 1)
    0ms;

  ${props => handleStageTypes(props.type)}

  & svg {
    fill: var(--base-color);
    --size: 16px;
    min-width: var(--size);
    max-width: var(--size);
    min-height: var(--size);
    max-height: var(--size);
    transition: fill ${props => props.animationTime || ANIMATION_TIME}
      cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transition-delay: ${props =>
      props.type === 'checked' ? props.animationTime || ANIMATION_TIME : null};
  }
`;

export const Separator = styled.span`
  --base-color: ${darkText38};
  --selected-color: ${primary};

  flex-grow: 1;
  height: 2px;
  background-color: var(--base-color);
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: ${props => (props.full ? '100%' : '0%')};
    background-color: var(--selected-color);
    top: 0px;
    left: 0px;
    transition: width ${props => props.animationTime || ANIMATION_TIME}
      cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transition-delay: ${props => (props.full ? null : props.animationTime || ANIMATION_TIME)};
    will-change: width;
  }
`;

export const ProgressContainer = styled.div`
  margin: 0 140px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
