import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import '../styles/components/Header.styl';
import logo from '../styles/static/logo.png';

const Header = (props) =>{
  const {  isPage404 } = props;
  const HeaderClass = classNames('Header', {
    isPage404,

  });
  return (
  <header className={HeaderClass}>
    <div className="Header-img">
      <Link to="/">
        <img src={logo} alt="Servicios Online" />
      </Link>
     
      <Link to="/">
        <div className="Header-nameLogo">
          <p>Servicios</p>
          <p>Generales</p>
        </div>      
      </Link>
    </div>
    <div className="Header-message">
        <h6>Profesionales al servicio del Hogar</h6>
    </div>  
  </header>
);
}


export default (Header);