import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { TotalSelectedTitles } from '../TableSelectControl.styles';
import TableSelectControl from '../TableSelectControl';


describe('Test for Action Button', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      selectedTitles: 0,
      totalSelectedTitles: '0,00',
      onDeselect: sinon.spy(),
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<TableSelectControl />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props type=empty', () => {
    props.type = 'empty';
    const wrapper = shallow(<TableSelectControl {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props type=single', () => {
    props.type = 'single';
    props.selectedTitles = 5;
    props.totalSelectedTitles = '100,00';
    const wrapper = shallow(<TableSelectControl {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props type=multiple', () => {
    props.type = 'multiple';
    props.selectedTitles = 100;
    props.totalSelectedTitles = '10.000,00';
    const wrapper = shallow(<TableSelectControl {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onDeselect on button click', () => {
    props.type = 'multiple';
    props.selectedTitles = 100;
    props.totalSelectedTitles = '10.000,00';
    const wrapper = shallow(<TableSelectControl {...props} />);
    const button = wrapper.find(TotalSelectedTitles);
    button.simulate('click');
    expect(props.onDeselect.called).toBeTruthy();
  });
});
