import React, { ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export default function AuthRoute(props: RouteProps): ReactElement {
  const isLoggedIn = Boolean(localStorage.getItem('access_token_invest'));
  if (isLoggedIn) {
    return <Redirect to={'/'} />;
  }
  return <Route {...props} />;
}
