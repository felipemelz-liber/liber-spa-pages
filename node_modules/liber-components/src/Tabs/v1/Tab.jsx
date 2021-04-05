import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, children }) => <div data-ref={label}>{children}</div>;

Tab.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Tab.defaultProps = {
  label: '',
  children: '',
};

export default Tab;
