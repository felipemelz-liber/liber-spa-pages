import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { ConfirmationHistoryTable } from '../Table';
import { confirmationsMock } from '../../reducers/__tests__/ConfirmationHistoryReducer.test';

describe('Testing ConfirmationHistoryTable component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    token: 'token',
    filters: {
      'q[created_at_eq]': '',
      'q[created_at_gteq]': '',
      'q[created_at_lteq]': '',
    },
    pagination: {
      current: 1,
      per: 10,
      pages: 1,
      count: 2,
    },
  };

  it('should render empty table correctly', () => {
    const wrapper = shallow(
      <ConfirmationHistoryTable confirmations={[]} handleFilter={() => null} {...props} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render table correctly', () => {
    const wrapper = shallow(
      <ConfirmationHistoryTable
        confirmations={confirmationsMock}
        handleFilter={() => null}
        {...props}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
