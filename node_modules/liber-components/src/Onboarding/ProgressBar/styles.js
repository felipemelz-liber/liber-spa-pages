import styled, { css } from 'styled-components';
import { FaCheck } from '../../Icons';
import { handleThemeFromObject } from '../../Themes';

const background = '#fafafa';
const changeWidth = '992px';

const stepActive = '#009dff';
const stepComplete = '#4cbaff';
const stepInactive = '#a4a4a4';

const stepGradient = (complete, active) => `linear-gradient(to right, ${complete}, ${active})`;

const setConnectColor = (theme, active, complete) => {
  if (active) {
    return stepGradient(
      handleThemeFromObject(theme, 'progressBar.step.complete', stepComplete),
      handleThemeFromObject(theme, 'progressBar.step.active', stepActive),
    );
  }
  if (complete) {
    return handleThemeFromObject(theme, 'progressBar.step.complete', stepComplete);
  }
  return handleThemeFromObject(theme, 'progressBar.step.inactive', stepInactive);
};

const setStepColor = (theme, active, complete) => {
  if (active) {
    return handleThemeFromObject(theme, 'progressBar.step.active', stepActive);
  }
  if (complete) {
    return handleThemeFromObject(theme, 'progressBar.step.complete', stepComplete);
  }
  return handleThemeFromObject(theme, 'progressBar.step.inactive', stepInactive);
};

export const Progress = styled.div`
  background-color: ${props =>
    handleThemeFromObject(props.theme, 'progressBar.background', background)};
  padding-top: 22px;
  padding-bottom: 22px;
`;

const Label = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: ${props => handleThemeFromObject(props.theme, 'progressBar.label', '#4e4e4e')};
  margin: 0;
`;

export const LabelUpper = styled(Label)`
  @media (max-width: ${changeWidth}) {
    display: none;
  }
`;

export const LabelLower = styled(Label)`
  margin-top: 20px;
  display: none;

  @media (max-width: ${changeWidth}) {
    display: block;
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: ${changeWidth}) {
    margin-top: 30px;
  }
`;

export const StepContainer = styled.div`
  position: relative;
  display: inline-block;
  color: ${props => setStepColor(props.theme, props.active, props.complete)};
  width: auto;
  flex: 1;
`;

const StepCell = styled.div`
  position: relative;
  display: block;
  z-index: 2;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: initial !important;
  user-select: none;

  ${props =>
    props.clickable
      ? css`
          transition: transform 0.2s ease;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
          }
        `
      : null}
`;

export const StepIcon = styled(StepCell)`
  border: solid 3px ${props => setStepColor(props.theme, props.active, props.complete)};
  background-color: ${props =>
    props.complete
      ? handleThemeFromObject(props.theme, 'progressBar.step.complete', stepComplete)
      : handleThemeFromObject(props.theme, 'progressBar.background', background)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepCheck = styled(FaCheck)`
  width: 15px;
  height: 15px;
  fill: white;
`;

export const StepConnect = styled.div`
  position: absolute;
  z-index: 1;
  display: block;
  background: ${props => setConnectColor(props.theme, props.active, props.complete)};
  height: 4px;
  width: calc(100% - 25px);
  top: 13px;
  left: 13px;
  margin-left: -50%;
`;

export const StepLabel = styled.div`
  margin-top: 10px;
  text-align: center;

  @media (max-width: ${changeWidth}) {
    display: none;
  }
`;
