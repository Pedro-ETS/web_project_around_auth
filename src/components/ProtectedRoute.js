import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, main }) {
  return loggedIn ? main : <Navigate to={"/singnin"} />;
}

export default ProtectedRoute;