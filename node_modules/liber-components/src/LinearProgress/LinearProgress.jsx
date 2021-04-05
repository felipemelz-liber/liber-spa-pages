import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundBar, DeterminateBar, IndeterminateBar } from './styles';

const LinearProgress = ({ determinate, value, background, height }) => {
  if (determinate) {
    return (
      <BackgroundBar height={height}>
        <DeterminateBar size={value} background={background} />
      </BackgroundBar>
    );
  }
  return (
    <BackgroundBar height={height}>
      <IndeterminateBar />
    </BackgroundBar>
  );
};

LinearProgress.propTypes = {
  determinate: PropTypes.bool,
  value: PropTypes.number,
  background: PropTypes.string,
  height: PropTypes.number,
};

LinearProgress.defaultProps = {
  determinate: false,
  value: 0,
  height: null,
  background: 'linear-gradient(to left, #83deff, #009dff);',
};
export default LinearProgress;
