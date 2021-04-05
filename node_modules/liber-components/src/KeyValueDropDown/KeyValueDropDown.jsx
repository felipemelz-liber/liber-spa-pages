import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from '../Util/ClickOutside';
import KeyValueDisplay from '../KeyValueDisplay';
import { SimpleDropDown } from '../DropDown';

class KeyValueDropDown extends PureComponent {
  state = {
    open: false,
  }

  openDropDown = () => {
    this.setState({ open: true });
  }

  closeDropDown = () => {
    this.setState({ open: false });
  }

  render() {
    const {
      children,
      label,
      keyLabel,
      containerSize,
      ...props
    } = this.props;
    const { open } = this.state;
    return (
      <KeyValueDisplay
        label={keyLabel}
        onClick={this.openDropDown}
        style={open ? { pointerEvents: 'none' } : undefined}
        {...props}
      >
        <ClickOutside onOutsideClick={open ? this.closeDropDown : undefined}>
          <SimpleDropDown containerSize={containerSize} open={open} label={label}>{children}</SimpleDropDown>
        </ClickOutside>
      </KeyValueDisplay>
    );
  }
}


KeyValueDropDown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  label: PropTypes.string,
  keyLabel: PropTypes.string,
  containerSize: PropTypes.bool,
};

KeyValueDropDown.defaultProps = {
  children: '',
  label: '',
  keyLabel: '',
  containerSize: false,
};

export default KeyValueDropDown;
