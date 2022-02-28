import { useAppSelector } from 'app/hooks';
import { selectIsLoggedIn } from 'app/slices/authSlice';
import React, { ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export function AuthRoute(props: RouteProps): ReactElement {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  if (!isLoggedIn) {
    return <Redirect to={'/login'} />;
  }
  return <Route {...props} />;
}
