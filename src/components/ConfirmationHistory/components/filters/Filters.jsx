import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, CleanAll, Filtered } from './Filters.styles.jsx';
import { DateFieldFilter } from '../../../../common-components/Filters/index.js';

const Filters = ({ count, handleFilter }) => {
  const [rangeField, setRangeField] = useState({
    start: null,
    end: null,
  });

  const handleClear = () => {
    const filters = {
      start: null,
      end: null,
    };
    setRangeField(filters);
    handleFilter(filters);
  };

  const handleDateFilter = rangeData => {
    setRangeField(rangeData);
    handleFilter(rangeData);
  };

  const { start, end } = rangeField;

  const renderOnFilter = () => {
    if (start || end) {
      return (
        <>
          <CleanAll onClick={handleClear}>Limpar filtros</CleanAll>
          <Filtered>{`${count} ${
            count === 1 ? 'confirmação filtrada' : 'confirmações filtradas'
          }`}</Filtered>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Label>Filtrar por</Label>
      <DateFieldFilter
        label="Data de Criação"
        description="Selecione uma data inicial e uma data final para o período de criação"
        onClear={handleClear}
        onFilter={handleDateFilter}
        selectedItems={[start, end]}
      />
      {renderOnFilter()}
    </>
  );
};

Filters.propTypes = {
  count: PropTypes.number.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
