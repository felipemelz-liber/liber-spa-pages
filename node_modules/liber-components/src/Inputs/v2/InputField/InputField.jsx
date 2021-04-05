import React, { forwardRef, Fragment } from 'react';
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
  HighlightItem,
  ChevronUpIcon,
  ChevronDownIcon,
  SpinButtons,
  PasswordToggleContainer,
  VisibilityIcon,
} from './InputField.styles';

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

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      error: Boolean(props.errorMessage),
      valid: Boolean(props.value),
      value: props.value || '',
      autoCompleteListItens: [],
      stateType: props.type,
    };
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

  getSearch = (child, search) => child.toLowerCase().search(search.toLowerCase());

  getHighlightItems = item => {
    const { value } = this.state;
    const index = this.getSearch(item, value);
    return (
      <Fragment>
        {item.substr(0, index)}
        <HighlightItem>{item.substr(index, value.length)}</HighlightItem>
        {item.substr(index + value.length)}
      </Fragment>
    );
  };

  handleVisibilityToggle = () => {
    const { stateType } = this.state;
    this.setState({
      stateType: stateType === 'password' ? 'text' : 'password',
    });
  };

  handleChange = event => {
    const { max, min } = this.props;
    const { value } = event.target;
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
    let newValue = value;
    if (value.length && value > max) {
      newValue = max;
    } else if (value.length && value < min) {
      newValue = min;
    }
    if (this.props.onChange) this.props.onChange(newValue);
    else this.setState({ value: newValue });
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
    this.setState({
      value: event.currentTarget.textContent,
      autoCompleteListItens: [],
    });
  };

  renderAutoCompleteListItens = () => {
    const { autoCompleteListItens } = this.state;
    return autoCompleteListItens.map(item => (
      <InputAutoCompleteItem key={item} onClick={this.onSelectItem}>
        {this.getHighlightItems(item)}
      </InputAutoCompleteItem>
    ));
  };

  handleStepUp = () => {
    const { value } = this.state;
    const { max, step, precision, onChange } = this.props;
    const sumValue = step || 1;
    let newValue = parseFloat(value || 0) + sumValue;

    if (newValue > max) {
      newValue = max;
    }
    if (onChange) onChange(newValue.toFixed(precision));
    else this.setState({ value: newValue.toFixed(precision), valid: true });
  };

  handleStepDown = () => {
    const { value } = this.state;
    const { min, step, precision, onChange } = this.props;
    const subtractValue = step || 1;
    let newValue = parseFloat(value || 0) - subtractValue;

    if (newValue < min) {
      newValue = min;
    }
    if (onChange) onChange(newValue.toFixed(precision));
    else this.setState({ value: newValue.toFixed(precision), valid: true });
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
      type,
      min,
      max,
      step,
      showPasswordToggle,
      ...props
    } = this.props;
    const { error, focused, valid, value, autoCompleteListItens, stateType } = this.state;

    let id;
    if (fieldId) id = fieldId;
    else if (label) id = label.toLowerCase();
    else id = genId();

    const hasPasswordToggle = type === 'password' && showPasswordToggle;

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
          open={openLabel}
          error={error}
          htmlFor={id}
          disabled={disabled}
        >
          {label}
        </InputLabel>
        <InputHint visible={(focused || !label) && !valid}>{hintText}</InputHint>
        <InputPrefix
          ref={element => {
            this.prefix = element;
          }}
          visible={focused || openLabel || valid}
          focused={focused}
          error={error}
          valid={valid}
        >
          {prefix}
        </InputPrefix>
        {type === 'number' && (
          <SpinButtons>
            <ChevronUpIcon onClick={this.handleStepUp} />
            <ChevronDownIcon onClick={this.handleStepDown} />
          </SpinButtons>
        )}
        {hasPasswordToggle ? (
          <PasswordToggleContainer>
            <VisibilityIcon
              passwordVisible={stateType === 'text'}
              onClick={this.handleVisibilityToggle}
            />
          </PasswordToggleContainer>
        ) : null}
        <InputText
          {...props}
          id={id}
          type={type === 'password' ? stateType : type}
          tabIndex={disabled ? '-1' : '0'}
          value={props.value || value}
          onChange={this.handleChange}
          padding={this.getPadding(prefix)}
          ref={innerRef}
          error={error}
          min={min}
          max={max}
          step={step}
          hasPasswordToggle={hasPasswordToggle}
        />

        {type === 'text' && autoComplete && autoCompleteListItens && (
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

InputField.propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.any]),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  fullWidth: PropTypes.bool,
  helper: PropTypes.string,
  hintText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  precision: PropTypes.number,
  showPasswordToggle: PropTypes.bool,
};

InputField.defaultProps = {
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
  min: undefined,
  max: undefined,
  step: undefined,
  precision: 0,
  showPasswordToggle: false,
};

export default forwardRef((props, ref) => <InputField innerRef={ref} {...props} />); // eslint-disable-line
