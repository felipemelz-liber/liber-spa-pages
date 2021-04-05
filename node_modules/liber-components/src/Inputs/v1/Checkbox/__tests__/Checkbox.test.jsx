import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Checkbox from '../Checkbox';

describe('Testing Checkbox Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      name: 'test',
      id: 'test',
      value: 'test',
      checked: true,
      color: '#000',
      labelColor: '#000',
      className: 'test',
      onChange: sinon.spy(),
    };
  });
  it('should render correctly checked', () => {
    const wrapper = shallow(<Checkbox {...props}>Test</Checkbox>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly unchecked', () => {
    props.checked = false;
    const wrapper = shallow(<Checkbox {...props}>Test</Checkbox>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call function on change', () => {
    const wrapper = shallow(<Checkbox {...props}>Test</Checkbox>);
    const input = wrapper.find('input');
    input.simulate('change');
    expect(props.onChange.called).toBeTruthy();
  });
});
