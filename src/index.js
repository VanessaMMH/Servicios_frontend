import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  "user": {},

  products: [
    {
      "id": "1",
      "image": "https://storage.cloud.google.com/images-service/llaveInglesa.png",
      
      "title": "Gasfiteria",
      "price": 25,
      "description": "Tenemos especialistas en:",
      "item1":"Filtraciones",
      "item2":"Desatoros",
      "item3":"Accesorios de inodoro",
      "item4":"Y mucho mas..."
      
    },
    {
      "id": "3",
      "image": "https://storage.cloud.google.com/images-service/rodillo-de-pintura.png",
      "title": "Pintura",
      "price": 10,
      "description": "Tenemos especialistas en:",
      "item1":"Pintado en interiores y exteriores",
      "item2":"Resanes",
      "item3":"Curacion de salitre u hongos",
      "item4":"Y mucho mas..."
    },
    {
      "id": "4",
      "image": "https://storage.cloud.google.com/images-service/enchufe.png",
      "title": "Electricidad",
      "price": 4,
      "description": "Tenemos especialistas en:",
      "item1":"Instalacion de luminarias",
      "item2":"Cortocircuito y tablero electrico",
      "item3":"Cableado electrico",
      "item4":"Y mucho mas..."

    },
    {
      "id": "5",
      "image": "https://storage.cloud.google.com/images-service/perforar.png",
      "title": "Instalaciones",
      "price": 2,
      "description": "Tenemos especialistas en:",     
      "item1":"Rack para TV",
      "item2":"Cuadros,repisas y espejos",
      "item3":"Armado de muebles",
      "item4":"Y mucho mas..."
      
    },
    {
      "id": "6",
      "image": "https://storage.cloud.google.com/images-service/sierra.png",
      "title": "Carpinteria",
      "price": 2,
      "description": "Tenemos especialistas en:",
      "item1":"Fabricacion de muebles",
      "item2":"Fabricacion de casas Pre-Fabricadas",
      "item3":"Puertas",
      "item4":"Y mucho mas..."
    },
    {
      "id": "7",
      "image": "https://storage.cloud.google.com/images-service/ladrillo.png",
      "title": "Albañileria",
      "price": 35,
      "description": "Tenemos especialistas en:",
      "item1":"Pisos",
      "item2":"Paredes",
      "item3":"Remodelaciones",
      "item4":"Y mucho mas..."
    },

  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);