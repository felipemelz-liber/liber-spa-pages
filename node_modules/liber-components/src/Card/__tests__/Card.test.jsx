import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  CardListContent,
  CardListItem,
} from '../Card';

describe('Test for Card Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    card: {
      background: '#aaa',
      border: '#bbb',
      title: {
        background: '#ccc',
        color: '#ddd',
      },
      header: {
        background: '#eee',
        color: '#fff',
      },
      footer: {
        background: '#000',
      },
      listItem: {
        hover: '#111',
      },
    },
  };

  describe('Card', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Card />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with border', () => {
      const wrapper = shallow(<Card borderColor="#AABBCC" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with border and position', () => {
      const wrapper = shallow(<Card borderColor="#AABBCC" borderPosition="top" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Card theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        width: '100px',
        height: '100px',
      };
      const wrapper = shallow(<Card {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('CardTitle', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<CardTitle />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<CardTitle theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        color: '#000',
        backgroundColor: '#000',
      };
      const wrapper = shallow(<CardTitle {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('CardHeader', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<CardHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<CardHeader theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        height: '100px',
      };
      const wrapper = shallow(<CardHeader {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render CardContent correctly', () => {
    const wrapper = shallow(<CardContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('CardFooter', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<CardFooter />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<CardFooter theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        height: '100px',
      };
      const wrapper = shallow(<CardFooter {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('CardListContent', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<CardListContent><CardListItem /></CardListContent>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with adapt', () => {
      const wrapper = shallow((<CardListContent adapt><CardListItem /></CardListContent>));
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('CardListItem', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<CardListItem />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<CardListItem theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        height: '100px',
        last: true,
      };
      const wrapper = shallow(<CardListItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
