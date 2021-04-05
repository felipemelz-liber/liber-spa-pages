import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  InputAutoCompleteList,
  InputAutoCompleteItem,
  InputBase,
  InputError,
  InputHelper,
  InputHelperIcon,
  InputHelperText,
  InputHint,
  InputLabel,
  InputPrefix,
  InputText,
} from './TextArea.styles';

const genId = () => {
  if (process.env.NODE_ENV === 'test') return 'abcde';
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      error: Boolean(props.errorMessage),
      valid: Boolean(props.value),
      value: props.value || '',
      autoCompleteListItens: [],
    };
    this.minWidth = '190px';
    this.minHeight = '42px';
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const error =
      typeof nextProps.errorMessage !== 'undefined'
        ? Boolean(nextProps.errorMessage)
        : prevState.error;
    const value = nextProps.value !== null ? nextProps.value : prevState.value;
    const valid = nextProps.value !== null ? Boolean(value) : prevState.valid;

    if (error === prevState.error && valid === prevState.valid && value === prevState.value)
      return null;

    const nextState = { error, valid, value };

    return nextState;
  }

  componentDidMount() {
    const wHint = this.hint.offsetWidth;
    const hHint = this.hint.offsetHeight;
    const wPrefix = this.prefix.offsetWidth;
    const wLabel = this.label.offsetWidth;
    const hLabel = this.label.offsetHeight;
    this.minWidth = `${Math.max(wLabel, wPrefix + wHint)}px`;
    this.minHeight = `${Math.max(hLabel, hHint)}px`;
  }

  handleChange = event => {
    const value =
      this.props.type === 'number'
        ? event.target.value.match(/-?[0-9eE]*/).join()
        : event.target.value;
    const { autoComplete, autoCompleteList } = this.props;
    this.setState({ valid: value.length > 0 });
    if (autoComplete) {
      if (value) {
        const result = autoCompleteList.filter(item =>
          item.toLowerCase().includes(value.toLowerCase()),
        );
        this.setState({ autoCompleteListItens: result });
      } else {
        this.setState({ autoCompleteListItens: [] });
      }
    }
    if (this.props.onChange) this.props.onChange(value);
    else this.setState({ value });
  };

  handleFocus = () => {
    this.setState({ focused: true }, () => {
      this.props.onFocus(this.state.value);
    });
  };

  handleBlur = () => {
    this.setState({ focused: false }, () => {
      this.props.onBlur(this.state.value);
    });
  };

  getPadding = prefix => {
    if (prefix === '') return null;
    return this.prefix ? `${this.prefix.offsetWidth + 4}px` : '20px';
  };

  onSelectItem = event => {
    this.setState({ value: event.currentTarget.textContent, autoCompleteListItens: [] });
  };

  renderAutoCompleteListItens = () => {
    const { autoCompleteListItens } = this.state;
    return autoCompleteListItens.map(item => (
      <InputAutoCompleteItem key={item} onClick={this.onSelectItem}>
        {item}
      </InputAutoCompleteItem>
    ));
  };

  handleInput = event => {
    const offset = this.textarea.offsetHeight - this.textarea.clientHeight;
    event.target.style.height = 'auto'; // eslint-disable-line
    event.target.style.height = `${event.target.scrollHeight + offset}px`; // eslint-disable-line
  };

  areaRef = innerRef => element => {
    this.textarea = element;
    if (innerRef) innerRef(element);
  };

  labelRef = element => {
    this.label = element;
  };

  hintRef = element => {
    this.hint = element;
  };

  prefixRef = element => {
    this.prefix = element;
  };

  render() {
    const {
      autoComplete,
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
      autoCompleteList,
      fixed,
      ...props
    } = this.props;
    const { error, focused, valid, value, autoCompleteListItens } = this.state;
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
          ref={this.labelRef}
          focused={focused}
          valid={valid}
          open={openLabel}
          error={error}
          htmlFor={id}
          disabled={disabled}
        >
          {label}
        </InputLabel>
        <InputHint ref={this.hintRef} visible={(focused || !label) && !valid}>
          {hintText}
        </InputHint>
        <InputPrefix
          ref={this.prefixRef}
          visible={focused || openLabel || valid}
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
          ref={this.areaRef(innerRef)}
          error={error}
          onInput={!fixed ? this.handleInput : undefined}
          minWidth={this.minWidth}
          minHeight={this.minHeight}
        />
        {autoComplete && autoCompleteListItens && (
          <InputAutoCompleteList>{this.renderAutoCompleteListItens()}</InputAutoCompleteList>
        )}
        {error && <InputError visible={error}>{errorMessage}</InputError>}
        <InputHelper afterError={error} visible={Boolean(helper)}>
          <InputHelperIcon />
          <InputHelperText>{helper}</InputHelperText>
        </InputHelper>
      </InputBase>
    );
  }
}

TextArea.propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.any]),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  fullWidth: PropTypes.bool,
  helper: PropTypes.string,
  hintText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  fixed: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  openLabel: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.bool,
  autoCompleteList: PropTypes.arrayOf(PropTypes.string),
};

TextArea.defaultProps = {
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
  width: '247px',
  openLabel: false,
  innerRef: {},
  type: 'text',
  autoComplete: false,
  autoCompleteList: [],
  fixed: false,
};

export default forwardRef((props, ref) => <TextArea innerRef={ref} {...props} />); // eslint-disable-line
