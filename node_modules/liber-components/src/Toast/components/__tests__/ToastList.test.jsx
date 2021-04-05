import React from 'react';
import Immutable from 'seamless-immutable';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { ToastList } from '../ToastList';
import Toast from '../Toast';

describe('Testing ToastLisy Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  const toastRoot = global.document.createElement('div');
  toastRoot.setAttribute('id', 'toast');
  const body = global.document.querySelector('body');
  body.appendChild(toastRoot);

  beforeEach(() => {
    props = {
      toasts: Immutable([{
        id: 'aaaaa',
        show: true,
        type: 'info',
        duration: 0,
        message: 'mock',
      }]),
      autoClose: 0,
      onTop: false,
      close: sinon.spy(),
      remove: sinon.spy(),
    };
  });

  it('should render correctly', () => {
    const wrapper = mount(<ToastList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly onTop', () => {
    props.onTop = true;
    const wrapper = mount(<ToastList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render empty when toast has no message', () => {
    props.toasts = Immutable([{
      id: 'aaaaa',
      show: true,
      type: 'info',
      duration: 0,
      message: '',
    }]);
    const wrapper = mount(<ToastList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call close when close toast', () => {
    props.onTop = true;
    const wrapper = mount(<ToastList {...props} />);
    const toast = wrapper.find(Toast);
    toast.instance().props.onClose('aaaaa');
    expect(props.close.calledWith('aaaaa')).toBeTruthy();
  });
  it('should call remove when exited toast', () => {
    props.onTop = true;
    const wrapper = mount(<ToastList {...props} />);
    const toast = wrapper.find(Toast);
    toast.instance().props.onExited();
    expect(props.remove.called).toBeTruthy();
  });
});
