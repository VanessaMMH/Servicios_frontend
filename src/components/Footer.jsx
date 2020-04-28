import React from 'react';
import classNames from 'classnames';
import '../styles/components/Footer.styl';

const Footer = (props) => {
  const {isPage404Footer}=props
  const FooterClass=classNames('Footer',{
    isPage404Footer,
  })
  return(
  <footer className={FooterClass}>
    <div className="Footer-contenedor">
        <p>
            <i className="fas fa-exclamation-circle"></i>
           { } <strong>El horario de recepción de pedidos: </strong>
            Lunes a Viernes de 9:00am a 6:00pm | Sábado de 9:00am a 2:00pm. Luego del horario indicado nos comunicaremos con usted a primera hora del día siguiente
        </p>
    </div>       
  </footer>
  
);
}

export default Footer;