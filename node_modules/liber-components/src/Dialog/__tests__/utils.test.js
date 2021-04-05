import sinon from 'sinon';
import { getBgTransitionStyle, hideScrollBar, showScrollBar } from '../utils';

describe('Dialog Utils tests', () => {
  it('should return correct object in getBgTrasitionStyle', () => {
    const result = getBgTransitionStyle(250);
    expect(result).toEqual({
      entering: {
        opacity: 0,
      },
      entered: {
        opacity: 0.15,
        transition: 'opacity 250ms cubic-bezier(0.47, 0, 0.745, 0.715)',
      },
      exiting: {
        opacity: 0,
        transition: 'opacity 250ms cubic-bezier(0.39, 0.575, 0.565, 1)',
        transitionDelay: '250ms',
      },
      exited: {
        opacity: 0,
      },
    });
  });
  it('should hide the scrollbar on document with hideScrollBar', () => {
    const pos = hideScrollBar(document.body);
    expect(pos).toBe(0);
    expect(document.body.style.top).toBe('-0px');
    expect([...document.body.classList].includes('modal-open')).toBeTruthy();
  });
  it('should hide the scrollbar on document with hideScrollBar', () => {
    window.scrollTo = sinon.spy();
    showScrollBar(document.body, 50);
    expect(document.body.style.top).toBe('');
    expect([...document.body.classList].includes('modal-open')).toBeFalsy();
    expect(window.scrollTo.calledWith(0, 50));
  });
});
