import styled, { css } from 'styled-components';
import StickyBar from '../../../StickyBar/StickyBar';
import { handleThemeFromObject as getTheme } from '../../../Themes';
import { CheckboxTable } from '../SelectionTable/SelectionTable';
import {
  SelectionTable,
  SelectionTableBody,
  SelectionTableRow,
  SelectionTableRowColumn,
} from '../SelectionTable/SelectionTable';
import { MoreVert, MdCancel } from '../../../Icons';
import { Button } from '../../../Buttons';

export const StickyContainer = styled(StickyBar)`
  position: sticky;
  top: 0px;
  z-index: 200;
  background-color: #fff;
`;

export const FilterContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    border: 1px solid ${getTheme(theme, 'colors.darkBorder', '#cdd7df')};
  `}
  ${({ borderTop = true }) =>
    borderTop
      ? css`
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
        `
      : css`
          border-top: none;
        `}
  ${({ borderBottom }) =>
    borderBottom
      ? null
      : css`
          border-bottom: none;
        `}
`;

export const Table = styled(SelectionTable)`
  width: 100%;
`;

export const Row = styled(SelectionTableRow)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  &:first-of-type {
    border-top: none;
  }
  ${SelectionTableBody} & {
    &:hover {
      background-color: ${({ hasSelection }) => (hasSelection ? '#f4f5f7' : 'transparent')};
    }
  }
  ${({ selected }) => selected && 'background-color: #f4f5f7; font-weight: 500;'}
`;

export const RowFreeWidth = styled.div`
  height: 100%;
  width: ${({ percentWidth }) => percentWidth || '100'}%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TableCell = styled(SelectionTableRowColumn)`
  display: flex;
  height: 100%;
  align-items: center;
  min-height: unset;
  min-width: 50px;
  padding: 13px 8px;
  ${({ align }) => {
    switch (align) {
      case 'right':
        return 'justify-content: flex-end;';
      case 'left':
        return 'justify-content: flex-start;';
      case 'center':
        return 'justify-content: center;';
      default:
        return 'justify-content: flex-start;';
    }
  }}
`;

export const CheckboxCell = styled(TableCell)`
  padding: 13px 8px;
`;

export const ContentRow = styled(TableCell)`
  padding: 0px;
`;

export const ActionsCell = styled(TableCell)`
  padding: 5px 8px;
`;

export const MoreVertIcon = styled(MoreVert)`
  width: 16px;
  height: 16px;
`;

export const MoreVertButtonContainer = styled.div`
  position: relative;
  padding: 4px 0px;
  width: 32px;
`;

export const DropDownButton = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: #ecf0f3;
`;

export const DropDownContent = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
`;

export const DropDownContentRow = styled.a`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
  margin-top: 3px;
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

export const Checkbox = styled(CheckboxTable)`
  margin-top: 0px;
  margin-left: 16px;
  & > span {
    padding: 0px;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 24px;
  width: calc(100% - 16px);
  padding: 0px 8px;
`;

export const DefaultEmptyState = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme, headerColor }) =>
    getTheme(theme, 'table.header.color', '#4b6f85', headerColor)};
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CancelIcon = styled(MdCancel)`
  fill: #6287a7;
  width: 16px;
  height: 16px;
  margin-left: 16px;
`;
