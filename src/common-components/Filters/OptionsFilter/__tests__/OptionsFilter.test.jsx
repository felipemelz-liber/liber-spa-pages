import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import OptionsFilter from '../OptionsFilter';
import FilterTag from '../../FilterTag/FilterTag';
import FilterFooter from '../../FilterFooter';

describe('OptionsFilter tests', () => {
  configure({ adapter: new Adapter() });

  const options = [{ option: 'Concluída', value: 1 }, { option: 'Cancelada', value: 2 }];
  const onClear = sinon.spy();
  const onFilter = sinon.spy();
  const props = {
    filterValues: [1],
    options,
    onClear,
    onFilter,
    label: 'mock',
  };

  afterEach(() => {
    sinon.resetHistory();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<OptionsFilter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<OptionsFilter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call on clear on filter tag clear', () => {
    const wrapper = shallow(<OptionsFilter {...props} />);
    const filterTag = wrapper.find(FilterTag);

    filterTag.simulate('clear');

    expect(onClear.called).toBeTruthy();
  });

  it('should call on clear on filter footer clear', () => {
    const wrapper = shallow(<OptionsFilter {...props} />);
    const filterFooter = wrapper.find(FilterFooter);

    filterFooter.simulate('clear');

    expect(onClear.called).toBeTruthy();
  });

  it('should call onFilter on filter footer filter', () => {
    const wrapper = shallow(<OptionsFilter {...props} />);
    const footer = wrapper.find(FilterFooter);

    footer.simulate('filter');

    expect(onFilter.called).toBeTruthy();
  });
});
