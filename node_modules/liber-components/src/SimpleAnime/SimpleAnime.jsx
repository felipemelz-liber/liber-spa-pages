import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class SimpleAnime extends Component {
  componentDidMount() {
    this.handleAnimation();
  }

  clearCurrentAnimation = () => {
    if (this.currentAnimation) this.currentAnimation.pause();
  }

  handleAnimation = () => {
    const targets = this.child;
    this.clearCurrentAnimation();
    this.currentAnimation = anime({ ...this.props, targets });
  }

  render() {
    const { children } = this.props;
    const child = React.cloneElement(React.Children.only(children), {
      ref: (element) => { this.child = element; },
    });
    return (
      <>
        {child}
      </>
    );
  }
}

SimpleAnime.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SimpleAnime;
