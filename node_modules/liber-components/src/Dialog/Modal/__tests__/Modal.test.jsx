import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Modal from '../Modal';
import { Bg } from '../../DialogStyles';

jest.useFakeTimers();

describe('Testing Modal Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

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
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with fullscreen', () => {
    const wrapper = mount(<Modal {...props} fullscreen />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true and closeButton', () => {
    props.closeButton = true;
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true and overflow', () => {
    props.overflow = 'hidden';
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true and label', () => {
    props.label = 'LABEL';
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=true, label and labelAlign', () => {
    props.label = 'LABEL';
    props.labelAlign = 'center';
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly when empty and show=true', () => {
    props.children = null;
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly with show=false', () => {
    props.show = false;
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should render correctly when empty and show=false', () => {
    props.show = false;
    props.children = null;
    const wrapper = mount(<Modal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Should call appear callbacks when enter', () => {
    props.show = false;
    const wrapper = mount(<Modal {...props} />);
    wrapper.setProps({ show: true });
    jest.runAllTimers();
    expect(props.onAppearStart.called).toBeTruthy();
    expect(props.onAppeared.called).toBeTruthy();
    wrapper.unmount();
  });
  it('Should call Leave callbacks when exit', () => {
    const wrapper = mount(<Modal {...props} />);
    wrapper.setProps({ show: false });
    jest.runAllTimers();
    expect(props.onLeaveStart.called).toBeTruthy();
    expect(props.onLeaved.called).toBeTruthy();
    wrapper.unmount();
  });
  it('Should not call Leave callbacks when click on bg and closable=false', () => {
    const wrapper = mount(<Modal {...props} />);
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
    const wrapper = mount(<Modal {...props} />);
    const bg = wrapper.find(Bg);
    bg.simulate('click');
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('transition')).toBeTruthy();
    jest.runAllTimers();
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('transition')).toBeFalsy();
    expect(props.onLeaveStart.called).toBeTruthy();
    expect(props.onLeaved.called).toBeTruthy();
    wrapper.unmount();
  });
});
