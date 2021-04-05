import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import moment from 'moment';
import sinon from 'sinon';
import { RadioButton } from '../../../Inputs';
import Filter from '../Filter';

describe('Test for Filter Component', () => {
  configure({ adapter: new Adapter() });
  const props = {
    data: {
      options: {
        option1: 'label1',
        option2: 'label2',
      },
      content: {},
    },
    onFilter: sinon.spy(),
  };
  props.data.content[moment().format('YYYY-MM-DD')] = {
    options: {
      option1: { value: 1 },
      option2: { value: 2 },
    },
  };
  it('should render correctly', () => {
    const wrapper = shallow(<Filter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with color', () => {
    props.filterColor = '#000';
    const wrapper = shallow(<Filter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with color object', () => {
    props.filterColor = { option1: '#000', option2: '#fafafa' };
    const wrapper = shallow(<Filter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onFilter when select any filter', () => {
    props.filterColor = { option1: '#000', option2: '#fafafa' };
    const wrapper = shallow(<Filter {...props} />);
    const radio = wrapper.find(RadioButton);
    radio.at(0).simulate('change');
    const expected = {};
    expected[moment().format('YYYY-MM-DD')] = {
      options: {
        option1: { value: 1, show: false },
        option2: { value: 2 },
      },
    };
    expect(wrapper.state('mock')).toBeFalsy();
    expect(props.onFilter.calledWith(expected)).toBeTruthy();
  });
});
