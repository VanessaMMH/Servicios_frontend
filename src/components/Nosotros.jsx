import React from 'react';
import '../styles/components/Nosotros.styl';
import worker from '../styles/static/worker.jpeg';

const Nosotros = () => (
  <div className="Nosotros" id="nosotros">
   <div className="Nosotros-info">
       <h1>
          Somos la primera comunidad de
          <strong> profesionales al servicio del hogar </strong> 
          en el Perú
       </h1>
       <h4>
          Nuestros profesionales están preparados para instalar, reparar y mejorar todo lo que necesites en tu hogar, oficina u empresa.
       </h4>

   </div>
   <div className="Nosotros-img">
        <img src={worker} alt=" Trabajador" />
   </div>
  </div>
);


export default (Nosotros);