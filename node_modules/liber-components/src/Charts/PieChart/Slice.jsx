import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import { Slice as VictorySlice } from './styles';

const Slice = ({ innerRadius, radius, events, abs, ...props }) => {
  const pathFunctionBg = arc()
    .outerRadius(2 * abs + radius)
    .innerRadius(innerRadius);
  const pathFunctionFg = arc()
    .outerRadius(abs / 2 + radius)
    .innerRadius(innerRadius - abs / 2);
  const defaultPathFunction = arc()
    .outerRadius(radius)
    .innerRadius(innerRadius);
  return (
    <Fragment>
      <g {...events}>
        <VictorySlice
          {...props}
          style={{ fill: 'transparent' }}
          pathFunction={pathFunctionBg}
        />

        <VictorySlice
          {...props}
          pathFunction={abs > 0 ? pathFunctionFg : defaultPathFunction}
        />
      </g>
    </Fragment>
  );
};

Slice.propTypes = {
  slice: PropTypes.objectOf(PropTypes.any), // eslint-disable-line react/require-default-props
  style: PropTypes.objectOf(PropTypes.any), // eslint-disable-line react/require-default-props
  events: PropTypes.objectOf(PropTypes.any), // eslint-disable-line react/require-default-props
  pathFunction: PropTypes.func, // eslint-disable-line react/require-default-props
  abs: PropTypes.number,
  innerRadius: PropTypes.number,
  radius: PropTypes.number,
};
Slice.defaultProps = {
  abs: 0,
  innerRadius: 0,
  radius: 100,
};

export default Slice;
