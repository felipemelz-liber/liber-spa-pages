import React from 'react';
import PropTypes from 'prop-types';
import { Container, Dot, Text } from './StatusText.styles';

const StatusText = ({ children, type }) => {
  return (
    <Container>
      <Dot type={type} />
      <Text type={type}>{children}</Text>
    </Container>
  );
};

StatusText.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['positive', 'negative', 'neutral', 'primary']),
};

StatusText.defaultProps = {
  children: '',
  type: 'neutral',
};

export default StatusText;
