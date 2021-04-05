import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Message as Msg, MsgContent, Action,
} from './Message.styles';
import Animate from './Animate';

class Message extends Component {
  componentDidMount() {
    this.startTimeout();
  }

  close = () => {
    const { onClose, id } = this.props;
    this.removeTimeout();
    onClose(id);
  }

  remove = () => {
    const { onExited, id } = this.props;
    onExited(id);
  }

  removeTimeout = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  startTimeout = () => {
    const { duration } = this.props;
    if (duration > 0) {
      this.timeout = setTimeout(this.close, duration);
    }
  }

  render() {
    const {
      children, type, action, show,
    } = this.props;
    return (
      <Animate show={show} onExited={this.remove}>
        <Msg
          type={type}
          onMouseEnter={this.removeTimeout}
          onMouseLeave={this.startTimeout}
        >
          <MsgContent>
            {children}
          </MsgContent>
          {
          action && <Action>{action}</Action>
        }
        </Msg>
      </Animate>
    );
  }
}
Message.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]),
  action: PropTypes.oneOfType([PropTypes.any]),
  onClose: PropTypes.func,
  onExited: PropTypes.func,
};

Message.defaultProps = {
  children: '',
  type: null,
  action: null,
  onClose: () => {},
  onExited: () => {},
};

export default Message;
