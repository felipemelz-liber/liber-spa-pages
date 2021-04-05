import { applyMiddleware, createStore } from 'redux';
import Immutable from 'seamless-immutable';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import immutable from 'redux-immutable-state-invariant';

import reducers from './reducers';

const getMiddleware = extraThunk => {
  if (process.env.NODE_ENV !== 'test') {
    const { composeWithDevTools } = require('redux-devtools-extension'); // eslint-disable-line global-require

    const composeEnhancers = composeWithDevTools({});
    return composeEnhancers(
      applyMiddleware(
        promise(),
        extraThunk ? thunk.withExtraArgument(extraThunk) : thunk,
        createLogger(),
        immutable(),
      ),
    );
  }
  return applyMiddleware(
    promise(),
    extraThunk ? thunk.withExtraArgument(extraThunk) : thunk,
  );
};

export default (railsProps, extraThunk) => {
  const middleware = getMiddleware(extraThunk);
  const defaultStore = Immutable(reducers());
  const store = createStore(
    reducers,
    defaultStore.merge(railsProps || {}, { deep: true }),
    middleware,
  );
  return store;
};
