import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ChartLabel from '../ChartLabel';

describe('Test for ChartLabel component', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly without children', () => {
    const wrapper = shallow(<ChartLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without children with highlight=1', () => {
    const wrapper = shallow(<ChartLabel highlight="1" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without children with highlight=0.5', () => {
    const wrapper = shallow(<ChartLabel highlight="0.5" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with children', () => {
    const wrapper = shallow(<ChartLabel>children</ChartLabel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with children highlight=1', () => {
    const wrapper = shallow(<ChartLabel highlight="1">children</ChartLabel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with children highlight=0.5', () => {
    const wrapper = shallow(<ChartLabel highlight="0.5">children</ChartLabel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
