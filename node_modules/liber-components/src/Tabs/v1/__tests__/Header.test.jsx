import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Header from '../Header';

describe('Testing Header Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      children: sinon.spy(),
      labels: 'labels',
    };
  });
  it('should render correctly empty', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly empty', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(props.children.calledWith(props.labels)).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
