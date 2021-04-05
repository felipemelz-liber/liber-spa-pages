import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { FaBuilding } from '../../Icons';
import KeyValueDisplay from '../KeyValueDisplay';


describe('Test for Action Button', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      label: 'Key',
      children: 'Value',
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<KeyValueDisplay />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props, without tooltip', () => {
    const wrapper = shallow(<KeyValueDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props, with tooltip', () => {
    props.tooltip = 'Tooltip value';
    const wrapper = shallow(<KeyValueDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props, with tooltip and custom icon', () => {
    props.tooltip = 'Tooltip value';
    props.tooltipIcon = <FaBuilding />;
    const wrapper = shallow(<KeyValueDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props, with tooltip in other direction', () => {
    props.tooltip = 'Tooltip value';
    props.tooltipDirection = 'right';
    const wrapper = shallow(<KeyValueDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
