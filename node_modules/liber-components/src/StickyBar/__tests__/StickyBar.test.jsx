import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { Waypoint } from 'react-waypoint';
import StickyBar from '../StickyBar';

describe('Testing StickyBar Component', () => {
  configure({ adapter: new Adapter() });
  let state;
  let ref;
  beforeEach(() => {
    state = sinon.stub(React, 'useState');
    ref = sinon.stub(React, 'useRef');
    const getBoundingClientRectSpy = sinon.stub().returns({
      height: 100,
      width: 100,
      top: 10,
      left: 10,
    });
    ref.returns({
      current: {
        getBoundingClientRect: getBoundingClientRectSpy,
      },
    });
  });

  afterEach(() => {
    state.restore();
    ref.restore();
  });

  it('renders Bar correctly without props', () => {
    state.returns([true, sinon.spy()]);
    const wrapper = shallow(<StickyBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('shoud set sticker to true on point leave', () => {
    const callback = sinon.spy();
    state.returns([false, callback]);

    const wrapper = shallow(<StickyBar top={12} />);
    const point = wrapper.find(Waypoint);
    point.simulate('leave', { viewportTop: 0 });
    expect(callback.calledWith(true)).toBeTruthy();
  });
  it('renders Bar correctly when sticked', () => {
    const callback = sinon.spy();
    state.returns([true, callback]);
    const wrapper = shallow(<StickyBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('shoud set sticker to false on point enter', () => {
    const callback = sinon.spy();
    state.returns([true, callback]);
    const wrapper = shallow(<StickyBar />);
    const point = wrapper.find(Waypoint);
    point.simulate('enter');
    expect(callback.calledWith(false)).toBeTruthy();
  });
});
