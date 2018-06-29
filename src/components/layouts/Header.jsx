import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import { authContext } from '../../adalConfig';

import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        console.log(authContext);
        const userInfo = authContext._user;
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
                        <Link to={'home'} className="navbar-brand">ADAL JS Sample</Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className={`${this.props.activeLink === 'home' ? 'active' : ''}`}><Link to={'home'}>Home</Link></li>
                            <li className={`${this.props.activeLink === 'dashboard' ? 'active' : ''}`}><Link to={'dashboard'}>Todo List</Link></li>
                            {
                                userInfo && <li className={`${this.props.activeLink === 'user' ? 'active' : ''}`}><Link to={'user'}>User</Link></li>
                            }
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {
                                userInfo ? <li><a className="btn btn-link" onClick={() => authContext.logOut()}>Logout</a></li>
                                    : <li><a className="btn btn-link" onClick={() => {authContext.login(); authContext.clearCache();}}>Login</a></li>
                            }
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