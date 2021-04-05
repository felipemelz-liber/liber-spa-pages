import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../../Pagination/Pagination';
import { StickyContainer, FilterContainer, PaginationContainer } from './CompleteTable.styles';
import { columnShape, ACTIONS_SPACE, SELECTION_SPACE, sortingShape } from '../../utils';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Empty from './Empty';

const renderPagination = args => {
  const {
    currentPage,
    pageTotal,
    onChangePage,
    onClickNext,
    onClickPrev,
    onKeyDownPage,
    hasListing,
    listingProps,
  } = args;
  return (
    <PaginationContainer>
      <Pagination
        style={{ marginTop: 24 }}
        page={currentPage}
        pageTotal={pageTotal}
        onChangePage={onChangePage}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        onKeyDownPage={onKeyDownPage}
        withListing={hasListing}
        listingProps={listingProps}
      />
    </PaginationContainer>
  );
};

const CompleteTable = ({
  columns,
  items,
  onSelectAll,
  allChecked,
  filters,
  borderBottom,
  filterBorderTop,
  headerBorderTop,
  actions,
  isItemSelected,
  onSelect,
  paginationProps,
  emptyState,
  selectionControl,
  isItemSelectable,
  tooltipContent,
  sortingProps,
  hiddenColumns,
  weightedColumns,
}) => {
  const percentageSpaceAvailable =
    1 - (actions ? ACTIONS_SPACE : 0) - (onSelectAll ? SELECTION_SPACE : 0);

  return (
    <>
      <StickyContainer>
        {filters && (
          <FilterContainer borderTop={filterBorderTop} borderBottom={borderBottom}>
            {filters}
          </FilterContainer>
        )}
        <TableHeader
          columns={columns}
          onSelectAll={onSelectAll}
          allChecked={allChecked}
          hasActions={actions !== null}
          availableSpace={percentageSpaceAvailable}
          borderTop={headerBorderTop}
          sortingProps={sortingProps}
          hiddenColumns={hiddenColumns}
          weightedColumns={weightedColumns}
        />
      </StickyContainer>
      {selectionControl}
      <TableBody
        actions={actions}
        columns={columns}
        items={items}
        hasSelection={onSelectAll !== null}
        availableSpace={percentageSpaceAvailable}
        isItemSelected={isItemSelected}
        isItemSelectable={isItemSelectable}
        onSelect={onSelect}
        tooltipContent={tooltipContent}
        hiddenColumns={hiddenColumns}
        weightedColumns={weightedColumns}
      />
      {items.length === 0 && emptyState}
      {paginationProps && items.length > 0 && renderPagination(paginationProps)}
    </>
  );
};

CompleteTable.propTypes = {
  columns: PropTypes.arrayOf(columnShape.isRequired).isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSelectAll: PropTypes.func,
  allChecked: PropTypes.bool,
  isItemSelectable: PropTypes.func,
  filters: PropTypes.node,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  borderBottom: PropTypes.bool,
  filterBorderTop: PropTypes.bool,
  headerBorderTop: PropTypes.bool,
  isItemSelected: PropTypes.func,
  onSelect: PropTypes.func,
  selectionControl: PropTypes.node,
  hiddenColumns: PropTypes.arrayOf(PropTypes.string),
  weightedColumns: PropTypes.bool,
  paginationProps: PropTypes.shape({
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pageTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChangePage: PropTypes.func.isRequired,
    onClickNext: PropTypes.func.isRequired,
    onClickPrev: PropTypes.func.isRequired,
    onKeyDownPage: PropTypes.func.isRequired,
    hasListing: PropTypes.bool,
    listingProps: PropTypes.shape({
      onSelectListing: PropTypes.func.isRequired,
      listing: PropTypes.oneOf(['10', '25', '50', '100']).isRequired,
      total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      listingRef: PropTypes.oneOfType([PropTypes.any]),
      listingLabelSingular: PropTypes.string,
      listingLabelPlural: PropTypes.string,
    }),
  }),
  emptyState: PropTypes.node,
  tooltipContent: PropTypes.func,
  sortingProps: sortingShape,
};

CompleteTable.defaultProps = {
  onSelectAll: null,
  allChecked: false,
  filters: null,
  actions: null,
  borderBottom: false,
  filterBorderTop: true,
  headerBorderTop: true,
  isItemSelected: () => false,
  isItemSelectable: () => true,
  onSelect: () => null,
  hiddenColumns: [],
  paginationProps: null,
  emptyState: <Empty />,
  selectionControl: null,
  tooltipContent: () => null,
  sortingProps: {
    onSort: () => {},
    sorting: [],
    sortedColumns: false,
  },
  weightedColumns: false,
};

export default CompleteTable;
