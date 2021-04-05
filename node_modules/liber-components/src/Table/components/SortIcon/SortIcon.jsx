import React from 'react';
import PropTypes from 'prop-types';
import { Neutral, Ascending, Descending } from './SortIcon.styles';

const SortIcon = ({ direction }) => {
  if (!direction) {
    return <Neutral />;
  }
  return direction === 'asc' ? <Ascending /> : <Descending />;
};

SortIcon.propTypes = {
  direction: PropTypes.oneOf(['asc', 'desc']),
};

SortIcon.defaultProps = {
  direction: null,
};

export default SortIcon;
