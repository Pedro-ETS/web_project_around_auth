import React from "react";
import GenericHeader from "./GenericHeader";
import { NavLink } from "react-router-dom";

function HeaderMain(props) {
  function signOut() {
    localStorage.removeItem("token");
  }
  return (
    <GenericHeader>
      <h1 className="header__email">{props.email}</h1>
      <NavLink exact className="header__titulo" to="/signin" onClick={signOut}>
        Cerrar sesión
      </NavLink>
    </GenericHeader>
  );
}

export default HeaderMain;
