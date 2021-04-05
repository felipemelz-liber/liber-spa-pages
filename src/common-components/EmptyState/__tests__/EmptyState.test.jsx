import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EmptyState from '../EmptyState';

describe('EmptyState tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    header: 'mock',
    text: 'mock',
    imagePath: 'mock',
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<EmptyState />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<EmptyState {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
