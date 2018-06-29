import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router/Route';
import withRouter from 'react-router/withRouter';
import ConnectedSwitch from './connectedSwitch';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Home,
} from '../containers/pages';
import ProtectedDashboard from '../containers/protected/ProtectedDashboard';
import ProtectedUser from '../containers/protected/ProtectedUser';

const RenderRoutes = ({routes, auth, location}) => {
  if (!routes) {
    return null;
  }

  routes.forEach((route) => {
    if (!route.requireLogin || !route.routes) {
      return;
    }
    const requireLogin = route.requireLogin;
    route.routes.forEach(route => route.requireLogin = requireLogin);
  });

  return (
    <ConnectedSwitch>
        <Route path="/home" component={Home}/>
        <Route path="/dashboard" component={ProtectedDashboard}/>
        <Route path="/user" component={ProtectedUser}/>
        <Redirect from='' to='/home'/>
    </ConnectedSwitch>
  );
};

RenderRoutes.propTypes = {
  parent: PropTypes.array,
};

const mapStateToProps = state => ({auth: state.auth});

export default withRouter(connect(mapStateToProps, null)(RenderRoutes));
