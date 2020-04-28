import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/MainHeader.styl';
import logo from '../styles/static/logo.png';

const MainHeader = () => (
  <div className="Main__Header">
    <div className="Main__Header-img">
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
   <div className="Main__Header-navbar">     
     <ul >
       <li><a href="#servicios"> Nuestros servicios</a></li>
       <li><a href="#nosotros">Nosotros</a></li>
       <li><a href="#work">Trabaja con Nosotros</a></li>
     </ul>
   </div>
   <Link to="/solicita">
      <button className="Main__Header-button" type="submit">Solicita un servicio</button>
   </Link>
  </div>
);


export default (MainHeader);