import React from "react";
import GenericHeader from "./GenericHeader";
import { NavLink } from "react-router-dom";

function HeaderRegister() {
  return (
    <GenericHeader>
      <NavLink exact className="header__titulo" to="/web_project_around_auth/signin">
        Iniciar sesión
      </NavLink>
    </GenericHeader>
  );
}

export default HeaderRegister;
