import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import ClickOutside from '../ClickOutside';

describe('Testing ClickOutside Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      onOutsideClick: sinon.spy(),
    };
  });
  it('should render correctly', () => {
    const wrapper = shallow(<ClickOutside {...props}><span>Children</span></ClickOutside>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call function when click outside', () => {
    const map = {};
    document.addEventListener = jest.fn().mockImplementation((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(<ClickOutside {...props}><span>Children</span></ClickOutside>);
    expect(wrapper.find('span').length).toBe(1);
    map.mousedown({ event: { target: 'mock' } });
    expect(props.onOutsideClick.called).toBeTruthy();
    wrapper.unmount();
  });
});
