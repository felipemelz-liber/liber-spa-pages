import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Anime from '../SimpleAnime';

describe('Testing SelectField Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      children: (<div />),
    };
  });
  it('should render correctly', () => {
    const wrapper = mount(<Anime {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
