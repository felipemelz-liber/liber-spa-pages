import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import * as styles from '../SimulationDrawer.styles';

describe('SimulationDrawer styled components test', () => {
  configure({ adapter: new Adapter() });
  const { Row, ...Components } = styles;

  Object.keys(Components).forEach(componentName => {
    const Component = Components[componentName];
    it(`should render ${componentName} correctly`, () => {
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render Row correctly', () => {
    const wrapper = shallow(<Row />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Row with padding top correctly', () => {
    const wrapper = shallow(<Row hasPaddingTop />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
