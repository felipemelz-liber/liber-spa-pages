import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { FaInfoCircle } from '../../Icons';
import { handleThemeFromObject } from '../../Themes';

export const InputBase = styled.div`
  display: block;
  position: relative;
  padding-top: 12px;
  width: ${props => props.width};
  outline: none;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  * {
    background-color: transparent;
    border: none;
    color: ${props => handleThemeFromObject(props.theme, 'fields.v2.text', '#4e4e4e')};
    line-height: 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
`;

export const InputBar = styled.hr`
  position: relative;
  z-index: 4;
  background: ${props => {
    if (props.error) return handleThemeFromObject(props.theme, 'fields.v2.danger', '#f44336');
    if (props.valid) return handleThemeFromObject(props.theme, 'fields.v2.text', '#4b6f85');
    return handleThemeFromObject(props.theme, 'fields.v2.primary', '#009DFF');
  }};
  box-sizing: content-box;
  margin: 0px;
  height: 2px;
  width: 100%;
  transform: translateY(-2px)
    ${props => (props.open || props.error || props.valid ? 'scaleX(1)' : 'scaleX(0)')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

export const InputError = styled.div`
  width: auto;
  text-align: left;
  padding: 4px 0px;
  color: ${props =>
    props.visible
      ? handleThemeFromObject(props.theme, 'fields.v2.danger', '#f44336')
      : 'transparent'};
  font-size: 12px;
  line-height: 12px;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:before {
    content: '';
  }
`;

export const InputCaret = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  top: calc(50% - 18px);
  right: 4px;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 35px;
    width: 35px;
    background: ${props =>
      props.focused
        ? handleThemeFromObject(props.theme, 'fields.v2.caret.circle', '#e6e6e6')
        : 'transparent'};
    border-radius: 50%;
    transform: ${props => (props.focused ? 'scale(1)' : 'scale(0)')};
    transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    padding: 0;
    border-left: 5.5px solid transparent;
    border-right: 5.5px solid transparent;
    border-top: 6px solid
      ${props =>
        props.selected
          ? handleThemeFromObject(props.theme, 'fields.v2.caret.selected', '#4e4e4e')
          : handleThemeFromObject(props.theme, 'fields.v2.caret.unselected', '#a4a4a4')};
    transform: ${props => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const setLabelColor = (theme, valid, focused, error) => {
  if (error) return handleThemeFromObject(theme, 'fields.v2.danger', '#f44336');
  if (valid) return handleThemeFromObject(theme, 'fields.v2.text', '#4b6f85');
  if (focused) return handleThemeFromObject(theme, 'fields.v2.primary', '#009DFF');
  return handleThemeFromObject(theme, 'fields.v2.inactive', '#C6D1D8');
};

export const InputLabel = styled.label`
  position: absolute;
  text-align: left;
  font-size: ${props => (props.focused || props.valid || props.open ? '12px' : '16px')};
  color: ${props => setLabelColor(props.theme, props.valid, props.focused, props.error)};
  top: ${props => (props.focused || props.valid || props.open ? '0px' : '20px')};
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  width: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
`;

export const InputInactive = styled.div`
  color: ${props =>
    props.visible
      ? handleThemeFromObject(props.theme, 'fields.v2.secondary', '#C6D1D8')
      : 'transparent'};
`;

export const InputHint = styled.div`
  position: absolute;
  top: 12px;
  padding: 8px 0px;
  color: ${props =>
    props.visible
      ? handleThemeFromObject(props.theme, 'fields.v2.secondary', '#C6D1D8')
      : 'transparent'};
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  width: inherit;
  overflow: hidden;
`;

export const InputPrefix = styled(InputHint)`
  display: flex;
  align-items: center;
  width: unset;
  height: 40px;
  box-sizing: border-box;
  color: ${props => {
    if (!props.visible) return 'transparent';
    if (props.error && props.visible)
      return handleThemeFromObject(props.theme, 'fields.v2.danger', '#dc3545');
    if (props.valid) return handleThemeFromObject(props.theme, 'fields.v2.text', '#4b6f85');
    return props.focused
      ? handleThemeFromObject(props.theme, 'fields.v2.primary', '#009dff')
      : handleThemeFromObject(props.theme, 'fields.v2.inactive', '#C6D1D8');
  }};
  & svg {
    --width: 16px;
    --height: 16px;
    min-height: var(--height);
    min-width: var(--width);
    fill: ${props => {
      if (!props.visible) return 'transparent';
      if (props.error) return handleThemeFromObject(props.theme, 'fields.v2.danger', '#009dff');
      return props.focused
        ? handleThemeFromObject(props.theme, 'fields.v2.primary', '#009dff')
        : handleThemeFromObject(props.theme, 'fields.v2.inactive', '#C6D1D8');
    }};
    transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const InputText = styled(InputMask)`
  padding: 8px 0px;
  border-bottom: 2px solid ${props =>
    handleThemeFromObject(props.theme, 'fields.v2.inactive', '#C6D1D8')};
  box-shadow: none;
  width: 100%;
  padding-left: ${props => props.padding || null};
  box-sizing: border-box;

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }

  &::placeholder {
    color: transparent;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    transition: background-color 99999s ease-in-out 0s;
  }
}
`;

export const InputHelper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: ${props => (props.afterError ? 'relative' : 'absolute')};
  width: 100%;
  top: ${props => (props.afterError ? 'auto' : 'calc(42px + 12px + 2px)')};
  padding: ${props => (props.afterError ? '0px' : '4px 0px')};
  & > * {
    color: ${props => handleThemeFromObject(props.theme, 'fields.v2.helper', '#cecece')};
    fill: ${props => handleThemeFromObject(props.theme, 'fields.v2.helper', '#cecece')};
  }
`;

export const InputHelperIcon = styled(FaInfoCircle)`
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 1px 0px;
`;

export const InputHelperText = styled.div`
  margin-left: 18px;
  padding-left: 5px;
  font-size: 12px;
`;
