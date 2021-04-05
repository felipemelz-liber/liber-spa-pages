import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Bar } from '../StickyBar.styles';

describe('Testing StickyBar Styles', () => {
  configure({ adapter: new Adapter() });


  it('renders Bar correctly without props', () => {
    const wrapper = shallow(<Bar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Bar correctly with sticked=false', () => {
    const wrapper = shallow(<Bar sticked={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Bar correctly with sticked=true', () => {
    const wrapper = shallow(<Bar sticked />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
