import React from 'react';
import { Route } from 'react-router-dom';


const AuthenticatedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => localStorage.getItem("user.api_token")? (
      <Component {...props}/>
  ):(
    <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
  )
  } />
);

export default AuthenticatedRoute;