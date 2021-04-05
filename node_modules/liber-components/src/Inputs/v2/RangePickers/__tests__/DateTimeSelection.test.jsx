import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { Button } from '../../../../Buttons';
import DateTimeSelection from '../DateTimeSelection';


describe('Test for DateTimeSelection', () => {
  let clock;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    const now = new Date('2019-06-07');
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<DateTimeSelection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without time', () => {
    const wrapper = shallow(<DateTimeSelection showTime={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom labels', () => {
    const props = {
      labels: {
        date: 'Go to Time',
        time: 'Go to Date',
      },
    };
    const wrapper = shallow(<DateTimeSelection {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with show="date"', () => {
    const wrapper = shallow(<DateTimeSelection show="date" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with show="time"', () => {
    const wrapper = shallow(<DateTimeSelection show="date" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with show="other"', () => {
    const wrapper = shallow(<DateTimeSelection show="other" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call setShow on Button click when uncontrolled', () => {
    const setShow = sinon.spy();
    const useState = sinon.stub(React, 'useState');
    useState.callsFake(() => ['date', setShow]);

    const wrapper = shallow(<DateTimeSelection />);
    const button = wrapper.find(Button);
    button.simulate('click');
    expect(setShow.calledWith('time'));

    useState.callsFake(() => ['time', setShow]);
    button.simulate('click');
    expect(setShow.calledWith('date'));

    useState.restore();
  });
  it('should call onChange when controlled', () => {
    const onChange = sinon.spy();

    const wrapper = shallow(<DateTimeSelection />);
    const button = wrapper.find(Button);

    wrapper.setProps({ show: 'date' });
    button.simulate('click');
    expect(onChange.calledWith('time'));

    wrapper.setProps({ show: 'time' });
    button.simulate('click');
    expect(onChange.calledWith('date'));
  });
});
