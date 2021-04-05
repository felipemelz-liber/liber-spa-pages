import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Container, BadgeCircle } from '../Badge.styles';

describe('Testing Badge Styles', () => {
  configure({ adapter: new Adapter() });

  it('should render Container correctly', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  const cases = [
    {
      position: { vertical: 'bottom', horizontal: 'right' },
      radius: 10,
      padding: 4,
      visible: true,
    },
    {
      position: { vertical: 'bottom', horizontal: 'left' },
      radius: 10,
      padding: 4,
      visible: true,
      color: 'white',
    },
    {
      position: { vertical: 'top', horizontal: 'right' },
      radius: 10,
      padding: 4,
      visible: true,
      textColor: 'blue',
    },
    {
      position: {
        vertical: 'top',
        horizontal: 'left',
      },
      radius: 10,
      padding: 4,
      visible: true,
    },
  ];

  cases.forEach((props, index) =>
    it(`should render BadgeCircle correctly with case: ${index}`, () => {
      const wrapper = shallow(<BadgeCircle {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    }),
  );
});
