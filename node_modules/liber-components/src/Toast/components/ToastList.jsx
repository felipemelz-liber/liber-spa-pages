import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Toast from './Toast';
import { Container } from './Toast.styles';
import { closeToast, removeToast } from '../actions';

export class ToastList extends Component {
  render() {
    const { toasts, close, remove, autoClose, onTop, customWidth } = this.props;
    const parsedToasts = onTop ? toasts.asMutable().reverse() : toasts;
    const container = (
      <Container customWidth={customWidth}>
        {parsedToasts.map(toast =>
          toast.message ? (
            <Toast
              duration={toast.duration || autoClose}
              id={toast.id}
              key={toast.id}
              type={toast.type}
              onClose={close}
              onExited={remove}
              show={toast.show}
              info={toast.info}
              content={toast.content}
              customWidth={customWidth}
            >
              {toast.message}
            </Toast>
          ) : null,
        )}
      </Container>
    );
    return ReactDOM.createPortal(
      toasts.length === 0 ? null : container,
      document.getElementById('toast'),
    );
  }
}

ToastList.propTypes = {
  toasts: PropTypes.arrayOf(PropTypes.any).isRequired,
  close: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  autoClose: PropTypes.number,
  onTop: PropTypes.bool,
};

ToastList.defaultProps = {
  autoClose: 0,
  onTop: false,
};

const mapDispatchToProps = { close: closeToast, remove: removeToast };

const mapStateToProps = state => ({
  toasts: state.toasts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToastList);
