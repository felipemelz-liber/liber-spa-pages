import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as Components from '../CardContent.styles';

describe('CardContent styled components test', () => {
  configure({ adapter: new Adapter() });

  Object.keys(Components).forEach(componentName => {
    const Component = Components[componentName];
    it(`should render ${componentName} correctly`, () => {
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  const { FlatButton } = Components;
  it('should render FlatButton with blue property correctly', () => {
    const wrapper = shallow(<FlatButton blue />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  const { StatusIcon } = Components;
  it('should render StatusIcon with custom color correctly', () => {
    const wrapper = shallow(<StatusIcon color="#009dff" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
