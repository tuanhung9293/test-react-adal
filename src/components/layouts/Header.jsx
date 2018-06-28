import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import { authContext } from '../../adalConfig';

import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target=".navbar-collapse">

                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#/Home">ADAL JS Sample</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="{ active: isActive('/Home') }"><a href="#/Home">Home</a></li>
                            <li className="{ active: isActive('/TodoList') }"><a href="#/TodoList">Todo List</a></li>
                            <li className="{ active: isActive('/UserData') }"><a href="#/UserData"></a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="btn btn-link" onClick={() => authContext.logOut()}>Logout</a></li>
                            <li><a className="btn btn-link" onClick={() => authContext.login()}>Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);