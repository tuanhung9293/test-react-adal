import React , { Component } from 'react';
import { User, Loading, ErrorPage } from '../pages';
import { withAdalLoginApi } from '../../adalConfig';
import { MasterLayout } from '../../components/layouts';

class ProtectedUser extends Component {
    render() {
        const LayUser = withAdalLoginApi(User, () => <Loading />, (error) => <ErrorPage error={error}/>);
        return (
            <MasterLayout activeLink="user">
                <LayUser/>
            </MasterLayout>
        );
    }
}

export default ProtectedUser