import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TextField from '../TextField';

describe('Testing TextField Component', () => {
  configure({ adapter: new Adapter() });
  it('renders TextField correctly without props', () => {
    const wrapper = shallow(<TextField />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
