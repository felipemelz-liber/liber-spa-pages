import styled, { css } from 'styled-components';
import { MdSortAscending, MdSort, MdSortDescending } from '../../../Icons';

const getIconStyle = () => css`
  width: 16px;
  height: 16px;
  fill: #4b6f85;
  margin-left: 8px;
  vertical-align: middle;
`;

export const Ascending = styled(MdSortAscending)`
  ${getIconStyle}
`;

export const Descending = styled(MdSortDescending)`
  ${getIconStyle}
`;

export const Neutral = styled(MdSort)`
  ${getIconStyle}
`;
