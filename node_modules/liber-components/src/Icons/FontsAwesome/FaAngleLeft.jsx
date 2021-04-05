import React from 'react';
import PropTypes from 'prop-types';

const FaAngleLeft = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23
    10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23
    10l50 50q10 10 10 23z"
    />
  </svg>
);

FaAngleLeft.displayName = 'FaAngleLeft';
FaAngleLeft.propTypes = {
  className: PropTypes.string,
};

FaAngleLeft.defaultProps = {
  className: '',
};

export default FaAngleLeft;
