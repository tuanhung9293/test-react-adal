import React , { Component } from 'react';
import { Dashboard, Loading, ErrorPage } from '../pages';
import { withAdalLoginApi } from '../../adalConfig';

class ProtectedDashboard extends Component {
    render() {
        const LayDashboard = withAdalLoginApi(Dashboard, () => <Loading />, (error) => <ErrorPage error={error}/>);
        return (
            <LayDashboard />
        );
    }
}

export default ProtectedDashboard