import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components';
import SelectField from '../SelectField';
import { SelectItem } from '../SelectField.styles';
import { InputBase, InputLabel, InputText } from '../../Base.styles';

describe('Testing SelectField Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      onChange: sinon.spy(),
    };
  });

  it('should render correctly closed', () => {
    const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly opened', () => {
    const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
    wrapper.setState({ open: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render as full width', () => {
    const wrapper = shallow(<SelectField {...props} fullWidth><option value="1">teste</option></SelectField>);
    expect(wrapper.find(InputBase).props().width).toEqual('100%');
  });

  it('should render disabled', () => {
    const wrapper = shallow(<SelectField {...props} disabled><option value="1">teste</option></SelectField>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should open properly', () => {
    const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
    const item = wrapper.find(InputBase);
    item.simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
  });

  it('should receive and handle initial value', () => {
    const wrapper = shallow(<SelectField {...props} value="1"><option value="1">teste</option></SelectField>);
    expect(wrapper.state('optionValue')).toEqual('1');
    expect(wrapper.state('optionLabel')).toEqual('teste');
  });

  it('should receive and handle new values', () => {
    const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
    wrapper.setProps({ value: '1' });
    expect(wrapper.state('optionValue')).toEqual('1');
    expect(wrapper.state('optionLabel')).toEqual('teste');
  });

  it('should handle invalid values', () => {
    const wrapper = shallow(<SelectField {...props} value="99"><option value="1">teste</option></SelectField>);
    expect(wrapper.state('optionValue')).toEqual('99');
    expect(wrapper.state('optionLabel')).toEqual('');
    expect(wrapper.find(InputLabel).props().children).toEqual('Selecione um item');
  });

  it('should call onChange when item selected', () => {
    const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
    wrapper.instance().handleSelect('1', 'teste');
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('optionValue')).toEqual('1');
    expect(wrapper.state('optionLabel')).toEqual('teste');
    expect(props.onChange.calledWith('1')).toBeTruthy();
  });

  it('should clear state when handleSelect on item already selected', () => {
    const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
    wrapper.setState({ open: true, optionValue: '1', optionLabel: 'teste' });
    wrapper.instance().handleSelect('1', 'teste');
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('optionValue')).toEqual('');
    expect(wrapper.state('optionLabel')).toEqual('');
    expect(props.onChange.calledWith('')).toBeTruthy();
  });

  it('should not update options list when selected', () => {
    const setup = (
      <SelectField {...props}>
        <option value="1">teste1</option>
        <option value="2">teste2</option>
      </SelectField>
    );
    const wrapper = mount(setup);
    wrapper.setState({ open: true });
    const item = wrapper.find(SelectItem).at(0);
    item.simulate('click');
    wrapper.setState({ open: true });
    expect(wrapper.find(SelectItem).length).toEqual(2);
  });

  describe('getDerivedStateFromProps', () => {
    it('should update optionValue, optionLabel and itemFocused on value change', () => {
      const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      wrapper.setProps({ value: '1' });
      expect(wrapper.state().optionValue).toEqual('1');
      expect(wrapper.state().optionLabel).toEqual('teste');
      expect(wrapper.state().itemFocused).toEqual(0);
    });

    it('should update children on change', () => {
      const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      const children = [<option value="2">B</option>];
      wrapper.setProps({ children });
      expect(wrapper.state().children.toString()).toEqual(children.toString());
    });
  });

  describe('shouldComponentUpdate', () => {
    let wrapper;
    let shouldComponentUpdate;

    beforeEach(() => {
      wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      shouldComponentUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
    });

    it('should not update when nothing changes', () => {
      expect(shouldComponentUpdate).not.toHaveBeenCalled();
    });

    it('should update state when optionValue change', () => {
      wrapper.setState({ optionValue: 'VALUE' });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update state when focused change', () => {
      wrapper.setState({ focused: true });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update state when open change', () => {
      wrapper.setState({ open: true });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update state when clicked change', () => {
      wrapper.setState({ clicked: true });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update state when itemFocused change', () => {
      wrapper.setState({ itemFocused: 0 });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update state when search change', () => {
      wrapper.setState({ search: 'search' });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update state when children change', () => {
      wrapper.setState({ children: [<option value="A">NEW</option>] });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update prop when disabled change', () => {
      wrapper.setProps({ disabled: true });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update prop when errorMessage change', () => {
      wrapper.setProps({ errorMessage: 'error' });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update prop when fullWidth change', () => {
      wrapper.setProps({ fullWidth: true });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update prop when value change', () => {
      wrapper.setProps({ value: 'VALUE' });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });

    it('should update prop when width change', () => {
      wrapper.setProps({ width: '300px' });
      expect(shouldComponentUpdate).toHaveBeenCalled();
    });
  });

  describe('Keyboard events', () => {
    it('should set state on focus', () => {
      const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      expect(wrapper.state('focused')).toBeFalsy();
      wrapper.find(InputBase).simulate('focus');
      expect(wrapper.state('focused')).toBeTruthy();
    });

    it('should call on blur when typed Tab', () => {
      const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      wrapper.find(InputBase).simulate('focus');
      wrapper.find(InputBase).simulate('keyDown', { keyCode: 9 });
      expect(wrapper.state('focused')).toBeFalsy();
    });

    it('should open when typed Enter', () => {
      const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      wrapper.find(InputBase).simulate('focus');
      wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
      expect(wrapper.state('open')).toBeTruthy();
    });

    it('should close when typed Esc', () => {
      const wrapper = shallow(<SelectField {...props}><option value="1">teste</option></SelectField>);
      wrapper.find(InputBase).simulate('focus');
      wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
      wrapper.find(InputBase).simulate('keyDown', { keyCode: 27 });
      expect(wrapper.state('open')).toBeFalsy();
    });

    describe('Navigation', () => {
      let wrapper;
      let setup;

      beforeEach(() => {
        setup = (
          <SelectField {...props}>
            <option value="1">A</option>
            <option value="2">B</option>
          </SelectField>
        );
        wrapper = shallow(setup);
        wrapper.find(InputBase).simulate('focus');
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
      });

      it('should do nothing when no items are selected and typed Enter', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.state('itemFocused')).toEqual(-1);
        expect(wrapper.state('optionLabel')).toEqual('');
        expect(wrapper.state('optionValue')).toEqual('');
        expect(wrapper.state('open')).toBeTruthy();
      });

      it('should focus on first item when typed Down Arrow', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        expect(wrapper.state('itemFocused')).toEqual(0);
      });

      it('should advance and rollback to first item when typed Down Arrow', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        expect(wrapper.state('itemFocused')).toEqual(0);
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        expect(wrapper.state('itemFocused')).toEqual(1);
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        expect(wrapper.state('itemFocused')).toEqual(0);
      });

      it('should focus on last item when typed Up Arrow', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 38 });
        expect(wrapper.state('itemFocused')).toEqual(1);
      });

      it('should retreat and rollback to last item when typed Up Arrow', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 38 });
        expect(wrapper.state('itemFocused')).toEqual(1);
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 38 });
        expect(wrapper.state('itemFocused')).toEqual(0);
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 38 });
        expect(wrapper.state('itemFocused')).toEqual(1);
      });

      it('should handle select when an item is focused and typed Enter', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.state('optionLabel')).toEqual('A');
        expect(wrapper.state('optionValue')).toEqual('1');
        expect(wrapper.state('open')).toBeFalsy();
      });

      it('should handle select when an item is focused and typed Enter when another item is selected', () => {
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.state('optionLabel')).toEqual('A');
        expect(wrapper.state('optionValue')).toEqual('1');
        expect(wrapper.state('open')).toBeFalsy();
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.state('open')).toBeTruthy();
        expect(wrapper.state('itemFocused')).toEqual(0);
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 40 });
        expect(wrapper.state('itemFocused')).toEqual(1);
        wrapper.find(InputBase).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.state('optionLabel')).toEqual('B');
        expect(wrapper.state('optionValue')).toEqual('2');
        expect(wrapper.state('open')).toBeFalsy();
      });

      describe('Scrolling', () => {
        const setupOverflow = (
          <SelectField {...props}>
            <option value="1">teste1</option>
            <option value="2">teste2</option>
            <option value="3">teste3</option>
            <option value="4">teste4</option>
            <option value="5">teste5</option>
            <option value="6">teste6</option>
          </SelectField>
        );
        let wrapperOverflow;
        let spy;

        beforeEach(() => {
          wrapperOverflow = shallow(setupOverflow);
          spy = jest.spyOn(wrapperOverflow.instance(), 'scrollToList');
        });

        it('should not call scrollToList when mounted', () => {
          expect(spy).not.toHaveBeenCalled();
        });

        it('should call scrollToList when pressed arrow keys', () => {
          expect(spy).not.toHaveBeenCalled();
          wrapperOverflow.find(InputBase).simulate('focus');
          wrapperOverflow.find(InputBase).simulate('keyDown', { keyCode: 13 });
          wrapperOverflow.find(InputBase).simulate('keyDown', { keyCode: 40 });
          expect(spy).toHaveBeenCalled();
        });
      });
    });
  });

  describe('Searchable', () => {
    it('should render correctly searchable', () => {
      const wrapper = shallow(<SelectField {...props} searchable><option value="1">teste</option></SelectField>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should receive and handle initial value', () => {
      const setup = (
        <SelectField {...props} value="1" searchable>
          <option value="1">teste</option>
        </SelectField>
      );
      const wrapper = shallow(setup);
      expect(wrapper.state('optionValue')).toEqual('1');
      expect(wrapper.state('optionLabel')).toEqual('teste');
      expect(wrapper.state('search')).toEqual('');
    });

    it('should receive and handle new values', () => {
      const wrapper = shallow(<SelectField {...props} searchable><option value="1">teste</option></SelectField>);
      wrapper.setProps({ value: '1' });
      expect(wrapper.state('optionValue')).toEqual('1');
      expect(wrapper.state('optionLabel')).toEqual('teste');
      expect(wrapper.state('search')).toEqual('');
    });

    it('should update search value on input', () => {
      const wrapper = shallow(<SelectField {...props} searchable><option value="1">teste</option></SelectField>);
      wrapper.find(InputText).simulate('change', { target: { value: 'Search' } });
      expect(wrapper.state().search).toEqual('Search');
    });

    it('should update options on input', () => {
      const multiple = (
        <SelectField {...props} searchable>
          <option value="1">ABC</option>
          <option value="2">AAC</option>
          <option value="3">BBC</option>
        </SelectField>
      );
      const wrapper = mount(multiple);
      wrapper.setState({ open: true });
      wrapper.find(InputText).simulate('change', { target: { value: 'B' } });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should normalize options when searching', () => {
      const multiple = (
        <SelectField {...props} searchable>
          <option value="1">ÁBC</option>
          <option value="2">AAC</option>
          <option value="3">BBC</option>
        </SelectField>
      );
      const wrapper = mount(multiple);
      wrapper.setState({ open: true });
      wrapper.find(InputText).simulate('change', { target: { value: 'AAC' } });
      expect(toJson(wrapper)).toMatchSnapshot();
    });


    it('should unselect option on input clear', () => {
      const wrapper = mount(<SelectField {...props} searchable><option value="1">teste</option></SelectField>);
      wrapper.setState({ open: true });
      const item = wrapper.find(SelectItem);
      item.simulate('click');
      wrapper.find(InputText).simulate('change', { target: { value: '' } });
      expect(wrapper.state('optionValue')).toEqual('');
      expect(wrapper.state('optionLabel')).toEqual('');
      expect(props.onChange.calledWith('')).toBeTruthy();
    });

    it('should not update options list when selected', () => {
      const setup = (
        <SelectField {...props} searchable>
          <option value="1">teste1</option>
          <option value="2">teste2</option>
        </SelectField>
      );
      const wrapper = mount(setup);
      wrapper.setState({ open: true });
      const item = wrapper.find(SelectItem).at(0);
      item.simulate('click');
      wrapper.setState({ open: true });
      expect(wrapper.find(SelectItem).length).toEqual(2);
    });

    it('should not update options list when receive selected', () => {
      const setup = (
        <SelectField {...props} searchable>
          <option value="1">teste1</option>
          <option value="2">teste2</option>
        </SelectField>
      );
      const wrapper = mount(setup);
      wrapper.setProps({ value: '1' });
      wrapper.setState({ open: true });
      expect(wrapper.find(SelectItem).length).toEqual(2);
    });
  });
});
