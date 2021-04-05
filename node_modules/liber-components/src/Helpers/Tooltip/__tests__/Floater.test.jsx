import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Floater from '../Floater';

describe('Test for Floater Component', () => {
  configure({ adapter: new Adapter() });

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'tooltip');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  it('should not render without children', () => {
    const error = sinon.stub(console, 'error');
    mount(<Floater />);
    expect(error.calledOnce).toBeTruthy();
    error.restore();
  });

  it('should render correctly with children', () => {
    const wrapper = mount(
      <Floater>
        <p>Hello.</p>
      </Floater>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should spread props correctly', () => {
    const wrapper = mount(
      <Floater label="Helper" position={{ x: 0, y: 0 }} mount="right">
        <p>Hello.</p>
      </Floater>,
    );
    expect(wrapper.find('h6').prop('children')).toEqual('Helper');
    expect(wrapper.find('styles__Float').prop('position')).toEqual(
      'mouse-right',
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with children visible', () => {
    const wrapper = mount(
      <Floater show>
        <p>Hello.</p>
      </Floater>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should spread props correctly visible', () => {
    const wrapper = mount(
      <Floater show label="Helper" position={{ x: 0, y: 0 }} mount="right">
        <p>Hello.</p>
      </Floater>,
    );
    expect(wrapper.find('h6').prop('children')).toEqual('Helper');
    expect(wrapper.find('styles__Float').prop('position')).toEqual(
      'mouse-right',
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with contentPosition ', () => {
    const wrapper = mount(
      <Floater contentPosition="start" show>
        <p>Hello.</p>
      </Floater>,
    );

    expect(wrapper.find('styles__Float').prop('position')).toEqual(
      'content-right',
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
