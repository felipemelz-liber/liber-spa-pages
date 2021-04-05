import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Listing from '../Listing';
import { SimpleSelect } from '../../Inputs';

describe('Listing COmponent tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    lisitng: '10',
    total: '1234',
    onSelectListing: sinon.spy(),
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<Listing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<Listing {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with showInterval defined', () => {
    const interval = {
      start: '1',
      end: '10',
    };
    const wrapper = shallow(<Listing {...props} showInterval={interval} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onSelectListing on select event', () => {
    const wrapper = shallow(<Listing {...props} />);
    const select = wrapper.find(SimpleSelect);
    select.simulate('select');
    expect(props.onSelectListing.called).toBeTruthy();
  });
});
