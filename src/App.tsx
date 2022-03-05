import React, { lazy, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.less';

import { GuardRoute, NotFound } from 'components/Common';
const LoginPage = lazy(() => import('features/auth/pages/login'));
const RegisterPage = lazy(() => import('features/auth/pages/register'));
const AddInfo = lazy(() => import('features/auth/pages/AddInfo'));
const MainLayout = lazy(() => import('components/Layout/MainLayout'));
const Activate = lazy(() => import('features/auth/pages/activate'));

function App() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/dashboard');
    }
  }, [location.pathname]);
  return (
    <div className="App">
      <Switch>
        <Route path={'/login'} exact component={LoginPage}></Route>
        <Route path={'/register'} exact component={RegisterPage}></Route>
        <Route path={'/activate'} exact component={Activate}></Route>
        <GuardRoute path={'/confirm-info'} component={AddInfo}></GuardRoute>
        <GuardRoute path={'/dashboard'} component={MainLayout}></GuardRoute>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
