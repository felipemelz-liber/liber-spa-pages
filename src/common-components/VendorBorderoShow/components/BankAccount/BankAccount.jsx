import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './BankAccount.styles';
import { BankAccount as BankAccountComponent } from '../../../BankAccount/BankAccount';

const BankAccount = props => {
  return (
    <Container>
      <BankAccountComponent {...props} />
    </Container>
  );
};

BankAccount.propTypes = {
  branch: PropTypes.string,
  branchCd: PropTypes.string,
  account: PropTypes.string,
  accountCd: PropTypes.string,
  bankName: PropTypes.string,
  bankCode: PropTypes.string,
};

BankAccount.defaultProps = {
  branch: '',
  branchCd: '',
  account: '',
  accountCd: '',
  bankName: '',
  bankCode: '',
};

export default BankAccount;
