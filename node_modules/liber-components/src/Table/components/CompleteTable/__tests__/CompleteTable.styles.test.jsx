import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../CompleteTable.styles';

const { TableCell, FilterContainer, ...components } = styles;

describe('Testing CompleteTable Styles', () => {
  configure({ adapter: new Adapter() });

  Object.keys(components).forEach(style => {
    it(`renders ${style} correctly`, () => {
      const Component = styles[style];
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  ['left', 'center', 'right'].forEach(aligment => {
    it(`renders TableCell with ${aligment} aligment`, () => {
      const wrapper = shallow(<TableCell align={aligment} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it(`renders FilterContainer with border-bottom and border-top`, () => {
    const wrapper = shallow(<FilterContainer borderBottom />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders FilterContainer with border-top and without border-bottom`, () => {
    const wrapper = shallow(<FilterContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders FilterContainer without border-top and border-bottom`, () => {
    const wrapper = shallow(<FilterContainer filterBorderTop={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
