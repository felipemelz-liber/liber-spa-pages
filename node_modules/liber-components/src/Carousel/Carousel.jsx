import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Swipe from 'react-easy-swipe';
import {
  Hidden, Carousels, DotsContainer, Dot as DefaultDot, Body,
  LeftChavron as DefaultLeft, RightChavron as DefaultRight,
} from './Carousel.styles';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      size: React.Children.toArray(props.children).length, // eslint-disable-line
    };
  }

  static getDerivedStateFromProps(props, state) {
    const size = React.Children.toArray(props.children).length;
    if (state.size !== size) {
      return {
        size,
      };
    }
    return {};
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  startInterval = () => {
    const { loop, loopTime, loopLeft } = this.props;
    if (loop) {
      this.interval = setInterval(loopLeft ? this.handlePrev : this.handleNext, loopTime);
    }
  }

  removeInterval = () => {
    if (this.interval) clearInterval(this.interval);
  }

  handleDotClick = ({ target }) => {
    const index = target.getAttribute('data-index');
    this.removeInterval();
    this.setState({ index: parseInt(index, 10) }, this.startInterval);
  }

  handleActionNext = () => {
    this.removeInterval();
    this.handleNext({}, this.startInterval);
  }

  handleActionPrev = () => {
    this.removeInterval();
    this.handlePrev({}, this.startInterval);
  }

  handleNext = (event, callback) => {
    this.setState(state => ({
      index: state.index + 1 >= state.size ? 0 : state.index + 1,
    }), callback);
  }

  handlePrev = (event, callback) => {
    this.setState(state => ({
      index: state.index - 1 <= -1 ? state.size - 1 : state.index - 1,
    }), callback);
  }


  render() {
    const {
      width, height, children, innerDots,
    } = this.props;
    const { index } = this.state;
    const Dot = this.props.dot;
    const Left = this.props.leftArrow;
    const Right = this.props.rightArrow;

    const dots = React.Children.toArray(children).map((child, i) => (
      <Dot data-index={i} key={_.uniqueId('carousel_child_')} current={index === i} onClick={this.handleDotClick} />
    ));
    const dotsContainer = (<DotsContainer inner={innerDots}>{dots}</DotsContainer>);

    return (
      <Body>
        <Swipe
          onSwipeRight={this.handleActionPrev}
          onSwipeLeft={this.handleActionNext}
        >
          <Hidden
            width={width}
            height={height}
            onMouseEnter={this.removeInterval}
            onMouseLeave={this.startInterval}
          >
            <Carousels size={width} index={index}>
              {children}
            </Carousels>
            <Left onClick={this.handlePrev} />
            {innerDots ? dotsContainer : null}
            <Right onClick={this.handleNext} />
          </Hidden>
        </Swipe>
        {!innerDots ? dotsContainer : null}
      </Body>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  dot: PropTypes.oneOfType([PropTypes.any]),
  leftArrow: PropTypes.oneOfType([PropTypes.any]),
  rightArrow: PropTypes.oneOfType([PropTypes.any]),
  innerDots: PropTypes.bool,
  loop: PropTypes.bool,
  loopTime: PropTypes.number,
  loopLeft: PropTypes.bool,
};
Carousel.defaultProps = {
  width: 1200,
  height: 300,
  dot: DefaultDot,
  leftArrow: DefaultLeft,
  rightArrow: DefaultRight,
  innerDots: true,
  loop: false,
  loopTime: 4000,
  loopLeft: false,
};

export default Carousel;
