import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../ConfirmationHistory.styles';

describe('Testing ConfirmationHistory styles', () => {
  configure({ adapter: new Adapter() });
  const { LoadingBlock, ...uncontrolled } = styles;
  Object.keys(uncontrolled).forEach(style => {
    it(`renders ${style} correctly`, () => {
      const App = uncontrolled[style];
      const wrapper = shallow(<App />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('renders LoadingBlock correctly without props', () => {
    const wrapper = shallow(<LoadingBlock />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders LoadingBlock correctly while loading', () => {
    const wrapper = shallow(<LoadingBlock loading={1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders LoadingBlock correctly while not loading', () => {
    const wrapper = shallow(<LoadingBlock loading={0} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
