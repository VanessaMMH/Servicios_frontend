import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Services.styl';
import fondo from '../styles/static/fondo.jpg';
const Services = (props) => {  
  const { service } = props;
  return(
    <div className="Services">
      <div className="Services-bg">
        <img src={fondo} alt="fondo"/>
        <div className="info">
          <h1>¿Tienes algo que  <strong >reparar</strong> o <strong>mejorar </strong>?</h1>
          <h4>Déjalo en nuestras manos. Tenemos un profesional especialista en solucionar cualquier problema de tu hogar.</h4>
          <Link to="/solicita">
            <button>Solicitalo Aqui</button>
          </Link>          
        </div>        
      </div>
      <div className="Services-heading" id="servicios">
        <h2>¿En qué podemos <strong>ayudarte?</strong> </h2> 
      </div>
      <div className="Services-items" >
        {service.map(service => (
          <div className="Services-item" key={service.id}>
            <img src={service.image} alt={service.title} />
            <div className="Services-item-info">
              <h3>
                {service.title}
              </h3>
              <h4>
                {service.description}
              </h4>
              <p><i className="fas fa-check"></i>{'  '}{service.item1}</p>
              <p><i className="fas fa-check"></i>{'  '}{service.item2}</p>
              <p><i className="fas fa-check"></i>{'  '}{service.item3}</p>
              <p><i className="fas fa-check"></i>{'  '}{service.item4}</p>
              <Link to="/solicita">
                <button type="button">Solicita un servicio</button>
              </Link>
            </div >     
          </div>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    service: state.products,
  };
};
export default connect(mapStateToProps, null)(Services);