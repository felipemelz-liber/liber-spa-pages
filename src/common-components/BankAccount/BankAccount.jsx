import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, ImagePlaceHolder, ImageLogo, InfoContainer, Title } from './BankAccount.styles';
import defaultImage from '../../../../assets/images/bank-logos/default.png';

const formatDigit = digit => (digit && digit !== '' ? `-${digit}` : '');

export const BankAccount = ({ bankCode, bankName, branch, branchCd, account, accountCd }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`../../../../assets/images/bank-logos/banco_0${bankCode}.png`)
      .then(res => {
        setImage(res.default);
      })
      .catch(() => {
        setImage(defaultImage);
      });
  }, []);

  return (
    <Container>
      {image ? <ImageLogo src={image} alt={`Logo do ${bankName}`} /> : <ImagePlaceHolder />}
      <InfoContainer>
        <Title>{`${bankCode} - ${bankName}`}</Title>
        <div>{`Agência ${branch}${formatDigit(branchCd)}`}</div>
        <div>{`Conta ${account}${formatDigit(accountCd)}`}</div>
      </InfoContainer>
    </Container>
  );
};

BankAccount.propTypes = {
  branch: PropTypes.string,
  branchCd: PropTypes.string,
  account: PropTypes.string,
  accountCd: PropTypes.string,
  bankCode: PropTypes.string,
  bankName: PropTypes.string,
};

BankAccount.defaultProps = {
  branch: '',
  branchCd: '',
  account: '',
  accountCd: '',
  bankCode: '',
  bankName: '',
};

export default BankAccount;
