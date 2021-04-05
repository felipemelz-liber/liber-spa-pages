import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { SimpleDropDown } from '../../../DropDown';
import {
  DropDownButton,
  MoreVertIcon,
  DropDownContent,
  TableCell,
  ActionsCell,
  MoreVertButtonContainer,
  Checkbox,
  Row,
  CancelIcon,
  CheckboxCell,
} from './CompleteTable.styles';
import { columnShape, SELECTION_SPACE, ACTIONS_SPACE } from '../../utils';
import TableContentRow from './TableContentRow';
import { TooltipBox } from '../../../Helpers';

const TableRow = ({
  item,
  actions,
  columns,
  availableSpace,
  hasSelection,
  isItemSelected,
  isItemSelectable,
  onSelect,
  tooltipContent,
  hiddenColumns,
  weightedColumns,
}) => {
  const columnsToRender = columns.filter(({ name }) => !hiddenColumns.includes(name));

  const getWidth = width => {
    if (weightedColumns) {
      return (width / columnsToRender.length) * availableSpace * 100;
    }
    return width * availableSpace;
  };

  return (
    <Row
      onClick={isItemSelectable(item) && hasSelection ? () => onSelect(item) : undefined}
      hasSelection={hasSelection}
      selected={isItemSelectable(item) && isItemSelected(item)}
    >
      {hasSelection ? (
        <TooltipBox
          mount="bottom"
          fixed
          contentPosition="start"
          show={tooltipContent(item)}
          content={tooltipContent(item)}
        >
          <CheckboxCell width={`${SELECTION_SPACE * 100}%`}>
            {isItemSelectable(item) ? (
              <Checkbox
                id={`checkbox-${uniqueId()}`}
                checked={isItemSelected(item)}
                onChange={() => onSelect(item)}
              />
            ) : (
              <CancelIcon />
            )}
          </CheckboxCell>
        </TooltipBox>
      ) : null}
      <TableContentRow availableSpace={availableSpace}>
        {columnsToRender.map(({ name, width, align, getCellValue }) => (
          <TableCell key={name} width={`${getWidth(width)}%`} align={align}>
            {getCellValue ? getCellValue(item) : item[name]}
          </TableCell>
        ))}
      </TableContentRow>
      {actions && (
        <ActionsCell width={`${ACTIONS_SPACE * 100}%`} align="center">
          <MoreVertButtonContainer>
            <SimpleDropDown
              customButton={
                <DropDownButton onClick={event => event.stopPropagation()}>
                  <MoreVertIcon />
                </DropDownButton>
              }
              position="bottom-right-down-left"
            >
              <DropDownContent onClick={event => event.stopPropagation()}>
                {actions instanceof Function ? actions(item) : actions}
              </DropDownContent>
            </SimpleDropDown>
          </MoreVertButtonContainer>
        </ActionsCell>
      )}
    </Row>
  );
};

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(columnShape.isRequired).isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  availableSpace: PropTypes.number.isRequired,
  hasSelection: PropTypes.bool.isRequired,
  isItemSelected: PropTypes.func,
  isItemSelectable: PropTypes.func,
  onSelect: PropTypes.func,
  tooltipContent: PropTypes.func,
  hiddenColumns: PropTypes.arrayOf(PropTypes.string),
  weightedColumns: PropTypes.bool,
};

TableRow.defaultProps = {
  actions: null,
  isItemSelected: () => false,
  isItemSelectable: () => true,
  onSelect: () => null,
  tooltipContent: () => null,
  hiddenColumns: [],
  weightedColumns: false,
};

export default TableRow;
