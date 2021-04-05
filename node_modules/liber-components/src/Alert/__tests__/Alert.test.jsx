import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Alert from '../Alert';
import { HelpCircle } from '../../Icons/MaterialDesign';

describe('Testing Alert Component', () => {
  configure({ adapter: new Adapter() });
  const onCloseFunction = jest.fn();
  it('should render correctly', () => {
    const wrapper = shallow(
      <Alert>
        Conteudo de informação
      </Alert>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with additional info content prop', () => {
    const wrapper = shallow(
      <Alert
        additionalInfoContent="Conteudo adicional de informação"
      >
        Conteudo de informação
      </Alert>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with custom icon', () => {
    const wrapper = shallow(
      <Alert icon={<HelpCircle />}>
        Conteudo de informação
      </Alert>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with onClose function', () => {
    const wrapper = shallow(
      <Alert
        onClose={onCloseFunction}
      >
        Conteudo de informação
      </Alert>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
