import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from './Checkout/Checkout';
import Home from './Home';

class App extends Component {
  render() {
    return (
        <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
        </>
    )
  }
}

export default App
