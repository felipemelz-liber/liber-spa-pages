import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { closeMessage, removeMessage } from '../actions';
import {
  Fixed,
} from './Message.styles';
import Message from './Message';

const mappedMessages = (close, remove) => message => (
  message.message && (
  <Message
    duration={message.duration}
    id={message.id}
    key={message.id}
    type={message.type}
    show={message.show}
    action={message.action}
    onClose={close}
    onExited={remove}
  >
    {message.message}
  </Message>
  )
);

const MessageList = ({
  messages, close, remove,
}) => createPortal(
  <Fixed>
    {messages.map(mappedMessages(close, remove))}
  </Fixed>,
  document.getElementById('message'),
);


const mapDispatchToProps = { close: closeMessage, remove: removeMessage };

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
