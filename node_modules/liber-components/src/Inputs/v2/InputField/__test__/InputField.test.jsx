import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import InputField from '../InputField';

describe('Testing InputField Component', () => {
  configure({ adapter: new Adapter() });
  it('renders InputField correctly without props', () => {
    const wrapper = shallow(<InputField />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField disabled', () => {
    const wrapper = shallow(<InputField disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with hint text', () => {
    const wrapper = shallow(<InputField hintText="999.999.999-99" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with open label', () => {
    const wrapper = shallow(<InputField openLabel label="CPF" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with value', () => {
    const wrapper = shallow(<InputField label="CPF" value="226.718.960-77" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with prefix', () => {
    const wrapper = shallow(<InputField label="Total" prefix="$" value="1000,00" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with error message', () => {
    const wrapper = shallow(
      <InputField label="CPF" value="226.718.96-0-77" errorMessage="CPF inválido" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with helper', () => {
    const wrapper = shallow(<InputField helper="Insira um CPF válido" label="CPF" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with autocomplete', () => {
    const wrapper = shallow(
      <InputField
        autoComplete
        autoCompleteList={[
          'Item encontrado 1',
          'Item encontrado 2',
          'Item encontrado 3',
          'Item encontrado 4',
          'Item sob efeito de hover',
        ]}
        hintText="Comece digitando algo"
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with type number', () => {
    const wrapper = shallow(<InputField type="number" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with type number and max and min value', () => {
    const wrapper = shallow(<InputField type="number" min={0} max={10} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputField with type number and step and precision value', () => {
    const wrapper = shallow(<InputField type="number" step={0.01} precision={2} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with password toggle', () => {
    const wrapper = shallow(<InputField type="password" showPasswordToggle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
