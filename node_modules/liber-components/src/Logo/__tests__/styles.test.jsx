import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Cls1, Cls2, Cls3 } from '../styles';

describe('Testing Logo Styles', () => {
  configure({ adapter: new Adapter() });
  it('Cls1 Should render correctly', () => {
    const wrapper = shallow(<Cls1 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Cls2 Should render correctly', () => {
    const wrapper = shallow(<Cls2 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Cls3 Should render correctly', () => {
    const wrapper = shallow(<Cls3 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
