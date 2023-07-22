import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../routes';
import React from 'react';
import { AuthStatus } from '../../const/auth-status.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: React.ReactElement;
}

function PrivateRoute(props: PrivateRouteProps): React.ReactElement {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
