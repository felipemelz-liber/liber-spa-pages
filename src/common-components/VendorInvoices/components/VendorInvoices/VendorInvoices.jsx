import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PrimaryButton, ToastContainer } from 'liber-components';
import { toast } from 'liber-components/components/Toast';
import {
  TitleContainer,
  Title,
  HeaderText,
  TotalInvoices,
  Link,
  RootContainer,
  DisableBootstrap,
  ButtonsContainer,
  ButtonLink,
  EmptyStateContainer,
} from './VendorInvoices.styles';
import {
  fetchInvoices,
  EXPIRES_EQ_FILTER,
  EXPIRES_GT_FILTER,
  NUMBER_FILTER,
  CNPJ_FILTER,
  EXPIRES_LT_FILTER,
  subscribeInvoices,
  anticipateInvoices,
  showAnticipationLimitError,
  subscribeToLimits,
} from '../../actions/VendorInvoicesActions';
import InvoicesTable from '../InvoicesTable/InvoicesTable';
import emptyImage from '../../../../../../assets/images/empty-states/invoices_empty.svg';
import LoadingButton from '../../../Buttons/LoadingButton';
import LoadingContainer from './LoadingContainer';
import AnticipationLimitCard from '../AnticipationLimitCard';
import UnavailableLimitDialog from '../../../UnavailableLimitDialog';

const hasInvoices = (invoices, isFiltered) => invoices.length > 0 || isFiltered;

const getIntroductionText = (hasAvailableInvoices, totalInvoices) => {
  if (hasAvailableInvoices) {
    return (
      <>
        No momento, <TotalInvoices>{totalInvoices}</TotalInvoices> títulos estão disponíveis para
        antecipação. <br />
        Selecione os títulos abaixo e solicite sua antecipação.
      </>
    );
  }

  return (
    <>
      Não encontramos nenhum título disponível para antecipação. <br /> Verifique em{' '}
      <Link href="/fornecedor/negociacoes?q%5Bstatus_in%5D%5B%5D=0&q%5Bstatus_in%5D%5B%5D=7">
        Antecipações
      </Link>{' '}
      se existe alguma operação não concluída.
    </>
  );
};

export const VendorInvoices = ({
  totalInvoices,
  currentPage,
  getInvoices,
  filters,
  loading,
  canInputXml,
  inputXmlPath,
  subscribe,
  pageListing,
  isFiltered,
  invoices,
  selectedInvoices,
  report,
  requestAnticipateAll,
  loadingButton,
  redirectUrl,
  isAdmin,
  sorting,
  token,
  limitError,
  updateShowAnticipationLimitError,
  onSubscribeToLimits,
}) => {
  React.useEffect(() => {
    getInvoices();
  }, [currentPage, pageListing, filters, sorting]);

  if (!isAdmin) {
    React.useEffect(() => {
      subscribe();
      onSubscribeToLimits();
    }, []);

    React.useEffect(() => {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    }, [redirectUrl]);

    React.useEffect(() => {
      const { successful, url, errorMessage } = report;
      if (successful) {
        window.open(url);
      } else if (errorMessage) {
        toast(
          {
            message: 'Erro ao baixar o Relatório da Simulação',
            info: `Ocorreu um erro ao baixar o relatório, tente novamente.
            Se o problema persistir, entre em contato com o suporte`,
          },
          'error',
          8000,
        );
      }
    }, [report]);
  }

  const hasAvailableInvoices = hasInvoices(invoices, isFiltered);

  const renderInvoiceTable = () =>
    hasAvailableInvoices ? (
      <InvoicesTable />
    ) : (
      <EmptyStateContainer>
        <img src={emptyImage} alt="" />
      </EmptyStateContainer>
    );

  const handleCloseLimitDialog = () =>
    updateShowAnticipationLimitError({ show: false, surplusValue: 0 });

  return isAdmin ? (
    <LoadingContainer loading={loading}>
      <div>{renderInvoiceTable()}</div>
    </LoadingContainer>
  ) : (
    <LoadingContainer loading={loading}>
      <ToastContainer />
      <RootContainer>
        <DisableBootstrap />
        <UnavailableLimitDialog
          show={limitError?.show}
          onLeaved={handleCloseLimitDialog}
          surplusValue={limitError?.surplusValue}
        />
        <TitleContainer>
          <Title>Títulos</Title>
          {hasAvailableInvoices ? (
            <ButtonsContainer>
              {canInputXml ? (
                <ButtonLink href={inputXmlPath}>INSERIR NOTAS FISCAIS</ButtonLink>
              ) : null}
              <LoadingButton
                disabled={isFiltered || selectedInvoices.length > 0}
                size="large"
                loading={loadingButton}
                ButtonComponent={PrimaryButton}
                onClick={requestAnticipateAll}
              >
                ANTECIPAR TODOS
              </LoadingButton>
            </ButtonsContainer>
          ) : null}
        </TitleContainer>
        <HeaderText>{getIntroductionText(hasAvailableInvoices, totalInvoices)}</HeaderText>
        <AnticipationLimitCard token={token} />
        {renderInvoiceTable()}
      </RootContainer>
    </LoadingContainer>
  );
};

VendorInvoices.propTypes = {
  totalInvoices: PropTypes.number,
  currentPage: PropTypes.number,
  getInvoices: PropTypes.func,
  filters: PropTypes.shape({
    [NUMBER_FILTER]: PropTypes.arrayOf(PropTypes.number),
    [CNPJ_FILTER]: PropTypes.string,
    [EXPIRES_EQ_FILTER]: PropTypes.string,
    [EXPIRES_GT_FILTER]: PropTypes.string,
    [EXPIRES_LT_FILTER]: PropTypes.string,
  }),
  loading: PropTypes.bool,
  canInputXml: PropTypes.bool,
  inputXmlPath: PropTypes.string,
  subscribe: PropTypes.func,
  pageListing: PropTypes.number,
  isFiltered: PropTypes.bool,
  invoices: PropTypes.arrayOf(PropTypes.object),
  selectedInvoices: PropTypes.arrayOf(PropTypes.number),
  report: PropTypes.shape({
    successful: PropTypes.bool,
    url: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
  requestAnticipateAll: PropTypes.func,
  loadingButton: PropTypes.bool,
  redirectUrl: PropTypes.string,
  isAdmin: PropTypes.bool,
  sorting: PropTypes.shape({}),
  token: PropTypes.string,
  limitError: PropTypes.shape({
    show: PropTypes.bool,
    surplusValue: PropTypes.number,
  }),
  updateShowAnticipationLimitError: PropTypes.func,
  onSubscribeToLimits: PropTypes.func,
};

VendorInvoices.defaultProps = {
  totalInvoices: 0,
  currentPage: 1,
  getInvoices: () => null,
  filters: {
    [NUMBER_FILTER]: null,
    [CNPJ_FILTER]: null,
    [EXPIRES_EQ_FILTER]: null,
    [EXPIRES_GT_FILTER]: null,
    [EXPIRES_LT_FILTER]: null,
  },
  loading: false,
  canInputXml: false,
  inputXmlPath: null,
  subscribe: () => {},
  pageListing: 10,
  isFiltered: false,
  invoices: [],
  selectedInvoices: [],
  report: {},
  requestAnticipateAll: () => {},
  loadingButton: false,
  redirectUrl: null,
  isAdmin: false,
  sorting: {},
  token: '',
  limitError: { show: false, surplusValue: 0 },
  updateShowAnticipationLimitError: () => {},
  onSubscribeToLimits: () => {},
};

const mapStateToProps = ({
  vendorInvoices: {
    pagination: { count: totalInvoices, current: currentPage, per: pageListing },
    filters,
    loading,
    canInputXml,
    inputXmlPath,
    isFiltered,
    invoices,
    selectedInvoices,
    report,
    loadingButton,
    redirectUrl,
    isAdmin,
    sorting,
    token,
    limitError,
  },
}) => ({
  totalInvoices,
  currentPage,
  filters,
  loading,
  canInputXml,
  inputXmlPath,
  pageListing,
  isFiltered,
  invoices,
  selectedInvoices,
  report,
  loadingButton,
  redirectUrl,
  isAdmin,
  sorting,
  token,
  limitError,
});

const mapDispatchToProps = {
  getInvoices: fetchInvoices,
  subscribe: subscribeInvoices,
  requestAnticipateAll: anticipateInvoices,
  updateShowAnticipationLimitError: showAnticipationLimitError,
  onSubscribeToLimits: subscribeToLimits,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorInvoices);
