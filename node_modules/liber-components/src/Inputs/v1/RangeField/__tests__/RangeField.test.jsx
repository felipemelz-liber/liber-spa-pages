import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import RangeField from '../RangeField';
import { RangeInputFrom, RangeInputTo } from '../RangeField.styles';

describe('Testing RangeField Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      min: 20,
      max: 100,
      onChange: sinon.spy(),
    };
  });
  describe('Rendering Tests', () => {
    it('should render correctly without props (closed) without selection', () => {
      const wrapper = shallow(<RangeField />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly without props (open) without selection', () => {
      const wrapper = shallow(<RangeField />);
      wrapper.setState({ open: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly without props (closed) with selection', () => {
      const wrapper = shallow(<RangeField />);
      wrapper.setState({
        from: 30,
        to: 60,
        inputFrom: '30',
        inputTo: '60',
        unselected: false,
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly without props (open) with selection', () => {
      const wrapper = shallow(<RangeField />);
      wrapper.setState({
        open: true,
        from: 30,
        to: 60,
        inputFrom: '30',
        inputTo: '60',
        unselected: false,
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props (closed) without selection', () => {
      const wrapper = shallow(<RangeField {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props (open) without selection', () => {
      const wrapper = shallow(<RangeField {...props} />);
      wrapper.setState({ open: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props (closed) with selection', () => {
      const wrapper = shallow(<RangeField {...props} />);
      wrapper.setState({
        from: 30,
        to: 60,
        inputFrom: '30',
        inputTo: '60',
        unselected: false,
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props (open) with selection', () => {
      const wrapper = shallow(<RangeField {...props} />);
      wrapper.setState({
        open: true,
        from: 30,
        to: 60,
        inputFrom: '30',
        inputTo: '60',
        unselected: false,
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('Interaction Tests', () => {
    describe('RangeInputFrom', () => {
      it('should handle correctly change event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputFrom);
        range.simulate('change', { target: { value: 20 } });
        expect(wrapper.state('from')).toBe(20);
        expect(wrapper.state('selection')).toEqual('selecting');
      });
      it('should handle correctly mouseUp event (from < to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputFrom);
        wrapper.setState({ from: 20, to: 50 });
        range.simulate('mouseUp', { target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(20);
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputFrom')).toEqual('20');
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('selection')).toEqual('finishing-selection');
        expect(props.onChange.calledWith('20', '50')).toBeTruthy();
      });
      it('should handle correctly mouseUp event (from > to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputFrom);
        wrapper.setState({ from: 50, to: 20 });
        range.simulate('mouseUp', { target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(20);
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputFrom')).toEqual('20');
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('selection')).toEqual('finishing-selection');
        expect(props.onChange.calledWith('20', '50')).toBeTruthy();
      });
      it('should handle correctly blur event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputFrom);
        wrapper.setState({ selection: 'finishing-selection' });
        range.simulate('blur');
        expect(wrapper.state('selection')).toEqual('not-selecting');
      });
      it('should handle correctly mouseDown event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputFrom);
        range.simulate('mouseDown');
        expect(wrapper.state('selection')).toEqual('selecting');
      });
    });
    describe('RangeInputTo', () => {
      it('should handle correctly change event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputTo);
        range.simulate('change', { target: { value: 20 } });
        expect(wrapper.state('to')).toBe(20);
        expect(wrapper.state('selection')).toEqual('selecting');
      });
      it('should handle correctly mouseUp event (from < to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputTo);
        wrapper.setState({ from: 20, to: 50 });
        range.simulate('mouseUp', { target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(20);
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputFrom')).toEqual('20');
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('selection')).toEqual('finishing-selection');
        expect(props.onChange.calledWith('20', '50')).toBeTruthy();
      });
      it('should handle correctly mouseUp event (from > to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputTo);
        wrapper.setState({ from: 50, to: 20 });
        range.simulate('mouseUp', { target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(20);
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputFrom')).toEqual('20');
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('selection')).toEqual('finishing-selection');
        expect(props.onChange.calledWith('20', '50')).toBeTruthy();
      });

      it('should handle correctly blur event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputTo);
        wrapper.setState({ selection: 'finishing-selection' });
        range.simulate('blur');
        expect(wrapper.state('selection')).toEqual('not-selecting');
      });

      it('should handle correctly mouseDown event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const range = wrapper.find(RangeInputTo);
        range.simulate('mouseDown');
        expect(wrapper.state('selection')).toEqual('selecting');
      });
    });
    describe('#input_range_from', () => {
      it('should handle correctly change event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        input.simulate('change', { target: { value: '21' } });
        expect(wrapper.state('inputFrom')).toBe('21');
      });
      it('should handle correctly focus event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        input.simulate('focus');
        expect(wrapper.state('selection')).toEqual('selecting');
      });
      it('should handle correctly keyDown event keyCode=13 (inputTo === "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        wrapper.setState({ inputFrom: '21' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(21);
        expect(wrapper.state('inputFrom')).toEqual('21');
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual(props.max.toString());
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('21', props.max.toString())).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (from < min)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        wrapper.setState({ inputFrom: '10' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual(props.min.toString());
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual(props.max.toString());
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith(props.min.toString(), props.max.toString())).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (from > max)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        wrapper.setState({ inputFrom: '110' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.max);
        expect(wrapper.state('inputFrom')).toEqual(props.max.toString());
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual(props.max.toString());
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith(props.max.toString(), props.max.toString())).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (from < to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        wrapper.setState({ inputFrom: '25', inputTo: '50', to: 50 });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('25', '50')).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (from > to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        wrapper.setState({ inputFrom: '50', inputTo: '25', to: 25 });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('25', '50')).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (inputFrom = "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_from');
        wrapper.setState({ inputFrom: '' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual('');
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual('');
        expect(wrapper.state('unselected')).toBeTruthy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('', '')).toBeTruthy();
      });
    });
    describe('#input_range_to', () => {
      it('should handle correctly change event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        input.simulate('change', { target: { value: '21' } });
        expect(wrapper.state('inputTo')).toBe('21');
      });
      it('should handle correctly focus event', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        input.simulate('focus');
        expect(wrapper.state('selection')).toEqual('selecting');
      });
      it('should handle correctly keyDown event keyCode=13 (inputTo === "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        wrapper.setState({ inputTo: '99' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual(props.min.toString());
        expect(wrapper.state('to')).toBe(99);
        expect(wrapper.state('inputTo')).toEqual('99');
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith(props.min.toString(), '99')).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (to > max)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        wrapper.setState({ inputTo: '110' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual(props.min.toString());
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual(props.max.toString());
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith(props.min.toString(), props.max.toString())).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (to < min)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        wrapper.setState({ inputTo: '10' });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual(props.min.toString());
        expect(wrapper.state('to')).toBe(props.min);
        expect(wrapper.state('inputTo')).toEqual(props.min.toString());
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith(props.min.toString(), props.min.toString())).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (to > from)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        wrapper.setState({ inputFrom: '25', inputTo: '50', from: 25 });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('25', '50')).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (to < from)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        wrapper.setState({ inputFrom: '50', inputTo: '25', from: 50 });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(50);
        expect(wrapper.state('inputTo')).toEqual('50');
        expect(wrapper.state('unselected')).toBeFalsy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('25', '50')).toBeTruthy();
      });
      it('should handle correctly keyDown event keyCode=13 (inputTo = "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        const input = wrapper.find('#input_range_to');
        wrapper.setState({
          inputTo: '', inputFrom: '25', from: 25, to: 50,
        });
        input.simulate('keyDown', { keyCode: 13, target: { blur: sinon.spy() } });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual('');
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual('');
        expect(wrapper.state('unselected')).toBeTruthy();
        expect(wrapper.state('selection')).toEqual('not-selecting');
        expect(props.onChange.calledWith('', '')).toBeTruthy();
      });
    });
    describe('props input', () => {
      it('should handle correctly props input (from < to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        wrapper.setProps({ from: '25', to: '95' });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(95);
        expect(wrapper.state('inputTo')).toEqual('95');
        expect(wrapper.state('unselected')).toBeFalsy();
      });
      it('should handle correctly props input (from > to)', () => {
        const wrapper = shallow(<RangeField {...props} />);
        wrapper.setProps({ to: '25', from: '95' });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(95);
        expect(wrapper.state('inputTo')).toEqual('95');
        expect(wrapper.state('unselected')).toBeFalsy();
      });
      it('should handle correctly props input (from = "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        wrapper.setProps({ from: '', to: '95' });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual('');
        expect(wrapper.state('to')).toBe(95);
        expect(wrapper.state('inputTo')).toEqual('95');
        expect(wrapper.state('unselected')).toBeFalsy();
      });
      it('should handle correctly props input (to = "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        wrapper.setProps({ from: '25', to: '' });
        expect(wrapper.state('from')).toBe(25);
        expect(wrapper.state('inputFrom')).toEqual('25');
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual('');
        expect(wrapper.state('unselected')).toBeFalsy();
      });
      it('should handle correctly props input (to = "")', () => {
        const wrapper = shallow(<RangeField {...props} />);
        wrapper.setState({
          from: 20, inputFrom: '20', to: 100, inputTo: '100', unselected: false,
        });
        wrapper.setProps({ from: '', to: '' });
        expect(wrapper.state('from')).toBe(props.min);
        expect(wrapper.state('inputFrom')).toEqual('');
        expect(wrapper.state('to')).toBe(props.max);
        expect(wrapper.state('inputTo')).toEqual('');
        expect(wrapper.state('unselected')).toBeTruthy();
      });
    });
  });
});
