import React from 'react';
import PropTypes from 'prop-types';
import { Loading, Bunny } from './VendorInvoices.styles';

const LoadingContainer = ({ loading, children }) => (
  <Loading loading={loading}>
    {loading ? <Bunny loop /> : null}
    {children}
  </Loading>
);

LoadingContainer.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
};

LoadingContainer.defaultProps = {
  loading: false,
  children: <div />,
};

export default LoadingContainer;
