import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, main }) {
  return loggedIn ? main : <Navigate to={"/signin"} />;   
}

export default ProtectedRoute;
