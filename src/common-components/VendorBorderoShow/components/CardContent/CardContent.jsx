import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiDownload, mdiCheckboxMarkedCircle, mdiClock } from '@mdi/js';
import {
  Row,
  Title,
  FlatButton,
  FieldContainer,
  FieldLabel,
  FieldValue,
  StatusIcon,
  Caption,
} from './CardContent.styles';
import BankAccount from '../BankAccount/BankAccount';
import { dispatchDataLayerEvent } from '../../../../vendor/Utils';

const CardContent = ({ summary }, isAdmin) => {
  const {
    buyer: { name: buyerName, cnpj },
    paidValue,
    netValue,
    invoiceCount,
    paidInvoiceCount,
    requestedAt,
    operators,
    bankAccount,
    signatureCertificateUrl,
    invoiceTransferAgreementUrl,
    signatures: { required },
  } = summary;

  const handleOpenDocument = url => {
    window.open(url);
  };

  const handleClickSigningCertificate = () => {
    dispatchDataLayerEvent('showBorderoBaixarCertificadoDeAssinatura', isAdmin);

    handleOpenDocument(signatureCertificateUrl);
  };

  const handleClickTransferAgreement = () => {
    dispatchDataLayerEvent('showBorderoBaixarTermoDeCessao', isAdmin);

    handleOpenDocument(invoiceTransferAgreementUrl);
  };

  const needConfirmation = () =>
    operators.reduce((prev, { userHasSigned }) => prev || !userHasSigned, false);

  const getSubstantives = number => `representante${number > 1 ? 's legais' : ' legal'}`;

  const getPaidValue = value => {
    return value === 'R$ 0,00' ? '***' : value;
  };

  return (
    <>
      <Row justify="space-between">
        <Title>Resumo</Title>
        <div>
          {signatureCertificateUrl && (
            <FlatButton blue onClick={handleClickSigningCertificate}>
              <Icon path={mdiDownload} />
              Certificado de Assinatura
            </FlatButton>
          )}
          {invoiceTransferAgreementUrl && (
            <FlatButton blue paddingRight="0" onClick={handleClickTransferAgreement}>
              <Icon path={mdiDownload} />
              Termo de Cessão
            </FlatButton>
          )}
        </div>
      </Row>
      <Row height={24} />
      <Row>
        <FieldContainer>
          <FieldLabel>Sacado</FieldLabel>
          <FieldValue>{`${buyerName} — CNPJ ${cnpj}`}</FieldValue>
        </FieldContainer>
      </Row>
      <Row height={32} />
      <Row>
        <FieldContainer marginRight={60}>
          <FieldLabel>Valor {needConfirmation() ? 'Solicitado' : 'Antecipado'}</FieldLabel>
          <FieldValue>{needConfirmation() ? netValue : getPaidValue(paidValue)}</FieldValue>
        </FieldContainer>
        <FieldContainer marginRight={60}>
          <FieldLabel>Títulos Solicitados</FieldLabel>
          <FieldValue>{invoiceCount}</FieldValue>
        </FieldContainer>
        <FieldContainer marginRight={60}>
          <FieldLabel>Títulos Antecipados</FieldLabel>
          <FieldValue>{paidInvoiceCount || '***'}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Solicitação</FieldLabel>
          <FieldValue>{requestedAt}</FieldValue>
        </FieldContainer>
      </Row>
      <Row height={52} />
      <Row>
        <Title>Confirmação</Title>
        {needConfirmation() && (
          <Caption>
            {`*Esta antecipação exige a confirmação de ${required} ${getSubstantives(required)}`}
          </Caption>
        )}
      </Row>
      <Row height={22} />
      {operators.map(({ id, name, userHasSigned }) => (
        <Row key={`operator-${id}`}>
          <StatusIcon
            status={userHasSigned ? 'positive' : 'neutral'}
            path={userHasSigned ? mdiCheckboxMarkedCircle : mdiClock}
          />
          <FieldValue>{name}</FieldValue>
        </Row>
      ))}
      <Row height={48} />
      <Title>Pagamento</Title>
      <Row height={24} />
      <Row>
        <BankAccount {...bankAccount} />
      </Row>
    </>
  );
};

CardContent.propTypes = {
  summary: PropTypes.shape({
    buyer: PropTypes.shape({
      name: PropTypes.string,
      cnpj: PropTypes.string,
    }),
    paidValue: PropTypes.string,
    netValue: PropTypes.string,
    invoiceCount: PropTypes.string,
    paidInvoiceCount: PropTypes.string,
    requestedAt: PropTypes.string,
    operators: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        userHasSigned: PropTypes.bool,
      }),
    ),
    bankAccount: {
      branch: PropTypes.string,
      branchCd: PropTypes.string,
      account: PropTypes.string,
      accountCd: PropTypes.string,
      bankName: PropTypes.string,
      id: PropTypes.number,
      bankCode: PropTypes.string,
    },
    signatureCertificateUrl: PropTypes.string,
    invoiceTransferAgreementUrl: PropTypes.string,
    signatures: PropTypes.shape({
      required: PropTypes.number,
    }),
  }),
  isAdmin: PropTypes.bool,
};

CardContent.defaultProps = {
  summary: {
    buyer: '',
    paidValue: '',
    netValue: '',
    invoiceCount: '',
    paidInvoiceCount: '',
    requestedAt: '',
    operators: [],
    bankAccount: {
      branch: '',
      branchCd: '',
      account: '',
      accountCd: '',
      bankName: '',
      id: null,
      bankCode: '',
    },
    signatureCertificateUrl: '',
    invoiceTransferAgreementUrl: '',
    signatures: {
      required: 1,
    },
  },
  isAdmin: false,
};

const mapStateToProps = ({ vendorBorderoShow: { summary } }) => ({ summary });

export default connect(mapStateToProps)(CardContent);
