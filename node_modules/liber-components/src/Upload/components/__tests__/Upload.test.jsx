import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import { Upload } from '../Upload';
import { InputFile } from '../Upload.styles';

describe('Testing Upload Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      files: {},
      onUploadFiles: sinon.spy(),
    };
  });
  it('should render correctly ', () => {
    const wrapper = shallow(<Upload {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should test handleChange method ', () => {
    const wrapper = shallow(<Upload {...props} />);
    const input = wrapper.find(InputFile);
    input.simulate('change', {
      target: {
        files: [],
      },
    });
    expect(props.onUploadFiles.called).toBeTruthy();
  });
});
