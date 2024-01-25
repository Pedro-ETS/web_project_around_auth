import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogin from "./HeaderLogin";
function Login(props) {
    return (
        <div className="sign-in">
          <HeaderLogin/>
        <h1 className='sign-in__titulo'>iniciar sesion</h1>
        <input
          id="login-correo"
          className="sign-in__input"
          placeholder="Correo electronico"
          minlength={2}
          maxlength={40}
          required
        />
        <input
          id="login-contraseña"
          className="sign-in__input"
          placeholder="Contraseña"
          type='password'
          minlength={2}
          maxlength={40}
          required
        />
        <button className='sign-in__btn-start'>Iniciar sesion</button>
        <Link className='sign-in__link' to="/">¿Aún no eres miembro?  Regístrate aquí</Link>
          
        </div>
    );
}

export default Login;