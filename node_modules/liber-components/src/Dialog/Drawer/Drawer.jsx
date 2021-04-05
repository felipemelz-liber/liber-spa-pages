import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //eslint-disable-line
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Content } from './styles';
import { Bg, DialogContainer, Global } from '../DialogStyles';
import { getBgTransitionStyle, defaultDuration, hideScrollBar, showScrollBar } from '../utils';

const isClosed = (open, transition) => !open && !transition;

const isOpen = (open, transition) => open && !transition;

const isOpenning = (open, transition) => open && transition;

class Drawer extends Component {
  constructor(props) {
    super();
    if (props.show && props.blockNavigation) {
      this.pos = hideScrollBar(document.body);
    }
    this.state = {
      open: props.show,
      lastShow: props.show,
      transition: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { open, transition, lastShow } = state;
    const { show } = props;
    /* Fechado */
    if (isClosed(open, transition)) {
      if (show && show !== lastShow) {
        return { open: true, transition: true, lastShow: show };
      }
    }
    /* Aberto */
    if (isOpen(open, transition)) {
      if (!show && show !== lastShow) {
        return { open: false, transition: true, lastShow: show };
      }
    }

    return { lastShow: show };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentDidUpdate() {
    const { transition, open } = this.state;
    if (transition === true && open === false) {
      this.handleTransitionEnd(this.mounted)();
    }
  }

  componentWillUnmount() {
    const { blockNavigation } = this.props;
    this.mounted = false;
    clearTimeout(this.openCloseTimeout);
    if (blockNavigation) showScrollBar(document.body, this.pos);
  }

  handleTransitionEnd = (check = true) => () => {
    this.openCloseTimeout = setTimeout(() => {
      if (check) {
        this.setState({ transition: false });
      }
    }, 2 * this.props.duration);
  };

  getTranslateFunctions = (pos, size, fit) => {
    let width;
    let height;
    switch (pos) {
      case 'right':
        width = fit ? '100vw' : `${size}px`;
        return {
          closed: `translateX(${width})`,
          openned: 'translateX(0px)',
        };
      case 'top':
        height = fit ? '100vh' : `${size}px`;
        return {
          closed: `translateY(-${height})`,
          openned: 'translateY(0px)',
        };
      case 'bottom':
        height = fit ? '100vh' : `${size}px`;
        return {
          closed: `translateY(${height})`,
          openned: 'translateY(0px)',
        };
      case 'left':
      default:
        width = fit ? '100vw' : `${size}px`;
        return {
          closed: `translateX(-${width})`,
          openned: 'translateX(0px)',
        };
    }
  };

  getContentTransitionStyle = (duration, position, size, fitScreen) => {
    const { closed, openned } = this.getTranslateFunctions(position, size, fitScreen);
    return {
      entering: {
        opacity: 0,
        transform: closed,
      },
      entered: {
        opacity: 1,
        transform: openned,
        transition: `all ${duration}ms cubic-bezier(0, 0, 0.2, 1)`,
      },
      exiting: {
        opacity: 0,
        transform: closed,
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      exited: {
        opacity: 0,
      },
    };
  };

  handleEntered = () => {
    const { onAppeared } = this.props;
    this.setState(state => {
      if (isOpenning(state.open, state.transition) && !state.lastShow) {
        return { open: false };
      }
      return { transition: false };
    }, onAppeared);
  };

  handleEnterDrawer = () => {
    const { onAppearStart, blockNavigation } = this.props;
    onAppearStart();
    if (blockNavigation) this.pos = hideScrollBar(document.body);
  };

  handleLeaveDrawer = () => {
    const { onLeaved, blockNavigation } = this.props;
    onLeaved();
    if (blockNavigation) showScrollBar(document.body, this.pos);
  };

  close = () => {
    this.setState({ open: false, transition: true }, this.handleTransitionEnd());
  };

  bgTransition = state => {
    const { closable, duration } = this.props;
    if (closable) {
      return <Bg onClick={this.close} style={getBgTransitionStyle(duration)[state]} />;
    }
    return <Bg style={getBgTransitionStyle(duration)[state]} />;
  };

  ContentTransition = state => {
    const { duration, children, size, position, fitScreen, drawerSize } = this.props;
    return (
      <Content
        size={size}
        position={position}
        fitScreen={fitScreen}
        drawerSize={drawerSize}
        style={this.getContentTransitionStyle(duration, position, size, fitScreen)[state]}
      >
        {children}
      </Content>
    );
  };

  render() {
    const { duration, onLeaveStart, elementId, blockNavigation } = this.props;
    const { open, transition } = this.state;
    const transitionSharedProps = {
      mountOnEnter: true,
      unmountOnExit: true,
      in: open,
    };
    return ReactDOM.createPortal(
      <>
        <DialogContainer show={open || transition} blockNavigation={blockNavigation}>
          {blockNavigation ? (
            <Transition
              {...transitionSharedProps}
              timeout={{ enter: duration, exit: 2 * duration }}
            >
              {this.bgTransition}
            </Transition>
          ) : null}
          <Transition
            {...transitionSharedProps}
            onEnter={this.handleEnterDrawer}
            onEntered={this.handleEntered}
            onExit={onLeaveStart}
            onExited={this.handleLeaveDrawer}
            timeout={{ enter: 2 * duration, exit: duration }}
          >
            {this.ContentTransition}
          </Transition>
        </DialogContainer>
        <Global />
      </>,
      document.getElementById(elementId),
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
  position: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  size: PropTypes.number,
  fitScreen: PropTypes.bool,
  duration: PropTypes.number,
  closable: PropTypes.bool,
  show: PropTypes.bool,
  onAppearStart: PropTypes.func,
  onAppeared: PropTypes.func,
  onLeaveStart: PropTypes.func,
  onLeaved: PropTypes.func,
  elementId: PropTypes.string,
  blockNavigation: PropTypes.bool,
  drawerSize: PropTypes.number,
};

Drawer.defaultProps = {
  children: null,
  duration: defaultDuration,
  size: 250,
  fitScreen: false,
  position: 'left',
  closable: true,
  show: false,
  onAppearStart: () => {},
  onAppeared: () => {},
  onLeaveStart: () => {},
  onLeaved: () => {},
  elementId: 'modal',
  blockNavigation: true,
  drawerSize: null,
};

export default Drawer;
