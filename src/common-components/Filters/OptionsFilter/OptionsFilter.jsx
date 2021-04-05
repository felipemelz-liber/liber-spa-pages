import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterTag from '../FilterTag';
import SelectTag from '../../SelectTag/SelectTag';
import FilterFooter from '../FilterFooter';
import { OptionsContainer } from './OptionsFilter.styles';

const handleFilter = (option, selectedState) => () => {
  const [selectedOptions, setSelectedOptions] = selectedState;
  let finalSelection = [];

  if (selectedOptions.includes(option)) {
    finalSelection = selectedOptions.filter(selectedOption => selectedOption !== option);
  } else {
    finalSelection = [...selectedOptions, option];
  }

  setSelectedOptions(finalSelection);
};

const formatLabel = label => list => {
  const [selectedOptions] = list;

  return `${label} (${selectedOptions.length})`;
};

const OptionsFilter = ({ options, onFilter, onClear, filterValues, label }) => {
  const [open, setOpen] = useState(false);
  const selectedState = useState(filterValues || []);
  const [selectedOptions, setSelectedOptions] = selectedState;

  useEffect(() => {
    if (!filterValues) {
      setSelectedOptions([]);
    }
  }, [filterValues]);

  return (
    <FilterTag
      selected={[filterValues]}
      onClear={onClear}
      show={open}
      label={label}
      formatSelected={formatLabel(label)}
      onChange={setOpen}
    >
      <OptionsContainer>
        {options.map(({ value, option }) => (
          <SelectTag
            key={`option-${value}`}
            onChange={handleFilter(value, selectedState)}
            selected={selectedOptions.includes(value)}
          >
            {option}
          </SelectTag>
        ))}
      </OptionsContainer>
      <FilterFooter
        disabled={selectedOptions.length === 0}
        onFilter={() => {
          setOpen(false);
          onFilter(selectedOptions);
        }}
        onClear={onClear}
      />
    </FilterTag>
  );
};

OptionsFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.any, option: PropTypes.string })),
  filterValues: PropTypes.arrayOf(PropTypes.any),
  onFilter: PropTypes.func,
  onClear: PropTypes.func,
  label: PropTypes.string,
};

OptionsFilter.defaultProps = {
  options: [],
  filterValues: null,
  onFilter: () => {},
  onClear: () => {},
  label: '',
};

export default OptionsFilter;
