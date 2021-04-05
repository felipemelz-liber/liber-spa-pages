import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import TableHeaderColumn from './TableHeaderColumn';
import { columnShape, SELECTION_SPACE, ACTIONS_SPACE, sortingShape } from '../../utils';
import { Table, Header, HeaderRow, HeaderColumn } from './TableHeader.styles';
import { Checkbox } from './CompleteTable.styles';
import TableContentRow from './TableContentRow';

const TableHeader = ({
  columns,
  onSelectAll,
  allChecked,
  sortingProps,
  hasActions,
  availableSpace,
  borderTop,
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
    <Table>
      <Header borderTop={borderTop}>
        <HeaderRow>
          {onSelectAll && (
            <HeaderColumn width={`${SELECTION_SPACE * 100}%`}>
              <Checkbox
                id="header-checkbox"
                borderSize={2}
                checked={allChecked}
                onChange={onSelectAll}
              />
            </HeaderColumn>
          )}
          <TableContentRow availableSpace={availableSpace} isHeader>
            {columnsToRender.map(column => {
              const { label, width } = column;
              return (
                <TableHeaderColumn
                  key={`${uniqueId(label)}-header`}
                  sortingProps={sortingProps}
                  column={column}
                  width={`${getWidth(width)}%`}
                />
              );
            })}
          </TableContentRow>
          {hasActions && (
            <TableHeaderColumn
              column={{ align: 'center', label: 'Ações' }}
              width={`${ACTIONS_SPACE * 100}%`}
              align="center"
            />
          )}
        </HeaderRow>
      </Header>
    </Table>
  );
};

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(columnShape.isRequired).isRequired,
  hasActions: PropTypes.bool.isRequired,
  onSelectAll: PropTypes.func,
  allChecked: PropTypes.bool,
  sortingProps: sortingShape,
  availableSpace: PropTypes.number.isRequired,
  borderTop: PropTypes.bool,
  hiddenColumns: PropTypes.arrayOf(PropTypes.string),
  weightedColumns: PropTypes.bool,
};

TableHeader.defaultProps = {
  onSelectAll: null,
  allChecked: false,
  sortingProps: {
    onSort: () => {},
    sortedColumns: [],
  },
  borderTop: true,
  hiddenColumns: [],
  weightedColumns: false,
};

export default TableHeader;
