import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderRegister from "./HeaderRegister";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth";
import image from "../images/sucesfull.svg";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();
  const mensaje = "¡Correcto!. Ya estas registrado";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await auth.register(password, email);
      console.log(data);
      if (data) {
        setEmail("");
        setPassword("");
        setShowTooltip(true);
        navigate("/singnin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div className="register">
      <HeaderRegister />
      <form className="register__form" onSubmit={handleSubmit}>
        <h1 className="register__titulo">Registrate</h1>
        <input
          className="register__input"
          placeholder="Correo electronico"
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="register__input"
          placeholder="Contraseña"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button className="register__btn-save">Registrate</button>
        <Link className="register__link" to="/singnin">
          ¿Ya eres miembro? Inicia sesion aqui
        </Link>
      </form>
      {showTooltip && (
        <InfoTooltip
          mensaje={mensaje}
          image={image}
          handleCloseTooltip={handleCloseTooltip}
        />
      )}
    </div>
  );
}

export default Register;
