import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import * as styles from '../InvoicesTable.styles';

describe('InvoicesTable styled components test', () => {
  configure({ adapter: new Adapter() });
  const { Icon, ...Components } = styles;

  Object.keys(Components).forEach(componentName => {
    const Component = Components[componentName];
    it(`should render ${componentName} correctly`, () => {
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render Icon correctly', () => {
    const wrapper = shallow(<Icon path="" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
