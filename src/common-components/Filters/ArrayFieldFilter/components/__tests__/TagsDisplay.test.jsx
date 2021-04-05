import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TagsDisplay from '../TagsDisplay';

describe('TagDisplay tests', () => {
  configure({ adapter: new Adapter() });

  const cases = [
    {
      tags: [],
      tagsPerLine: 6,
      tagsThreshold: 18,
    },
    {
      tags: ['a', 'b', 'c', 'd'],
      tagsPerLine: 4,
      tagsThreshold: 8,
    },
    {
      tags: ['a', 'b', 'c', 'd', 'b', 'c', 'd', 'b', 'c', 'd', 'b', 'c', 'd', 'b', 'c', 'd'],
      tagsPerLine: 5,
      tagsThreshold: 15,
    },
  ];

  cases.forEach((props, index) =>
    it(`should render correctly for case: ${index}`, () => {
      const wrapper = shallow(<TagsDisplay {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    }),
  );
});
