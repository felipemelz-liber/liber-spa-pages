import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import innerText from 'react-innertext';
import { SimpleDropDown } from '../../../DropDown';
import { Container, DisplayBox, ValueBox, Chevron, Option } from './SimpleSelect.styles';

class SimpleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      label: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== null) {
      const selected = Children.toArray(props.children).find(
        child => child.props.value === props.value,
      );
      if (selected) {
        return {
          value: props.value,
          label: innerText(selected),
        };
      }
    }
    return state;
  }

  makeSelection = (...args) => () => {
    const { onSelect } = this.props;
    if (this.dropdown) this.dropdown.close();
    onSelect(...args);
  };

  handleOptionSelection = (value, label) => () => {
    this.setState(
      {
        value,
        label,
      },
      this.makeSelection(value, label),
    );
  };

  mappingOption = currentValue => child => {
    const label = innerText(child);
    const value = child.props.value || label.toLowerCase();
    return (
      <Option
        key={value}
        {...child.props}
        label={label}
        value={value}
        active={value === currentValue}
        onClick={this.handleOptionSelection(value, label)}
      />
    );
  };

  dropDownRef = element => {
    this.dropdown = element;
  };

  render() {
    const { value, label } = this.state;
    const { children, ...props } = this.props;
    return (
      <Container>
        <SimpleDropDown
          ref={this.dropDownRef}
          customButton={
            <DisplayBox {...props}>
              <ValueBox>{label}</ValueBox>
              <Chevron />
            </DisplayBox>
          }
        >
          {Children.toArray(children).map(this.mappingOption(value))}
        </SimpleDropDown>
      </Container>
    );
  }
}

SimpleSelect.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  value: PropTypes.string,
  onSelect: PropTypes.func,
};

SimpleSelect.defaultProps = {
  value: null,
  children: [],
  onSelect: () => {},
};

export default SimpleSelect;
