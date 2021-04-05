import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import LoadingSpinner from '../LoadingSpinner';

describe('Test for LoadingSpinner Component', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render passing props', () => {
    const wrapper = shallow(<LoadingSpinner size="64px" thickness="5px" color="#fafafa" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
