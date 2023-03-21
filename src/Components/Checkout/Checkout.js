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
            <Header id='header'/>
            <div id="bill-container">
              <BillHeader />
              <PurchaseItems/>
              <BillFooter />
            </div>
            
            <Footer />
          </div>
        )
      }
}

export default Checkout
