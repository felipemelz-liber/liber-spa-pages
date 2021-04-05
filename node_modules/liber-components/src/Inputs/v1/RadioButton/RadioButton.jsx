import React from 'react';
import PropTypes from 'prop-types';
import Radio from './RadioButton.styles';

class RadioButton extends React.Component {
  setInputRef = (ref) => { this.inputRef = ref; }

  handleKeyDown = (event) => {
    if (event.keyCode === 13) this.inputRef.click();
  }

  render() {
    const {
      name, id, value, children,
      onChange, checked, color, labelColor,
      className, type,
    } = this.props;

    return (
      <Radio
        htmlFor={id}
        color={color}
        labelColor={labelColor}
        className={className}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
      >
        <input
          ref={this.setInputRef}
          id={id}
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <div>{children}</div>
      </Radio>
    );
  }
}

RadioButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  value: PropTypes.string,
  checked: PropTypes.bool,
  color: PropTypes.string,
  labelColor: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  children: '',
  name: 'radios',
  checked: null,
  value: 'on',
  color: '',
  labelColor: '',
  className: '',
  type: 'radio',
  onChange: () => {},
};

export default RadioButton;
