import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NotificationBox from '../NotificationBox';
import { NotificationLabel } from '../styles';

describe('Testing NotificationBox Component', () => {
  const props = {
    label: 'test',
    children: <p>test</p>,
  };
  configure({ adapter: new Adapter() });
  it('should render correctly with props', () => {
    const wrapper = shallow(<NotificationBox {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without props closed', () => {
    const wrapper = shallow(<NotificationBox {...props} />);
    wrapper.setState({ open: false });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without props closed', () => {
    const wrapper = shallow(<NotificationBox {...props} />);
    wrapper.setState({ open: false });
    const label = wrapper.find(NotificationLabel);
    label.simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
  });
});
