import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import DesktopIllustration from '../DesktopIllustration';

describe('Testing DesktopIllustration', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<DesktopIllustration />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
