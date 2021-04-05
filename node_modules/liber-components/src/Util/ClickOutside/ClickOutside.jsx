import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class ClickOutside extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    const { onOutsideClick } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && onOutsideClick) {
      onOutsideClick();
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    );
  }
}
ClickOutside.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  onOutsideClick: PropTypes.func,
};
ClickOutside.defaultProps = {
  onOutsideClick: () => {},
};

export default ClickOutside;
