import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importa los estilos globales
import App from './App';  // Importa el componente principal de la aplicación

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Monta la aplicación en el div con id 'root' en index.html
);
