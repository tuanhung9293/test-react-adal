import React , { Component } from 'react';
import { Dashboard, Loading, ErrorPage } from '../pages';
import { withAdalLoginApi } from '../../adalConfig';
import { MasterLayout } from '../../components/layouts';

class ProtectedDashboard extends Component {
    render() {
        const LayDashboard = withAdalLoginApi(Dashboard, () => <Loading />, (error) => <ErrorPage error={error}/>);
        return (
            <MasterLayout>
                <LayDashboard />
            </MasterLayout>
        );
    }
}

export default ProtectedDashboard