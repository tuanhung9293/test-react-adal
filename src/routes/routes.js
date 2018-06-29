import ProtectedDashboard from '../containers/protected/ProtectedDashboard';

import App from '../containers/App';

const routes = [{
    component: App,
    routes: [
        {
            component: ProtectedDashboard,
            path: '/dashboard'
        }
    ]
}];

export default routes;