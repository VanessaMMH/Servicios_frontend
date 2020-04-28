import React from 'react';
import '../styles/components/MainFooter.styl';
import facebook from '../styles/static/facebook.svg';
import instagram from '../styles/static/instagram.svg';
import twitter from '../styles/static/twitter.svg';
const MainFooter = () => (
  <div className =" MainFooter">
    <div className="MainFooter-contenedor">      
      <div className="MainFooter-social">
        <p>Siguenos en: </p>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt = "Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt= "Instagram"/>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src={twitter} alt = "Twitter"/>
        </a>            
      </div>    
      <p><i className="fas fa-envelope-open-text"></i> { }servicios@servicios.pe</p>
    </div>    
    <div className="MainFooter-copyright">
      <h5>Servicios © 2020 Todos los derechos reservados</h5>
    </div>   
  </div>
  
);

export default MainFooter;