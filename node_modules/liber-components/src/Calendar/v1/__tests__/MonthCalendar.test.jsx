import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import MonthCalendar from '../MonthCalendar';
import { NavButton, Day } from '../styles';

describe('Test for MonthCalendar Component', () => {
  configure({ adapter: new Adapter() });
  const props = {
    onMonthChange: sinon.spy(),
    onDayClick: sinon.spy(),
  };
  let clock;
  beforeEach(() => {
    const now = new Date('1234-01-01');
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<MonthCalendar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with weekdays', () => {
    const weekDays = ['s', 't', 'q', 'q', 's', 's', 'd'];
    const wrapper = shallow(<MonthCalendar weekDays={weekDays} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should throw an error when weekdays has the wrong length', () => {
    const error = sinon.stub(console, 'error');
    const wrapper = shallow(<MonthCalendar weekDays={[]} />);
    wrapper.setProps({ weekDays: new Array(1) });
    wrapper.setProps({ weekDays: new Array(8) });
    wrapper.setProps({ weekDays: new Array(5) });
    expect(error.calledWith('A week have 7 days, your week has 0'));
    expect(error.calledWith('A week have 7 days, your week has 1'));
    expect(error.calledWith('A week have 7 days, your week has 8'));
    expect(error.calledWith('A week have 7 days, your week has 5'));
    error.restore();
  });
  it('should render correctly with months', () => {
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const wrapper = shallow(<MonthCalendar months={months} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should throw an error when months has the wrong length', () => {
    const error = sinon.stub(console, 'error');
    const wrapper = shallow(<MonthCalendar months={[]} />);
    wrapper.setProps({ weekDays: new Array(1) });
    wrapper.setProps({ weekDays: new Array(8) });
    wrapper.setProps({ weekDays: new Array(13) });
    expect(error.calledWith('A year have 12 month, your year has 0'));
    expect(error.calledWith('A year have 12 month, your year has 1'));
    expect(error.calledWith('A year have 12 month, your year has 8'));
    expect(error.calledWith('A year have 12 month, your year has 13'));
    error.restore();
  });
  it('should render correctly when firstDayOfWeek is seted', () => {
    const wrapper = shallow(<MonthCalendar firstDayOfWeek={3} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when defaultDate is setted', () => {
    const wrapper = shallow(<MonthCalendar defaultDate="1234-12-01" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when date is setted', () => {
    const wrapper = shallow(<MonthCalendar />);
    const date = moment().format('YYYY-MM-DD');
    wrapper.setProps({ date });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  // it('should render correctly when data is setted', () => {
  //   const data = {
  //     label: {
  //       option1: 'mock1',
  //       option2: 'mock2',
  //       option3: 'mock3',
  //     },
  //     content: {},
  //   };
  //   data.content[moment().format('YYYY-MM-DD')] = {
  //     options: {
  //       option1: {
  //         value: 1, show: true,
  //       },
  //       option2: {
  //         value: 2, show: true,
  //       },
  //       option3: {
  //         value: 3, show: false,
  //       },
  //     },
  //   };
  //   const wrapper = shallow(<MonthCalendar data={data} />);
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
  // it('should render correctly when data is setted with href', () => {
  //   const data = {
  //     label: {
  //       option1: 'mock1',
  //       option2: 'mock2',
  //       option3: 'mock3',
  //     },
  //     content: {},
  //   };
  //   data.content[moment().format('YYYY-MM-DD')] = {
  //     options: {
  //       option1: {
  //         value: 1, show: true,
  //       },
  //       option2: {
  //         value: 2, show: true,
  //       },
  //       option3: {
  //         value: 3, show: false,
  //       },
  //     },
  //     href: '/',
  //   };
  //   const wrapper = shallow(<MonthCalendar data={data} />);
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
  it('should call onMonthChange when click on navigation', () => {
    const wrapper = shallow(<MonthCalendar {...props} />);
    const nav = wrapper.find(NavButton);
    nav.at(0).simulate('click');
    nav.at(1).simulate('click');
    expect(props.onMonthChange.callCount).toBe(2);
  });
  it('should call eventk when when setted in data', () => {
    const data = {
      label: {
        option1: 'mock1',
        option2: 'mock2',
        option3: 'mock3',
      },
      content: {},
    };
    data.content[moment().format('YYYY-MM-DD')] = {
      options: {
        option1: {
          value: 1, show: true,
        },
        option2: {
          value: 2, show: true,
        },
        option3: {
          value: 3, show: false,
        },
      },
      events: {
        onClick: sinon.spy(),
      },
    };
    const wrapper = shallow(<MonthCalendar data={data} />);
    const day = wrapper.find(Day);
    day.at(34).simulate('click');
    expect(data.content[moment().format('YYYY-MM-DD')].events.onClick.called).toBeTruthy();
  });
});
