import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GuardRoute from 'components/GuardRoute';
import './App.less';
import MainLayout from 'components/Layout/MainLayout';
import NotFound from 'components/NotFound';
import LoginPage from 'features/auth/pages/login';
import RegisterPage from 'features/auth/pages/register';
import AddInfo from 'features/auth/pages/AddInfo';
import AuthRoute from 'components/AuthRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthRoute path={'/login'} exact component={LoginPage}></AuthRoute>
        <AuthRoute path={'/register'} exact component={RegisterPage}></AuthRoute>
        <GuardRoute path={'/confirm-info'} component={AddInfo}></GuardRoute>
        <GuardRoute path={'/'} component={MainLayout}></GuardRoute>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
