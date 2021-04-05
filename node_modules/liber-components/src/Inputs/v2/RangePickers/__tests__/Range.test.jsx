import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import moment from 'moment';
import toJson from 'enzyme-to-json';
import { Clock } from '../../TimePicker';
import Calendar from '../../../../Calendar/v2/MonthCalendar';
import Range from '../Range';
import Selection from '../DateTimeSelection';


describe('Test for Range Component', () => {
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
    const wrapper = shallow(<Range />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with displayDate', () => {
    const wrapper = shallow(<Range displayDate={moment('2019-05-15')} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with startDate', () => {
    const wrapper = shallow(<Range
      displayDate={moment('2019-05-15')}
      startDate={moment('2019-05-15')}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with startDate and endDate', () => {
    const wrapper = shallow(<Range
      displayDate={moment('2019-05-15')}
      startDate={moment('2019-05-15')}
      endDate={moment('2019-06-15')}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with startTime', () => {
    const wrapper = shallow(<Range
      startTime={{ hour: 12, min: 25, sec: 12 }}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with startTime and endTime', () => {
    const wrapper = shallow(<Range
      startTime={{ hour: 12, min: 25, sec: 12 }}
      endTime={{ hour: 15, min: 25, sec: 0 }}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with showTime=false', () => {
    const wrapper = shallow(<Range
      showTime={false}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('uncontrolled', () => {
    let useState;
    let fake;

    const setDisplayDate = sinon.spy();
    const setStartDate = sinon.spy();
    const setEndDate = sinon.spy();
    const setStartTime = sinon.spy();
    const setEndTime = sinon.spy();

    beforeEach(() => {
      fake = sinon.stub();
      fake.onCall(0).returns([moment(), setDisplayDate]);
      fake.onCall(1).returns([null, setStartDate]);
      fake.onCall(2).returns([null, setEndDate]);
      fake.onCall(3).returns([{ hour: 0, min: 0, sec: 0 }, setStartTime]);
      fake.onCall(4).returns([{ hour: 0, min: 0, sec: 0 }, setEndTime]);

      fake.returns([100, sinon.spy()]);

      useState = sinon.stub(React, 'useState');

      useState.callsFake(fake);
    });
    afterEach(() => {
      useState.restore();
    });
    it('should call setDisplayDate on Selection Navigation (prev)', () => {
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('navigate', moment('2019-05-01'));
      expect(setDisplayDate.calledWith(moment('2019-05-01'))).toBeTruthy();
    });

    it('should call setDisplayDate on Selection Navigation (next)', () => {
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(1).dive().find(Calendar);
      calendar.simulate('navigate', moment('2019-05-01'));
      expect(setDisplayDate.calledWith(moment('2019-05-01').subtract(1, 'month'))).toBeTruthy();
    });

    it('should call setStartDate when start date is clicked', () => {
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-01'));
      expect(setStartDate.calledWith(moment('2019-05-01'))).toBeTruthy();
      expect(setEndDate.calledWith(null)).toBeTruthy();
    });
    it('should call setStartDate when start date is clicked again', () => {
      fake.onCall(1).returns([moment('2019-05-01'), setStartDate]);
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-01'));
      expect(setStartDate.calledWith(null)).toBeTruthy();
      expect(setEndDate.calledWith(null)).toBeTruthy();
    });
    it('should call setStartDate when a date is clicked (before start)', () => {
      fake.onCall(1).returns([moment('2019-05-05'), setStartDate]);
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-03'));
      expect(setStartDate.calledWith(moment('2019-05-03'))).toBeTruthy();
      expect(setEndDate.calledWith(null)).toBeTruthy();
    });
    it('should call setStartDate when end date is clicked', () => {
      fake.onCall(1).returns([moment('2019-05-01'), setStartDate]);
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-05'));
      expect(setStartDate.calledWith(moment('2019-05-01'))).toBeTruthy();
      expect(setEndDate.calledWith(moment('2019-05-05'))).toBeTruthy();
    });
    it('should call setStartDate when end date is clicked again', () => {
      fake.onCall(1).returns([moment('2019-05-01'), setStartDate]);
      fake.onCall(2).returns([moment('2019-05-05'), setEndDate]);
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-05'));
      expect(setStartDate.calledWith(moment('2019-05-01'))).toBeTruthy();
      expect(setEndDate.calledWith(null)).toBeTruthy();
    });
    it('should call setStartDate when end date is clicked (changing end)', () => {
      fake.onCall(1).returns([moment('2019-05-01'), setStartDate]);
      fake.onCall(2).returns([moment('2019-05-05'), setEndDate]);
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-03'));
      expect(setStartDate.calledWith(moment('2019-05-01'))).toBeTruthy();
      expect(setEndDate.calledWith(moment('2019-05-03'))).toBeTruthy();
    });
    it('should call setStartDate when start date is clicked (deselect all)', () => {
      fake.onCall(1).returns([moment('2019-05-01'), setStartDate]);
      fake.onCall(2).returns([moment('2019-05-05'), setEndDate]);
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-01'));
      expect(setStartDate.calledWith(null)).toBeTruthy();
      expect(setEndDate.calledWith(null)).toBeTruthy();
    });

    it('should call setStartTime when startTime is called', () => {
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const time = selections.at(0).dive().find(Clock);
      time.simulate('click', 12, 0, 1);
      expect(setStartTime.calledWith({ hour: 12, min: 0, sec: 1 })).toBeTruthy();
    });
    it('should call setStartTime when endTime is called', () => {
      const wrapper = shallow(<Range />);
      const selections = wrapper.find(Selection);
      const time = selections.at(1).dive().find(Clock);
      time.simulate('click', 12, 0, 1);
      expect(setEndTime.calledWith({ hour: 12, min: 0, sec: 1 })).toBeTruthy();
    });
  });

  describe('controlled', () => {
    let props;
    beforeEach(() => {
      props = {
        onNavigate: sinon.spy(),
        onChangeDates: sinon.spy(),
        onChangeTimes: sinon.spy(),
      };
    });
    it('should call setDisplayDate on Selection Navigation (prev)', () => {
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('navigate', moment('2019-05-01'));
      expect(props.onNavigate.calledWith(moment('2019-05-01'))).toBeTruthy();
    });

    it('should call setDisplayDate on Selection Navigation (next)', () => {
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(1).dive().find(Calendar);
      calendar.simulate('navigate', moment('2019-05-01'));
      expect(props.onNavigate.calledWith(moment('2019-05-01').subtract(1, 'month'))).toBeTruthy();
    });

    it('should call setStartDate when start date is clicked', () => {
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-01'));
      expect(props.onChangeDates.calledWith(moment('2019-05-01'), null)).toBeTruthy();
    });
    it('should call setStartDate when start date is clicked again', () => {
      props.startDate = moment('2019-05-01');
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-01'));
      expect(props.onChangeDates.calledWith(null, null)).toBeTruthy();
    });
    it('should call setStartDate when a date is clicked (before start)', () => {
      props.startDate = moment('2019-05-05');
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-03'));
      expect(props.onChangeDates.calledWith(moment('2019-05-03'), null)).toBeTruthy();
    });
    it('should call setStartDate when end date is clicked', () => {
      props.startDate = moment('2019-05-01');
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-05'));
      expect(props.onChangeDates.calledWith(moment('2019-05-01'), moment('2019-05-05'))).toBeTruthy();
    });
    it('should call setStartDate when end date is clicked again', () => {
      props.startDate = moment('2019-05-01');
      props.endDate = moment('2019-05-05');
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-05'));
      expect(props.onChangeDates.calledWith(moment('2019-05-01'), null)).toBeTruthy();
    });
    it('should call setStartDate when end date is clicked (changing end)', () => {
      props.startDate = moment('2019-05-01');
      props.endDate = moment('2019-05-05');
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-03'));
      expect(props.onChangeDates.calledWith(moment('2019-05-01'), moment('2019-05-03'))).toBeTruthy();
    });
    it('should call setStartDate when start date is clicked (deselect all)', () => {
      props.startDate = moment('2019-05-01');
      props.endDate = moment('2019-05-05');
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const calendar = selections.at(0).dive().find(Calendar);
      calendar.simulate('click', moment('2019-05-01'));
      expect(props.onChangeDates.calledWith(null, null)).toBeTruthy();
    });

    it('should call setStartTime when startTime is called', () => {
      props.startTime = null;
      props.endTime = null;
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const time = selections.at(0).dive().find(Clock);
      time.simulate('click', 12, 0, 1);
      expect(props.onChangeTimes.calledWith({ hour: 12, min: 0, sec: 1 }, null)).toBeTruthy();
    });
    it('should call setStartTime when endTime is called', () => {
      props.startTime = null;
      props.endTime = null;
      const wrapper = shallow(<Range {...props} />);
      const selections = wrapper.find(Selection);
      const time = selections.at(1).dive().find(Clock);
      time.simulate('click', 12, 0, 1);
      expect(props.onChangeTimes.calledWith(null, { hour: 12, min: 0, sec: 1 })).toBeTruthy();
    });
  });
});
