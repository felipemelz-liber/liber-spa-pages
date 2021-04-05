import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

import ProgressBar from '../ProgressBar';
import Step from '../Step';
import { LabelUpper } from '../styles';

describe('Test for ProgressBar', () => {
  configure({ adapter: new Adapter() });
  const props = {
    steps: ['A', 'B', 'C'],
    current: 2,
  };

  it('should render with props', () => {
    const wrapper = shallow(<ProgressBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with custom label', () => {
    const wrapper = shallow(<ProgressBar {...props} label="ABC" />);
    expect(wrapper.find(LabelUpper).props().children[1]).toEqual('ABC');
  });

  it('should render with onClick function when completed', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<ProgressBar {...props} completed={2} onClick={onClick} />);
    const steps = wrapper.find(Step);
    steps.at(0).simulate('click');
    expect(onClick.calledWith('A', 1)).toBeTruthy();
    expect(steps.get(0).props.clickable).toBeTruthy();
    steps.at(1).simulate('click');
    expect(onClick.calledWith('B', 2)).toBeTruthy();
    expect(steps.get(1).props.clickable).toBeTruthy();
    steps.at(2).simulate('click');
    expect(onClick.calledWith('C', 3)).toBeTruthy();
    expect(steps.get(2).props.clickable).toBeTruthy();
  });

  it('should render with onClick function and completed', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<ProgressBar {...props} completed={1} onClick={onClick} />);
    const steps = wrapper.find(Step);
    expect(steps.get(0).props.clickable).toBeTruthy();
    expect(steps.get(0).props.complete).toBeTruthy();
    expect(steps.get(1).props.clickable).toBeTruthy();
    expect(steps.get(1).props.complete).toBeFalsy();
    expect(steps.get(2).props.clickable).toBeFalsy();
    expect(steps.get(2).props.complete).toBeFalsy();
  });

  it('should render steps with correct props when array', () => {
    const wrapper = shallow(<ProgressBar {...props} />);
    const steps = wrapper.find(Step);
    expect(steps.length).toEqual(3);
    expect(steps.get(0).props.active).toBeFalsy();
    expect(steps.get(0).props.complete).toBeTruthy();
    expect(steps.get(1).props.active).toBeTruthy();
    expect(steps.get(1).props.complete).toBeFalsy();
    expect(steps.get(2).props.active).toBeFalsy();
    expect(steps.get(2).props.complete).toBeFalsy();
  });

  it('should render steps with correct props when object', () => {
    const objProps = {
      steps: { a: 'A', b: 'B', c: 'C' },
      current: 2,
    };
    const wrapper = shallow(<ProgressBar {...objProps} />);
    const steps = wrapper.find(Step);
    expect(steps.length).toEqual(3);
    expect(steps.get(0).props.active).toBeFalsy();
    expect(steps.get(0).props.complete).toBeTruthy();
    expect(steps.get(1).props.active).toBeTruthy();
    expect(steps.get(1).props.complete).toBeFalsy();
    expect(steps.get(2).props.active).toBeFalsy();
    expect(steps.get(2).props.complete).toBeFalsy();
  });

  it('should handle current when array and current as string', () => {
    const wrapper = shallow(<ProgressBar {...props} current="B" />);
    const steps = wrapper.find(Step);
    expect(steps.get(1).props.active).toBeTruthy();
    expect(steps.get(1).props.complete).toBeFalsy();
  });

  it('should handle when object and current as string', () => {
    const objProps = {
      steps: { a: 'A', b: 'B', c: 'C' },
      current: 'b',
    };
    const wrapper = shallow(<ProgressBar {...objProps} />);
    const steps = wrapper.find(Step);
    expect(steps.get(1).props.active).toBeTruthy();
    expect(steps.get(1).props.complete).toBeFalsy();
  });

  it('should render steps with correct connects count', () => {
    const wrapper = shallow(<ProgressBar {...props} />);
    const steps = wrapper.find(Step);
    const connects = steps.filterWhere(step => step.props().connect);
    expect(steps.length).toEqual(3);
    expect(connects.length).toEqual(2);
  });

  it('should render connects with correct props', () => {
    const wrapper = shallow(<ProgressBar {...props} />);
    const steps = wrapper.find(Step);
    const connects = steps.filterWhere(step => step.props().connect);
    expect(connects.get(0).props.active).toBeTruthy();
    expect(connects.get(0).props.complete).toBeFalsy();
    expect(connects.get(1).props.active).toBeFalsy();
    expect(connects.get(1).props.complete).toBeFalsy();
  });
});
