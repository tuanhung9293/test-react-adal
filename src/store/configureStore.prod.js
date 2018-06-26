import { apiClients, apiMiddlewareConfig } from '../middlewares/Api';
import { createStore, applyMiddleware } from 'redux'
import { multiClientMiddleware } from 'redux-axios-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import storage from 'localforage';

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(
      thunk,
      multiClientMiddleware(apiClients, apiMiddlewareConfig),
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
