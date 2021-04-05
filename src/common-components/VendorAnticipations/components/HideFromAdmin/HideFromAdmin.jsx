import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const HideFromAdmin = ({ children, isAdmin }) => (isAdmin ? null : <>{children}</>);

HideFromAdmin.propTypes = {
  children: PropTypes.node,
  isAdmin: PropTypes.bool,
};

HideFromAdmin.defaultProps = {
  children: null,
  isAdmin: false,
};

const mapStateToProps = ({ vendorAdvances: { isAdmin } }) => ({ isAdmin });

export default connect(mapStateToProps)(HideFromAdmin);
