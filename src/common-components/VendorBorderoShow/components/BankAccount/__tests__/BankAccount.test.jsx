import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import BankAccount from '../BankAccount';

describe('BankAccount component tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    branch: '004',
    branchCd: '7',
    account: '54025',
    accountCd: '7',
    bankName: 'Nu Pagamentos S.A.',
    bankCode: '160',
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
