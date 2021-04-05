import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { AnimationContainer } from './Toast.styles';

const Animate = ({ children, show, onExited }) => (
  <Transition
    in={show}
    timeout={400}
    mountOnEnter
    unmountOnExit
    onExited={onExited}
  >
    {state => (
      <AnimationContainer state={state} duration={400}>
        {children}
      </AnimationContainer>
    )}

  </Transition>
);

Animate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  onExited: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Animate.defaultProps = {
  show: true,
};

export default Animate;
