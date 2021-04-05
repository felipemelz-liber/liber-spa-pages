import React from 'react';
import PropTypes from 'prop-types';

const FaEllipsisV = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28
    68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0
    40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
  </svg>
);

FaEllipsisV.displayName = 'FaEllipsisV';
FaEllipsisV.propTypes = {
  className: PropTypes.string,
};

FaEllipsisV.defaultProps = {
  className: '',
};

export default FaEllipsisV;
