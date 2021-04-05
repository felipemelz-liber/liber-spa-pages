import { intersectionBy } from 'lodash';

export const addRateByPeriodPercentage = invoice => {
  const { taxa: rate, prazoCorrido: period } = invoice;

  const periodRate = (rate * period) / 30;

  return {
    ...invoice,
    periodRate,
  };
};

export const getQuoteFromSelected = (selectedInvoices, invoices, rateByPeriod) => {
  const invoicesObjects = intersectionBy(invoices, selectedInvoices, item => item.id || item);

  const quote = invoicesObjects.reduce(
    (prevQuote, invoice) => {
      const { faceValue, discountValue, netValue, weightedTerm } = prevQuote;
      const { face, netValue: invoiceValue, prazoCorrido: period } = invoice;

      const invoiceFaceValue = parseFloat(face);
      const invoiceNetValue = parseFloat(invoiceValue);

      return {
        faceValue: faceValue + invoiceFaceValue,
        netValue: netValue + invoiceNetValue,
        weightedTerm: weightedTerm + invoiceFaceValue * period,
        discountValue: discountValue + (invoiceFaceValue - invoiceNetValue),
      };
    },
    { faceValue: 0, discountValue: 0, weightedTerm: 0, netValue: 0 },
  );

  const { weightedTerm, faceValue, netValue } = quote;

  const weightedAvarageTerm = weightedTerm / faceValue;

  const discountRateInPeriod = 1 - netValue / faceValue;
  const discountRate = discountRateInPeriod * (30 / weightedAvarageTerm);

  return { ...quote, discountRate: rateByPeriod ? discountRateInPeriod : discountRate };
};

export const getQuoteSubtractingUnselected = (unselectedInvoices, quoteAll, rateByPeriod) => {
  const quote = unselectedInvoices.reduce(
    (prevQuote, invoice) => {
      const { faceValue, netValue, term: weightedTerm } = prevQuote;
      const { face, netValue: invoiceValue, prazoCorrido: period } = invoice;

      const invoiceFaceValue = parseFloat(face);
      const invoiceNetValue = parseFloat(invoiceValue);
      const invoicePeriod = parseFloat(period);

      return {
        faceValue: faceValue - invoiceFaceValue,
        netValue: netValue - invoiceNetValue,
        term: weightedTerm - invoiceFaceValue * invoicePeriod,
      };
    },
    { ...quoteAll, term: quoteAll.term * quoteAll.faceValue },
  );

  const { term: weightedTerm, faceValue, netValue } = quote;

  const weightedAvarageTerm = weightedTerm / faceValue;

  const discountRateInPeriod = 1 - netValue / faceValue;
  const discountRate = discountRateInPeriod * (30 / weightedAvarageTerm);
  const discountValue = faceValue - netValue;

  return {
    ...quote,
    discountValue,
    discountRate: rateByPeriod ? discountRateInPeriod : discountRate,
  };
};

export const hasFilters = filters =>
  Object.keys(filters).reduce((flag, filterKey) => flag || Boolean(filters[filterKey]), false);

export const parseFloatQuote = (quote = {}) => ({
  ...quote,
  faceValue: parseFloat(quote?.faceValue || 0),
  netValue: parseFloat(quote?.netValue || 0),
  discountRate: parseFloat(quote?.discountRate || 0),
  term: parseFloat(quote?.term || 0),
});

export const getSumFaceValue = (invoices = [], invoiceIds = []) =>
  invoices?.reduce((sum, invoice) => {
    if (invoiceIds?.includes(invoice?.id)) {
      return sum + parseFloat(invoice?.face || 0);
    }
    return sum;
  }, 0) || 0;

export function debounce(callback, timeoutId, delay = 2000) {
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
  return setTimeout(callback, delay);
}
