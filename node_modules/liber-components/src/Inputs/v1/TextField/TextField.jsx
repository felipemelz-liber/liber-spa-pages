import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  InputBase,
  InputBar,
  InputError,
  InputHelper,
  InputHelperIcon,
  InputHelperText,
  InputHint,
  InputLabel,
  InputText,
  InputPrefix,
} from '../Base.styles';

const genId = () => {
  if (process.env.NODE_ENV === 'test') return 'abcde';
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      error: Boolean(props.errorMessage),
      valid: Boolean(props.value),
      value: props.value || '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const error = typeof nextProps.errorMessage !== 'undefined'
      ? Boolean(nextProps.errorMessage)
      : prevState.error;
    const value = nextProps.value !== null ? nextProps.value : prevState.value;
    const valid = nextProps.value !== null ? Boolean(value) : prevState.valid;

    if (error === prevState.error && valid === prevState.valid && value === prevState.value) return null;

    const nextState = { error, valid, value };

    return nextState;
  }

  handleChange = (event) => {
    const value = this.props.type === 'number' ? event.target.value.match(/-?[0-9eE]*/).join() : event.target.value;
    this.setState({ valid: value.length > 0 });
    if (this.props.onChange) this.props.onChange(value);
    else this.setState({ value });
  }

  handleFocus = () => {
    this.setState(
      { focused: true },
      () => { this.props.onFocus(this.state.value); },
    );
  }

  handleBlur = () => {
    this.setState(
      { focused: false },
      () => { this.props.onBlur(this.state.value); },
    );
  }

  getPadding=(prefix) => {
    if (prefix === '') return null;
    return this.prefix ? `${this.prefix.offsetWidth + 4}px` : '20px';
  }

  render() {
    const {
      disabled,
      errorMessage,
      fullWidth,
      helper,
      label,
      hintText,
      width,
      openLabel,
      prefix,
      innerRef,
      id: fieldId,
      ...props
    } = this.props;
    const {
      error, focused, valid, value,
    } = this.state;

    let id;
    if (fieldId) id = fieldId;
    else if (label) id = label.toLowerCase();
    else id = genId();
    return (
      <InputBase
        width={fullWidth ? '100%' : width}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        disabled={disabled}
      >
        <InputLabel
          focused={focused}
          valid={valid}
          open={openLabel
        }
          error={error}
          htmlFor={id}
        >
          {label}
        </InputLabel>
        <InputHint visible={(focused || !label) && !valid}>{hintText}</InputHint>
        <InputPrefix
          ref={((element) => { this.prefix = element; })}
          visible={(focused || openLabel || valid)}
          focused={focused}
          error={error}
          valid={valid}
        >
          {prefix}
        </InputPrefix>
        <InputText
          {...props}
          id={id}
          type={props.type === 'number' ? 'text' : props.type}
          tabIndex={disabled ? '-1' : '0'}
          value={props.value || value}
          onChange={this.handleChange}
          padding={this.getPadding(prefix)}
          ref={innerRef}
        />
        <InputBar open={focused} error={error} valid={valid} />
        <InputError visible={error}>{errorMessage}</InputError>
        <InputHelper afterError={error} visible={Boolean(helper)}>
          <InputHelperIcon />
          <InputHelperText>{helper}</InputHelperText>
        </InputHelper>
      </InputBase>
    );
  }
}

TextField.propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.any]),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  fullWidth: PropTypes.bool,
  helper: PropTypes.string,
  hintText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  openLabel: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  id: null,
  disabled: false,
  errorMessage: '',
  fullWidth: false,
  helper: '',
  hintText: '',
  prefix: '',
  label: '',
  onBlur: () => {},
  onChange: null,
  onFocus: () => {},
  value: null,
  width: '256px',
  openLabel: false,
  innerRef: {},
  type: 'text',
};


export default forwardRef((props, ref) => <TextField innerRef={ref} {...props} />); // eslint-disable-line
