import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, main }) {
  return loggedIn ? main : <Navigate to={"/web_project_around_auth/signin"} />;   
}

export default ProtectedRoute;
