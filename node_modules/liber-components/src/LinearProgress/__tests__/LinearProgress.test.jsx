import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import LinearProgress from '../LinearProgress';

describe('Testing LinearProgress Component', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly indeterminate', () => {
    const wrapper = shallow(<LinearProgress />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly indeterminate with background', () => {
    const wrapper = shallow(<LinearProgress background="#000" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly determinate', () => {
    const wrapper = shallow(<LinearProgress determinate value={50} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly determinate with background', () => {
    const wrapper = shallow(<LinearProgress determinate value={50} background="#000" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
