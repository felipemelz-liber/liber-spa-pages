import styled, { css } from 'styled-components';
import { TextField } from '../InputField';
import { handleThemeFromObject as getTheme } from '../../../Themes';
import { MdCalendarClock, MdCloseCircle } from '../../../Icons';
import { TimeContainer } from '../TimePicker';


export const Container = styled.div`
  position: relative;
`;

export const Field = styled(TextField)`
  padding-right: 52px;

`;

export const Icon = styled(MdCalendarClock)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: #8c9fa9;
  position: absolute;
  right: 16px;
  top: calc(50% - 5px);
  pointer-events: none;
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;

`;


const closeShow = css`
  opacity: 1;
  pointer-events: all;
`;
export const Close = styled(MdCloseCircle)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: #8c9fa9;
  position: absolute;
  right: 16px;
  top: calc(50% - 5px);
  opacity: 0;
  pointer-events: none;
  ${({ show }) => show && closeShow}
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  z-index: 2;
  cursor: pointer;
`;

export const PickerBody = styled.div`
  max-width: 340px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CalendarContainer = styled.div`
  padding: 32px;
`;

const position = (show = 'calendar') => ({
  calendar: css`
    transform: translate(0px);
  `,
  clock: css`
    transform: translate(-340px);
  `,
}[show]);

export const PickerSlider = styled.div`
  width: 680px;
  display: flex;
  align-items: flex-start;
  transition: transform 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  ${props => position(props.show)}
`;

export const ActionFooter = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${props => getTheme(props.theme, 'colors.border', '#e8ebee')};
`;


export const ClockContainer = styled.div.attrs(({ size = 264 }) => ({
  style: {
    '--clock-container-size': `${size}px`,
    '--last-unit-margin': `${(size - 64)}px`,
  },
}))`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  & > ${TimeContainer}{
    width: 100%;
  }
`;

export const InputSeparator = styled.span`
  position: absolute;
  left: 107px;
  top: calc(50% - 8px);
  pointer-events: none;
  color: #b6c2c9;
`;
