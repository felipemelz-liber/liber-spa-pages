import styled, { createGlobalStyle } from 'styled-components';
import {
  MoreVert,
  Button,
  SelectionTableRow,
  MdEye,
  SelectionTable,
  SelectionTableRowColumn,
  MdDownload,
  Link,
} from 'liber-components';

export const MoreVertIcon = styled(MoreVert)`
  width: 16px;
  height: 16px;
`;

export const DropDownButton = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: #ecf0f3;
`;

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

export const DropDownContentRelative = styled.div`
  position: relative;
`;

export const ActionHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 17px;
`;

export const EyeIcon = styled(MdEye)`
  width: 16px;
  height: 16px;
  fill: #4b6f85;
`;

export const Table = styled(SelectionTable)`
  width: 100%;
`;

export const TableRow = styled(SelectionTableRow)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  &:first-of-type {
    border-top: none;
  }
`;

export const TableRowColumn = styled(SelectionTableRowColumn)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  ${({ align }) => {
    switch (align) {
      case 'right':
        return 'justify-content: flex-end;';
      case 'left':
        return 'justify-content: flex-start;';
      case 'center':
        return 'justify-content: center;';
      default:
        return 'justify-content: center;';
    }
  }}
`;

export const MoreVertButtonContainer = styled.div`
  position: relative;
  padding: 4px 0px;
  width: 32px;
`;

export const Global = createGlobalStyle`
  td {
    min-height: 48px !important;
  }
`;

export const StyledButton = styled(Link)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  color: #009dff;
  background-color: transparent;
  margin-left: -18px;
  & > svg {
    fill: #009dff;
    margin-right: 4px;
  }
  :hover {
    color: #6287a7;
    & > svg {
      fill: #6287a7;
    }
  }
`;

export const DownloadIcon = styled(MdDownload)`
  fill: #009dff;
`;
