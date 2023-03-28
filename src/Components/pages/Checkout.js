import React, { Component } from 'react'
import {Header,Footer} from '../organism/index'
import {BillHeader,BillFooter,PurchaseItems} from '../molecules/bill'
class Checkout extends Component {
    render() {
        return (
          <div>
            <Header/>
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
