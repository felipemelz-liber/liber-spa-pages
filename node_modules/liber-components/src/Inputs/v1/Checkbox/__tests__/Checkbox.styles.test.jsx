import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Checkbox from '../Checkbox.styles';


describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<Checkbox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without theme', () => {
    const theme = {
      checkbox: {
        label: '#aaa',
        color: '#bbb',
      },
    };
    const wrapper = shallow(<Checkbox theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const props = {
      color: '#000',
      labelColor: '#000',
    };
    const wrapper = shallow(<Checkbox {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
