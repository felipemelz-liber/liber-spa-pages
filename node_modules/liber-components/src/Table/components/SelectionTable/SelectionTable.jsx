import styled, { css } from 'styled-components';
import { Checkbox } from '../../../Inputs';
import { handleThemeFromObject } from '../../../Themes';
import { DropDownContent } from '../../../DropDown/components/SimpleDropDown.styles';

export const SelectionTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: Roboto;
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

export const SelectionTableHeader = styled.thead`
  border: 0px;
  position: relative;
  & > tr {
    border-bottom: solid 1px
      ${props =>
        handleThemeFromObject(
          props.theme,
          'table.header.border',
          '#009dff',
          props.headerColor,
        )};
  }
`;

export const SelectionTableBody = styled.tbody`
  position: relative;
`;

export const SelectionTableFooter = styled.tfoot``;

export const SelectionTableRowColumn = styled.td`
  min-height: 48px;
  border: 0px;
  padding: 8px;
  color: var(--row-color);
  position: relative;
  font-size: 16px;
`;
const RowSelection = props => {
  let bg = 'transparent';
  let shadow = null;
  if (props.selected) {
    bg = handleThemeFromObject(props.theme, 'colors.dark-text6', '#f4f5f7');
    shadow = '0px 0px 1px var(--row-color)';
  }
  return css`
    background-color: ${bg};
    & > ${SelectionTableRowColumn} {
      text-shadow: ${shadow};
    }
    & ${DropDownContent} {
      text-shadow: none;
    }
  `;
};

export const SelectionTableRow = styled.tr`
  --row-color: ${props =>
    handleThemeFromObject(props.theme, 'table.body.color', '#6287a7')};
  border: 0px;
  position: relative;
  ${SelectionTableBody} & {
    border-top: 1px solid #ecf0f3;
    ${RowSelection}
    &:hover {
      background-color: #f3f3f3;
    }
  }
`;

export const SelectionTableHeaderColumn = styled.th`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: ${props =>
    handleThemeFromObject(
      props.theme,
      'table.header.color',
      '#4b6f85',
      props.headerColor,
    )};
  border: 0px;
  border-bottom: solid 1px
    ${props =>
      handleThemeFromObject(props.theme, 'table.header.border', '#ecf0f3')};
  padding: 8px;
  width: ${props => props.width};
`;

const checkboxDefaultColor = css`
  ${props =>
    handleThemeFromObject(
      props.theme,
      'colors.v2.petroleum',
      '#4b6f85',
      props.color,
    )}
`;
export const CheckboxTable = styled(Checkbox)`
  input[type='checkbox']:checked + span:before {
    border-color: var(--checkbox-color, ${checkboxDefaultColor});
    background-color: var(--checkbox-color, ${checkboxDefaultColor});
  }
  & span:before {
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border-radius: 0px;
    border: ${props => (props.borderSize ? props.borderSize : 1)}px solid
      var(--checkbox-color, ${checkboxDefaultColor});
    background-color: ${props =>
      handleThemeFromObject(props.theme, 'checkbox.v2.background', '#fafdff')};
  }
  & span:after {
    top: 0px;
    left: 5px;
    width: 5px;
    height: 12px;
  }
`;
