import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import WhatToDo from '../WhatToDo';

describe('Testing WhatToDo Component', () => {
  const props = {
    children: <p>test</p>,
  };
  configure({ adapter: new Adapter() });
  it('should render correctly with props', () => {
    const wrapper = shallow(<WhatToDo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<WhatToDo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
