import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Calendar from '..';

describe('Test for Calendar Component', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly without view', () => {
    const wrapper = shallow(<Calendar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with month view', () => {
    const wrapper = shallow(<Calendar view="month" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with week view', () => {
    const wrapper = shallow(<Calendar view="week" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with other view', () => {
    const wrapper = shallow(<Calendar view="other" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
