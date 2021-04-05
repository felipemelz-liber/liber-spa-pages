import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Tabs from '../Tabs';
import { Tab } from '../../tabsComponents';
import Header from '../Header';

describe('Testing Tabs Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      label: 'test',
    };
  });
  it('Should render correctly', () => {
    const wrapper = shallow(
      <Tabs>
        <Tab {...props}>Test</Tab>
      </Tabs>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Should render correctly with header', () => {
    const wrapper = shallow(
      <Tabs>
        <Header>{labels => labels}</Header>
        <Tab {...props}>Test</Tab>
      </Tabs>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Should change state when change selection', () => {
    const wrapper = shallow(
      <Tabs>
        <Tab {...props}>Test</Tab>
        <Tab {...props}>Test2</Tab>
      </Tabs>,
    );
    const input = wrapper.find('input').at(1);
    expect(wrapper.state('current')).toBe(0);
    input.simulate('change');
    expect(wrapper.state('current')).toBe(1);
  });
});
