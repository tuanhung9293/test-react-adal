import React from 'react';
import { Dashboard, Loading, ErrorPage } from '../pages';
import { withAdalLoginApi } from '../../adalConfig';

const ProtectedDashboard = withAdalLoginApi(Dashboard, () => <Loading />, (error) => <ErrorPage error={error}/>);

export default ProtectedDashboard