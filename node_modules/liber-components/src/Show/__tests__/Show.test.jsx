import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Show from '../Show';

jest.useFakeTimers();

describe('Testing SelectField Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      in: false,
      children: (<div />),
    };
  });
  it('should render correctly closed', () => {
    const wrapper = mount(<Show {...props} />);
    jest.runAllTimers();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly open', () => {
    props.in = true;
    const wrapper = mount(<Show {...props} />);
    jest.runAllTimers();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when opened', () => {
    const wrapper = mount(<Show {...props} />);
    wrapper.setProps({ in: true });
    jest.runAllTimers();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when closed', () => {
    props.in = true;
    const wrapper = mount(<Show {...props} />);
    wrapper.setProps({ in: false });
    jest.runAllTimers();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
