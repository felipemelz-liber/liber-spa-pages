import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from './TextFieldFilter.styles';
import { Field } from '../Filters.styles';
import FilterTag from '../FilterTag';
import FilterFooter from '../FilterFooter';

export const TextFieldFilter = ({ label, mask, hintText, onFilter, onClear, selectedItems }) => {
  const [showTag, setShowTag] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (selectedItems === null) {
      setValue('');
    }
  }, [selectedItems]);

  const formatMask = incMask => (mask ? incMask.replace(/[0-9]/g, '_') : '');
  const isDisabled = () => value === '' || value === formatMask(mask);
  const handleClear = () => {
    setValue('');
    onClear();
  };
  const handleFilter = event => {
    event.preventDefault();
    onFilter(value);
    setShowTag(false);
  };
  const toggleShow = (shouldShow = undefined) =>
    shouldShow === undefined ? setShowTag(!showTag) : setShowTag(shouldShow);

  return (
    <FilterTag
      show={showTag}
      onChange={toggleShow}
      onClear={handleClear}
      selected={[selectedItems]}
      formatSelected={values => (showTag ? '' : values[0])}
      label={label}
    >
      <form>
        <Box>
          <Field
            autoFocus
            version={2}
            width="100%"
            hintText={hintText}
            value={value}
            onChange={setValue}
            mask={mask}
          />
        </Box>
        <FilterFooter disabled={isDisabled()} onFilter={handleFilter} onClear={handleClear} />
      </form>
    </FilterTag>
  );
};

TextFieldFilter.propTypes = {
  label: PropTypes.string,
  mask: PropTypes.string,
  hintText: PropTypes.string,
  onFilter: PropTypes.func,
  onClear: PropTypes.func,
  selectedItems: PropTypes.string,
};

TextFieldFilter.defaultProps = {
  label: 'Tag',
  mask: null,
  hintText: 'Digite o que deseja buscar',
  onFilter: () => null,
  onClear: () => null,
  selectedItems: null,
};

export default TextFieldFilter;
