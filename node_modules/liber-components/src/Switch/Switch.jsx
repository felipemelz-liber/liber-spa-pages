import React from 'react';
import PropTypes from 'prop-types';
import { Container, Circle } from './Switch.styles';

const Switch = ({ checked, onChange }) => (
  <Container checked={checked} onClick={() => onChange(!checked)}>
    <Circle />
  </Container>
);

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  onChange: () => null,
};

export default Switch;
