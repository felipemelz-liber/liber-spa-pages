import React from 'react';
import PropTypes from 'prop-types';
import { HeaderColumn } from './TableHeader.styles';
import { columnShape, sortingShape } from '../../utils';
import SortIcon from '../SortIcon/SortIcon';

const TableHeaderColumn = ({ column, sortingProps, ...props }) => {
  const { align, name, label, groupedColumns = [] } = column;
  const { onSort, sorting, sortedColumns = true } = sortingProps;

  const [columnSort] = sorting.filter(
    ({ columnName }) => columnName === name || groupedColumns.includes(columnName),
  );

  const onColumnSort = () => onSort(column, columnSort);

  const isSortingEnabled = () => {
    if (typeof sortedColumns === 'boolean') {
      return sortedColumns;
    }
    return sortedColumns.length && sortedColumns.includes(name);
  };

  return (
    <HeaderColumn
      align={align}
      onClick={isSortingEnabled() && name ? onColumnSort : undefined}
      isSorted={isSortingEnabled() && Boolean(columnSort)}
      isSortingEnabled={isSortingEnabled()}
      {...props}
    >
      {label}
      {isSortingEnabled() && <SortIcon direction={columnSort ? columnSort.direction : null} />}
    </HeaderColumn>
  );
};

TableHeaderColumn.propTypes = {
  column: columnShape.isRequired,
  sortingProps: sortingShape,
  sorting: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
};

TableHeaderColumn.defaultProps = {
  sortingProps: {
    onSort: () => {},
    sorting: [],
    sortedColumns: false,
  },
  sorting: false,
};

export default TableHeaderColumn;
