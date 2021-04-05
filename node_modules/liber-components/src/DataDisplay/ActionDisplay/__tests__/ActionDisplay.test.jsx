import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ActionDisplay from '../ActionDisplay';
import { SuccessButton } from '../../../Buttons';

describe('Test for Action Button', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly without button', () => {
    const wrapper = shallow(<ActionDisplay />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with button', () => {
    const wrapper = shallow(<ActionDisplay><SuccessButton>Mock</SuccessButton></ActionDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with value and label', () => {
    const wrapper = shallow(<ActionDisplay value="3" label="test"><SuccessButton>Mock</SuccessButton></ActionDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with currency', () => {
    const props = {
      value: '3',
      label: 'test',
      currency: 'R$',
    };
    const wrapper = shallow(<ActionDisplay {...props}><SuccessButton>Mock</SuccessButton></ActionDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with bigValue and smallValue', () => {
    const props = {
      value: '3',
      label: 'test',
      currency: 'R$',
      bigValue: '32px',
      smallValue: '30px',
    };
    const wrapper = shallow(<ActionDisplay {...props}><SuccessButton>Mock</SuccessButton></ActionDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
