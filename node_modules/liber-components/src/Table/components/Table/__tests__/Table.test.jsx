import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableRowColumn,
  TableHeaderColumn,
  NotChecked,
  Checked,
  CheckIcon,
  TableCheck,
} from '../Table';

describe('Testing Table', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    table: {
      header: {
        border: '#000',
        color: '#111',
      },
      body: {
        color: '#222',
      },
      row: {
        even: '#333',
        odd: '#444',
        hover: '#555',
        selected: {
          even: '#666',
          odd: '#777',
          hover: '#888',
        },
      },
      check: {
        border: '#999',
        checked: '#aaa',
        unchecked: '#bbb',
        icon: '#ccc',
      },
    },
  };

  it('Table should render correctly', () => {
    const wrapper = shallow(<Table />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('TableHeader', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<TableHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<TableHeader theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('TableBody', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<TableBody />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('TableFooter should render correctly', () => {
    const wrapper = shallow(<TableFooter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('TableRow', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<TableRow />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly selected', () => {
      const wrapper = shallow(<TableRow selected />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<TableRow theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('TableRowColumn', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<TableRowColumn />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<TableRowColumn theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('TableHeaderColumn', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<TableHeaderColumn />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<TableHeaderColumn theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('NotChecked', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<NotChecked />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const wrapper = shallow(<NotChecked width="32px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<NotChecked theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Checked', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Checked />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const wrapper = shallow(<Checked width="32px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Checked theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('CheckIcon', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<CheckIcon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const wrapper = shallow(<CheckIcon width="32px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('TableCheck', () => {
    it('should render unchecked', () => {
      const wrapper = shallow(<TableCheck />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render checked', () => {
      const wrapper = shallow(<TableCheck checked />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should pass props to children', () => {
      const wrapper = shallow(<TableCheck width="32px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
