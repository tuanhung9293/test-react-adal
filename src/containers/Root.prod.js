import React from 'react';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { RenderRoutes } from '../routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
const { store, persistor } = configureStore();

const Root = ({ routes, history }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Route>
            <RenderRoutes routes={routes} />
        </Route>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Root;
