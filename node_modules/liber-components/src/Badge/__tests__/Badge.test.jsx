import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Badge from '../Badge';

describe('Badge tests', () => {
  configure({ adapter: new Adapter() });

  const children = <div>mock</div>;
  const content = 234;

  const cases = [
    {
      position: { vertical: 'bottom', horizontal: 'right' },
      children,
      content,
    },
    {
      position: { vertical: 'bottom', horizontal: 'left' },
      children,
      content,
      childShape: 'circle',
      color: 'white',
    },
    {
      position: { vertical: 'top', horizontal: 'right' },
      children,
      content,
      textColor: 'blue',
    },
    {
      position: {
        vertical: 'top',
        horizontal: 'left',
      },
      size: 'large',
      children,
      content,
    },
  ];

  cases.forEach((props, index) =>
    it(`should render Badge correctly with case: ${index}`, () => {
      const wrapper = shallow(<Badge {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    }),
  );
});
