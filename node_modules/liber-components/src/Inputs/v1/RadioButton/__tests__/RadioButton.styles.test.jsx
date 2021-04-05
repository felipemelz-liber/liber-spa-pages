import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import RadioButton from '../RadioButton.styles';


describe('Testing RadioButton Styles', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<RadioButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with theme', () => {
    const theme = {
      radioButton: {
        label: '#aaa',
        color: '#bbb',
      },
    };
    const wrapper = shallow(<RadioButton theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const props = {
      color: '#000',
      labelColor: '#000',
    };
    const wrapper = shallow(<RadioButton {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
