import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, Label } from './styles';

const InfoLabel = ({
  children, label, color, ...props
}) => (
  <Container {...props}>
    <Icon color={color} />
    <Label>{label || children}</Label>
  </Container>
);

InfoLabel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  color: PropTypes.string,
  label: PropTypes.string,
};

InfoLabel.defaultProps = {
  children: null,
  color: '',
  label: '',
};

export default InfoLabel;
