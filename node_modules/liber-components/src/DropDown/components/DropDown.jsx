import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import ClickOutside from '../../Util/ClickOutside';
import { Box, Button, Label, List } from './styles';

const labelLookUp = (value, children) => {
  let label = null;
  React.Children.toArray(children).forEach(child => {
    if (child.props.value === value || child.props.children === value) {
      label = child.props.children;
    }
  });
  return label;
};

class DropDown extends Component {
  constructor(props) {
    super();
    const { children, defaultValue } = props;
    let value;
    let label;
    if (defaultValue) {
      value = defaultValue;
      label = labelLookUp(value, children);
    } else {
      value = children[0].props.value || children[0].props.children;
      label = children[0].props.children;
    }
    this.state = {
      open: false,
      label,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { value, children } = props;
    const { lastValue } = state;

    if (value && value !== lastValue) {
      return {
        label: labelLookUp(value, children),
      };
    }

    return {};
  }

  labelLookUp = (value, children) => {
    let label = null;
    React.Children.toArray(children).forEach(child => {
      if (child.props.value === value || child.props.children === value) {
        label = child.props.children;
      }
    });
    return label;
  };

  handleSelectOption = (label, value) => {
    this.setState({ label, open: false }, () => {
      this.props.onSelect(value);
    });
  };

  handleOpenClose = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  render() {
    const { children, position } = this.props;
    const { label, open } = this.state;
    const clones = children.map(child => {
      const childLabel = child.props.children;
      const value = child.props.value || childLabel;
      const action = child.props.hasAction || false;
      return cloneElement(child, {
        key: childLabel,
        selected: childLabel === label,
        onClick:
          child.props.disabled || (childLabel === label && !action)
            ? null
            : () => {
                this.handleSelectOption(childLabel, value);
              },
      });
    });
    const opacity = {
      entering: '0',
      entered: '1',
    };
    const scaleY = {
      entering: '0.7',
      entered: '1',
    };
    return (
      <Box>
        <Button onMouseDown={this.handleOpenClose}>{this.state.label}</Button>
        <div>
          <Transition mountOnEnter unmountOnExit in={open} timeout={100}>
            {state => (
              <ClickOutside
                onOutsideClick={() => {
                  this.setState({ open: false });
                }}
              >
                <List
                  opacity={opacity[state]}
                  scaleY={scaleY[state]}
                  position={position}
                >
                  {this.props.label ? <Label>{this.props.label}</Label> : null}
                  {clones}
                </List>
              </ClickOutside>
            )}
          </Transition>
        </div>
      </Box>
    );
  }
}

DropDown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  position: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DropDown.defaultProps = {
  label: undefined,
  onSelect: () => {},
  defaultValue: null,
  value: null,
  position: null,
};

export default DropDown;
