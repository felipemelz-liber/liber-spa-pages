import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import BankAccount from '../BankAccount';

describe('BankAccount component tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    branch: '001',
    branchCd: '1',
    account: '5454',
    accountCd: '1',
    bankCode: '001',
    bankName: 'Banco do Brasil S.A.',
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<BankAccount />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<BankAccount {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
