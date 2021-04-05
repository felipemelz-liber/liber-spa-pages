import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label } from '../../../Filters/Filters.styles';
import { ArrayFieldFilter, TextFieldFilter } from '../../../Filters';
import OptionsFilter from '../../../Filters/OptionsFilter/OptionsFilter';
import { updateFilters } from '../../actions/VendorBorderoShowActions';
import { CleanFilters } from '../../../VendorAnticipations/components/Filters/Filters.styles';
import {
  DUPLICATA_NUMBER_IN_BORDERO,
  VENDOR_CNPJ_EQ,
  BORDERO_STATUS_IN,
  STATUS_REFERENCE,
} from '../../utils';

export const filtersNull = {
  [DUPLICATA_NUMBER_IN_BORDERO]: null,
  [VENDOR_CNPJ_EQ]: null,
  [BORDERO_STATUS_IN]: null,
};

export const BorderoInvoicesFilters = ({ filters, onUpdateFilters }, isAdmin) => {
  const hasFilters = () =>
    Object.keys(filters).reduce((flag, key) => flag || Boolean(filters[key]), false);

  const updateFilter = key => value => {
    onUpdateFilters({ ...filters, [key]: value }, isAdmin);
  };

  const clearFilter = key => () => {
    onUpdateFilters({ ...filters, [key]: null }, isAdmin);
  };

  return (
    <>
      <Label>Filtrar por: </Label>
      <ArrayFieldFilter
        label="Título"
        hintText="Digite o(s) número(s) do(s) título(s)"
        selectedItems={filters[DUPLICATA_NUMBER_IN_BORDERO]}
        onClear={clearFilter(DUPLICATA_NUMBER_IN_BORDERO)}
        onFilter={updateFilter(DUPLICATA_NUMBER_IN_BORDERO)}
      />
      <TextFieldFilter
        label="CNPJ"
        mask="99.999.999/9999-99"
        hintText="Digite o número do CNPJ"
        selectedItems={filters[VENDOR_CNPJ_EQ]}
        onClear={clearFilter(VENDOR_CNPJ_EQ)}
        onFilter={updateFilter(VENDOR_CNPJ_EQ)}
      />
      <OptionsFilter
        filterValues={filters[BORDERO_STATUS_IN]}
        onFilter={updateFilter(BORDERO_STATUS_IN)}
        onClear={clearFilter(BORDERO_STATUS_IN)}
        options={Object.keys(STATUS_REFERENCE).map(key => ({
          option: STATUS_REFERENCE[key],
          value: key,
        }))}
        label="Status"
      />
      {hasFilters() ? (
        <CleanFilters onClick={() => onUpdateFilters(filtersNull, isAdmin)}>
          Limpar filtros
        </CleanFilters>
      ) : null}
    </>
  );
};

BorderoInvoicesFilters.propTypes = {
  filters: PropTypes.shape({}),
  onUpdateFilters: PropTypes.func,
};

BorderoInvoicesFilters.defaultProps = {
  filters: {},
  onUpdateFilters: () => {},
};

const mapStateToProps = ({ vendorBorderoShow: { filters } }) => ({ filters });

const mapDispatchToProps = {
  onUpdateFilters: updateFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(BorderoInvoicesFilters);
