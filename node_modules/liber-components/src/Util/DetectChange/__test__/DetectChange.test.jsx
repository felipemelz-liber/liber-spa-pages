import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import DetectChange from '../DetectChange';

describe('Testing NavBar Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      onChange: sinon.spy(),
    };
  });
  it('should render correctly', () => {
    const wrapper = shallow(<DetectChange {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call function onChange when children change', () => {
    const wrapper = shallow(<DetectChange {...props} />);
    wrapper.setProps({ children: 'asdasd' });
    expect(props.onChange.called).toBeTruthy();
  });
});
