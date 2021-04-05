import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Container,
  Header2,
  Header3,
  Header4,
  Card,
  CardTitle,
  SpinnigSpinner,
  Button,
  LinkButton,
  Hr,
  Badge,
  Row,
  WhiteButton,
  BlueButton,
  Link,
} from '../GenericStyles';


describe('Testing GenericStyles', () => {
  configure({ adapter: new Adapter() });
  it('Container Should render correctly', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Header2 Should render correctly without props', () => {
    const wrapper = shallow(<Header2 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Header2 Should render correctly with props', () => {
    const wrapper = shallow(<Header2 color="#000" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Header3 Should render correctly without props', () => {
    const wrapper = shallow(<Header3 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Header3 Should render correctly with props', () => {
    const wrapper = shallow(<Header3 color="#000" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Header4 Should render correctly without props', () => {
    const wrapper = shallow(<Header4 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Header4 Should render correctly with props', () => {
    const wrapper = shallow(<Header4 color="#000" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Card Should render correctly without props', () => {
    const wrapper = shallow(<Card />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Card Should render correctly with props', () => {
    const props = {
      width: '600px',
      height: '120px',
    };
    const wrapper = shallow(<Card {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('CardTitle Should render correctly without props', () => {
    const wrapper = shallow(<CardTitle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('CardTitle Should render correctly with props', () => {
    const props = {
      backgroundColor: 'yellow',
      color: '#000',
    };
    const wrapper = shallow(<CardTitle {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('SpinnigSpinner Should render correctly', () => {
    const wrapper = shallow(<SpinnigSpinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Button Should render correctly with props', () => {
    const props = {
      width: '100%',
      height: '60px',
    };
    const wrapper = shallow(<Button {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Button Should render correctly without props', () => {
    const wrapper = shallow(<Button />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('LinkButton Should render correctly with props', () => {
    const props = {
      width: '100%',
      height: '60px',
    };
    const wrapper = shallow(<LinkButton {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('LinkButton Should render correctly without props', () => {
    const wrapper = shallow(<LinkButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Hr Should render correctly without props', () => {
    const wrapper = shallow(<Hr />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Badge Should render correctly without props', () => {
    const wrapper = shallow(<Badge />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Row Should render correctly without props', () => {
    const wrapper = shallow(<Row />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Row Should render correctly with props', () => {
    const props = {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    };
    const wrapper = shallow(<Row {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('WhiteButton Should render correctly without props', () => {
    const wrapper = shallow(<WhiteButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('BlueButton Should render correctly without props', () => {
    const wrapper = shallow(<BlueButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Link Should render correctly without props', () => {
    const wrapper = shallow(<Link href="/" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
