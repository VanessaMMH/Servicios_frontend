import React from 'react';
import '../styles/components/Work.styl';
import worker from '../styles/static/worker.png';
import { Link } from 'react-router-dom';

const Nosotros = () => (
  <div className="Work" id="work">
     <div className="Work-info">
          <h1>
               ¿Eres un profesional en servicios?
          </h1>
          <h1>
               <strong>¡Trabaja con nosotros!</strong>
          </h1>
          <h4>
               Estamos en búsqueda de profesionales con ganas de crecer y salir adelante. Súmate tú también.
          </h4>
          <Link to="/postula">
               <button>Postula Aqui</button>
          </Link>         
     </div>
     <div className="Work-img">
          <h4>
               "... Desde el comienzo supe que ser parte de la comunidad  era una buena idea. Hasta el día de hoy no me arrepiento. Es una herramienta excelente para ofertar mis servicios."
          </h4>
          <img src={worker} alt=" Trabajador" />
          <p>Carlos Manchego</p>
     </div>
  </div>
);



export default (Nosotros);