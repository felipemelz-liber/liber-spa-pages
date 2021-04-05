import React from 'react';
import styled, { css } from 'styled-components';
import Alert from '../Alert';
import { handleThemeFromObject as getTheme } from '../../Themes';
import {
  MdAlertCircle,
  MdCloseCircle,
  MdCheckCircle,
} from '../../Icons/MaterialDesign';

const icon = css`
  --size: 24px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
`;

const alertBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;  
  width: 100%;
`;

export const DefaultAlert = styled(Alert)`
  ${alertBox}
  background-color: ${props => getTheme(props.theme, 'alert.background.default', '#f0f9ff')};
  border: 1px solid ${props => getTheme(props.theme, 'alert.border.default', '#009dff')};
  svg {
    ${icon}
    fill: #009dff;
  }
`;

DefaultAlert.defaultProps = {
  icon: <MdAlertCircle />,
};

export const SuccessAlert = styled(Alert)`
  ${alertBox}
  background-color: ${props => getTheme(props.theme, 'alert.background.success', '#f1fcf6')};
  border: 1px solid ${props => getTheme(props.theme, 'alert.border.success', '#13ce66')};
  svg {
    ${icon}
    fill: #13ce66;
  }
`;

SuccessAlert.defaultProps = {
  icon: <MdCheckCircle />,
};

export const WarningAlert = styled(Alert)`
  ${alertBox}
  background-color: ${props => getTheme(props.theme, 'alert.background.warning', '#fffbf0')};
  border: 1px solid ${props => getTheme(props.theme, 'alert.border.warning', '#fabe00')};
  svg {
    ${icon}
    fill: #fabe00;
  }
`;

WarningAlert.defaultProps = {
  icon: <MdAlertCircle />,
};

export const DangerAlert = styled(Alert)`
  ${alertBox}
  background-color: ${props => getTheme(props.theme, 'alert.background.danger', '#fdf3f4')};
  border: 1px solid ${props => getTheme(props.theme, 'alert.border.danger', '#dc3545')};
  svg {
    ${icon}
    fill: #dc3545;
  }
`;

DangerAlert.defaultProps = {
  icon: <MdCloseCircle />,
};
