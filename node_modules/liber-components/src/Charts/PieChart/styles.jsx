import styled from 'styled-components';
import { Slice as SliceRaw, VictoryContainer } from 'victory';

export const Slice = styled(SliceRaw)`
  transition: all 300ms;
  cursor: pointer;
`;

export const PieBox = styled(VictoryContainer)`
  width: unset !important;
  height: unset !important;
  & > svg {
    width: ${props => (props.width ? `${props.width}px` : 'unset')} !important;
    height: ${props => (props.height ? `${props.height}px` : 'unset')} !important;
  }
`;
