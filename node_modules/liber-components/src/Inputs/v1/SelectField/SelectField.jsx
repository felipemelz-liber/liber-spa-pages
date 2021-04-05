import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ClickOutside, normalizeText } from '../../../Util';
import {
  InputBase,
  InputBar,
  InputCaret,
  InputError,
  InputLabel,
  InputText,
} from '../Base.styles';
import {
  SelectBox,
  SelectOptionList,
  SelectItem,
  SelectLabel,
} from './SelectField.styles';

const getLabel = (props) => {
  let label = React.Children.toArray(props.children)
    .filter(child => (child.props.value === props.value));
  label = label.length > 0 ? label[0].props.children : '';
  return label;
};

const getItemFocused = props => (
  React.Children.toArray(props.children).map(child => child.props.value).indexOf(props.value)
);

const getChildrenArray = (props) => {
  const labelElement = props.labelOpened ? <option key={_.uniqueId()} value="">{props.labelOpened}</option> : null;
  const children = React.Children.toArray(props.children);
  return labelElement ? [labelElement, ...children] : children;
};

class SelectField extends Component {
  constructor(props) {
    super(props);

    const children = getChildrenArray(props);

    this.state = {
      clicked: false,
      open: false,
      optionValue: props.value || '',
      optionLabel: getLabel(props) || '',
      focused: false,
      itemFocused: getItemFocused(props),
      search: '',
      children,
      filteredChildren: null,
    };

    this.tag = _.uniqueId();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const optionValue = typeof nextProps.value === 'undefined'
      ? prevState.optionValue
      : nextProps.value;
    const optionLabel = typeof nextProps.value === 'undefined'
      ? prevState.optionLabel
      : getLabel(nextProps);
    const itemFocused = typeof nextProps.value === 'undefined' || prevState.open
      ? prevState.itemFocused
      : getItemFocused(nextProps);
    const children = getChildrenArray(nextProps);
    if (optionValue === prevState.optionValue
      && optionLabel === prevState.optionLabel
      && itemFocused === prevState.itemFocused
      && children === prevState.children) {
      return null;
    }

    const nextState = {
      optionValue, optionLabel, itemFocused, children,
    };

    return nextState;
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    nextState.optionValue !== this.state.optionValue
    || nextState.focused !== this.state.focused
    || nextState.open !== this.state.open
    || nextState.clicked !== this.state.clicked
    || nextState.itemFocused !== this.state.itemFocused
    || nextState.search !== this.state.search
    || nextState.children !== this.state.children
    || nextProps.disabled !== this.props.disabled
    || nextProps.errorMessage !== this.props.errorMessage
    || nextProps.fullWidth !== this.props.fullWidth
    || nextProps.value !== this.state.optionValue
    || nextProps.width !== this.props.width
  );

  getFormatted = text => normalizeText(text.toLowerCase());

  getSearch = (child, search) => this.getFormatted(child).search(this.getFormatted(search));

  getChildHighlight = (child) => {
    const { search } = this.state;
    const index = this.getSearch(child, search);
    return (
      <div>
        {child.substr(0, index)}
        <span>{child.substr(index, search.length)}</span>
        {child.substr(index + search.length)}
      </div>
    );
  };

  getFilteredChildren = (children, search) => (
    children.filter(child => this.getSearch(child.props.children, search) !== -1)
      .sort((prev, next) => {
        if (this.getSearch(prev.props.children, search) === 0) return -1;
        if (this.getSearch(next.props.children, search) === 0) return 1;
        return 0;
      })
  );

  setItemFocused = item => this.setState({ itemFocused: item });

  setBaseRef = (ref) => { this.baseRef = ref; }

  setTextFieldRef = (ref) => { this.textFieldRef = ref; }

  scrollToList = () => {
    const element = document.getElementById(`scroll-container-${this.tag}`);
    if (element) {
      element.scrollIntoView({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  handleChange = (event) => {
    const { onChange } = this.props;

    if (this.props.searchable) {
      const { children } = this.state;
      const search = event.target.value;
      this.setState({
        search,
        itemFocused: search.length > 0 ? 0 : -1,
        open: true,
        filteredChildren: search.length > 0 ? this.getFilteredChildren(children, search) : null,
      });
    }
    if (event.target.value.length === 0) {
      this.setState({ optionValue: '', optionLabel: '' });
      if (onChange) onChange('');
    }
  }

  handleClick = () => {
    this.setState({ open: true, clicked: true });
  }

  handleClickOutside = () => {
    this.setState({ open: false, clicked: false, focused: false });
  }

  handleFocus = () => {
    if (this.textFieldRef) {
      this.textFieldRef.focus();
      this.textFieldRef.click();
    } else this.setState({ focused: true });
  }

  handleBlur = () => {
    if (this.textFieldRef) {
      this.textFieldRef.blur();
      this.baseRef.focus();
    }
    this.handleClickOutside();
  }

  handleNavigation = (key) => {
    const items = (this.state.filteredChildren || this.state.children).length;
    const { itemFocused } = this.state;
    switch (key) {
      case 38:
        this.setState({
          itemFocused: itemFocused > 0 ? itemFocused - 1 : items - 1,
        }, this.scrollToList);
        break;
      case 40:
        this.setState({
          itemFocused: itemFocused < items - 1 ? itemFocused + 1 : 0,
        }, this.scrollToList);
        break;
      default:
        break;
    }
  }

  handleSelectionFromKey = () => {
    const child = (this.state.filteredChildren || this.state.children)[this.state.itemFocused];
    if (child) {
      this.handleSelect(child.props.value, child.props.children);
    }
  }

  handleKeys = (event) => {
    switch (event.keyCode) {
      case 9:
        this.handleBlur();
        break;
      case 27:
        this.setState({ open: false });
        break;
      case 13:
        if (!this.state.open && !this.props.searchable) {
          this.handleClick();
        } else this.handleSelectionFromKey();
        break;
      case 38:
      case 40:
        this.handleNavigation(event.keyCode);
        if (event.preventDefault) event.preventDefault();
        break;
      default:
        break;
    }
  }

  handleSelect = (selectedValue, selectedLabel) => {
    const { onChange } = this.props;
    const { children, optionValue, optionLabel } = this.state;
    const itemFocused = selectedValue ? children.findIndex(child => child.props.value === selectedValue) : -1;
    this.setState({
      search: '',
      itemFocused,
      filteredChildren: null,
    });
    if (optionValue !== selectedValue && optionLabel !== selectedLabel) {
      this.setState({
        optionValue: selectedValue,
        optionLabel: selectedValue ? selectedLabel : '',
      }, () => { onChange(selectedValue); });
    } else {
      this.setState({
        optionValue: '',
        optionLabel: '',
      }, () => { onChange(''); });
    }
    this.handleBlur();
  }

  renderSelectItem = ({
    index, key, style, isVisible, parent,
  }) => {
    if (!isVisible) return null;
    const { list, optionLabel, itemFocused } = parent.props;
    const { labelOpened } = this.props;
    const child = list[index];
    const SelectElement = index === 0 && labelOpened ? SelectLabel : SelectItem;

    return (
      <SelectElement
        id="test"
        {...child.props}
        focused={list.indexOf(child) === itemFocused}
        selected={optionLabel === child.props.children}
        onClick={() => {
          this.handleSelect(child.props.value, child.props.children);
          if (this.baseRef) this.baseRef.focus();
        }}
        onMouseMove={() => this.setItemFocused(list.indexOf(child))}
        onMouseLeave={() => this.setItemFocused(-1)}
        key={key}
        style={style}
      >
        {this.getChildHighlight(child.props.children)}
      </SelectElement>
    );
  };

  renderMenu = () => {
    const { searchable } = this.props;
    const {
      children, filteredChildren, optionLabel, itemFocused, open,
    } = this.state;

    return (
      <SelectOptionList
        id={`scroll-container-${this.tag}`}
        ref={this.setOptionListRef}
        rowRenderer={this.renderSelectItem}
        scrollToIndex={this.scrollToIndex}
        optionLabel={optionLabel}
        itemFocused={itemFocused}
        searchable={searchable}
        isOpen={open}
      >
        {filteredChildren || children}
      </SelectOptionList>
    );
  }

  renderSearchableLabel = () => {
    const { errorMessage, label, searchable } = this.props;
    const { open, optionLabel, search } = this.state;
    const valid = Boolean(optionLabel) || Boolean(search);

    return (
      <InputLabel
        focused={open && searchable}
        valid={valid}
        error={Boolean(errorMessage)}
      >
        {label}
      </InputLabel>
    );
  }

  renderSelect = () => {
    const { searchable } = this.props;
    const {
      open, optionLabel, optionValue, focused, search,
    } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <InputCaret open={open} focused={focused} />
        {
          searchable
            ? (
              <InputText
                tabIndex="-1"
                onChange={this.handleChange}
                value={search || optionLabel}
                inputRef={this.setTextFieldRef}
              />
            )
            : (
              <SelectBox
                tabIndex="-1"
                selected={optionValue.length !== 0}
              >
                {optionLabel}
                &nbsp;
              </SelectBox>
            )
        }
      </div>
    );
  }

  render() {
    const {
      disabled, name, id, fullWidth, width, errorMessage,
    } = this.props;
    const {
      clicked, open, optionValue, focused,
    } = this.state;
    return (
      <InputBase
        width={fullWidth ? '100%' : width}
        tabIndex={disabled ? '-1' : '0'}
        disabled={disabled}
        onClick={!clicked ? this.handleClick : null}
        onFocus={!clicked ? this.handleFocus : null}
        onKeyDown={this.handleKeys}
        ref={this.setBaseRef}
      >
        <ClickOutside onOutsideClick={this.handleClickOutside}>
          <Fragment>
            {this.renderSearchableLabel()}
            <div style={{ position: 'relative' }}>
              {this.renderMenu()}
              {this.renderSelect()}
              <InputBar open={open || focused} error={Boolean(errorMessage)} />
            </div>
          </Fragment>
        </ClickOutside>
        <InputError visible={Boolean(errorMessage)}>{errorMessage}</InputError>
        <input type="hidden" name={name} id={id} value={optionValue} />
      </InputBase>
    );
  }
}

SelectField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  labelOpened: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  errorMessage: PropTypes.string,
  searchable: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SelectField.defaultProps = {
  disabled: false,
  fullWidth: false,
  label: 'Selecione um item',
  labelOpened: '',
  width: '256px',
  errorMessage: '',
  onChange: () => {},
  name: '',
  id: '',
  searchable: false,
  value: undefined,
};

export default SelectField;
