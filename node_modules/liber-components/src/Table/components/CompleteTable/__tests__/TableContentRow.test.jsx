import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import TableContentRow from '../TableContentRow';

describe('Testing TableContentRow component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    availableSpace: 1,
    children: <div>Row</div>
  };

  it(`renders TableContentRow correctly for table body content`, () => {
    const wrapper = shallow(<TableContentRow {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders TableContentRow correctly for table header content`, () => {
    const wrapper = shallow(<TableContentRow {...props} isHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
