import sinon from 'sinon';
import * as actions from '../actions';
import store from '../store';

describe('Testing Toast Actions', () => {
  it('should return correct type and payload on removeMessage call', () => {
    const result = actions.removeMessage('id');
    expect(result).toEqual({
      type: 'REMOVE_MESSAGE',
      payload: 'id',
    });
  });
  it('should return correct type and payload on closeMessage call', () => {
    const result = actions.closeMessage('id');
    expect(result).toEqual({
      type: 'CLOSE_MESSAGE',
      payload: 'id',
    });
  });
  it('should return dipatch action on message.dark call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.dark('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('dark');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.basic call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.basic('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('basic');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.notice call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.notice('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('basic');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.info call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.info('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('basic');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.primary call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.primary('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('primary');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.success call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.success('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('success');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.alert call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.alert('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('alert');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.warning call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.warning('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('alert');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.error call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.error('message');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('error');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.basic call with duration', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.basic('message', 8000);
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('basic');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(8000);
    expect(dispatches[0].payload.action).toBeNull();
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch action on message.basic call with action', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.basic('message', null, 'action');
    const dispatches = dispatch.args[0];
    expect(dispatches[0].type).toBe('ADD_MESSAGE');
    expect(typeof dispatches[0].payload.id).toBe('string');
    expect(dispatches[0].payload.type).toBe('basic');
    expect(dispatches[0].payload.message).toBe('message');
    expect(dispatches[0].payload.duration).toBe(1500);
    expect(dispatches[0].payload.action).toBe('action');
    expect(dispatches[0].payload.show).toBeTruthy();
    dispatch.restore();
  });
  it('should return dipatch close action on message.dispel call', () => {
    const dispatch = sinon.stub(store, 'dispatch');
    actions.message.dispel('id');
    const dispatches = dispatch.args[0];
    expect(dispatches[0]).toEqual({
      type: 'CLOSE_MESSAGE',
      payload: 'id',
    });
    dispatch.restore();
  });
});
