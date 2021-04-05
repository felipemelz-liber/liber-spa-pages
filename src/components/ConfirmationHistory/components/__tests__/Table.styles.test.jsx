import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Table.styles';

describe('Testing ConfirmationHistoryTable styles', () => {
  configure({ adapter: new Adapter() });
  const { TableRowColumn, ...uncontrolled } = styles;
  Object.keys(uncontrolled).forEach(style => {
    it(`renders ${style} correctly`, () => {
      const App = uncontrolled[style];
      const wrapper = shallow(<App />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('renders TableRowColumn correctly without props', () => {
    const wrapper = shallow(<TableRowColumn />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TableRowColumn correctly with right aligment', () => {
    const wrapper = shallow(<TableRowColumn align="right" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TableRowColumn correctly with center aligment', () => {
    const wrapper = shallow(<TableRowColumn align="center" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TableRowColumn correctly with left aligment', () => {
    const wrapper = shallow(<TableRowColumn align="left" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
