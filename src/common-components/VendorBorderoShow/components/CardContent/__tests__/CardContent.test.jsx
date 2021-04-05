import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { CardContent } from 'liber-components';

describe('CardContent component tests', () => {
  configure({ adapter: new Adapter() });

  const baseSummary = {
    buyer: { name: 'Mock buyer', cnpj: '06.194.174/0001-19' },
    paidValue: 'R$ 1234',
    invoiceCount: '20',
    paidInvoiceCount: '18',
    requestedAt: '12/12/2020',
    bankAccount: {
      branch: '001',
      branchCd: '1',
      account: '12345',
      accountCd: '1',
      bankName: 'Banco Mockado',
      id: 1,
      bankCode: '001',
    },
  };

  const cases = [
    {
      summary: {
        ...baseSummary,
        signatures: { required: 2 },
        operators: [
          {
            id: 1,
            name: 'User 1',
            userHasSigned: true,
          },
          {
            id: 1,
            name: 'User 2',
            userHasSigned: false,
          },
        ],
        signatureCertificateUrl: null,
        invoiceTransferAgreementUrl: null,
      },
    },
    {
      summary: {
        ...baseSummary,
        signatures: { required: 2 },
        operators: [
          {
            id: 1,
            name: 'User 1',
            userHasSigned: true,
          },
          {
            id: 1,
            name: 'User 2',
            userHasSigned: true,
          },
        ],
        signatureCertificateUrl: null,
        invoiceTransferAgreementUrl: null,
      },
    },
    {
      summary: {
        ...baseSummary,
        signatures: { required: 1 },
        operators: [
          {
            id: 1,
            name: 'User 1',
            userHasSigned: true,
          },
          {
            id: 1,
            name: 'User 2',
            userHasSigned: false,
          },
        ],
        signatureCertificateUrl: 'mockUrl1',
        invoiceTransferAgreementUrl: 'mockUrl2',
      },
    },
    {
      summary: {
        ...baseSummary,
        signatures: { required: 1 },
        operators: [
          {
            id: 1,
            name: 'User 1',
            userHasSigned: false,
          },
        ],
        signatureCertificateUrl: null,
        invoiceTransferAgreementUrl: 'mockUrl2',
      },
    },
  ];

  it('should render CardContent correctly without props', () => {
    const wrapper = shallow(<CardContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  cases.forEach((props, index) => {
    it(`should render CardContent correctly for case ${index} with props`, () => {
      const wrapper = shallow(<CardContent {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
