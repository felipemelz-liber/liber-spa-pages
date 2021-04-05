import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Form from '../Form';

describe('Testing Form Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      name: '',
      action: '',
      method: '',
      id: '',
      className: '',
      onSubmit: sinon.spy(),
    };
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<Form />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<Form {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should not render token when rails is false', () => {
    const wrapper = shallow(<Form rails={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call function on submit', () => {
    const wrapper = shallow(<Form {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(props.onSubmit.called).toBeTruthy();
  });
});
