import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { mdiEye } from '@mdi/js';
import { connect } from 'react-redux';
import { CompleteTable } from 'liber-components';
import {
  togglePageSelection,
  toggleInvoiceSelection,
  setPage,
  changeToNextPage,
  changeToPreviousPage,
  changeListing,
  calculateQuote,
  EXPIRES_LT_FILTER,
  EXPIRES_GT_FILTER,
  EXPIRES_EQ_FILTER,
  CNPJ_FILTER,
  NUMBER_FILTER,
  changeFilters,
  updateSorting,
} from '../../actions/VendorInvoicesActions';
import { Icon } from './InvoicesTable.styles';
import SimulationDrawer from '../SimulationDrawer/SimulationDrawer';
import SelectionControl from '../SelectionControl/SelectionControl';
import usePageState from '../../../../hooks/usePageState';
import { formatMoney } from '../../../../views/withdraw/moneyHandler';
import { Filters } from '../../../../views/fornecedor-duplicatas/components/Filters/Filters';
import InvoiceDialog from '../../../../views/invoice-dialog/InvoiceDialog';
import StatusText from '../../../StatusText/StatusText';
import { dispatchDataLayerEvent } from '../../../../vendor/Utils';
import useSorting from '../../../../hooks/useSorting';
import { DEFAULT_SORTING } from '../../reducer/VendorInvoicesReducer';

const STATUS_MAP = {
  verificado: 'Disponível',
  bloqueado: 'Bloqueado',
};

const handleInvoiceVisualizationClick = (
  setSelectedInvoiceId,
  setInvoiceShowOpen,
  event,
  id,
  isAdmin,
) => {
  if (!isAdmin) {
    dispatchDataLayerEvent('titulosShowDoTitulo');
  }

  event.stopPropagation();
  setSelectedInvoiceId(id);
  setInvoiceShowOpen(true);
};

const getTableColumns = ({ setSelectedInvoiceId, setInvoiceShowOpen, isAdmin }) => [
  {
    name: 'number',
    label: 'Número',
    align: 'right',
    width: 18,
  },
  {
    name: 'expiresAt',
    label: 'Vencimento',
    align: 'right',
    width: 15,
    getCellValue: ({ expiresAt }) => moment(expiresAt).format('DD/MM/YYYY'),
  },
  {
    name: 'value',
    label: 'Valor Bruto (R$)',
    align: 'right',
    width: 18,
    getCellValue: ({ face }) => formatMoney(face),
  },
  {
    name: 'agreedRate',
    label: 'Taxa de Desconto',
    align: 'right',
    width: 18,
    getCellValue: ({ taxa: agreedRate, periodRate }) => {
      if (periodRate) {
        return `${(periodRate * 100).toFixed(4).replace('.', ',')}%`;
      }
      return `${(agreedRate * 100).toFixed(4).replace('.', ',')}% a.m.`;
    },
  },
  {
    name: 'emitterCnpj',
    label: 'CNPJ',
    align: 'right',
    width: 18,
  },
  {
    name: 'view',
    label: 'Ações',
    align: 'center',
    width: 10,
    getCellValue: invoice => {
      const { id } = invoice;
      return (
        <Icon
          path={mdiEye}
          onClick={event => {
            handleInvoiceVisualizationClick(
              setSelectedInvoiceId,
              setInvoiceShowOpen,
              event,
              id,
              isAdmin,
            );
          }}
        />
      );
    },
  },
];

const getAdminTableColumns = ({ setSelectedInvoiceId, setInvoiceShowOpen }) => [
  {
    name: 'status',
    label: 'Status',
    align: 'left',
    width: 15,
    getCellValue: invoice => {
      const { status } = invoice;
      return (
        <StatusText type={status === 'verificado' ? 'primary' : 'negative'}>
          {STATUS_MAP[status]}
        </StatusText>
      );
    },
  },
  {
    name: 'number',
    label: 'Número',
    align: 'left',
    width: 18,
  },
  {
    name: 'expiresAt',
    label: 'Vencimento',
    align: 'right',
    width: 15,
    getCellValue: ({ expiresAt }) => moment(expiresAt).format('DD/MM/YYYY'),
  },
  {
    name: 'value',
    label: 'Valor Bruto (R$)',
    align: 'right',
    width: 18,
    getCellValue: ({ face }) => formatMoney(face),
  },
  {
    name: 'agreedRate',
    label: 'Taxa de Desconto',
    align: 'right',
    width: 18,
    getCellValue: ({ taxa: agreedRate, periodRate }) => {
      if (periodRate) {
        return `${(periodRate * 100).toFixed(4).replace('.', ',')}%`;
      }
      return `${(agreedRate * 100).toFixed(4).replace('.', ',')}% a.m.`;
    },
  },
  {
    name: 'emitterCnpj',
    label: 'CNPJ',
    align: 'right',
    width: 20,
  },
  {
    name: 'view',
    label: 'Ações',
    align: 'center',
    width: 10,
    getCellValue: invoice => {
      const { id } = invoice;
      return (
        <Icon
          path={mdiEye}
          onClick={event => {
            event.stopPropagation();
            setSelectedInvoiceId(id);
            setInvoiceShowOpen(true);
          }}
        />
      );
    },
  },
];

const getInterval = pagination => {
  const { current: currentPage, per: pageListing, total: invoicesTotal } = pagination;

  const end = currentPage * pageListing;
  const start = (currentPage - 1) * pageListing + 1;
  return { start: String(start), end: String(end > invoicesTotal ? invoicesTotal : end) };
};

export const InvoicesTable = ({
  invoices,
  selectedInvoices,
  isPageSelected,
  togglePageSelect,
  toggleItemSelect,
  goToNextPage,
  goToPreviousPage,
  pagination,
  setListing,
  filters,
  filterInvoices,
  loadingButton,
  token,
  goToPage,
  isAdmin,
  vendorId,
  setSorting,
  hasSelectedAllItems,
}) => {
  const { current: currentPage, pages: pageTotal, count: invoiceTotal, per } = pagination;

  const [invoiceShowOpen, setInvoiceShowOpen] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [pageState, setPageState, onKeyDownPage] = usePageState(currentPage, pageTotal, goToPage);

  const selectionProps = isAdmin
    ? {}
    : {
        isItemSelected: ({ id }) => selectedInvoices.includes(id),
        allChecked: isPageSelected,
        onSelectAll: togglePageSelect,
        onSelect: toggleItemSelect,
        selectionControl: <SelectionControl isAdmin={isAdmin} />,
      };

  const columns = React.useMemo(
    () =>
      isAdmin
        ? getAdminTableColumns({ setSelectedInvoiceId, setInvoiceShowOpen })
        : getTableColumns({ setSelectedInvoiceId, setInvoiceShowOpen, isAdmin }),
    [],
  );

  const allowSelection = useMemo(() => !isAdmin && !hasSelectedAllItems, [hasSelectedAllItems]);

  const renderBlockedSelectionTooltip = () =>
    allowSelection ? null : 'Limpe a seleção para voltar a selecionar manualmente os títulos';

  const [onSort, sorting, sortedColumns] = useSorting(
    ['status', 'number', 'expiresAt', 'value', 'agreedRate', 'emitterCnpj'],
    setSorting,
    DEFAULT_SORTING,
  );

  return (
    <>
      <CompleteTable
        isItemSelectable={() => allowSelection}
        tooltipContent={renderBlockedSelectionTooltip}
        columns={columns}
        items={invoices}
        filters={
          <Filters
            filters={filters}
            onFilter={(updatedToken, updatedFilters) =>
              filterInvoices(updatedToken, updatedFilters, isAdmin)
            }
            withContainer={false}
            token=""
            invoiceCount={invoiceTotal}
          />
        }
        sortingProps={{ onSort, sorting, sortedColumns }}
        paginationProps={{
          currentPage: String(pageState),
          pageTotal: String(pageTotal),
          onClickNext: goToNextPage,
          onClickPrev: goToPreviousPage,
          onChangePage: ({ target: { value } }) => {
            setPageState(value);
          },
          onKeyDownPage,
          hasListing: true,
          listingProps: {
            listing: String(per),
            total: String(invoiceTotal),
            showInterval: getInterval(pagination),
            onSelectListing: setListing,
          },
        }}
        {...selectionProps}
      />
      <InvoiceDialog
        open={invoiceShowOpen}
        token={token}
        invoiceId={selectedInvoiceId}
        isAdmin={isAdmin}
        vendorId={vendorId}
        onClose={() => {
          setInvoiceShowOpen(false);
        }}
      />
      {!loadingButton && !isAdmin ? <SimulationDrawer /> : null}
    </>
  );
};

InvoicesTable.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.object),
  selectedInvoices: PropTypes.arrayOf(PropTypes.number),
  isPageSelected: PropTypes.bool,
  togglePageSelect: PropTypes.func,
  toggleItemSelect: PropTypes.func,
  goToNextPage: PropTypes.func,
  goToPreviousPage: PropTypes.func,
  setListing: PropTypes.func,
  goToPage: PropTypes.func,
  pagination: PropTypes.shape({
    current: PropTypes.number,
    per: PropTypes.number,
    count: PropTypes.number,
    pages: PropTypes.number,
  }),
  quote: PropTypes.shape({
    faceValue: PropTypes.number,
    discountValue: PropTypes.number,
    discountRate: PropTypes.number,
    netValue: PropTypes.number,
  }),
  filters: PropTypes.shape({
    [NUMBER_FILTER]: PropTypes.arrayOf(PropTypes.string),
    [CNPJ_FILTER]: PropTypes.string,
    [EXPIRES_EQ_FILTER]: PropTypes.string,
    [EXPIRES_GT_FILTER]: PropTypes.string,
    [EXPIRES_LT_FILTER]: PropTypes.string,
  }).isRequired,
  filterInvoices: PropTypes.func,
  loadingButton: PropTypes.bool,
  token: PropTypes.string,
  isAdmin: PropTypes.bool,
  vendorId: PropTypes.number,
  setSorting: PropTypes.func,
  hasSelectedAllItems: PropTypes.bool,
};

InvoicesTable.defaultProps = {
  invoices: [],
  selectedInvoices: [],
  isPageSelected: false,
  toggleItemSelect: () => {},
  togglePageSelect: () => {},
  goToNextPage: () => {},
  goToPreviousPage: () => {},
  setListing: () => {},
  goToPage: () => {},
  pagination: {},
  quote: {},
  filterInvoices: () => {},
  loadingButton: false,
  token: '',
  isAdmin: false,
  vendorId: null,
  setSorting: () => {},
  hasSelectedAllItems: false,
};

const mapStateToProps = ({
  vendorInvoices: {
    invoices,
    selectedInvoices,
    isPageSelected,
    pagination,
    quote,
    quoteAll,
    selectedIds,
    filters,
    rateByPeriod,
    loadingButton,
    token,
    isAdmin,
    vendorId,
    hasSelectedAllItems,
  },
}) => ({
  invoices,
  selectedInvoices,
  isPageSelected,
  pagination,
  quote,
  quoteAll,
  selectedIds,
  filters,
  rateByPeriod,
  loadingButton,
  token,
  isAdmin,
  vendorId,
  hasSelectedAllItems,
});

const mapDispatch = {
  togglePageSelect: togglePageSelection,
  toggleItemSelect: toggleInvoiceSelection,
  goToNextPage: changeToNextPage,
  goToPreviousPage: changeToPreviousPage,
  setListing: changeListing,
  goToPage: setPage,
  changeQuote: calculateQuote,
  filterInvoices: changeFilters,
  setSorting: updateSorting,
};

export default connect(mapStateToProps, mapDispatch)(InvoicesTable);
