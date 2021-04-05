import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import moment from 'moment';
import MonthSelect from '../MonthSelect';

describe('MonthSelect tests', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<MonthSelect />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with error', () => {
    const wrapper = shallow(<MonthSelect errorMessage="error" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with value', () => {
    const wrapper = shallow(<MonthSelect value={moment('13/04/2020', 'DD/MM/YYYY')} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly disabled', () => {
    const wrapper = shallow(<MonthSelect disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
