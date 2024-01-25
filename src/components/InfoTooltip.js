import React from 'react';
import Image from '../images/sucesfull.svg';
function InfoTooltip(props) {
    return (
        <div className='InfoTooltip'>
            <div className='InfoTooltip__window'>
              <button type="button"  className='InfoTooltip__btn-closet'></button>
              <img src={Image}  className="InfoTooltip__img" alt="Una imagen de alerta"/>  
              <h1 className='InfoTooltip__titulo'>¡Correcto! Ya estas registrado.</h1>
            </div>
        </div>
    );
}

export default InfoTooltip;