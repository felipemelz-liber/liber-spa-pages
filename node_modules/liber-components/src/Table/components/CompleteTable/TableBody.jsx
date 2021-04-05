import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { SelectionTableBody } from '../SelectionTable/SelectionTable';
import { columnShape } from '../../utils';
import { Table } from './CompleteTable.styles';
import TableRow from './TableRow';

const TableBody = ({
  items,
  columns,
  actions,
  availableSpace,
  hasSelection,
  isItemSelected,
  isItemSelectable,
  onSelect,
  tooltipContent,
  hiddenColumns,
  weightedColumns,
}) => {
  return (
    <Table>
      <SelectionTableBody>
        {items.map(item => (
          <TableRow
            key={`row-${uniqueId()}`}
            item={item}
            columns={columns}
            actions={actions}
            availableSpace={availableSpace}
            hasSelection={hasSelection}
            isItemSelected={isItemSelected}
            isItemSelectable={isItemSelectable}
            onSelect={onSelect}
            tooltipContent={tooltipContent}
            hiddenColumns={hiddenColumns}
            weightedColumns={weightedColumns}
          />
        ))}
      </SelectionTableBody>
    </Table>
  );
};

TableBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
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

TableBody.defaultProps = {
  actions: null,
  isItemSelected: () => false,
  isItemSelectable: () => false,
  onSelect: () => null,
  tooltipContent: () => null,
  hiddenColumns: [],
  weightedColumns: false,
};

export default TableBody;
