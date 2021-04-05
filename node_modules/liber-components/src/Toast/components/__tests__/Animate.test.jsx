import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Animate from '../Animate';

describe('Testing Animate Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      show: false,
      children: 'mock',
      onExited: sinon.spy(),
    };
  });
  it('should render correctly without show', () => {
    const wrapper = shallow(<Animate {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with show', () => {
    props.show = true;
    const wrapper = shallow(<Animate {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render call onExited when exited', () => {
    jest.useFakeTimers();
    props.show = true;
    const wrapper = mount(<Animate {...props} />);
    wrapper.setProps({ show: false });
    jest.runAllTimers();
    expect(props.onExited.called).toBeTruthy();
  });
});
