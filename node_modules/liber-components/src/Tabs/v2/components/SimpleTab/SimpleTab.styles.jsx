import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FaQuestionCircle } from '../../../../Icons';
import { handleThemeFromObject as getTheme } from '../../../../Themes';

export const SimpleTabs = styled.div`
  max-width: 100%;
  height: 48px;
  background-color: transparent;
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  ${props =>
    props.left
      ? css`
          padding: 0px 24px;
          border-bottom: 1px solid ${getTheme(props.theme, 'colors.border', '#e8ebee')};
        `
      : null}
`;

const inactive = css`
  background-color: ${props => getTheme(props.theme, 'colors.header', '#f9fafa')};
  border-bottom: 1px solid var(--border-color);
  color: ${props => getTheme(props.theme, 'colors.dark-text', '#405f71')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', 400)};
`;

const active = css`
  background-color: transparent;
  border-bottom: none;
  color: ${props => getTheme(props.theme, 'colors.primary', '#009dff')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', 500)};
`;

const disabled = css`
  color: ${props => getTheme(props.theme, 'colors.dark-text38', '#b6c2c9')};
  pointer-events: none;
`;

const tabTg = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

const getBorderThemeParams = strongBorder => {
  let borderKey = 'colors.border';
  let defaultColor = '#e8ebee';

  if (strongBorder) {
    borderKey = 'colors.darkBorder';
    defaultColor = '#cdd7df';
  }

  return { borderKey, defaultColor };
};

export const CenterTab = styled.a`
  --icon-size: 16px;
  --border-color: ${({ theme, strongBorder }) => {
    const { defaultColor, borderKey } = getBorderThemeParams(strongBorder);

    return getTheme(theme, borderKey, defaultColor);
  }};
  min-height: 48px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  ${props => getTheme(props.theme, 'typography.body', tabTg)}
  text-decoration: none;
  border: 0px;
  border-top: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  &:first-of-type {
    border-radius: 4px 0 0 0;
    border-left: 1px solid var(--border-color);
  }
  &:last-of-type {
    border-radius: 0 4px 0 0;
  }
  ${props => (props.active ? active : inactive)}
  ${props => props.disabled && disabled}
  &:focus {
    outline: 0;
  }
  cursor: pointer;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  white-space: nowrap;
`;

const LeftTab = styled.a`
  --icon-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  ${props => getTheme(props.theme, 'typography.body', tabTg)}
  text-decoration: none;
  border: 0px !important;
  color: ${props => getTheme(props.theme, 'colors.dark-text70', '#798e9b')};
  padding: 0px 24px;
  position: relative;
  background-color: transparent;
  transition: color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  flex-basis: 225px;
  white-space: nowrap;

  ${props => (props.active ? active : null)}
  ${props => props.disabled && disabled}

  &:focus {
    outline: 0;
  }
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -1px;
    width: 100%;
    height: 0px;
    ${props =>
      props.active && props.showUnderline
        ? css`
            border-bottom: 2px solid ${getTheme(props.theme, 'colors.primary', '#009dff')};
          `
        : css`
            border-bottom: 2px solid transparent;
          `}
  }
`;

LeftTab.defaultProps = {
  showUnderline: true,
};
export const Tab = React.forwardRef(({ left, ...props }, ref) => {
  if (left) {
    return <LeftTab {...props} ref={ref} />;
  }
  return <CenterTab {...props} ref={ref} />;
});
Tab.propTypes = {
  left: PropTypes.bool,
};
Tab.defaultProps = {
  left: false,
};

export const ChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${({ left }) =>
    !left
      ? css`
          flex-grow: 1;
          flex-basis: 0;
        `
      : css`
          flex-basis: 225px;
        `}
`;

export const TooltipContainer = styled.div`
  margin-left: 8px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FaQuestionCircle)`
  min-width: var(--icon-size);
  min-height: var(--icon-size);
  max-width: var(--icon-size);
  max-height: var(--icon-size);
  fill: ${props => getTheme(props.theme, 'colors.dark-text70', '#798e9b')};
`;

export const IconContainer = styled.div`
  cursor: default;
  display: flex;
`;

export const TooltipContent = styled.div`
  ${props => getTheme(props.theme, 'typography.body', tabTg)}
  color: ${props => getTheme(props.theme, 'colors.dar-text70', '#798e9b')};
`;
