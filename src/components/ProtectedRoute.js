import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children, loggedIn, ...props }) {
  return (
    <Route {...props}>
      {loggedIn ? children : <Navigate to={"/Login"} />}
    </Route>
  );
}

export default ProtectedRoute;