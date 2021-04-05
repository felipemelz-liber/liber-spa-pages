import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import LoginForm from '../LoginForm';
import { Form } from '../LoginForm.styles';
import { TextField } from '../../Inputs';


describe('Test for LoginForm', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      onFieldChange: sinon.spy(),
      onSubmit: sinon.spy(),
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with callbacks', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('shoudl render with custom props', () => {
    props = {
      title: 'Título',
      logo: <div>LOGO</div>,
      button: <button type="submit" id="mock_button">mock</button>,
      ...props,
    };
    const wrapper = shallow(<LoginForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onFieldChange on field change', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    const fields = wrapper.find(TextField);
    fields.at(0).simulate('change', 'cpf_value');
    expect(wrapper.state('cpf')).toEqual('cpf_value');
    expect(props.onFieldChange.calledWith('cpf', 'cpf_value')).toBeTruthy();
    fields.at(1).simulate('change', 'pin_value');
    expect(wrapper.state('pin')).toEqual('pin_value');
    expect(props.onFieldChange.calledWith('pin', 'pin_value')).toBeTruthy();
    fields.at(2).simulate('change', 'otp_value');
    expect(wrapper.state('otp')).toEqual('otp_value');
    expect(props.onFieldChange.calledWith('otp', 'otp_value')).toBeTruthy();
  });
  it('should show error with invalid values (empty)', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    const formComponent = wrapper.find(Form);
    const currentState = {
      cpf: '',
      pin: '',
      otp: '',
    };
    wrapper.setState(currentState);
    formComponent.simulate('submit', { preventDefault: sinon.stub() });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should show error with invalid values (invalid CPF)', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    const formComponent = wrapper.find(Form);
    const currentState = {
      cpf: '99999999999',
      pin: '1234',
      otp: '12345678',
    };
    wrapper.setState(currentState);
    formComponent.simulate('submit', { preventDefault: sinon.stub() });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onSubmit on Form submit', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    const formComponent = wrapper.find(Form);
    const currentState = {
      cpf: '53481972466',
      pin: '1234',
      otp: '12345678',
    };
    wrapper.setState(currentState);
    formComponent.simulate('submit', { preventDefault: sinon.stub() });
    expect(props.onSubmit.calledWith(currentState)).toBeTruthy();
  });
});
