import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from "../actions";
import '../styles/components/Login.styl';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Login = props => {
  const [form, setValues] = useState({
    name: '',
    contacto: 0,
    email: '',
    direccion:'',
    distrito:'dd',
    date:'',
    categorie:'',
    description:''
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
    props.loginRequest(form);
    props.history.push('/');
  }

  return (
    <>
      <Header />
      <section className="login">
        <section className="login__container">
          <h3>¿Qué <strong> necesitas</strong> ?</h3>
          <span>Completa el formulario y te asignaremos un profesional a tu tipo de problema.</span>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <div className="column1">
              <label for="name">Nombre</label>
              <input 
                name="name"
                className="input"
                type="text"
                // placeholder="Nombre"
                required
                onChange={updateInput}
              />
              <label for="contacto">Número de contacto</label>
              <input 
                name="contacto"
                className="input"
                type="number"
                // placeholder="Numero de contacto"
                required
                onChange={updateInput}
              />
              <label for="email">Correo electrónico (opcional)</label>
              <input 
                name="email"
                className="input"
                type="text"
                // placeholder="Correo"
                onChange={updateInput}
              />
              <label for="direccion">Dirección</label>
              <input 
                name="direccion"
                className="input"
                type="text"
                // placeholder="Direccion"
                required
                onChange={updateInput}
              />
              <label for="distrito">Distrito</label>
              <select className= "input"  name="distrito" onChange={updateInput} >
                <option selected="true" disabled="disabled">--Elige un distrito--</option>  
                <option value="1">Jose Luis Bustamante y Rivero</option>
                <option value="2">Pacucarpata</option>
                <option value="3">Cerro Colorado</option>
                <option value="4">Yanahuara</option>
                <option value="5">Mariano Melgar</option>
                <option value="6">Yura</option>
                <option value="7">Alto Selva Alegre</option>
                <option value="8">Miraflores</option>
              </select>
 
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
              <label for="categorie">¿De qué tipo es tu problema?</label>

              <select className= "input"  name="categorie" onChange={updateInput}>
                <option selected="true" disabled="disabled">--Elige una categoria--</option>  
                <option value="1">Gasfiteria</option>
                <option value="2">Pintura</option>
                <option value="3">Electricidad</option>
                <option value="4">Instalaciones</option>
                <option value="5">Carpinteria</option>
                <option value="6">Albañileria</option>
              </select>
              <label for="description">Descripción</label>
              <textarea className="descripcion"
                name= "description"
                placeholder="Describe el problema aqui..." onChange={updateInput}>
              </textarea>
              <div className="login__container--file">
                <label for="file">Foto(opcional)</label>
                <input  
                  type="file" 
                  name="file"
                  onChange={updateInput}
                />

              </div>           
          
            </div>
          
            <div className="login__container-button">
              <Link to="/">
                <button className="button-left" type="submit"> <i className="fas fa-angle-left"></i>{ }Regresar</button>
              </Link>
              <button className="button-right" type="submit">Solicitar { } <i className="fas fa-angle-right"></i></button>          
            </div>

          </form>
        </section>
      </section>
      <Footer/>
    </>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

Login.propTypes = {
  loginRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
