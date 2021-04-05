import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  ProgressContainer,
  Label,
  Step,
  Separator,
} from '../ProgressBar';

describe('Testing Pagination Styles', () => {
  configure({ adapter: new Adapter() });

  it('renders ProgressContainer correctly', () => {
    const wrapper = shallow(<ProgressContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Label correctly', () => {
    const wrapper = shallow(<Label />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Label correctly with animationTime', () => {
    const wrapper = shallow(<Label animationTime="100ms" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Label correctly with checked = false', () => {
    const wrapper = shallow(<Label checked={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Label correctly with checked = true', () => {
    const wrapper = shallow(<Label checked />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Step correctly', () => {
    const wrapper = shallow(<Step />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Step correctly with animationTime', () => {
    const wrapper = shallow(<Step animationTime="100ms" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Step correctly with type = basic', () => {
    const wrapper = shallow(<Step type="basic" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Step correctly with type = checked', () => {
    const wrapper = shallow(<Step type="checked" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Step correctly with type = final', () => {
    const wrapper = shallow(<Step type="final" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Separator correctly', () => {
    const wrapper = shallow(<Separator />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Separator correctly with animationTime', () => {
    const wrapper = shallow(<Separator animationTime="100ms" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Separator correctly with full = false', () => {
    const wrapper = shallow(<Separator full={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Separator correctly with full = true', () => {
    const wrapper = shallow(<Separator full />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
