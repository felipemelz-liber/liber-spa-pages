import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import SimpleDisplay from '../SimpleDisplay';
import { Container } from '../styles';

describe('Test for SimpleDisplay', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly without props', () => {
    const wrapper = shallow(<SimpleDisplay />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with value and label(string)', () => {
    const wrapper = shallow(<SimpleDisplay label="test">3</SimpleDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with value and label(object)', () => {
    const wrapper = shallow(<SimpleDisplay label={{ text: 'test', color: '#000' }}>3</SimpleDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with prefix', () => {
    const props = {
      children: '3',
      label: 'test',
      prefix: 'R$',
    };
    const wrapper = shallow(<SimpleDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should not show tooltip onMouseMove when tooltip no setted', () => {
    const props = {
      children: '3',
      label: 'test',
      prefix: 'R$',
    };
    const wrapper = shallow(<SimpleDisplay {...props} />);
    const container = wrapper.find(Container);
    container.simulate('mouseMove');
    expect(wrapper.state('showTooltip')).toBeFalsy();
  });
  it('should show tooltip onMouseMove', () => {
    const props = {
      children: '3',
      label: 'test',
      prefix: 'R$',
      tooltipContent: <div>content</div>,
      tooltiplabel: 'label',
    };
    const wrapper = shallow(<SimpleDisplay {...props} />);
    const container = wrapper.find(Container);
    container.simulate('mouseMove', { clienX: 0, clientY: 0 });
    expect(wrapper.state('showTooltip')).toBeTruthy();
  });
});
