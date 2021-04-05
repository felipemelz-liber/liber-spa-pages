import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Greeter from '../';

describe('Liber/Greeter/index.jsx', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<Greeter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
