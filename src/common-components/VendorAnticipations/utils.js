/* eslint-disable camelcase */
import React from 'react';

import { toast } from 'liber-components/components/Toast';
import { camelCase, find } from 'lodash';
import { formatMoney } from '../../views/withdraw/moneyHandler';
import StatusText from '../StatusText/StatusText';
import { EyeIcon } from './components/PendingAdvances/PendingAdvances.styles';
import { dispatchDataLayerEvent } from '../../vendor/Utils';

export const ADVANCE_REQUESTED = 'Assinatura Pendente';
export const ADVANCE_WAITING_PAYMENT = 'Em Processamento';
export const ADVANCE_CONCLUDED = 'Concluídos';
export const ADVANCE_CANCELED = 'Cancelados';
export const ADVANCE_ALL = 'Todos';

export const TOAST_DURATION = 5000;

export const DUPLICATA_NUMBER_IN = 'q[duplicata_number_cont_any]';
export const STATUS_EQ = 'q[status_eq]';
export const STATUS_IN = 'q[status_in]';
export const REQUESTED_GT = 'q[created_at_gteq]';
export const REQUESTED_LT = 'q[created_at_lteq]';

export const STATUS = {
  created: 0,
  started: 1,
  signed: 2,
  finished: 3,
  canceled: 4,
};

export const STATUS_FILTERS_TYPES = {
  concluded: {
    [STATUS_IN]: [STATUS.finished, STATUS.canceled],
  },
  pending: {
    [STATUS_IN]: [STATUS.started, STATUS.signed, STATUS.created],
  },
};

export const TABS = [
  ADVANCE_REQUESTED,
  ADVANCE_WAITING_PAYMENT,
  ADVANCE_CONCLUDED,
  ADVANCE_CANCELED,
  ADVANCE_ALL,
];

const emptyCell = '***';

export const STATUS_TEXTS = {
  started: 'Aguardando assinatura',
  signed: 'Realizando Pagamento',
  finished: 'Concluída',
  canceled: 'Cancelada',
};

export const convertToCamelCase = object => {
  const convertedObject = {};
  Object.keys(object).forEach(key => {
    const newKey = camelCase(key);
    convertedObject[newKey] = object[key];
  });

  return convertedObject;
};

export const getStatusCount = (documents, status) =>
  documents.reduce((totalStatus, document) => {
    const { status: documentStatus } = document;
    if (documentStatus === status) {
      return totalStatus + 1;
    }
    return totalStatus;
  }, 0);

export const updateAdvances = (advances, documents) =>
  advances.map(advance => {
    const { id } = advance;
    const updateObject = find(documents, { id });

    if (updateObject) {
      const { signingId } = updateObject;
      return { ...advance, signingId };
    }

    return advance;
  });

export const updateSignedAdvances = (advances, documents) =>
  advances.map(advance => {
    const { id } = advance;
    const updateObject = find(documents, { id });

    if (updateObject) {
      const { status, signatureProgress } = updateObject;

      return { ...advance, signatureProgress, userHasSigned: status !== 'error' };
    }

    return advance;
  });

export const calculateQuote = advances => {
  const finalQuote = advances.reduce(
    (quote, current) => {
      const faceValue = quote.faceValue + parseFloat(current.faceValue);
      const discountRate =
        quote.discountRate + parseFloat(current.agreedRate) * current.invoiceCount;
      const invoiceCount = quote.invoiceCount + parseFloat(current.invoiceCount);
      const netValue = quote.netValue + parseFloat(current.netValue);

      return { faceValue, invoiceCount, netValue, discountRate };
    },
    { faceValue: 0, discountRate: 0, invoiceCount: 0, netValue: 0 },
  );

  const { faceValue, invoiceCount, netValue, discountRate: total } = finalQuote;
  const discountRate = total / invoiceCount;

  return {
    faceValue,
    discountRate,
    netValue,
    invoiceCount,
  };
};

export const handleError = () => {
  toast(
    {
      message: 'Um erro ocorreu',
      info: 'Por favor tente novamente mais tarde ou entre em contato com o suporte',
    },
    'error',
    TOAST_DURATION,
  );
};

export const handleSignatureFeedback = (errorCount, completedCount, documentsCount) => {
  if (errorCount > 0) {
    if (completedCount > 0) {
      toast(
        {
          message: 'Ops.. Algumas assinaturas não foram realizadas!',
          info: 'Veja as assinaturas pendentes e tente novamente',
        },
        'warning',
        TOAST_DURATION,
      );
    } else if (documentsCount - errorCount !== completedCount) {
      toast(
        {
          message: 'Ops.. Algumas assinaturas não foram realizadas!',
          info: 'Tente novamente ou fale com o suporte',
        },
        'warning',
        TOAST_DURATION,
      );
    } else {
      toast(
        {
          message: 'Erro, sua assinatura não foi realizada!',
          info: 'Tente novamente ou fale com o suporte',
        },
        'error',
        TOAST_DURATION,
      );
    }
  } else if (completedCount > 0) {
    toast(
      {
        message: 'Termo assinado com sucesso!',
        info: 'Aguarde o processamento do pagamento',
      },
      'success',
      TOAST_DURATION,
    );
  } else {
    toast(
      {
        message: 'Termo assinado com sucesso!',
        info: 'Aguarde as outras assinaturas pendentes',
      },
      'success',
      TOAST_DURATION,
    );
  }
};

const handleAdvanceShowClick = isAdmin => () => {
  dispatchDataLayerEvent('antecipacoesHistoricoDeAntecipacoesShowDoBordero', isAdmin);
};

export const getColumns = (isAdmin, onDetailsClick) => [
  {
    name: 'status',
    label: 'Status',
    width: 14,
    align: 'left',

    getCellValue: advance => {
      const { status } = advance;
      const statusMap = {
        finished: 'positive',
        canceled: 'negative',
      };

      return <StatusText type={statusMap[status]}>{STATUS_TEXTS[status]}</StatusText>;
    },
  },
  {
    name: 'netValue',
    label: 'Valor Antecipado (R$)',
    width: 18,
    align: 'right',
    getCellValue: ({ netValue, status }) =>
      netValue && status !== 'canceled' ? formatMoney(netValue) : emptyCell,
  },
  {
    name: 'invoiceCount',
    label: 'Títulos Solicitados',
    width: 15,
    align: 'right',
  },
  {
    name: 'invoicesAnticipated',
    label: 'Títulos Antecipados',
    width: 15,
    align: 'right',
    getCellValue: ({ paidInvoicesCount }) => paidInvoicesCount || emptyCell,
  },
  {
    name: 'requestedAt',
    label: 'Solicitado Em',
    width: 18,
    align: 'center',
  },
  {
    name: 'documentUrl',
    label: 'Ações',
    width: 8,
    align: 'center',
    // eslint-disable-next-line
    getCellValue: ({ id }) =>
      isAdmin ? (
        <EyeIcon onClick={() => onDetailsClick(id)} />
      ) : (
        <a href={`/fornecedor/antecipacoes/${id}`} onClick={handleAdvanceShowClick(isAdmin)}>
          <EyeIcon />
        </a>
      ),
  },
];
