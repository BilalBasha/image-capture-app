import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  return true;
}


function PrivateRoute({component: Component, ...rest}) {

  return (
    <Route {...rest}
      render={ props =>
        isAuthenticated() ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: '/' }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;