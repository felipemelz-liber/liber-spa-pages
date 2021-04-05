import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {
  InputAutoCompleteList,
  InputAutoCompleteItem,
  InputBase,
  InputError,
  InputHelper,
  InputHelperIcon,
  InputHelperText,
  InputHint,
  InputLabel,
  InputPrefix,
  InputText,
} from '../TextArea.styles';

describe('Testing TextArea styled Component', () => {
  configure({ adapter: new Adapter() });
  it('renders InputText correctly without props', () => {
    const wrapper = shallow(<InputText />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputPrefix correctly without props', () => {
    const wrapper = shallow(<InputPrefix />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputLabel correctly without props', () => {
    const wrapper = shallow(<InputLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputHint correctly without props', () => {
    const wrapper = shallow(<InputHint />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputHelperText correctly without props', () => {
    const wrapper = shallow(<InputHelperText />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputHelperIcon correctly without props', () => {
    const wrapper = shallow(<InputHelperIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputHelper correctly without props', () => {
    const wrapper = shallow(<InputHelper />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputError correctly without props', () => {
    const wrapper = shallow(<InputError />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputBase correctly without props', () => {
    const wrapper = shallow(<InputBase />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputAutoCompleteItem correctly without props', () => {
    const wrapper = shallow(<InputAutoCompleteItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders InputAutoCompleteList correctly without props', () => {
    const wrapper = shallow(<InputAutoCompleteList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
