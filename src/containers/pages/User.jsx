import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';
import { authContext } from '../../adalConfig';

class User extends Component {
    render() {
        const userInfo = authContext._user;
        return (
            <div className="user-page container">
                <h3>
                    Id_token content
                </h3>
                <p>{userInfo.userName}</p>
                <p>aud: {userInfo.profile.aud}</p>
                <p>iss: {userInfo.profile.iss}</p>
                <p>iat: {userInfo.profile.iat}</p>
                <p>nbf: {userInfo.profile.nbf}</p>
                <p>exp: {userInfo.profile.exp}</p>
                <p>ver: {userInfo.profile.ver}</p>
                <p>tid: {userInfo.profile.tid}</p>
                <p>amr: {userInfo.profile.amr}</p>
                <p>oid: {userInfo.profile.oid}</p>
                <p>upn: {userInfo.profile.upn}</p>
                <p>unique_name:  {userInfo.profile.unique_name}</p>
                <p>sub:  {userInfo.profile.sub}</p>
                <p>family_name: {userInfo.profile.family_name}</p>
                <p>given_name: {userInfo.profile.given_name}</p>
                <p>pwd_exp: {userInfo.profile.pwd_exp}</p>
                <p>pwd_url: {userInfo.profile.pwd_url}</p>
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
)(User);

