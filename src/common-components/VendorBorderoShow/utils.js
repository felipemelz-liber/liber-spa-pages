import React from 'react';
import { mdiEye } from '@mdi/js';
import StatusText from '../StatusText/StatusText';
import { formatMoney } from '../../views/withdraw/moneyHandler';
import { StyledIcon } from './components/VendorBorderoShow.styles';
import { dispatchDataLayerEvent } from '../../vendor/Utils';

export const DUPLICATA_NUMBER_IN_BORDERO = 'q[number_in]';
export const VENDOR_CNPJ_EQ = 'q[emitter_cnpj_eq]';
export const BORDERO_STATUS_IN = 'q[status_in]';

const emptyCell = '***';

export const BORDERO_STATUS_MAP = {
  created: {
    label: 'Aguardando Confirmação',
    type: 'neutral',
  },
  started: {
    label: 'Aguardando Confirmação',
    type: 'neutral',
  },
  signed: {
    label: 'Realizando Pagamento',
    type: 'neutral',
  },
  finished: {
    label: 'Concluída',
    type: 'positive',
  },
  canceled: {
    label: 'Cancelada',
    type: 'negative',
  },
};

export const STATUS_REFERENCE = {
  requested: 'Solicitado',
  anticipated: 'Antecipado',
  notAnticipated: 'Não Antecipado',
};

export const INVOICE_STATUS_MAP = {
  aberta: {
    code: 0,
    label: 'Solicitado',
    type: 'neutral',
  },
  aguardando_aceite: {
    code: 1,
    label: 'Solicitado',
    type: 'neutral',
  },
  aguardando_pagamento: {
    code: 3,
    label: 'Solicitado',
    type: 'neutral',
  },
  paga: {
    code: 4,
    label: 'Solicitado',
    type: 'neutral',
  },
  concluida: {
    code: 5,
    label: 'Antecipado',
    type: 'positive',
  },
  cancelada: {
    code: 6,
    label: 'Não Antecipado',
    type: 'negative',
  },
  agendada: {
    code: 7,
    label: 'Solicitado',
    type: 'neutral',
  },
  aguardando_formalizacao: {
    code: 8,
    label: 'Solicitado',
    type: 'neutral',
  },
  em_processamento: {
    code: 9,
    label: 'Solicitado',
    type: 'neutral',
  },
};

const handleShowInvoiceClick = (setInvoiceId, setInvoiceShowOpen, id, isAdmin) => {
  dispatchDataLayerEvent('showDoBorderoShowDoTitulo', isAdmin);

  setInvoiceId(id);
  setInvoiceShowOpen(true);
};

export const getInvoicesColumns = ({
  borderoStatus,
  setInvoiceId,
  setInvoiceShowOpen,
  isAdmin,
}) => {
  return [
    {
      name: 'status',
      label: <>&nbsp;&nbsp;&nbsp;Status</>,
      width: 17,
      align: 'left',
      getCellValue: invoice => {
        const { type, label } = INVOICE_STATUS_MAP[invoice.status] || INVOICE_STATUS_MAP.aberta;
        return (
          <>
            &nbsp;&nbsp;&nbsp;
            <StatusText type={type}>{label}</StatusText>
          </>
        );
      },
    },
    {
      name: 'number',
      label: 'Número',
      width: 15,
      align: 'right',
    },
    {
      name: 'netValue',
      label: `Valor ${
        ['finished', 'canceled'].includes(borderoStatus) ? 'Antecipado (R$)' : 'Solicitado (R$)'
      }`,
      width: 16,
      align: 'right',
      getCellValue: ({ netValue, status }) =>
        netValue && status !== 'cancelada' ? formatMoney(netValue) : emptyCell,
    },
    {
      name: 'vendorCnpj',
      label: 'CNPJ',
      width: 15,
      align: 'right',
    },
    {
      name: 'funder',
      label: 'Investidor',
      width: 14,
      align: 'left',
      getCellValue: ({ funder, status }) => (funder && status !== 'cancelada' ? funder : emptyCell),
    },
    {
      name: 'detailsPath',
      label: 'Ações',
      width: 7,
      align: 'center',
      // eslint-disable-next-line
      getCellValue: ({ id }) => (
        <StyledIcon
          title="Visualizar título"
          path={mdiEye}
          onClick={() => handleShowInvoiceClick(setInvoiceId, setInvoiceShowOpen, id, isAdmin)}
        />
      ),
    },
  ];
};

export const COLUMNS_BORDERO_INVOICES = [
  {
    name: 'status',
    label: <>&nbsp;&nbsp;&nbsp;Status</>,
    width: 17,
    align: 'left',
    getCellValue: invoice => {
      const { type, label } = INVOICE_STATUS_MAP[invoice.status] || INVOICE_STATUS_MAP.aberta;
      return (
        <>
          &nbsp;&nbsp;&nbsp;
          <StatusText type={type}>{label}</StatusText>
        </>
      );
    },
  },
  {
    name: 'number',
    label: 'Número',
    width: 15,
    align: 'right',
  },
  {
    name: 'netValue',
    label: 'Valor Antecipado (R$)',
    width: 16,
    align: 'right',
    getCellValue: ({ netValue, status }) =>
      netValue && status !== 'cancelada' ? formatMoney(netValue) : emptyCell,
  },
  {
    name: 'vendorCnpj',
    label: 'CNPJ',
    width: 15,
    align: 'right',
  },
  {
    name: 'funder',
    label: 'Investidor',
    width: 14,
    align: 'left',
    getCellValue: ({ funder }) => funder || emptyCell,
  },
  {
    name: 'detailsPath',
    label: 'Ações',
    width: 7,
    align: 'center',
    // eslint-disable-next-line
    getCellValue: ({ detailsPath = '#' }) => (
      <StyledIcon
        title="Visualizar título"
        path={mdiEye}
        onClick={() => {
          window.location.href = detailsPath;
        }}
      />
    ),
  },
];

export const getCodesByLabels = labels => {
  const statusCodes = [];
  Object.keys(INVOICE_STATUS_MAP).forEach(key => {
    const { label, code } = INVOICE_STATUS_MAP[key];
    if (labels.includes(label)) {
      statusCodes.push(code);
    }
  });
  return statusCodes;
};

export const formatFilters = filters => {
  const newFilters = {};
  Object.keys(filters).forEach(key => {
    if (key === BORDERO_STATUS_IN) {
      newFilters[BORDERO_STATUS_IN] = getCodesByLabels(
        filters[BORDERO_STATUS_IN]
          ? filters[BORDERO_STATUS_IN].map(item => STATUS_REFERENCE[item])
          : [],
      );
    } else {
      newFilters[key] = filters[key];
    }
  });
  return newFilters;
};

export const MOCKED_SUMMARY = {
  // status: 'finished',
  // status: 'signed',
  status: 'started',
  buyer: { name: 'BRF S.A.', cnpj: '06.194.174/0001-19' },
  paid_value: 'R$ 1.018.106,59',
  invoice_count: '13347',
  paid_invoice_count: undefined,
  requested_at: '10/02/2020',
  operators: [
    {
      id: 2,
      name: 'Jamile Cardoso Gomes de Jesus',
      user_has_signed: true,
    },
    {
      id: 1,
      name: 'Zezinho',
      user_has_signed: false,
    },
  ],
  bank_account: {
    account: '2056',
    account_cd: '2',
    branch: '0004',
    branch_cd: '1',
    bank_name: 'Banco Bradesco S.A.',
    id: 5,
    bank_code: '237',
  },
  signature_certificate_url: '#1', // null => nao aparece o botao
  invoice_transfer_agreement_url: '#2',
};

export const MOCKED_INVOICES = [
  {
    id: 1,
    status: 'em_processamento',
    number: '000003665-20-001',
    net_value: 3456.42,
    vendor_cnpj: '06.194.174/0001-19',
    funder: 'BTG Pactual',
    details_path: '/fornecedor/duplicatas/dc1541250297',
  },
  {
    id: 2,
    status: 'cancelada',
    number: '000003665-20-001',
    net_value: 296.53,
    vendor_cnpj: '06.194.174/0001-19',
    funder: 'BTG Pactual',
    details_path: '/fornecedor/duplicatas/dc1541250297',
  },
  {
    id: 3,
    status: 'concluida',
    number: '000003665-20-001',
    net_value: 2416.39,
    vendor_cnpj: '06.194.174/0001-19',
    funder: 'BTG Pactual',
    details_path: '/fornecedor/duplicatas/dc1541250297',
  },
  {
    id: 4,
    status: 'em_processamento',
    number: '000003665-20-001',
    net_value: 3456.42,
    vendor_cnpj: '06.194.174/0001-19',
    funder: 'BTG Pactual',
    details_path: '/fornecedor/duplicatas/dc1541250297',
  },
  {
    id: 5,
    status: 'cancelada',
    number: '000003665-20-001',
    net_value: 296.53,
    vendor_cnpj: '06.194.174/0001-19',
    funder: 'BTG Pactual',
    details_path: '/fornecedor/duplicatas/dc1541250297',
  },
  {
    id: 6,
    status: 'concluida',
    number: '000003665-20-001',
    net_value: 2416.39,
    vendor_cnpj: '06.194.174/0001-19',
    funder: 'BTG Pactual',
    details_path: '/fornecedor/duplicatas/dc1541250297',
  },
];
