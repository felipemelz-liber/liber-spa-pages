import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Month, MonthContainer, YearLabel, YearContainer, Cell,
} from '../styles';

describe('Testing MonthPicker Styles', () => {
  configure({ adapter: new Adapter() });
  it('Month Should render correctly', () => {
    const wrapper = shallow(<Month />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Month Should render correctly disabled', () => {
    const wrapper = shallow(<Month disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Month Should render correctly selected', () => {
    const wrapper = shallow(<Month selected />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MonthContainer Should render correctly', () => {
    const wrapper = shallow(<MonthContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('YearLabel Should render correctly', () => {
    const wrapper = shallow(<YearLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('YearContainer Should render correctly', () => {
    const wrapper = shallow(<YearContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Cell Should render correctly', () => {
    const wrapper = shallow(<Cell />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
