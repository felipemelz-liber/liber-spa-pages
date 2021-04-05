import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import PieChart from '../DonutChart';

describe('Test for DonutChart', () => {
  configure({ adapter: new Adapter() });
  const props = {
    onClick: sinon.spy(),
    onMouseEnter: sinon.spy(),
    onMouseLeave: sinon.spy(),
  };
  it('should render correctly', () => {
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with innerRadius', () => {
    props.innerRadius = 50;
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
