import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterTag from '../FilterTag/index.js';
import {
  TextField,
  Box,
  TagsContainer,
  FilterButton,
  ClearButton,
  Footer,
  DialogContent,
} from './ArrayFieldFilter.styles.jsx';
import TagsDisplay from './components/TagsDisplay';

const toggleOpen = setOpen => value => {
  setOpen(value);
};

const hasSeparator = text => text.includes(',') || text.includes(';') || text.includes(' ');

const splitText = text => {
  const spacesCleared = text.replace(/\s/g, ',');
  const withCommaSeparator = spacesCleared.replace(/[;]+/g, ',');
  return withCommaSeparator.split(',');
};

const cleanArray = items => items.filter(item => item !== '').map(item => item.trim());

const onConfirm = (textState, onFilter, setOpen) => event => {
  const [text, setText] = textState;
  let values;
  event.preventDefault();

  if (hasSeparator(text)) {
    const items = splitText(text);
    values = cleanArray(items);
  } else {
    values = [text.trim()];
  }

  setOpen(false);
  setText('');
  onFilter(values);
};

const formatSelectedLabel = label => list => {
  const [selectedItems] = list;
  return `${label} (${selectedItems.length})`;
};

const ArrayFieldFilter = ({
  onClear,
  onFilter,
  selectedItems,
  hintText,
  label,
  tagsThreshold,
  tagsPerLine,
}) => {
  const textState = useState('');
  const [open, setOpen] = useState(false);
  const [text, setText] = textState;

  return (
    <FilterTag
      selected={[selectedItems]}
      label={label}
      show={open}
      onChange={toggleOpen(setOpen)}
      onClear={onClear}
      formatSelected={formatSelectedLabel(label)}
    >
      <form>
        <DialogContent>
          <Box>
            <TextField autoFocus hintText={hintText} width="100%" value={text} onChange={setText} />
          </Box>
          <TagsContainer>
            <TagsDisplay
              tags={selectedItems || []}
              tagsThreshold={tagsThreshold}
              tagsPerLine={tagsPerLine}
            />
          </TagsContainer>
        </DialogContent>
        <Footer>
          <FilterButton disabled={text === ''} onClick={onConfirm(textState, onFilter, setOpen)}>
            FILTRAR
          </FilterButton>
          <ClearButton onClick={onClear} disabled={!selectedItems || selectedItems.length === 0}>
            LIMPAR
          </ClearButton>
        </Footer>
      </form>
    </FilterTag>
  );
};

ArrayFieldFilter.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  onFilter: PropTypes.func,
  onClear: PropTypes.func,
  hintText: PropTypes.string,
  tagsThreshold: PropTypes.number,
  label: PropTypes.string,
  tagsPerLine: PropTypes.number,
};

ArrayFieldFilter.defaultProps = {
  selectedItems: null,
  hintText: '',
  tagsThreshold: 18,
  tagsPerLine: 6,
  onFilter: () => {},
  onClear: () => {},
  label: '',
};

export default ArrayFieldFilter;
