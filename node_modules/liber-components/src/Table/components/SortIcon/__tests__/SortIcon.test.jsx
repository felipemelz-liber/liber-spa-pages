import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import SortIcon from '../SortIcon';

describe('SortIcon tests', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<SortIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with asc direction', () => {
    const wrapper = shallow(<SortIcon sortInfo={{ direction: 'asc', columnName: 'a' }} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with desc direction', () => {
    const wrapper = shallow(<SortIcon sortInfo={{ direction: 'desc', columnName: 'a' }} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
