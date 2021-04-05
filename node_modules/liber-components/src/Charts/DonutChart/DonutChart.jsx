import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../PieChart';

const DonutChart = ({ innerRadius, ...props }) => (
  <PieChart {...props} innerRadius={innerRadius} />
);
DonutChart.propTypes = {
  innerRadius: PropTypes.number,
};

DonutChart.defaultProps = {
  innerRadius: 50,
};
export default DonutChart;
