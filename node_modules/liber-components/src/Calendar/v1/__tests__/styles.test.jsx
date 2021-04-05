import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Dot,
  BiggerDot,
  FloatingDots,
  DataContainer,
  Tooltip,
  Day,
  WeekDay,
  Month,
  Row,
  FilterRow,
  FilterLabel,
  Cell,
  CalendarBody,
  Left,
  Right,
  NavButton,
  WeekBody,
  WeekDayValue,
  WeekCell,
  WeekNav,
} from '../styles';

describe('Test for Calendar Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    calendar: {
      biggerDot: '#000',
      dot: '#001',
      dataContainer: '#002',
      tooltip: {
        background: '#003',
        color: '#004',
      },
      date: {
        today: '#005',
        disabled: '#006',
        default: '#007',
        background: '#009',
        link: {
          today: '#00a',
          disabled: '#00b',
          default: '#00c',
          background: '#00d',
        },
      },
      month: '#00e',
      week: '#00f',
      filterRow: '#010',
      filterLabel: '#011',
      left: '#012',
      right: '#013',
    },
  };

  describe('Dot', () => {
    it('should render without color', () => {
      const wrapper = shallow(<Dot />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with theme', () => {
      const wrapper = shallow(<Dot theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with color', () => {
      const wrapper = shallow(<Dot color="#000" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('BiggerDot', () => {
    it('should render without color', () => {
      const wrapper = shallow(<BiggerDot />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with theme', () => {
      const wrapper = shallow(<BiggerDot theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with color', () => {
      const wrapper = shallow(<BiggerDot color="#000" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render FloatingDots correctly', () => {
    const wrapper = shallow(<FloatingDots />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('DataContainer', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<DataContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with theme', () => {
      const wrapper = shallow(<DataContainer theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Tooltip', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Tooltip />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with theme', () => {
      const wrapper = shallow(<Tooltip theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Day', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Day />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Day theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when today is true', () => {
      const wrapper = shallow(<Day today />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when disabled', () => {
      const wrapper = shallow(<Day disabled />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('WeekDay', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<WeekDay />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<WeekDay theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Month', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Month />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Month theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render Row correctly', () => {
    const wrapper = shallow(<Row />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('FilterRow', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<FilterRow />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const wrapper = shallow(<FilterRow theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('FilterLabel', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<FilterLabel />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<FilterLabel theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render Cell correctly', () => {
    const wrapper = shallow(<Cell />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render CalendarBody correctly', () => {
    const wrapper = shallow(<CalendarBody />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Left', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Left />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Left theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Right', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Right />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Right theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render NavButton correctly', () => {
    const wrapper = shallow(<NavButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render NavButton correctly when disabled', () => {
    const wrapper = shallow(<NavButton disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render WeekBody correctly', () => {
    const wrapper = shallow(<WeekBody />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('WeekDayValue', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<WeekDayValue />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<WeekDayValue theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when today', () => {
      const wrapper = shallow(<WeekDayValue today />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when disabled', () => {
      const wrapper = shallow(<WeekDayValue disabled />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render WeekCell correctly', () => {
    const wrapper = shallow(<WeekCell />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render WeekNav correctly', () => {
    const wrapper = shallow(<WeekNav />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
