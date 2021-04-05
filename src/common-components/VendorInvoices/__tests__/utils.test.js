import sinon from 'sinon';
import { debounce, getSumFaceValue, parseFloatQuote } from '../utils';

describe('VendorInvoices utils parseFloatQuote tests', () => {
  const quote = {
    discountRate: '0.008880703832741080929348367530895797750158362714233985937198444',
    faceValue: '462189.0',
    netValue: '452171.81',
    payUpAt: '2020-10-20',
    term: '73.215018098656610175',
  };

  const expectedFloatQuote = {
    discountRate: 0.008880703832741080929348367530895797750158362714233985937198444,
    faceValue: 462189.0,
    netValue: 452171.81,
    payUpAt: '2020-10-20',
    term: 73.215018098656610175,
  };

  it('should return quote with correct values as float', () => {
    expect(parseFloatQuote(quote)).toEqual(expectedFloatQuote);
  });
});

describe('VendorInvoices utils getSumFaceValue tests', () => {
  const testCases = [
    {
      label: 'should return face value zero when no params are given',
      invoices: undefined,
      invoiceIds: undefined,
      expectedResult: 0,
    },
    {
      label: 'should return face value zero when params are nullish',
      invoices: null,
      invoiceIds: null,
      expectedResult: 0,
    },
    {
      label: 'should return face value zero when there are no invoices',
      invoices: [],
      invoiceIds: [1, 2, 3],
      expectedResult: 0,
    },
    {
      label: 'should return face value zero when there are no invoice ids',
      invoices: [
        { id: 1, face: 10 },
        { id: 2, face: 20 },
        { id: 2, face: 30 },
      ],
      invoiceIds: [],
      expectedResult: 0,
    },
    {
      label: 'should return correct face value sum for the invoices filtered by invoice ids',
      invoices: [
        { id: 1, face: 10 },
        { id: 2, face: 20 },
        { id: 3, face: 30 },
      ],
      invoiceIds: [1, 2, 3],
      expectedResult: 60,
    },
    {
      label: 'should return correct face value sum for the invoices filtered by invoice ids',
      invoices: [
        { id: 1, face: 10 },
        { id: 2, face: 20 },
        { id: 3, face: 30 },
      ],
      invoiceIds: [2],
      expectedResult: 20,
    },
  ];

  testCases.forEach(testCase => {
    const { label, invoices, invoiceIds, expectedResult } = testCase;
    it(label, () => {
      const sum = getSumFaceValue(invoices, invoiceIds);
      expect(sum).toEqual(expectedResult);
    });
  });
});

describe('VendorInvoices utils debounce tests', () => {
  let timeoutId;
  const callback = sinon.spy();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    timeoutId = null;
    callback.resetHistory();
  });

  it('should call callback function just once with multiple debounce calls with tracked timeoutId', () => {
    timeoutId = debounce(callback, timeoutId);
    timeoutId = debounce(callback, timeoutId);
    timeoutId = debounce(callback, timeoutId);

    jest.runAllTimers();

    expect(callback.calledOnce).toBeTruthy();
  });

  it('should call callback N times if timeoutId is not being updated', () => {
    debounce(callback, timeoutId);
    debounce(callback, timeoutId);
    debounce(callback, timeoutId);

    jest.runAllTimers();

    expect(callback.calledThrice).toBeTruthy();
  });
});
