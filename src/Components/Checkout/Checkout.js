import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BillFooter from './CheckoutComponents/BillFooter'
import BillHeader from './CheckoutComponents/BillHeader'
import PurchaseItems from './CheckoutComponents/PurchaseItems'
export class Checkout extends Component {
    constructor(props) {
        super(props)
      }
      
      render() {
        return (
          <div>
            <Header id='header' cartInfo={this.props.cartInfo}/>
            <div id="bill-container">
              <BillHeader cartInfo={this.props.cartInfo}/>
              <PurchaseItems cartInfo={this.props.cartInfo} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
              <BillFooter cartInfo={this.props.cartInfo}/>
            </div>
            
            <Footer />
          </div>
        )
      }
}

export default Checkout
