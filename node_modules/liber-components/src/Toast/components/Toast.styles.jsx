import styled, { css, keyframes } from 'styled-components';
import { generateMinMax, media } from '../../Util';
import { handleThemeFromObject } from '../../Themes';

import { MdClose, MdCheckCircle, MdAlertCircle, MdCloseCircle, MdInformation } from '../../Icons';

const getTheme = (key, def) =>
  css`
    ${props => handleThemeFromObject(props.theme, key, def)}
  `;

const colors = {
  info: '#009dff',
  success: '#13ce66',
  error: '#dc3545',
  warning: '#ffdb6a',
  empty: '#717171',
};

export const BaseToast = styled.div`
  border-left: 4px solid;
  border-color: ${getTheme('colors.white', '#ffffff')};
  width: 100%;
  max-width: 100%;
  min-height: 72px;
  box-sizing: border-box;
  padding: 21px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${getTheme('colors.white', '#ffffff')};
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  ${getTheme(
    'box-shadows.2',
    css`
      box-shadow: 0 2px 8px 0 rgba(64, 95, 113, 0.12);
    `,
  )}
  overflow: hidden;
  position: relative;
  background-color: ${getTheme('colors.white', '#fff')};
  margin: 0px 8px 24px 8px;
  &:last-child {
    margin-bottom: 0px;
  }
  ${media.small`
    ${({ customWidth }) =>
      customWidth
        ? css`
            max-width: ${customWidth - 16}px;
          `
        : 'width: calc(500px - 16px);'}
  `}
`;

export const Info = styled(BaseToast)`
  border-color: ${getTheme('colors.primary', colors.info)};
`;
export const Success = styled(BaseToast)`
  border-color: ${getTheme('colors.success', colors.success)};
`;
export const Error = styled(BaseToast)`
  border-color: ${getTheme('colors.error', colors.error)};
`;
export const Warning = styled(BaseToast)`
  border-color: ${getTheme('colors.alert', colors.warning)};
`;

const Icon = css`
  ${generateMinMax('width', '24px')}
  ${generateMinMax('height', '24px')}
`;

export const InfoIcon = styled(MdInformation)`
  ${Icon}
  fill: ${getTheme('colors.primary', colors.info)};
`;
export const SuccessIcon = styled(MdCheckCircle)`
  ${Icon}
  fill: ${getTheme('colors.success', colors.success)};
`;
export const ErroIcon = styled(MdCloseCircle)`
  ${Icon}
  fill: ${getTheme('colors.error', colors.error)};
`;
export const WarningIcon = styled(MdAlertCircle)`
  ${Icon}
  fill: ${getTheme('colors.alert', colors.warning)};
`;

const top = css`
  align-self: flex-start;
  margin-top: 24px;
`;

export const CloseIcon = styled(MdClose)`
  ${generateMinMax('width', '24px')}
  ${generateMinMax('height', '24px')}
  fill: #b6c2c9;
  fill: ${getTheme('colors.dark-text38', '#b6c2c9')};
  margin-right: 24px;
  ${props => (props.top ? top : null)};
  cursor: pointer;
`;

export const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  z-index: 9999;
  ${media.small`
    top: 15px;
    right: 15px;
    ${({ customWidth }) =>
      customWidth
        ? css`
            max-width: ${customWidth}px;
          `
        : 'width: 500px'}
  `}
`;

const enter = keyframes`
  100% {
    transform: translateX(0px);
    height: auto;
    padding-bottom: 20px;
  }
  50% {
    height: auto;
    padding-bottom: 20px;
  }
  0%{
    height: 0px;
    padding-bottom: 0px;
    transform: translateX(515px);
  }
`;

const leave = keyframes`
  0% {
    transform: translateX(0px);
    height: auto;
    padding-bottom: 20px;
  }
  50% {
    height: auto;
    padding-bottom: 20px;
  }
  100%{
    height: 0px;
    padding-bottom: 0px;
    transform: translateX(515px);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${props => (props.state === 'entering' || props.state === 'entered' ? enter : leave)}
    forwards;
  animation-duration: ${props => props.duration}ms;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 24px;
`;

const typographyHard = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const typographySoft = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* TODO add Theme */
  font-family: ${getTheme('font-family', 'Roboto')};

  ${getTheme('typography.subhead', typographyHard)};

  text-align: left;
  color: ${getTheme('colors.dark-text', '#405f71')};

  & span {
    margin-top: 8px;
    font-family: ${getTheme('font-family', 'Roboto')};
    ${getTheme('typography.body', typographySoft)};
    letter-spacing: 0px;
    text-align: left;
    color: ${getTheme('colors.dark-text70', '#798e9b')};
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

export const LargeContent = styled.div`
  margin-left: ${props => (props.base ? '0px' : '48px')};
  margin-right: 24px;
  margin-top: 3px;

  font-family: ${getTheme('font-family', 'Roboto')};
  ${getTheme('typography.body', typographySoft)};
  letter-spacing: 0px;
  text-align: left;
  color: #798e9b;
`;
