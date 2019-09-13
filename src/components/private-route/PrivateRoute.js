import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, userLoggedIn, ...rest }) => {
  const renderer = (props) => {
    if(userLoggedIn) {
      return (<Component {...props} />);
    } else {
      return (<Redirect to={{ pathname: "/", state: { from: props.location } }} />);
    }
  };

  return(<Route {...rest} render={renderer} />);
};
