import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Toast from '../Toast';
import { CloseIcon as Close } from '../Toast.styles';

describe('Testing Toast Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      id: 'aaaaa',
      type: null,
      show: true,
      duration: 0,
      info: null,
      content: null,
      children: 'mock',
      onClose: sinon.spy(),
      onExited: sinon.spy(),
    };
  });
  it('should render correctly without type', () => {
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without type=notice', () => {
    props.type = 'notice';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without type=info', () => {
    props.type = 'info';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without type=success', () => {
    props.type = 'success';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without type=alert', () => {
    props.type = 'alert';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without type=error', () => {
    props.type = 'error';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without type=warning', () => {
    props.type = 'warning';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onClose when click close button', () => {
    props.type = 'warning';
    const wrapper = shallow(<Toast {...props} />);
    const close = wrapper.find(Close);
    close.simulate('click');
    expect(props.onClose.calledWith('aaaaa')).toBeTruthy();
  });
  it('should render correctly with info', () => {
    props.info = 'Information';
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with content', () => {
    props.info = `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec fringilla arcu ante,
     a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.
     Donec nibh augue, mattis eu nunc id, iaculis tempus justo.
     Donec sagittis tortor iaculis turpis luctus,
     sed condimentum nunc hendrerit.
     Praesent ac tellus a arcu vulputate pharetra.`;
    const wrapper = shallow(<Toast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onExited when Exited', () => {
    jest.useFakeTimers();
    props.type = 'warning';
    const wrapper = mount(<Toast {...props} />);
    wrapper.setProps({ show: false });
    jest.runAllTimers();
    expect(props.onExited.called).toBeTruthy();
  });
});
