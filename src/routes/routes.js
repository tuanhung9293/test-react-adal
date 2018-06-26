import {
    UserLogin,
    Dashboard,
  } from '../containers/pages';
  
  import App from '../containers/App';
  
  const routes = [
    {
      component: App,
      routes: [
        {
          component: UserLogin,
          path: '/login'
        },
        {
          component: Dashboard,
          path: '/dashboard'
        }
      ]
    }
  ];
  
  export default routes;
  