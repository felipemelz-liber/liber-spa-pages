import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Clock from '../Clock';
import { Col, Unit } from '../TimePicker.styles';

describe('Testing Clock Component', () => {
  configure({ adapter: new Adapter() });
  let props;

  beforeEach(() => {
    props = {
      hour: '00',
      min: '00',
      sec: '00',
      onClick: sinon.spy(),
    };
  });
  it('renders Clock correctly without props', () => {
    const wrapper = shallow(<Clock />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Clock correctly with props', () => {
    const wrapper = shallow(<Clock {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should return correct hour on hour click', () => {
    const wrapper = shallow(<Clock {...props} />);
    const col = wrapper.find(Col).at(0);
    const hour = col.find(Unit).at(11);
    hour.simulate('click');
    expect(props.onClick.calledWith(11, 0, 0, '11:00:00')).toBeTruthy();
  });
  it('should return correct hour on min click', () => {
    const wrapper = shallow(<Clock {...props} />);
    const col = wrapper.find(Col).at(1);
    const hour = col.find(Unit).at(32);
    hour.simulate('click');
    expect(props.onClick.calledWith(0, 32, 0, '00:32:00')).toBeTruthy();
  });
  it('should return correct hour on sec click', () => {
    const wrapper = shallow(<Clock {...props} />);
    const col = wrapper.find(Col).at(2);
    const hour = col.find(Unit).at(52);
    hour.simulate('click');
    expect(props.onClick.calledWith(0, 0, 52, '00:00:52')).toBeTruthy();
  });
  it('should return correct hour on hour click when empty (hour, min and sec === null)', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Clock onClick={onClick} />);
    const col = wrapper.find(Col).at(0);
    const hour = col.find(Unit).at(11);
    hour.simulate('click');
    expect(onClick.calledWith(11, 0, 0, '11:00:00')).toBeTruthy();
  });
  it('should return correct hour on min click when empty (hour, min and sec === null)', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Clock onClick={onClick} />);
    const col = wrapper.find(Col).at(1);
    const hour = col.find(Unit).at(32);
    hour.simulate('click');
    expect(onClick.calledWith(0, 32, 0, '00:32:00')).toBeTruthy();
  });
  it('should return correct hour on sec click when empty (hour, min and sec === null)', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Clock onClick={onClick} />);
    const col = wrapper.find(Col).at(2);
    const hour = col.find(Unit).at(52);
    hour.simulate('click');
    expect(onClick.calledWith(0, 0, 52, '00:00:52')).toBeTruthy();
  });
});
