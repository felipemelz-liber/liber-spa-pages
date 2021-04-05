import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button as Btn,
  PrimaryButton as PriBtn,
  SecondaryButton as SecBtn,
  SuccessButton as SucBtn,
  Link as Lnk,
  PrimaryLink as PriLnk,
  SecondaryLink as SecLnk,
  SuccessLink as SucLnk,
} from '../StyledButtons';
import { Label, Icon } from './styles';

class ActionButton extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  handleOnMouseOver = () => { this.setState({ hover: true }); }

  handleOnMouseLeave = () => { this.setState({ hover: false }); }

  buttonSelection = (type, link) => {
    switch (type) {
      case 'success':
        return link ? SucLnk : SucBtn;
      case 'secondary':
        return link ? SecLnk : SecBtn;
      case 'primary':
        return link ? PriLnk : PriBtn;
      default:
        return link ? Lnk : Btn;
    }
  }

  render() {
    const {
      type, icon, link, children, ...props
    } = this.props;
    const { hover } = this.state;
    const Button = this.buttonSelection(type, link);
    return (
      <Button
        {...props}
        onMouseOver={this.handleOnMouseOver}
        onFocus={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
        onBlur={this.handleOnMouseLeave}

      >
        <Icon hover={hover}>{icon}</Icon>
        <Label
          hover={hover}
          ref={(el) => { this.label = el; }}
          size={this.label ? `${this.label.scrollWidth}px` : '0px'}
        >
          {children}
        </Label>
      </Button>
    );
  }
}

ActionButton.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  link: PropTypes.bool,
};

ActionButton.defaultProps = {
  children: null,
  type: null,
  link: false,
};

export default ActionButton;
