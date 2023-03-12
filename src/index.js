import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './css/style.css'

import Header from './Components/Header/Header';

import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header id='header'/>
    <Main />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
