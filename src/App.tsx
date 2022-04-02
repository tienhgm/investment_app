import React, { lazy, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.less';

import { GuardRoute, NotFound } from 'components/Common';
import { useAppSelector } from 'app/hooks';
<<<<<<< HEAD
=======
import { selectIsLoggedIn } from 'app/slices/authSlice';
>>>>>>> 9392509 (fix activate)
const LoginPage = lazy(() => import('features/auth/pages/login'));
const RegisterPage = lazy(() => import('features/auth/pages/register'));
const AddInfo = lazy(() => import('features/auth/pages/AddInfo'));
const MainLayout = lazy(() => import('components/Layout/MainLayout'));
const Activate = lazy(() => import('features/auth/pages/activate'));

function App() {
  const location = useLocation();
  const history = useHistory();
<<<<<<< HEAD
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isActive = useAppSelector((state) => state.auth.curUser?.is_activated);
=======
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
>>>>>>> 9392509 (fix activate)
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/dashboard');
    }
  }, [location.pathname]);
  return (
    <div className="App">
      <Switch>
        <Route path={'/login'} exact component={LoginPage}>
<<<<<<< HEAD
          {isLoggedIn && <Redirect to={'/dashboard'} />}
        </Route>
        <Route path={'/register'} exact component={RegisterPage}>
          {isLoggedIn && <Redirect to={'/dashboard'} />}
        </Route>
        <GuardRoute path={'/activate'} exact component={Activate}>
          {/* {isLoggedIn ? <Activate /> : <Redirect to={'/login'} />} */}
          {isActive && <Redirect to={'/dashboard'} />}
        </GuardRoute>
=======
          {isLoggedIn ? <Redirect to={'/dashboard'} /> : <LoginPage />}
        </Route>
        <Route path={'/register'} exact component={RegisterPage}></Route>
        <Route path={'/activate'} exact component={Activate}>
          {!isLoggedIn ? <Redirect to={'/login'} /> : <Activate />}
        </Route>
>>>>>>> 9392509 (fix activate)
        <GuardRoute path={'/confirm-info'} component={AddInfo}></GuardRoute>
        <GuardRoute path={'/dashboard'} component={MainLayout}>
          {!isActive && <Redirect to={'/activate'} />}
        </GuardRoute>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
