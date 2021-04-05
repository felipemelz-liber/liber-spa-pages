import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import ToastContainer from '../ToastContainer';

describe('Testing ToastContainer Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      toasts: [],
      close: sinon.spy(),
      remove: sinon.spy(),
    };
  });
  it('should render correctly ', () => {
    const wrapper = shallow(<ToastContainer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
