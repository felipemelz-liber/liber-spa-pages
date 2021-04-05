import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Anime from '../SimpleAnime';

class Show extends Component {
  constructor() {
    super();
    this.state = {
      transition_ended: false,
    };
  }

  static getDerivedStateFromProps() {
    return { transition_ended: false };
  }

  render() {
    const { children, enter, exit, timeout } = this.props;
    if (
      (!this.state.transition_ended || this.props.in) &&
      (children !== null && children !== undefined)
    ) {
      return (
        <Transition
          onExited={() => {
            setTimeout(() => {
              this.setState({ transition_ended: true });
            }, timeout + 50);
          }}
          mountOnEnter
          timeout={timeout}
          in={this.props.in}
        >
          {state => {
            if (state === 'entering') return null;
            if (state === 'entered' && enter) {
              return (
                <Anime
                  opacity={[0, 1]}
                  duration={timeout}
                  translateX={['-50px', '0px']}
                  easing="easeOutElastic"
                >
                  <div>{children}</div>
                </Anime>
              );
            }
            if (state === 'exited' && exit) {
              return (
                <Anime
                  opacity={[1, 0]}
                  duration={timeout}
                  translateX={['0px', '-50px']}
                  easing="easeInElastic"
                >
                  <div>{children}</div>
                </Anime>
              );
            }
            return children;
          }}
        </Transition>
      );
    }
    return null;
  }
}

Show.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool.isRequired,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  timeout: PropTypes.number,
};

Show.defaultProps = {
  enter: true,
  exit: true,
  timeout: 500,
};

export default Show;
