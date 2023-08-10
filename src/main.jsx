// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);