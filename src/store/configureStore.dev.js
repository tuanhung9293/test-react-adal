import { apiClients, apiMiddlewareConfig } from '../middlewares/Api';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import storage from 'localforage';

const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(
        thunk,
        multiClientMiddleware(apiClients, apiMiddlewareConfig),
        createLogger()
      ),
      DevTools.instrument()
    )
  );
  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }

  return { persistor, store };
}

export default configureStore;
