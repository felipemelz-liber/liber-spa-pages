import React from 'react';
import PropTypes from 'prop-types';
import { Container, WhiteCircle } from './StatusLabel.styles';

const StatusLabel = ({ children, status, color }) => {
  return (
    <>
      <Container status={status} color={color}>
        <WhiteCircle />
        {children}
      </Container>
    </>
  );
};

StatusLabel.propTypes = {
  children: PropTypes.node,
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'primary']),
  color: PropTypes.string,
};

StatusLabel.defaultProps = {
  children: '',
  status: 'neutral',
  color: '',
};

export default StatusLabel;
