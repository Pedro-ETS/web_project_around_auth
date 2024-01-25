import React from 'react';
import { Link } from 'react-router-dom';
import HeaderRegister from './HeaderRegister';
import HeaderLogin from './HeaderLogin';


function Register(props) {
    return (
        <div className="sign-up">
          <HeaderRegister/>
          <h1 className='sign-up__titulo'>Registrate</h1>
          <input
          id="login-correo"
          className="sign-up__input"
          placeholder="Correo electronico"
          minlength={2}
          maxlength={40}
          required
        />
        <input
          id="login-contraseña"
          className="sign-up__input"
          placeholder="Contraseña"
          type='password'
          minlength={2}
          maxlength={40}
          required
        />
        <button className='sign-in__btn-save'>Registrate</button>
        <Link className='sign-in__link' to="/">¿Ya eres miembro? Inicia sesion aqui </Link>
        
        </div>
    );
}

export default Register;