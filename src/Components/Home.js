import React, { Component } from 'react'
import Header from './Header/Header';

import Main from './Main/Main';
import Footer from './Footer/Footer'
export class Home extends Component {
  render() {
    return (
    <>
      <Header id='header'/>
      <Main/>
      <Footer />
    </>
    )
  }
}

export default Home
