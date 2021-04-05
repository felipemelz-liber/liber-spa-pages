import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Input from '../Input';


describe('Test for Input Component', () => {
  configure({ adapter: new Adapter() });
  const max = {
    id: 'max',
    value: '',
    maxLength: 2,
    separator: 'a',
    type: 'number',
    size: '30px',
    onChange: sinon.spy(),
  };
  const mask = {
    id: 'mask',
    value: '',
    mask: '9-9',
    maskChar: null,
    separator: 'a',
    onChange: sinon.spy(),
  };

  it('should render correctly', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render when disabled', () => {
    const wrapper = mount(<Input fields={[{ ...max, disabled: true }]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should change field (next) when input is full', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    const fields = wrapper.find('input');
    const focus = sinon.spy(fields.at(1).instance(), 'focus');
    fields.at(0).simulate('keyUp', {
      target: {
        value: '22',
        dataset: { max: max.maxLength },
      },
    });
    expect(focus.called).toBeTruthy();
  });
  it('should change field (prev) when input is empty', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    const fields = wrapper.find('input');
    const focus = sinon.spy(fields.at(0).instance(), 'focus');
    fields.at(1).simulate('keyUp', {
      target: {
        value: '',
      },
    });
    expect(focus.called).toBeTruthy();
  });
  it('should change field (next) navigating with arrows', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    const fields = wrapper.find('input');
    const focus = sinon.spy(fields.at(1).instance(), 'focus');
    fields.at(0).simulate('keyUp', {
      key: 'ArrowRight',
      target: {
        value: '22',
        selectionStart: 2,
        dataset: { max: max.maxLength },
      },
    });
    expect(focus.called).toBeTruthy();
  });
  it('should change field (prev) navigating with arrows', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    const fields = wrapper.find('input');
    const focus = sinon.spy(fields.at(0).instance(), 'focus');
    fields.at(1).simulate('keyUp', {
      key: 'ArrowLeft',
      target: {
        value: '2-2',
        selectionStart: 0,
        dataset: { max: max.maxLength },
      },
    });
    expect(focus.called).toBeTruthy();
  });
  it('should call onFocus when focusing on any field', () => {
    const onFocus = sinon.spy();
    const wrapper = mount(<Input fields={[max, mask]} onFocus={onFocus} />);
    const fields = wrapper.find('input');
    fields.at(0).simulate('focus');
    expect(onFocus.called).toBeTruthy();
  });
  it('should focus on the first empty on the method focus is called', () => {
    const wrapper = mount(<Input fields={[max, mask]} />);
    const fields = wrapper.find('input');
    const focus = sinon.spy(fields.at(0).instance(), 'focus');
    wrapper.instance().focus();
    expect(focus.called).toBeTruthy();
  });
});
