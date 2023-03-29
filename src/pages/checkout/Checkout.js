import React, { Component } from 'react'
import {Header,Footer} from '../../organism'
import {BillHeader,BillFooter} from '../../molecules/bill'
import {PurchaseItems} from '../../organism'
import Styles from './Checkout.module.css'
class Checkout extends Component {
    render() {
        return (
          <>
            <Header/>
            <div className={Styles['bill-container']}>
              <BillHeader />
              <PurchaseItems/>
              <BillFooter />
            </div>
            <Footer />
          </>
        )
      }
}

export default Checkout
