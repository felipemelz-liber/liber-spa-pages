import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  OptionList,
  SearchableOptionList,
  SelectBox,
  SelectOptionList,
  SelectItem,
  SelectLabel,
} from '../SelectField.styles';

describe('Testing SelectField Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    fields: {
      inactive: '#000',
      primary: '#111',
      secondary: '#222',
      hover: '#123',
      caret: {
        circle: '#333',
        selected: '#444',
        unselected: '#555',
      },
      select: {
        default: '#666',
        focused: '#777',
        selected: '#888',
        label: {
          background: '#999',
          color: '#aaa',
        },
      },
    },
  };

  describe('OptionLists', () => {
    const props = {
      height: 150,
      width: 300,
      rowHeight: 30,
      rowRenderer: jest.fn(),
      rowCount: 5,
    };

    it('OptionList should render correctly', () => {
      const wrapper = shallow(<OptionList {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('SearchableOptionList should render correctly', () => {
      const wrapper = shallow(<SearchableOptionList {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('SelectBox', () => {
    it('should render correctly selected', () => {
      const wrapper = shallow(<SelectBox />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const props = {
        theme,
      };
      const wrapper = shallow(<SelectBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('SelectOptionList', () => {
    const props = {
      id: 'select-list',
      rowRenderer: jest.fn(),
    };

    it('should not call rowRenderer without children', () => {
      shallow(<SelectOptionList {...props} />);
      expect(props.rowRenderer).not.toBeCalled();
    });

    it('should call rowRenderer with children', () => {
      const children = ['A', 'B', 'C'];
      mount(<SelectOptionList {...props}>{children}</SelectOptionList>);
      expect(props.rowRenderer).toBeCalled();
    });
  });

  describe('SelectItem', () => {
    it('should render correctly focused', () => {
      const props = {
        focused: true,
      };
      const wrapper = shallow(<SelectItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly focused with theme', () => {
      const props = {
        focused: true,
        theme,
      };
      const wrapper = shallow(<SelectItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly selected', () => {
      const props = {
        selected: true,
      };
      const wrapper = shallow(<SelectItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly selected with theme', () => {
      const props = {
        selected: true,
        theme,
      };
      const wrapper = shallow(<SelectItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly unselected', () => {
      const props = {
        selected: false,
      };
      const wrapper = shallow(<SelectItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly unselected with theme', () => {
      const props = {
        selected: false,
        theme,
      };
      const wrapper = shallow(<SelectItem {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('SelectLabel', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SelectLabel />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const props = {
        theme,
      };
      const wrapper = shallow(<SelectLabel {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
