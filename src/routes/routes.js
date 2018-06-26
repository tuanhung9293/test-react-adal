import {
    UserLogin,
} from '../containers/pages';
import ProtectedDashboard from '../containers/protected/ProtectedDashboard';

import App from '../containers/App';

const routes = [{
    component: App,
    routes: [{
            component: UserLogin,
            path: '/login'
        },
        {
            component: ProtectedDashboard,
            path: '/dashboard'
        }
    ]
}];

export default routes;