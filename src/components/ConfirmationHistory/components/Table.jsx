import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CompleteTable } from 'liber-components';
import { DropDownContent, DropDownContentRow, EyeIcon, Global } from './Table.styles.jsx';
import { CONFIRMATION_HIST_COLUMNS, filtersPropTypes } from '../utils';
import { updatePagination } from '../actions/index.js';
import Filters from './filters/index.js';

export const ConfirmationHistoryTable = ({
  confirmations,
  handleFilter,
  pagination,
  onUpdatePagination,
  token,
  filters,
}) => {
  const { current, per, pages, count } = pagination;

  const listingStart = () => String((current - 1) * per + 1);
  const listingEnd = () => {
    const end = (current - 1) * per + per;
    if (count > end) return String(end);
    return String(count);
  };

  return (
    <>
      <Global />
      <CompleteTable
        columns={CONFIRMATION_HIST_COLUMNS}
        items={confirmations}
        filters={<Filters count={count} handleFilter={handleFilter} />}
        actions={({ details }) => (
          <DropDownContent>
            <DropDownContentRow href={details}>
              <EyeIcon />
              Visualizar Confirmação
            </DropDownContentRow>
          </DropDownContent>
        )}
        paginationProps={{
          currentPage: String(current),
          pageTotal: String(pages),
          onChangePage: target =>
            onUpdatePagination(token, { per, page: parseInt(target.value, 10), ...filters }),
          onClickNext: () => onUpdatePagination(token, { per, page: current + 1, ...filters }),
          onClickPrev: () => onUpdatePagination(token, { per, page: current - 1, ...filters }),
          hasListing: true,
          listingProps: {
            onSelectListing: selectedListing =>
              onUpdatePagination(token, {
                per: parseInt(selectedListing, 10),
                page: 1,
                ...filters,
              }),
            listing: String(per),
            total: String(count),
            listingLabelSingular: 'confirmação',
            listingLabelPlural: 'confirmações',
            showInterval: {
              start: listingStart(),
              end: listingEnd(),
            },
          },
          onKeyDownPage: () => null,
        }}
      />
    </>
  );
};

ConfirmationHistoryTable.propTypes = {
  confirmations: PropTypes.arrayOf(PropTypes.object),
  handleFilter: PropTypes.func,
  pagination: PropTypes.shape({
    current: PropTypes.number,
    per: PropTypes.number,
    pages: PropTypes.number,
    count: PropTypes.number,
  }),
  onUpdatePagination: PropTypes.func,
  token: PropTypes.string.isRequired,
  filters: filtersPropTypes.isRequired,
};

ConfirmationHistoryTable.defaultProps = {
  confirmations: [],
  handleFilter: () => null,
  pagination: {},
  onUpdatePagination: () => null,
};

const mapStateToProps = ({ confirmationHistory }) => ({
  confirmations: confirmationHistory.confirmations,
  pagination: confirmationHistory.pagination,
  token: confirmationHistory.token,
  filters: confirmationHistory.filters,
});

const mapDispatchToProps = {
  onUpdatePagination: updatePagination,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmationHistoryTable);
