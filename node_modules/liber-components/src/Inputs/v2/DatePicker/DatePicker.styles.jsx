import styled, { css } from 'styled-components';
import { TextField } from '../InputField';
import { MdCalendarBlank, MdCloseCircle } from '../../../Icons';


export const Container = styled.div`
  position: relative;
`;

export const Field = styled(TextField)`
  padding-right: 52px;
`;

export const Icon = styled(MdCalendarBlank)`
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

export const CalendarContainer = styled.div`
  padding: 32px;
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
