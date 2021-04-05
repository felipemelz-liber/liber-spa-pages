import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'liber-components/components/Inputs';
import moment from 'moment';
import { Box, Text } from './DateFieldFilter.styles.jsx';
import FilterTag from '../FilterTag';
import FilterFooter from '../FilterFooter';

const hasClearedFilters = selectedItems =>
  selectedItems.filter(filter => filter !== null).length === 0;

const DateFieldFilter = ({ label, description, onFilter, onClear, selectedItems }) => {
  const [showTag, setShowTag] = useState(false);
  const [rangeField, setRangeField] = useState({ start: null, end: null });
  const [displayDate, setDisplayDate] = useState(rangeField.start || moment());

  useEffect(() => {
    if (hasClearedFilters(selectedItems)) {
      setRangeField({ start: null, end: null });
    }
  }, [selectedItems]);

  const isDisabled = () => !(rangeField.start || rangeField.end);
  const handleClear = () => {
    setRangeField({ start: null, end: null });
    onClear();
  };
  const handleFilter = () => {
    onFilter(rangeField);
    setShowTag(false);
  };
  const toggleShow = (shouldShow = undefined) =>
    shouldShow === undefined ? setShowTag(!showTag) : setShowTag(shouldShow);

  const formatLabel = selected => {
    const [start, end, singleDay] = selected;
    if (start && end) {
      return `${moment(start).format('DD/MM/YYYY')} a ${moment(end).format('DD/MM/YYYY')}`;
    }
    if (singleDay) {
      return moment(singleDay).format('DD/MM/YYYY');
    }
    if (start) {
      return moment(start).format('DD/MM/YYYY');
    }
    if (end) {
      return moment(end).format('DD/MM/YYYY');
    }
    return 'Data de Criação';
  };
  const navigate = date => setDisplayDate(date);

  return (
    <FilterTag
      show={showTag}
      onChange={toggleShow}
      onClear={handleClear}
      selected={selectedItems}
      formatSelected={formatLabel}
      label={label}
      overflow="center"
    >
      <Box>
        <Text>{description}</Text>
        <Range
          showTime={false}
          onChangeDates={(start, end) => setRangeField({ start, end })}
          startDate={rangeField.start}
          endDate={rangeField.end}
          displayDate={displayDate}
          onNavigate={navigate}
        />
      </Box>
      <FilterFooter disabled={isDisabled()} onFilter={handleFilter} onClear={handleClear} />
    </FilterTag>
  );
};

DateFieldFilter.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  onFilter: PropTypes.func,
  onClear: PropTypes.func,
  selectedItems: PropTypes.arrayOf(PropTypes.string),
};

DateFieldFilter.defaultProps = {
  label: 'Data',
  description: 'Selecione uma data de início e uma data de fim para o período desejado:',
  onFilter: () => null,
  onClear: () => null,
  selectedItems: [],
};

export default DateFieldFilter;
