import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Drawer from '../Drawer';
import { Bg } from '../../DialogStyles';

jest.useFakeTimers();

describe('Testing Drawer Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  const DrawerRoot = global.document.createElement('div');
  DrawerRoot.setAttribute('id', 'modal');
  const body = global.document.querySelector('body');
  body.appendChild(DrawerRoot);

  beforeEach(() => {
    props = {
      children: <p>Testando</p>,
      closable: false,
      show: true,
      onAppearStart: sinon.spy(),
      onAppeared: sinon.spy(),
      onLeaveStart: sinon.spy(),
      onLeaved: sinon.spy(),
    };
  });
  it('Should render correctly with show=true', () => {
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=left size=100 fitScreen=false', () => {
    props.position = 'left';
    props.size = 100;
    props.fitScreen = false;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=left size=100 fitScreen=true', () => {
    props.position = 'left';
    props.size = 100;
    props.fitScreen = true;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=right size=100 fitScreen=false', () => {
    props.position = 'right';
    props.size = 100;
    props.fitScreen = false;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=right size=100 fitScreen=true', () => {
    props.position = 'right';
    props.size = 100;
    props.fitScreen = true;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=top size=100 fitScreen=false', () => {
    props.position = 'top';
    props.size = 100;
    props.fitScreen = false;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=top size=100 fitScreen=true', () => {
    props.position = 'top';
    props.size = 100;
    props.fitScreen = true;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=bottom size=100 fitScreen=false', () => {
    props.position = 'bottom';
    props.size = 100;
    props.fitScreen = true;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, position=bottom size=100 fitScreen=true', () => {
    props.position = 'bottom';
    props.size = 100;
    props.fitScreen = true;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly when empty and show=true', () => {
    props.children = null;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=false', () => {
    props.show = false;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly when empty and show=false', () => {
    props.show = false;
    props.children = null;
    const wrapper = mount(<Drawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should call appear callbacks when enter', () => {
    props.show = false;
    const wrapper = mount(<Drawer {...props} />);
    wrapper.setProps({ show: true });
    jest.runAllTimers();
    expect(props.onAppearStart.called).toBeTruthy();
    expect(props.onAppeared.called).toBeTruthy();
    wrapper.unmount();
  });
  it('Should call Leave callbacks when exit', () => {
    const wrapper = mount(<Drawer {...props} />);
    wrapper.setProps({ show: false });
    jest.runAllTimers();
    expect(props.onLeaveStart.called).toBeTruthy();
    expect(props.onLeaved.called).toBeTruthy();
    wrapper.unmount();
  });
  it('Should not call Leave callbacks when click on bg and closable=false', () => {
    const wrapper = mount(<Drawer {...props} />);
    const bg = wrapper.find(Bg);
    bg.simulate('click');
    jest.runAllTimers();
    expect(wrapper.state('open')).toBeTruthy();
    expect(wrapper.state('transition')).toBeFalsy();
    expect(props.onLeaveStart.called).toBeFalsy();
    expect(props.onLeaved.called).toBeFalsy();
    wrapper.unmount();
  });
  it('Should call Leave callbacks when click on bg and closable=true', () => {
    props.closable = true;
    const wrapper = mount(<Drawer {...props} />);
    const bg = wrapper.find(Bg);
    bg.simulate('click');
    jest.runAllTimers();
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('transition')).toBeFalsy();
    expect(props.onLeaveStart.called).toBeTruthy();
    expect(props.onLeaved.called).toBeTruthy();
    wrapper.unmount();
  });
});
