import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

class TooltipBox extends Component {
  state = {
    showTooltip: false,
    position: {
      x: null,
      y: null,
    },
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  setPosition = (x, y, action, event) => {
    const { delay, delayTime } = this.props;
    this.timeout = setTimeout(
      () => {
        this.setState({
          showTooltip: true,
          position: { x, y },
        });
      },
      delay ? delayTime : 0,
    );
    if (action) {
      action(event);
    }
  };

  handleMouseMove = (move, event) => {
    this.setPosition(event.clientX, event.clientY, move, event);
  };

  handleMouseEnter = (enter, event) => {
    const { mount } = this.props;
    const targetNode = this.child;
    const computedStyle = window.getComputedStyle(targetNode);
    const width = parseInt(computedStyle.getPropertyValue('width'), 10) || 0;
    const height = parseInt(computedStyle.getPropertyValue('height'), 10) || 0;
    const viewportOffset = targetNode.getBoundingClientRect();

    const { top } = viewportOffset;
    const { left } = viewportOffset;
    let x;
    let y;
    switch (mount) {
      case 'left':
        x = left;
        y = top + height / 2;
        break;
      case 'right':
        x = left + width;
        y = top + height / 2;
        break;
      case 'top':
        x = left + width / 2;
        y = top;
        break;
      case 'bottom':
        x = left + width / 2;
        y = top + height;
        break;
      default:
        x = left + width / 2;
        y = top + height / 2;
        break;
    }
    this.setPosition(x, y, enter, event);
  };

  handleMouseLeave = (leave, event) => {
    clearTimeout(this.timeout);
    this.setState({ showTooltip: false, position: {} }, () => {
      if (leave) leave(event);
    });
  };

  render() {
    const { showTooltip, position } = this.state;
    const {
      show,
      content,
      label,
      mount,
      fixed,
      mousePadding,
      contentPosition,
    } = this.props;
    const children = React.Children.only(this.props.children);
    const props = {
      ref: (el) => {
        this.child = el;
      },
      onMouseMove: !fixed
        ? (event) => {
            this.handleMouseMove(children.props.onMouseMove, event);
          }
        : null,
      onMouseEnter: fixed
        ? (event) => {
            this.handleMouseEnter(children.props.onMouseEnter, event);
          }
        : null,
      onMouseLeave: (event) => {
        this.handleMouseLeave(children.props.onMouseLeave, event);
      },
    };
    const clone = React.cloneElement(children, props);
    return (
      <Fragment>
        {showTooltip && show ? (
          <Tooltip
            type="floater"
            show={showTooltip && show}
            position={position}
            label={label}
            mount={mount}
            contentPosition={contentPosition}
            mousePadding={mousePadding}
          >
            {content}
          </Tooltip>
        ) : null}
        {clone}
      </Fragment>
    );
  }
}
TooltipBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  content: PropTypes.oneOfType([PropTypes.any]).isRequired,
  show: PropTypes.bool,
  mount: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  fixed: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  delay: PropTypes.bool,
  delayTime: PropTypes.number,
  mousePadding: PropTypes.number,
  contentPosition: PropTypes.oneOf(['start', 'middle', 'end', 'unset']),
};
TooltipBox.defaultProps = {
  show: true,
  mount: 'right',
  contentPosition: 'unset',
  label: '',
  fixed: false,
  delay: false,
  delayTime: 1500,
  mousePadding: null,
};

export default TooltipBox;
