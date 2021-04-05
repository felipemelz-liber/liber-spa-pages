import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SimpleDropDown } from '../../../DropDown';
import { ClickOutside, normalizeText } from '../../../Util';
import { PsGlobalStyle } from '../../../Assets';

import {
  Container,
  InputShell,
  Input,
  Option,
  OptionsContainer,
  Icon,
  Close,
  Label,
  Hint,
  Error,
  Tag,
  Check,
} from './SelectField.styles';

const getLabel = (value, children) => {
  const selected = React.Children.toArray(children).find(child => child.props.value === value);
  if (selected) {
    return selected.props.label || selected.props.grandChildren || selected.props.children;
  }
  return value;
};

const isNullOrUndefined = obj => obj === null || obj === undefined;

class SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      label: props.value ? getLabel(props.value, props.children) : '',
      selected: [],
      open: false,
      clear: false,
      searching: false,
      focused: -1,
    };
    this.input = createRef();
    this.shell = createRef();
    this.options = [];
  }

  static getDerivedStateFromProps(props, state) {
    const { multiple, values, children, value: propsValue } = props;
    const { searching, open } = state;

    if (multiple) {
      if (values) {
        return {
          selected: values.map(value => ({ value, label: getLabel(value, children) })),
        };
      }
    } else if (!isNullOrUndefined(propsValue)) {
      return (
        !searching &&
        !open && {
          value: propsValue,
          label: getLabel(propsValue, children),
        }
      );
    }

    return state;
  }

  isValueControlled = () => !isNullOrUndefined(this.props.value);

  openField = () => {
    this.setState({ open: true });
  };

  closeField = () => {
    this.setState({ open: false, focused: -1 });
  };

  clearInput = () => {
    if (this.isValueControlled()) {
      this.setState({ open: false }, () => this.callback(''));
    } else {
      this.setState(
        {
          open: false,
          value: '',
          label: '',
          clear: false,
          selected: [],
        },
        this.callback,
      );
    }
  };

  handleInputFocus = () => {
    this.openField();
  };

  handleOutsideClick = () => {
    this.closeField();
  };

  handleShellClick = () => {
    const { searchable } = this.props;
    if (searchable) {
      this.input.current.focus();
    } else {
      this.openField();
    }
  };

  callback = newValue => {
    const { onChange, multiple } = this.props;
    const { value, selected } = this.state;
    setTimeout(() => {
      this.setState({ searching: false });
    }, 250);
    const valueToChange = isNullOrUndefined(newValue) ? value : newValue;
    onChange(multiple ? selected.map(item => item.value) : valueToChange);
  };

  handleSelectClick = (label, value) => () => {
    const { multiple } = this.props;
    if (multiple) {
      this.setState(state => {
        const filtered = state.selected.filter(item => item.value !== value);
        return {
          value: '',
          label: '',
          selected:
            filtered.length === state.selected.length
              ? [...state.selected, { label, value }]
              : filtered,
        };
      }, this.callback);
    }
    if (this.isValueControlled()) {
      this.setState(
        {
          open: false,
          focused: -1,
        },
        () => this.callback(value),
      );
    } else {
      this.setState(
        {
          label,
          value,
          open: false,
          focused: -1,
        },
        this.callback,
      );
    }
  };

  handleShellMouseEnter = () => {
    this.setState(state => ({
      clear: Boolean(state.label),
    }));
  };

  handleShellMouseLeave = () => {
    this.setState({ clear: false });
  };

  handleInputChange = event => {
    const { value } = event.target;

    const withNewValue = this.isValueControlled() ? {} : { value: '' };

    this.setState(({ focused }) => ({
      searching: Boolean(value),
      open: true,
      label: value,
      focused: focused !== -1 ? 0 : -1,
      ...withNewValue,
    }));
  };

  scroll = () => {
    const { focused } = this.state;
    this.options[focused].current.scrollIntoView({ block: 'nearest' });
  };

  handleKeyDown = event => {
    if (event.key === 'ArrowDown' && this.options.length !== 0) {
      this.setState(
        state => ({
          focused:
            state.focused >= this.options.length - 1 ? this.options.length - 1 : state.focused + 1,
        }),
        this.scroll,
      );
    }
    if (event.key === 'ArrowUp' && this.options.length !== 0) {
      this.setState(
        state => ({
          focused: state.focused <= 0 ? 0 : state.focused - 1,
        }),
        this.scroll,
      );
    }
    if (event.key === 'Escape') {
      this.input.current.blur();
      this.setState({
        focused: -1,
        open: false,
      });
    }
    if (event.key === 'Enter' && this.state.focused !== -1) {
      const { value, label } = this.options[this.state.focused].current.dataset;
      this.input.current.blur();
      this.handleSelectClick(label, value)();
    }
  };

  renderInput = () => {
    const { searchable, disabled, errorMessage, multiple } = this.props;
    const { label, open, selected } = this.state;
    return (
      <InputShell
        basic={searchable}
        disabled={disabled}
        error={Boolean(errorMessage)}
        open={open}
        onClick={this.handleShellClick}
        onMouseEnter={this.handleShellMouseEnter}
        onMouseLeave={this.handleShellMouseLeave}
        tabIndex="0"
        ref={this.shell}
        onFocus={this.openField}
        onKeyDown={this.handleKeyDown}
      >
        {multiple && selected.length !== 0 && (
          <Tag closable onClose={this.clearInput}>
            {selected.length === 1 ? selected[0].label : `${selected.length} Selecionados`}
          </Tag>
        )}
        {(!multiple || searchable) && (
          <Input
            basic={searchable}
            multiple={multiple}
            disabled={disabled}
            ref={this.input}
            value={label}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        )}
      </InputShell>
    );
  };

  getFormatted = text => normalizeText(text.toLowerCase());

  getSearch = (child, search) => this.getFormatted(child).search(this.getFormatted(search));

  getChildHighlight = (child, search) => {
    const index = this.getSearch(child, search);
    return (
      <div>
        {child.substr(0, index)}
        <span>{child.substr(index, search.length)}</span>
        {child.substr(index + search.length)}
      </div>
    );
  };

  renderChildren = () => {
    const { value: selectedValue, searching, focused, label: search, selected } = this.state;
    const { children: raw, disabled, emptyMessage } = this.props;
    this.options = [];
    const selectedValueList = selected.map(item => item.value);

    if (searching) {
      const searchedChildren = React.Children.toArray(raw)
        .filter(child => {
          const { children, label } = child.props;
          return this.getFormatted(label || children).includes(this.getFormatted(search));
        })
        .map((child, index) => {
          const { label, children, value } = child.props;
          this.options[index] = createRef();
          return (
            <Option
              key={_.uniqueId(value)}
              ref={this.options[index]}
              {...child.props}
              checked={value === selectedValue || selectedValueList.includes(value)}
              focused={index === focused}
              data-value={value}
              data-label={label || children}
              onClick={!disabled && this.handleSelectClick(label || children, value)}
            >
              {this.getChildHighlight(label || children, search)}
              {selectedValueList.includes(value) && <Check />}
            </Option>
          );
        });
      if (searchedChildren.length === 0) {
        this.options = [];
        return <Option disabled>{emptyMessage}</Option>;
      }
      return searchedChildren;
    }
    return React.Children.toArray(raw).map((child, index) => {
      const { label, children, value } = child.props;
      this.options[index] = createRef();
      return (
        <Option
          key={_.uniqueId(value)}
          ref={this.options[index]}
          {...child.props}
          checked={value === selectedValue || selectedValueList.includes(value)}
          focused={index === focused}
          data-value={value}
          data-label={label || children}
          onClick={!disabled && this.handleSelectClick(label || children, value)}
        >
          {children}
          {selectedValueList.includes(value) && <Check />}
        </Option>
      );
    });
  };

  render() {
    const {
      label,
      disabled,
      placeholder,
      hintText,
      errorMessage,
      openLabel,
      onChange,
      ...props
    } = this.props;
    const { open, value, clear, label: search } = this.state;
    return (
      <>
        <PsGlobalStyle />
        <ClickOutside onOutsideClick={this.handleOutsideClick}>
          <Container {...props}>
            {Boolean(label) && (
              <Label
                focused={openLabel || open || Boolean(value)}
                error={Boolean(errorMessage)}
                disabled={disabled}
                open={open && value === '' && search === ''}
              >
                {label}
              </Label>
            )}
            <Hint visible={(!label || openLabel || open) && !value}>{placeholder || hintText}</Hint>
            {Boolean(errorMessage) && <Error visible={Boolean(errorMessage)}>{errorMessage}</Error>}
            <SimpleDropDown
              open={!disabled && open}
              position="bottom-left"
              customButton={this.renderInput()}
            >
              <OptionsContainer>{this.renderChildren()}</OptionsContainer>
            </SimpleDropDown>
            <Icon hide={clear} error={Boolean(errorMessage)} />
            <Close
              show={clear}
              onMouseEnter={this.handleShellMouseEnter}
              onClick={this.clearInput}
            />
          </Container>
        </ClickOutside>
      </>
    );
  }
}

SelectField.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  searchable: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  hintText: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  emptyMessage: PropTypes.string,
  openLabel: PropTypes.bool,
  value: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

SelectField.defaultProps = {
  label: '',
  multiple: false,
  disabled: false,
  searchable: false,
  hintText: '',
  placeholder: '',
  errorMessage: '',
  emptyMessage: 'Vazio',
  openLabel: false,
  value: null,
  values: null,
  onChange: () => {},
};

export default SelectField;
