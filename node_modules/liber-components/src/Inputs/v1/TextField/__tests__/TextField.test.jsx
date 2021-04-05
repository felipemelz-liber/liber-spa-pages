import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import TextField from '../TextField';
import {
  InputBar,
  InputBase,
  InputHint,
  InputLabel,
  InputText,
  InputError,
} from '../../Base.styles';

describe('Test for TextField Component', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<TextField />).first().shallow();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should pass props correctly to <input>', () => {
    const wrapper = shallow(<TextField type="password" />).first().shallow();
    expect(wrapper.find(InputText).props().type).toEqual('password');
  });

  it('should pass props correctly to <input> when type="number"', () => {
    const wrapper = shallow(<TextField type="number" />).first().shallow();
    expect(wrapper.find(InputText).props().type).toEqual('text');
  });

  it('should render as full width', () => {
    const wrapper = shallow(<TextField fullWidth />).first().shallow();
    expect(wrapper.find(InputBase).props().width).toEqual('100%');
  });

  it('should render with custom width', () => {
    const wrapper = shallow(<TextField width="50%" />).first().shallow();
    expect(wrapper.find(InputBase).props().width).toEqual('50%');
  });

  it('should render disabled', () => {
    const wrapper = shallow(<TextField disabled />).first().shallow();
    expect(wrapper.find(InputBase).props().disabled).toBeTruthy();
  });

  describe('initial state', () => {
    it('should be able to receive an initial value', () => {
      const wrapper = shallow(<TextField value="Test" />).first().shallow();
      expect(wrapper.state().value).toEqual('Test');
    });

    it('should handle validity when an initial value is passed', () => {
      const wrapper = shallow(<TextField value="Test" />).first().shallow();
      expect(wrapper.state().valid).toBeTruthy();
    });

    it('should handle validity when receive props', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.setProps({ value: 'Test' });
      expect(wrapper.state().valid).toBeTruthy();
    });
  });

  describe('handleFocus/Blur', () => {
    it('should handle state on focus', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputBase).simulate('focus');
      expect(wrapper.state().focused).toBeTruthy();
    });

    it('should spread focused into subcomponents', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputBase).simulate('focus');
      expect(wrapper.find(InputLabel).props().focused).toBeTruthy();
      expect(wrapper.find(InputHint).props().visible).toBeTruthy();
      expect(wrapper.find(InputBar).props().open).toBeTruthy();
    });

    it('should handle state on blur', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputBase).simulate('blur');
      expect(wrapper.state().focused).toBeFalsy();
    });

    it('should call external onFocus function', () => {
      const onFocus = sinon.spy();
      const wrapper = shallow(<TextField onFocus={onFocus} />).first().shallow();
      wrapper.find(InputBase).simulate('focus');
      expect(onFocus.called).toBeTruthy();
    });

    it('should call external onBlur function', () => {
      const onBlur = sinon.spy();
      const wrapper = shallow(<TextField onBlur={onBlur} />).first().shallow();
      wrapper.find(InputBase).simulate('blur');
      expect(onBlur.called).toBeTruthy();
    });
  });

  describe('handleChange', () => {
    it('should handle value change', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: 'Target' } });
      expect(wrapper.state().value).toEqual('Target');
    });

    it('should handle value change when type is number', () => {
      const wrapper = shallow(<TextField type="number" />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: '1234target' } });
      expect(wrapper.state().value).toEqual('1234');
    });

    it('should handle validity on value change', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: 'Target' } });
      expect(wrapper.state().valid).toBeTruthy();
    });

    it('should handle validity on clear', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: '' } });
      expect(wrapper.state().valid).toBeFalsy();
    });

    it('should spread valid into subcomponents', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: 'Valid' } });
      expect(wrapper.find(InputLabel).props().valid).toBeTruthy();
      expect(wrapper.find(InputHint).props().error).toBeFalsy();
    });

    it('should callback controlled onChange function and keep state', () => {
      const onChange = sinon.spy();
      const wrapper = shallow(<TextField onChange={onChange} />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: 'Target' } });
      expect(wrapper.state().value).toEqual('');
      expect(onChange.calledWith('Target')).toBeTruthy();
    });

    it('should update validity when callback returns an invalid prop', () => {
      const onChange = sinon.spy();
      const wrapper = shallow(<TextField onChange={onChange} />).first().shallow();
      wrapper.find(InputText).simulate('change', { target: { value: 'Target' } });
      expect(wrapper.state().valid).toBeTruthy();
      wrapper.setProps({ value: '' });
      expect(wrapper.state().value).toEqual('');
      expect(wrapper.state().valid).toBeFalsy();
    });
  });

  describe('error', () => {
    it('should handle error state', () => {
      const wrapper = shallow(<TextField errorMessage="Oh noes" />).first().shallow();
      expect(wrapper.state().error).toBeTruthy();
    });

    it('should update error state', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      expect(wrapper.state().error).toBeFalsy();
      wrapper.setProps({ errorMessage: 'Trigger' });
      expect(wrapper.state().error).toBeTruthy();
    });

    it('should spread error into subcomponents', () => {
      const wrapper = shallow(<TextField errorMessage="Oh noes" />).first().shallow();
      expect(wrapper.find(InputLabel).props().error).toBeTruthy();
      expect(wrapper.find(InputBar).props().error).toBeTruthy();
      expect(wrapper.find(InputError).props().visible).toBeTruthy();
    });
  });

  describe('hint', () => {
    it('should hint without props', () => {
      const wrapper = shallow(<TextField />).first().shallow();
      expect(wrapper.find(InputHint).props().visible).toBeTruthy();
    });

    it('should not hint when a value is passed', () => {
      const wrapper = shallow(<TextField value="No hint" />).first().shallow();
      expect(wrapper.find(InputHint).props().visible).toBeFalsy();
    });

    it('should not hint when a label is passed and not focused', () => {
      const wrapper = shallow(<TextField label="Hint on focus" />).first().shallow();
      expect(wrapper.find(InputHint).props().visible).toBeFalsy();
    });

    it('should hint when a label is passed and focused', () => {
      const wrapper = shallow(<TextField label="Hint on focus" />).first().shallow();
      wrapper.find(InputBase).simulate('focus');
      expect(wrapper.find(InputHint).props().visible).toBeTruthy();
    });
  });
});
