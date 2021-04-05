import lodash from 'lodash';
import sinon from 'sinon';
import * as toastObj from 'liber-components/components/Toast/actions';
import {
  convertToCamelCase,
  // calculateQuote,
  updateAdvances,
  updateSignedAdvances,
  getStatusCount,
  calculateQuote,
  handleError,
  TOAST_DURATION,
} from '../utils';

describe('utils tests', () => {
  const findStub = sinon.stub(lodash, 'find');
  const toastSpy = sinon.spy(toastObj, 'toast');

  afterEach(() => {
    findStub.resetHistory();
    toastSpy.resetHistory();
  });

  afterAll(() => {
    findStub.restore();
    toastSpy.restore();
  });

  it('convertToCamelCase should convert correctly', () => {
    const object = { mock_field: 'mock' };
    sinon.stub(lodash, 'camelCase').returns('mockField');

    expect(convertToCamelCase(object)).toEqual({ mockField: 'mock' });
  });

  it('handle error should call toast correctly', () => {
    handleError();
    expect(
      toastSpy.calledWith(
        {
          message: 'Um erro ocorreu',
          info: 'Por favor tente novamente mais tarde ou entre em contato com o suporte',
        },
        'error',
        TOAST_DURATION,
      ),
    ).toBeTruthy();
  });

  it('calculateQuote should return correct object', () => {
    const advances = [
      { faceValue: 100, invoiceCount: 10, agreedRate: 0.009, netValue: 50 },
      { faceValue: 100, invoiceCount: 10, agreedRate: 0.008, netValue: 50 },
    ];

    const result = {
      faceValue: 200,
      discountRate: 0.008499999999999999,
      netValue: 100,
      invoiceCount: 20,
    };

    expect(calculateQuote(advances)).toEqual(result);
  });

  it('updateAdvances should update objects correctly', () => {
    const advances = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const documents = [
      { id: 1, signingId: 1 },
      { id: 2, signingId: 2 },
    ];

    const [first, second] = documents;
    findStub.withArgs(documents, { id: first.id }).returns(first);
    findStub.withArgs(documents, { id: second.id }).returns(second);

    const result = [{ id: 1, signingId: 1 }, { id: 2, signingId: 2 }, { id: 3 }, { id: 4 }];

    expect(updateAdvances(advances, documents)).toEqual(result);
  });

  it('updateSignedAdvances should update objects correctly', () => {
    const advances = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const documents = [
      { id: 1, signatureProgress: 1, status: 'error' },
      { id: 2, signatureProgress: 2, status: 'completed' },
      { id: 3, signatureProgress: 3, status: 'waiting' },
    ];

    const [first, second, third] = documents;
    findStub.withArgs(documents, { id: first.id }).returns(first);
    findStub.withArgs(documents, { id: second.id }).returns(second);
    findStub.withArgs(documents, { id: third.id }).returns(third);

    const result = [
      { id: 1, signatureProgress: 1, userHasSigned: false },
      { id: 2, signatureProgress: 2, userHasSigned: true },
      { id: 3, signatureProgress: 3, userHasSigned: true },
      { id: 4 },
    ];

    expect(updateSignedAdvances(advances, documents)).toEqual(result);
  });

  it('getStatusCount should return correct status count when count = 0', () => {
    const documents = [
      { id: 1, status: 'a' },
      { id: 1, status: 'a' },
      { id: 1, status: 'a' },
    ];

    expect(getStatusCount(documents, 'b')).toBe(0);
  });

  it('getStatusCount should return correct status count when count = 3', () => {
    const documents = [
      { id: 1, status: 'a' },
      { id: 1, status: 'a' },
      { id: 1, status: 'a' },
    ];

    expect(getStatusCount(documents, 'a')).toBe(3);
  });
});
