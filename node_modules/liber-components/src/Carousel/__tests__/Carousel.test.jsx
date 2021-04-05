import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Swipe from 'react-easy-swipe';
import sinon from 'sinon';
import {
  Dot, LeftChavron as Left, RightChavron as Right, Hidden,
} from '../Carousel.styles';
import Carousel from '../Carousel';

const CustomDot = () => (
  <div />
);
const CustomArrowLeft = () => (
  <div />
);
const CustomArrowRight = () => (
  <div />
);


describe('Testing Carousel Styles', () => {
  configure({ adapter: new Adapter() });
  let props;
  let dummies;
  let clock;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
    dummies = [
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div'),
    ];
    dummies.forEach((dummi, index) => {
      dummi.setAttribute('data-index', index);
    });
    props = {
      width: 1200,
      height: 300,
      innerDots: true,
      loop: false,
      loopTime: 4000,
      loopLeft: false,
    };
  });
  afterEach(() => {
    clock.restore();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<Carousel><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom size', () => {
    props.width = 600;
    props.height = 500;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with outerDots', () => {
    props.innerDots = false;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom dot', () => {
    props.dot = CustomDot;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom Left Arrow', () => {
    props.leftArrow = CustomArrowLeft;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom Right Arrow', () => {
    props.rightArrow = CustomArrowRight;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change index on Dot click', () => {
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    const dots = wrapper.find(Dot);
    dots.at(2).simulate('click', { target: dummies[2] });
    expect(wrapper.state('index')).toBe(2);
  });
  it('should change index on Left Click', () => {
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    const left = wrapper.find(Left);
    left.simulate('click');
    expect(wrapper.state('index')).toBe(2);
  });
  it('should change index on Right Click', () => {
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    const right = wrapper.find(Right);
    right.simulate('click');
    expect(wrapper.state('index')).toBe(1);
  });
  it('should change index on Swipe Right', () => {
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    const swipe = wrapper.find(Swipe);
    swipe.simulate('swipeRight');
    expect(wrapper.state('index')).toBe(2);
  });
  it('should change index on Swipe Left', () => {
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    const swipe = wrapper.find(Swipe);
    swipe.simulate('swipeLeft');
    expect(wrapper.state('index')).toBe(1);
  });
  it('should loop through indexes if loop = true', () => {
    props.loop = true;
    props.loopTime = 1000;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    clock.tick(500);
    expect(wrapper.state('index')).toBe(0);
    clock.tick(500);
    expect(wrapper.state('index')).toBe(1);
    clock.tick(1000);
    expect(wrapper.state('index')).toBe(2);
    clock.tick(1000);
    expect(wrapper.state('index')).toBe(0);
  });
  it('should loop through indexes if loop = true adnd loopLeft=true', () => {
    props.loop = true;
    props.loopTime = 1000;
    props.loopLeft = true;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    clock.tick(500);
    expect(wrapper.state('index')).toBe(0);
    clock.tick(500);
    expect(wrapper.state('index')).toBe(2);
    clock.tick(1000);
    expect(wrapper.state('index')).toBe(1);
    clock.tick(1000);
    expect(wrapper.state('index')).toBe(0);
  });
  it('should stop loop while hover', () => {
    props.loop = true;
    props.loopTime = 1000;
    const wrapper = shallow(<Carousel {...props}><div /><div /><div /></Carousel>);
    const hidden = wrapper.find(Hidden);
    hidden.simulate('mouseEnter');
    clock.tick(5000);
    expect(wrapper.state('index')).toBe(0);
    hidden.simulate('mouseLeave');
    clock.tick(1000);
    expect(wrapper.state('index')).toBe(1);
  });
});
