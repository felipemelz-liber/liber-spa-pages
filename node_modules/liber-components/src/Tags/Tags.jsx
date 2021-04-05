import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MdClose } from '../Icons';
import { handleThemeFromObject as getTheme } from '../Themes';

const Close = styled(MdClose)`
  margin-left: 8px;
  cursor: pointer;
`;

const disabled = css`
  opacity: 0.38;
  pointer-events: none;
`;

const BaseTag = styled.div`
  --inner-tag-border-color: var(--tag-border-color);
  --inner-tag-background-color: var(--tag-background-color);
  --inner-tag-color: var(--tag-color);

  height: ${({ height }) => height}px;
  /* TODO: color not defined in Theme */
  border: 1px solid
    var(--inner-tag-border-color, ${props => getTheme(props.theme, 'colors.border', '#e8ebee')});
  color: var(
    --inner-tag-color,
    ${props => getTheme(props.theme, 'colors.dark-text', '#405f71')}
  ); /* TODO: color not defined in Theme */
  background-color: var(
    --inner-tag-background-color,
    ${props => getTheme(props.theme, 'colors.border', '#e8ebee')}
  );

  padding: 0px 12px;
  border-radius: ${({ variant, height }) => (variant === 'rounded' ? height / 2 : 2)}px;

  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 12px;
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-size: ${props => getTheme(props.theme, 'font-sizes.mobile-large', '14px')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', '500')};
  box-sizing: border-box;

  ${props => props.disabled && disabled}

  & > svg {
    fill: var(--inner-tag-color, #405f71);
    --size: 16px;
    min-width: var(--size);
    max-width: var(--size);
    min-height: var(--size);
    max-height: var(--size);
  }
  & > svg:not(${Close}) {
    margin-right: 8px;
  }
`;

export const Tag = React.forwardRef(({ children, closable, onClose, ...props }, ref) => (
  <BaseTag ref={ref} closable={closable} {...props}>
    {children}
    {closable && <Close onClick={onClose} />}
  </BaseTag>
));

Tag.displayName = 'Tag';

Tag.propTypes = {
  closable: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.any]),
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['rounded', 'default']),
  height: PropTypes.number,
};

Tag.defaultProps = {
  closable: false,
  children: '',
  onClose: () => {},
  variant: 'default',
  height: 28,
};

export const SecondaryTag = styled(Tag)``;

export const PrimaryTag = styled(Tag)`
  --tag-border-color: ${props => getTheme(props.theme, 'colors.primary38', '#9edaff')};
  --tag-background-color: ${props => getTheme(props.theme, 'colors.primary6', '#f0f9ff')};
  --tag-color: ${props => getTheme(props.theme, 'colors.primary', '#009dff')};
`;
PrimaryTag.displayName = 'PrimaryTag';

export const SuccessTag = styled(Tag)`
  --tag-border-color: ${props => getTheme(props.theme, 'colors.success38', '#a5ecc5')};
  --tag-background-color: ${props => getTheme(props.theme, 'colors.success6', '#f1fcf6')};
  --tag-color: ${props => getTheme(props.theme, 'colors.success', '#13ce66')};
`;
SuccessTag.displayName = 'SuccessTag';

export const AlertTag = styled(Tag)`
  --tag-border-color: ${props => getTheme(props.theme, 'colors.alert38', '#fde69e')};
  --tag-background-color: ${props => getTheme(props.theme, 'colors.alert6', '#fffbf0')};
  --tag-color: ${props => getTheme(props.theme, 'colors.alert', '#fabe00')};
`;
AlertTag.displayName = 'AlertTag';

export const ErrorTag = styled(Tag)`
  --tag-border-color: ${props => getTheme(props.theme, 'colors.error38', '#f2b2b8')};
  --tag-background-color: ${props => getTheme(props.theme, 'colors.error6', '#fdf3f4')};
  --tag-color: ${props => getTheme(props.theme, 'colors.error', '#dc3545')};
`;
ErrorTag.displayName = 'ErrorTag';

export const WhiteTag = styled(Tag)`
  --tag-border-color: ${props => getTheme(props.theme, 'color.dark-border', '#cdd7df')};
  --tag-background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  --tag-color: ${props => getTheme(props.theme, 'colors.dark-text', '#405f71')};
`;
WhiteTag.displayName = 'WhiteTag';
