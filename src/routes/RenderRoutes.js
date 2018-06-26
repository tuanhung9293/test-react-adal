import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router/Route';
import withRouter from 'react-router/withRouter';
import ConnectedSwitch from './connectedSwitch';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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
      {routes.map((route, i) => (
        <Route key={i} path={route.path} exact={route.exact} strict={route.strict} render={(props) => (
          <div>
            {
              route.requireLogin && !auth.token && (
                <Redirect to={{
                  pathname: route.requireLogin,
                  state: { from: route.path }
                }}/>
              )
            }
            {
              (
                !route.requireLogin ||
                auth.token ||
                !route.path ||
                route.requireLogin === route.path
              ) &&
              <route.component {...props} route={route}/>
            }
          </div>
        )}/>
      ))}
    </ConnectedSwitch>
  );
};

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
  parent: PropTypes.array,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({auth: state.auth});

export default withRouter(connect(mapStateToProps, null)(RenderRoutes));
