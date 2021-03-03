import React from 'react';

import Home from './containers/Home';
import Login from './containers/Login';

// export default (
//   <div>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Login} />
//   </div>
// );

export default [
  {
    key: 'Home',
    path: '/',
    exact: true,
    component: Home,
    loadData: Home.loadData,
  },
  {
    key: 'Login',
    path: '/login',
    exact: true,
    component: Login,
  },
];
