import React from 'react';
import PropTypes from 'prop-types';
import { Footer, FilterButton, ClearButton } from './Filters.styles';

const FilterFooter = ({ disabled, onFilter, onClear }) => {
  return (
    <Footer>
      <FilterButton disabled={disabled} onClick={onFilter}>
        FILTRAR
      </FilterButton>
      <ClearButton onClick={onClear} disabled={disabled}>
        LIMPAR
      </ClearButton>
    </Footer>
  );
};

FilterFooter.propTypes = {
  disabled: PropTypes.bool,
  onFilter: PropTypes.func,
  onClear: PropTypes.func,
};

FilterFooter.defaultProps = {
  disabled: false,
  onFilter: () => null,
  onClear: () => null,
};

export default FilterFooter;
