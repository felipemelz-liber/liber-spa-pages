import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  InputBase,
  InputBar,
  InputCaret,
  InputError,
  InputHelper,
  InputHelperIcon,
  InputHelperText,
  InputHint,
  InputInactive,
  InputLabel,
  InputText,
} from '../Base.styles';

describe('Test for Inputs Styles Components', () => {
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
      },
    },
  };

  describe('InputBase', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputBase />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with width', () => {
      const wrapper = shallow(<InputBase width="100%" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with theme', () => {
      const wrapper = shallow(<InputBase theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render disabled', () => {
      const wrapper = shallow(<InputBase disabled />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputBar', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputBar />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render open and primary background when focused', () => {
      const wrapper = shallow(<InputBar theme={theme} open />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render open and danger background when error', () => {
      const wrapper = shallow(<InputBar theme={theme} error />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputCaret', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputCaret />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with theme', () => {
      const wrapper = shallow(<InputCaret theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render focused', () => {
      const wrapper = shallow(<InputCaret focused />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render selected', () => {
      const wrapper = shallow(<InputCaret selected />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render open', () => {
      const wrapper = shallow(<InputCaret open />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputError', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputError />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render visible', () => {
      const wrapper = shallow(<InputError theme={theme} visible />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputLabel', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputLabel />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render positioned with primary color when focused', () => {
      const wrapper = shallow(<InputLabel theme={theme} focused />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render positioned with inactive color when valid', () => {
      const wrapper = shallow(<InputLabel theme={theme} valid />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render positioned with danger color when error and focused', () => {
      const wrapper = shallow(<InputLabel theme={theme} error focused />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render positioned with inactive color when error and valid', () => {
      const wrapper = shallow(<InputLabel theme={theme} error valid />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputInactive', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputInactive />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render visible', () => {
      const wrapper = shallow(<InputInactive theme={theme} visible />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render invisible', () => {
      const wrapper = shallow(<InputInactive theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputHelper', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputHelper />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render visible', () => {
      const wrapper = shallow(<InputHelper theme={theme} visible />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render afterError', () => {
      const wrapper = shallow(<InputHelper theme={theme} afterError />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputHelperIcon', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputHelperIcon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputHelperText', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputHelperText />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputHint', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputHint />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render visible', () => {
      const wrapper = shallow(<InputHint theme={theme} visible />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InputText', () => {
    it('should render without props', () => {
      const wrapper = shallow(<InputText />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
