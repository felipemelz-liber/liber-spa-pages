import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { YellowBox, NotificationLabel, NotificationContent } from './styles';

class NotificationBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  render() {
    const { label, children } = this.props;
    return (
      <YellowBox>
        <NotificationLabel
          onClick={() => {
            this.setState(prevState => ({ open: !prevState.open }));
          }}
        >
          {label}
        </NotificationLabel>
        <NotificationContent show={this.state.open}>{children}</NotificationContent>
      </YellowBox>
    );
  }
}

NotificationBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  label: PropTypes.string,
  open: PropTypes.bool,
};

NotificationBox.defaultProps = {
  children: null,
  label: '',
  open: false,
};

export default NotificationBox;
