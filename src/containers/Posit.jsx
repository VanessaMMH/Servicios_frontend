import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { positRequest } from "../actions";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Posit.styl';


const Posit = props => {

  const [form, setValues] = useState({
    name:'',
    documento:'',
    numDocumento:0,
    contacto:0,
    email:'',
    date:'',
    service:''
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    console.log(form);
    event.preventDefault();
    props.positRequest(form);
    props.history.push('/');
  }

  return (
    <>
      <Header />
      <section className="posit">
        <section className="posit__container">
          <h3>¿Eres un profesional en  <strong> servicios</strong> ?</h3>
          <span>Estamos en búsqueda de profesionales con ganas de crecer. Súmate tú también.</span>
          <form className="posit__container--form" onSubmit={handleSubmit}>
            <div className="column1">
              <label for="name">Nombre</label>
              <input 
                name="name"
                className="input"
                type="text"
                // placeholder="Nombre"
                onChange={updateInput}
              />
              <label for="documento">Tipo de documento de identidad</label>
              <select className= "input" id="documento" name="documento" onChange={updateInput}>
                <option  selected="true" disabled="disabled">--Elige documento--</option>
                <option value="1">DNI</option>
                <option value="2">CE</option>
                <option value="3">PASAPORTE</option>
              </select>
              <label for="numDocumento">Número de Documento</label>
              <input 
                name="numDocumento"
                className="input"
                type="number"
                // placeholder="Numero de contacto"
                onChange={updateInput}
              />
              <label for="contacto">Teléfono de contacto</label>
              <input 
                name="contacto"
                className="input"
                type="number"
                // placeholder="Correo"
                onChange={updateInput}
              />
              <label for="email">Correo electrónico</label>
              <input 
                name="email"
                className="input"
                type="correo"
                // placeholder="Correo"
                onChange={updateInput}
              />
 
            </div>
            
            <div className="column2">
                <label for="date">¿Cuándo necesitas el servicio?</label>
                <input  type="date"
                className="input"
                name="date"
                //  value="2020-05-05"
                min="2020-01-01"
                max="2020-12-10" 
                onChange={updateInput}
                />
                <h6>Selecciona la categoria</h6>
                <div className="tools" >
                    <label for="gasfiteria">
                        <input type="checkbox" id="cbox" name="service" value="gasfiteria" onChange={updateInput} />
                        <img src="https://storage.cloud.google.com/images-service/llaveInglesa.png"  alt="tool" />
                        Gasfiteria
                    </label>
                    <label for="pintura">
                        <input type="checkbox" id="cbox" name="service" value="pintura"onChange={updateInput} />
                        <img src="https://storage.cloud.google.com/images-service/rodillo-de-pintura.png"  alt="tool" />
                        Pintura
                    </label>
                    <label for="electricidad">
                        <input type="checkbox" id="cbox" name="service" value="electricidad" />
                        <img src="https://storage.cloud.google.com/images-service/enchufe.png"  alt="tool" />
                        Electricidad
                    </label>
                    <label for="instalaciones">
                        <input type="checkbox" id="cbox" name="service" value="instalaciones" />
                        <img src="https://storage.cloud.google.com/images-service/perforar.png"  alt="tool" />
                        Instalaciones
                    </label>
                    <label for="carpinteria">
                        <input type="checkbox" id="cbox" name="service" value="carpinteria" />
                        <img src="https://storage.cloud.google.com/images-service/sierra.png"  alt="tool" />
                        Carpinteria
                    </label>
                    <label for="albanileria">
                        <input type="checkbox" id="cbox" name="service" value="albanileria" />
                        <img src="https://storage.cloud.google.com/images-service/ladrillo.png"  alt="tool" />
                        Albañileria
                    </label>
                </div>
                <h6>Requisitos indispensables</h6>
                <p>Contar con celular con acceso a internet.</p>
                <p>Contar con mínimo 3 años de experiencia.</p>
                <p>Contar con disponibilidad laboral como trabajador independiente.</p>           
            </div>          
            <div className="posit__container-button">
              <Link to="/">
                <button className="button-left" type="submit"> <i className="fas fa-angle-left"></i>{ }Regresar</button>
              </Link>
              <button className="button-right" type="submit">Enviar { } <i className="fas fa-angle-right"></i></button>          
            </div>

          </form>
        </section>
      </section>
      <Footer/>
    </>
  );
}

const mapDispatchToProps = {
  positRequest,
};

Posit.propTypes = {
  positRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Posit);
