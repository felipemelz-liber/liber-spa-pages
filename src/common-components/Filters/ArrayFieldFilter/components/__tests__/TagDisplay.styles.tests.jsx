import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import * as styles from '../TagsDisplay.styles';

describe('TagsDisplay styled components test', () => {
  configure({ adapter: new Adapter() });

  const { Grid, GridContainer, ...Components } = styles;

  Object.keys(Components).forEach(componentName => {
    const Component = Components[componentName];
    it(`should render ${componentName} correctly`, () => {
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render GridContainer correctly', () => {
    const wrapper = shallow(<GridContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render GridContainer with spacing correctly', () => {
    const wrapper = shallow(<GridContainer spacing={4} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Grid correctly', () => {
    const wrapper = shallow(<Grid />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Grid correctly with columnSize', () => {
    const wrapper = shallow(<Grid columnSize={2} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render GridContainer with Grid correctly', () => {
    const wrapper = shallow(
      <GridContainer spacing={4}>
        <Grid />
      </GridContainer>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
