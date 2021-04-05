import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TextArea from '../TextArea';

describe('Testing TextArea Component', () => {
  configure({ adapter: new Adapter() });
  it('renders TextArea correctly without props', () => {
    const wrapper = shallow(<TextArea version={2} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea disabled', () => {
    const wrapper = shallow(<TextArea version={2} disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with hint text', () => {
    const wrapper = shallow(<TextArea version={2} hintText="999.999.999-99" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with open label', () => {
    const wrapper = shallow(<TextArea version={2} openLabel label="CPF" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with value', () => {
    const wrapper = shallow(<TextArea version={2} label="CPF" value="226.718.960-77" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with prefix', () => {
    const wrapper = shallow(<TextArea version={2} label="Total" prefix="$" value="1000,00" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with error message', () => {
    const wrapper = shallow(<TextArea version={2} label="CPF" value="226.718.96-0-77" errorMessage="CPF inválido" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with helper', () => {
    const wrapper = shallow(<TextArea version={2} helper="Insira um CPF válido" label="CPF" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TextArea with autocomplete', () => {
    const wrapper = shallow(
      <TextArea
        version={2}
        autoComplete
        autoCompleteList={[
          'ABCD',
          'DCBA',
          'QWERT',
        ]}
        hintText="Comece digitando algo"
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
