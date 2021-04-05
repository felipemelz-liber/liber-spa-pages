import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Dropzone, { Container } from '../Dropzone';

describe('Testing Dropzone Component', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<Dropzone />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(<Dropzone>Drop Here</Dropzone>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should forward ref to child component', () => {
    const ref = React.createRef();
    const wrapper = mount(<Dropzone ref={ref}>Refzone</Dropzone>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onDrop', () => {
    const fileContents = 'foobar3k';
    const file = new Blob([fileContents], { type: 'text/plain' });
    const onDrop = sinon.spy();
    const wrapper = shallow(<Dropzone onDrop={onDrop}>Drop Here</Dropzone>);
    wrapper.simulate('drop', { dataTransfer: { files: [file] } });
    expect(onDrop.called).toBeTruthy();
  });

  describe('Container', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Container />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with color', () => {
      const wrapper = shallow(<Container color="#aaa" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
