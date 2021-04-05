import React from 'react';
import PropTypes from 'prop-types';
import { Container, Spinner } from './styles';

const LoadingSpinner = ({ color, size, thickness, ...props }) => (
  <Container {...props}>
    <Spinner color={color} size={size} thickness={thickness}>
      <span />
    </Spinner>
  </Container>
);

LoadingSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  thickness: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  color: null,
  size: null,
  thickness: null,
};

export default LoadingSpinner;
