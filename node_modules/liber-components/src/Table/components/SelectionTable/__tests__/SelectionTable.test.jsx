import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  SelectionTable,
  SelectionTableHeader,
  SelectionTableBody,
  SelectionTableFooter,
  SelectionTableRow,
  SelectionTableRowColumn,
  SelectionTableHeaderColumn,
  CheckboxTable,
} from '../SelectionTable';

describe('Testing Selection Table', () => {
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
    const wrapper = shallow(<SelectionTable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('SelectionTableHeader', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SelectionTableHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SelectionTableHeader theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('SelectionTableBody', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SelectionTableBody />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('SelectionTableFooter should render correctly', () => {
    const wrapper = shallow(<SelectionTableFooter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('SelectionTableRow', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SelectionTableRow />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly selected', () => {
      const wrapper = shallow(<SelectionTableRow selected />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SelectionTableRow theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('SelectionTableRowColumn', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SelectionTableRowColumn />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SelectionTableRowColumn theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('SelectionTableHeaderColumn', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SelectionTableHeaderColumn />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SelectionTableHeaderColumn theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('CheckboxTable', () => {
    it('should render unchecked', () => {
      const wrapper = shallow(<CheckboxTable id="mock-id" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render checked', () => {
      const wrapper = shallow(<CheckboxTable id="mock-id" checked />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should pass border size props', () => {
      const wrapper = shallow(<CheckboxTable id="mock-id" borderSize="1px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
