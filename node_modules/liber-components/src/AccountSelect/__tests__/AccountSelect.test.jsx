import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import AccountSelect from '../AccountSelect';
import accounts from '../accounts';
import { Box } from '../AcccountSelect.styles';

describe('Test for Account Select', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      accounts,
      onSelect: sinon.spy(),
      onAction: sinon.spy(),
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<AccountSelect />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<AccountSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with selected', () => {
    props.selected = 2;
    const wrapper = shallow(<AccountSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without action', () => {
    props.action = false;
    const wrapper = shallow(<AccountSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom action label', () => {
    props.actionLabel = 'Custom';
    const wrapper = shallow(<AccountSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should select first on list by default', () => {
    props.actionLabel = 'Custom';
    const wrapper = shallow(<AccountSelect {...props} />);
    expect(wrapper.state('selected')).toBe(0);
  });
  it('should select on Box click', () => {
    props.actionLabel = 'Custom';
    const wrapper = shallow(<AccountSelect {...props} />);
    const box = wrapper.find(Box);
    box.at(1).simulate('click');
    expect(wrapper.state('selected')).toBe(1);
    expect(props.onSelect.calledWith(accounts[1])).toBeTruthy();
  });
  it('should call onAction on action button click', () => {
    props.actionLabel = 'Custom';
    const wrapper = shallow(<AccountSelect {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onAction.called).toBeTruthy();
  });
});
