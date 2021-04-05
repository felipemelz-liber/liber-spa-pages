import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Slice from '../Slice';

describe('Test for Slice', () => {
  configure({ adapter: new Adapter() });
  const props = {
    abs: 0,
    innerRadius: 0,
    radius: 100,
    style: {},
    slice: {},
    events: {},
    pathFunction: sinon.spy(),
  };
  it('should render correctly', () => {
    const wrapper = shallow(<Slice {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
