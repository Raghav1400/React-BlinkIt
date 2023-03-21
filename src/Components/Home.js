import React, { Component } from 'react'
import Header from './Header/Header';

import Main from './Main/Main';
import Footer from './Footer/Footer'
export class Home extends Component {
  render() {
    return (
    <>
      <Header id='header' cartInfo={this.props.cartInfo}/>
      <Main clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
      {/* <Footer /> */}
    </>
    )
  }
}

export default Home
