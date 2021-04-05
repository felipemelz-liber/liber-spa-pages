import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import UploadContainer from '../UploadContainer';

describe('Testing UploadContainer Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      files: {},
    };
  });
  it('should render correctly ', () => {
    const wrapper = shallow(<UploadContainer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
