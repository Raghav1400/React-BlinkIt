import React, { Component } from 'react'
import Header from './Header/Header';

import Main from './Main/Main';
import Footer from './Footer/Footer'
export class Home extends Component {
  render() {
    return (
    <>
      <Header id='header' cartInfo={this.props.cartInfo}/>
      <Main cards={this.props.cartInfo.cards} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
      <Footer />
    </>
    )
  }
}

export default Home
