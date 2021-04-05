import sinon from 'sinon';
import { getOverlayPosition } from '../PositionHelper';

describe('PositionHelper tests', () => {
  const getBoundsStub = sinon.stub();

  const mockBgRef = {
    current: {
      getBoundingClientRect: getBoundsStub,
    },
  };

  const mockOverlayRef = {
    current: {
      getBoundingClientRect: getBoundsStub,
    },
  };

  const defaultCase = { top: 0, left: 0, maxWidth: 0, maxHeight: 0 };

  afterEach(() => {
    getBoundsStub.resetHistory();
  });

  it('should return defaultCase if no refs are set', () => {
    expect(getOverlayPosition({}, {})).toEqual(defaultCase);
  });

  it('should return defaultCase if only one of the refs are set', () => {
    expect(getOverlayPosition(mockBgRef, {})).toEqual(defaultCase);
    expect(getOverlayPosition({}, mockOverlayRef)).toEqual(defaultCase);
  });

  it('should return central position if overlay is in bounds', () => {
    getBoundsStub.onFirstCall().returns({ height: 100, width: 100, x: 0, y: 0 });
    getBoundsStub.onSecondCall().returns({ height: 50, width: 50, x: 0, y: 0 });

    expect(getOverlayPosition(mockBgRef, mockOverlayRef)).toEqual({
      maxHeight: 100,
      maxWidth: 100,
      top: 25,
      left: 25,
    });
  });

  it('should return central position if overlay is out of bounds on height', () => {
    getBoundsStub.onFirstCall().returns({ height: 100, width: 100, x: 0, y: 0 });
    getBoundsStub.onSecondCall().returns({ height: 150, width: 50, x: 0, y: 0 });

    expect(getOverlayPosition(mockBgRef, mockOverlayRef)).toEqual({
      maxHeight: 100,
      maxWidth: 100,
      top: 0,
      left: 25,
    });
  });

  it('should return central position if overlay is out of bounds on width', () => {
    getBoundsStub.onFirstCall().returns({ height: 100, width: 100, x: 0, y: 0 });
    getBoundsStub.onSecondCall().returns({ height: 50, width: 150, x: 0, y: 0 });

    expect(getOverlayPosition(mockBgRef, mockOverlayRef)).toEqual({
      maxHeight: 100,
      maxWidth: 100,
      top: 25,
      left: 0,
    });
  });

  it('should return central position if overlay is out of bounds completely', () => {
    getBoundsStub.onFirstCall().returns({ height: 100, width: 100, x: 50, y: 50 });
    getBoundsStub.onSecondCall().returns({ height: 150, width: 150, x: 0, y: 0 });

    expect(getOverlayPosition(mockBgRef, mockOverlayRef)).toEqual({
      maxHeight: 100,
      maxWidth: 100,
      top: 50,
      left: 50,
    });
  });
});
