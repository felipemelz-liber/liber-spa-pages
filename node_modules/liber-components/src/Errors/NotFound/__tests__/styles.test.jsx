import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import {
  DesktopBackground,
  DesktopIllustration,
  DesktopContent,
  DesktopMessageBox,
  MobileIllustration,
  MobileContent,
  MobileBrand,
  MobileMessageBox,
} from '../styles';

describe('Testing NotFound styles', () => {
  configure({ adapter: new Adapter() });
  it('DesktopBackground Should render correctly', () => {
    const wrapper = shallow(<DesktopBackground />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('DesktopIllustration Should render correctly', () => {
    const wrapper = shallow(<DesktopIllustration />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('DesktopContent Should render correctly', () => {
    const wrapper = shallow(<DesktopContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('DesktopMessageBox Should render correctly', () => {
    const wrapper = shallow(<DesktopMessageBox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MobileIllustration Should render correctly', () => {
    const wrapper = shallow(<MobileIllustration />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MobileContent Should render correctly', () => {
    const wrapper = shallow(<MobileContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MobileBrand Should render correctly', () => {
    const wrapper = shallow(<MobileBrand />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MobileMessageBox Should render correctly', () => {
    const wrapper = shallow(<MobileMessageBox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
