import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Content, MonthPickerContainer,
} from '../styles';

describe('Testing MonthPicker Styles', () => {
  configure({ adapter: new Adapter() });
  it('Month Should render correctly', () => {
    const wrapper = shallow(<Content />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Month Should render correctly ', () => {
    const wrapper = shallow(<MonthPickerContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Month Should render correctly selected with show', () => {
    const wrapper = shallow(<MonthPickerContainer show />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
