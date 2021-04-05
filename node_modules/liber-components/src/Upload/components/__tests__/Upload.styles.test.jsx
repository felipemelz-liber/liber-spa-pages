import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {
  CameraIcon,
  CheckIcon,
  Circle,
  FileIcon,
  IconContainer,
  ImagePreview,
  ImagePreviewIconContainer,
  InputFile,
  PlusIcon,
  UploadFile,
  UploadLabel,
  UploadProgress,
} from '../Upload.styles';

describe('Testing Upload styles Component', () => {
  configure({ adapter: new Adapter() });
  it('should render CameraIcon component correctly ', () => {
    const wrapper = shallow(<CameraIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render CheckIcon component correctly ', () => {
    const wrapper = shallow(<CheckIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Circle component correctly ', () => {
    const wrapper = shallow(<Circle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render FileIcon component correctly ', () => {
    const wrapper = shallow(<FileIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render IconContainer component correctly ', () => {
    const wrapper = shallow(<IconContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render ImagePreview component correctly ', () => {
    const wrapper = shallow(<ImagePreview />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render ImagePreviewIconContainer component correctly ', () => {
    const wrapper = shallow(<ImagePreviewIconContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render InputFile component correctly ', () => {
    const wrapper = shallow(<InputFile />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render PlusIcon component correctly ', () => {
    const wrapper = shallow(<PlusIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render UploadFile component correctly ', () => {
    const wrapper = shallow(<UploadFile />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render UploadLabel component correctly ', () => {
    const wrapper = shallow(<UploadLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render UploadProgress component correctly ', () => {
    const wrapper = shallow(<UploadProgress />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
