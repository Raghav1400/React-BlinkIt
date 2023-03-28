import React, { Component } from 'react'
import {Routes, Route } from "react-router-dom";
import {Checkout,Home} from './pages';

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
