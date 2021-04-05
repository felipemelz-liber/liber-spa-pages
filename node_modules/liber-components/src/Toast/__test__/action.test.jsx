import sinon from 'sinon';
import * as actions from '../actions';
import store from '../store';

describe('Testing Toast Actions', () => {
  it('should return correct type and payload on removeToast call', () => {
    const result = actions.removeToast('id');
    expect(result).toEqual({
      type: 'REMOVE_TOAST',
      payload: 'id',
    });
  });
  it('should return correct type and payload on closeToast call', () => {
    const result = actions.closeToast('id');
    expect(result).toEqual({
      type: 'CLOSE_TOAST',
      payload: 'id',
    });
  });
  it('should return dipatch action on toast call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    const id = actions.toast('mock', 'info', 0);
    const dispatches = dispatch.args[0];
    expect(id.length).toBe(5);
    expect(typeof id).toBe('string');
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].type).toBe('ADD_TOAST');
    expect(dispatches[0].payload.id).toBe(id);
    expect(dispatches[0].payload.type).toBe('info');
    expect(dispatches[0].payload.message).toBe('mock');
    expect(dispatches[0].payload.duration).toBe(0);
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on toast call with object', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    const id = actions.toast({ message: 'mock', info: 'info', content: 'content' }, 'info', 0);
    const dispatches = dispatch.args[0];
    expect(id.length).toBe(5);
    expect(typeof id).toBe('string');
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].type).toBe('ADD_TOAST');
    expect(dispatches[0].payload.id).toBe(id);
    expect(dispatches[0].payload.type).toBe('info');
    expect(dispatches[0].payload.info).toBe('info');
    expect(dispatches[0].payload.content).toBe('content');
    expect(dispatches[0].payload.message).toBe('mock');
    expect(dispatches[0].payload.duration).toBe(0);
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
});
