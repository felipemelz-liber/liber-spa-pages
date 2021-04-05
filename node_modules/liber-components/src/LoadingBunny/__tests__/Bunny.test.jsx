import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Bunny from '../Bunny';


describe('Testing Bunny Component', () => {
  const props = {
    className: 'test',
    loop: false,
  };
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = mount(<Bunny {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with loop', () => {
    props.loop = true;
    const wrapper = mount(<Bunny {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
