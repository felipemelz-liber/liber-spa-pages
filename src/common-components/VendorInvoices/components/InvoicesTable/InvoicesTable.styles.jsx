import styled from 'styled-components';
import IconRaw from '@mdi/react';

export const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownContentRow = styled.a`
  display: flex;
  flex-direction: row;
  padding: 4px;
  color: inherit;
  & > svg {
    margin-right: 8px;
    margin-top: 4px;
  }
  :hover {
    color: #009dff;
    & > svg {
      fill: #009dff;
    }
  }
`;

export const Icon = styled(IconRaw).attrs(() => ({ size: '20px', color: '#4b6f85' }))`
  cursor: pointer;
`;
