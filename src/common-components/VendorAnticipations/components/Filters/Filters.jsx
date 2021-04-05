import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateFieldFilter from '../../../Filters/DateFieldFilter/DateFieldFilter';
import { REQUESTED_LT, REQUESTED_GT, STATUS, STATUS_IN } from '../../utils';
import { updateFilter } from '../../actions/VendorAdvancesActions';
import OptionsFilter from '../../../Filters/OptionsFilter/OptionsFilter';
import { FilterText, CleanFilters } from './Filters.styles';
import { dispatchDataLayerEvent } from '../../../../vendor/Utils';

const clearDateFilters = {
  [REQUESTED_LT]: null,
  [REQUESTED_GT]: null,
};

const clearStatusFilters = {
  [STATUS_IN]: null,
};

const allClearFilters = {
  ...clearDateFilters,
  ...clearStatusFilters,
};

const onDateFilter = (changeFilters, applyedFilters, isAdmin) => range => {
  dispatchDataLayerEvent('antecipacoesFiltrarSolicitacao', isAdmin);

  let filters = {};

  if (range && range.end) {
    filters = {
      [REQUESTED_GT]: range.start.format(),
      [REQUESTED_LT]: range.end.format(),
    };
  } else {
    filters = {
      [REQUESTED_GT]: range && range.start ? range.start.startOf('day').format() : null,
      [REQUESTED_LT]: range && range.start ? range.start.endOf('day').format() : null,
    };
  }

  changeFilters({ ...applyedFilters, ...filters });
};

const onStatusFilter = (filters, changeFilters, selectedStatuses, isAdmin) => {
  const status = selectedStatuses
    .map(statusId => (statusId === STATUS.finished ? 'Concluida' : 'Cancelada'))
    .join(' | ');

  dispatchDataLayerEvent('antecipacoesFiltrarStatus', isAdmin, {
    filtroStatusAntecipacoes: status,
  });

  changeFilters({ ...filters, [STATUS_IN]: selectedStatuses });
};

const handleDateFilterClear = (changeFilters, filters, isAdmin) => {
  dispatchDataLayerEvent('antecipacoesLimparFiltro', isAdmin);

  changeFilters({ ...filters, ...clearDateFilters });
};

const handleStatusFilterClear = (changeFilters, filters, isAdmin) => {
  dispatchDataLayerEvent('antecipacoesLimparFiltro', isAdmin);

  changeFilters({ ...filters, ...clearStatusFilters });
};

const handleClearAllFiltersClick = (changeFilters, isAdmin) => {
  dispatchDataLayerEvent('antecipacoesLimparFiltro', isAdmin);

  changeFilters(allClearFilters);
};

const hasFilters = filters =>
  Object.keys(filters).reduce((flag, key) => flag || Boolean(filters[key]), false);

export const Filters = ({ changeFilters, filters, isAdmin }) => {
  return (
    <>
      <FilterText>Filtrar por</FilterText>
      <DateFieldFilter
        label="Solicitação"
        onFilter={onDateFilter(changeFilters, filters, isAdmin)}
        onClear={() => handleDateFilterClear(changeFilters, filters, clearDateFilters, isAdmin)}
        selectedItems={[filters[REQUESTED_GT], filters[REQUESTED_LT]]}
      />
      <OptionsFilter
        filterValues={filters[STATUS_IN]}
        onFilter={selectedStatuses =>
          onStatusFilter(filters, changeFilters, selectedStatuses, isAdmin)
        }
        onClear={() => handleStatusFilterClear(changeFilters, filters, clearStatusFilters, isAdmin)}
        options={[
          { option: 'Concluída', value: STATUS.finished },
          { option: 'Cancelada', value: STATUS.canceled },
        ]}
        label="Status"
      />
      {hasFilters(filters) ? (
        <CleanFilters onClick={() => handleClearAllFiltersClick(changeFilters, isAdmin)}>
          Limpar filtros
        </CleanFilters>
      ) : null}
    </>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func,
  filters: PropTypes.shape({
    [REQUESTED_LT]: PropTypes.string,
    [REQUESTED_GT]: PropTypes.string,
    [STATUS_IN]: PropTypes.arrayOf(PropTypes.number),
  }),
  isAdmin: PropTypes.bool,
};

Filters.defaultProps = {
  filters: {},
  isAdmin: false,
  changeFilters: () => {},
};

const mapStateToProps = ({ vendorAdvances: { filters, isAdmin } }) => ({ filters, isAdmin });

const mapDispatchToProps = {
  changeFilters: updateFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
