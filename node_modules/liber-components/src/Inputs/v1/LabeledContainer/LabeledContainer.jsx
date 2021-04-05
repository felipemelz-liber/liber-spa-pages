import React from 'react';
import PropTypes from 'prop-types';
import { LabelContainer } from './LabeledContainer.styles';
import { InputError } from '../Base.styles';

const LabeledContainer = ({ children, errorMessage, label, ...props }) => (
  <div {...props}>
    <LabelContainer>
      <span>{label}</span>
      <InputError visible={Boolean(errorMessage)}>{errorMessage}</InputError>
    </LabelContainer>
    {children}
  </div>
);

LabeledContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
};

LabeledContainer.defaultProps = {
  children: null,
  errorMessage: '',
};

export default LabeledContainer;
