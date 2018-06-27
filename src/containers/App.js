import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RenderRoutes } from '../routes';
import * as Actions from '../store/actions/';
import '../assets/styles/main.css';

class App extends Component {
  render() {
    return (
      <RenderRoutes routes={this.props.route.routes}/>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
