import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterTag as Tag,
  SelectedLabelContainer,
  SelectedLabelOption,
  SelectedSwitch,
} from './FilterTag.styles';

const isSelected = list => {
  if (list) {
    return list.filter(item => Boolean(item)).length !== 0;
  }
  return false;
};

const format = list => {
  return list.join(' ');
};

const FilterTag = ({ selected, formatSelected, label, onClear, show, ...props }) => {
  const [hover, setHover] = React.useState(false);
  let tagProps;
  if (isSelected(selected)) {
    const nodeLabel = (
      <SelectedLabelContainer>
        <SelectedSwitch switch={hover || show}>
          <SelectedLabelOption>{formatSelected(selected)}</SelectedLabelOption>
          <SelectedLabelOption>{label}</SelectedLabelOption>
        </SelectedSwitch>
      </SelectedLabelContainer>
    );
    tagProps = {
      label: nodeLabel,
      closable: true,
      onClose: onClear,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      gray: !show,
      show,
      ...props,
    };
  } else {
    tagProps = { label, show, ...props };
  }
  return <Tag {...tagProps} />;
};

FilterTag.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.any),
  formatSelected: PropTypes.func,
  onClear: PropTypes.func,
  label: PropTypes.string,
  show: PropTypes.bool,
};

FilterTag.defaultProps = {
  selected: [],
  formatSelected: format,
  onClear: () => {},
  show: false,
  label: '',
};

export default FilterTag;
