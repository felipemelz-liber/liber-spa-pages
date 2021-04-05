import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Value, Label, ActionContainer, Display } from './styles';

const ActionDisplay = ({
  children,
  value,
  label,
  currency,
  prefix,
  ...props
}) => {
  const action = (children) ? cloneElement(React.Children.only(children)) : null;
  return (
    <Display {...props} hasAction={action !== null}>
      <Value prefix={prefix || currency}>{value}</Value>
      <Label>{label}</Label>
      <ActionContainer>
        {action}
      </ActionContainer>
    </Display>
  );
};

ActionDisplay.propTypes = {
  children: PropTypes.element,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  currency: PropTypes.string,
  prefix: PropTypes.string,
  divider: PropTypes.bool,
};

ActionDisplay.defaultProps = {
  children: null,
  value: 0,
  label: '',
  currency: null,
  prefix: null,
  divider: false,
};

export default ActionDisplay;
