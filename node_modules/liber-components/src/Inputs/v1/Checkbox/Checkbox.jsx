import React from 'react';
import PropTypes from 'prop-types';
import Box from './Checkbox.styles';

const Checkbox = React.forwardRef(
  ({ name, id, value, children, onChange, checked, color, labelColor, className }, ref) => (
    <Box htmlFor={id} color={color} labelColor={labelColor} className={className} checked={checked}>
      <input
        id={id}
        type="checkbox"
        name={name}
        ref={ref}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </Box>
  ),
);

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  color: PropTypes.string,
  labelColor: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  name: 'checkboxes',
  children: '',
  checked: null,
  value: '',
  color: '',
  labelColor: '',
  className: '',
  onChange: () => {},
};

export default Checkbox;
