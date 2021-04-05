import React from 'react';
import PropTypes from 'prop-types';

const ChartLabel = ({ children, highlight, ...props }) => {
  const style = {
    transition: 'opacity 100ms ease',
    opacity: highlight,
    cursor: 'pointer',
  };
  return (
    <div
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

ChartLabel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  highlight: PropTypes.string,
};

ChartLabel.defaultProps = {
  children: '',
  highlight: null,

};

export default ChartLabel;
