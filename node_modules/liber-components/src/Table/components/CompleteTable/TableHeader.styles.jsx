import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../../../Themes';
import {
  SelectionTable,
  SelectionTableHeader,
  SelectionTableHeaderColumn,
} from '../SelectionTable/SelectionTable';
import { Row } from './CompleteTable.styles';

export const Table = styled(SelectionTable)`
  width: 100%;
`;

export const Header = styled(SelectionTableHeader)`
  ${({ theme }) => css`
    border: 1px solid ${getTheme(theme, 'colors.darkBorder', '#cdd7df')};
  `}
  ${({ borderTop = true }) =>
    borderTop
      ? null
      : css`
          border-top: none;
        `}
  & > tr {
    border-bottom: none;
  }
  & th {
    border-bottom: none;
  }
`;

export const HeaderContent = styled(Header)`
  border: none;
`;

export const HeaderRow = styled(Row)`
  padding: 5px 0px;
`;

export const HeaderColumn = styled(SelectionTableHeaderColumn)`
  min-width: 50px;
  text-align: ${({ align }) => align};
  ${({ isSorted }) =>
    isSorted &&
    css`
      color: #009def;
    `}
  ${({ isSortingEnabled }) =>
    isSortingEnabled &&
    css`
      cursor: pointer;
    `}
`;
