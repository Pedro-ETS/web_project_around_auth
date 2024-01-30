import React from "react";
import GenericHeader from "./GenericHeader";
import { NavLink } from "react-router-dom";

function HeaderLogin() {
  return (
    <GenericHeader>
      <NavLink exact className="header__titulo" to="/web_project_around_auth/signup">
        Registrate
      </NavLink>
    </GenericHeader>
  );
}

export default HeaderLogin;
