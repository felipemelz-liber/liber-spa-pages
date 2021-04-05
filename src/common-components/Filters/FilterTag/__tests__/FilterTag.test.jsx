import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components';
import FilterTag from '../FilterTag';
import { FilterTag as Tag } from '../FilterTag.styles';

describe('Testing FilterTag Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      selected: [],
      onClear: sinon.spy(),
      show: false,
      label: 'label',
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<FilterTag />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<FilterTag {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly open', () => {
    props.show = true;
    const wrapper = shallow(<FilterTag {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with selected', () => {
    props.selected = ['selected value'];
    const wrapper = shallow(<FilterTag {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with selected wile open', () => {
    props.selected = ['selected value'];
    props.show = true;
    const wrapper = shallow(<FilterTag {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom seleted Formatter', () => {
    props.selected = [1, 2, 3];
    props.formatSelected = list => <div>{list.reduce((curr, next) => curr + next)}</div>;
    const wrapper = shallow(<FilterTag {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onClear when closing tag when selected is set', () => {
    props.selected = ['selected value'];
    const wrapper = shallow(<FilterTag {...props} />);
    const tag = wrapper.find(Tag);
    tag.simulate('close');
    expect(props.onClear.called).toBeTruthy();
  });
  it('should not call onClear when closing tag when selected not set', () => {
    const wrapper = shallow(<FilterTag {...props} />);
    const tag = wrapper.find(Tag);
    tag.simulate('close');
    expect(props.onClear.called).toBeFalsy();
  });
});
