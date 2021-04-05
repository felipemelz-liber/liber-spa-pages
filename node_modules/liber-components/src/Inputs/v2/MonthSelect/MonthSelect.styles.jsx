import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../../../Themes';
import { FaCalendar, FaArrowLeft } from '../../../Icons';
import { InputShell } from '../SelectField/SelectField.styles';
import { FlatButton } from '../../../Buttons';

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;
  box-sizing: border-box;
  height: 36px;
  cursor: pointer;
  border-radius: 4px;

  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: ${({ selected }) => (selected ? 'white' : '#405f71')};
  background-color: ${({ selected, theme }) =>
    selected ? handleThemeFromObject(theme, 'colors.primary', '#009dff') : 'transparent'};
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 8px);
  box-sizing: border-box;
  margin: -4px;
  & > ${Option} {
    padding: 8px;
  }
`;

export const DropdownContent = styled.div`
  padding: 12px;
  min-width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YearSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 16px;
`;

export const CalendarIcon = styled(FaCalendar)`
  width: 12px;
  height: 12px;
  fill: ${({ open, error, theme }) => {
    if (error) {
      return `${handleThemeFromObject(theme, 'colors.error', '#dc3545')}`;
    }
    if (open) {
      return `${handleThemeFromObject(theme, 'colors.primary', '#009dff')}`;
    }

    return '#707070';
  }};
`;

export const IconButton = styled(FlatButton).attrs(() => ({ circle: true, color: 'primary' }))`
  padding: 8px;
`;

export const Arrow = styled(FaArrowLeft)`
  ${({ direction = 'left' }) =>
    direction === 'right'
      ? css`
          transform: rotate(180deg);
        `
      : null}
  cursor: pointer;
`;

export const TextContainer = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
`;

const transitions = {
  entering: 'scale(1)',
  entered: 'scale(1.1)',
  exiting: 'scale(1.1)',
  exited: 'scale(1)',
};

export const YearText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #405f71;
  position: relative;

  transform: ${({ transitionState }) => transitions[transitionState]};

  transition: ${({ timeout }) => timeout}ms;
`;

export const Shell = styled(InputShell)`
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: ${({ hasValue }) => (hasValue ? 'space-between' : 'flex-end')};

  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #405f71;
`;
