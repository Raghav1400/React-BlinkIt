import React, { Component } from 'react'

export class BillHeader extends Component {
  render() {
    return (
      <>
        <div id="bill-heading">
                <h3>PLACE ORDERS</h3>
        </div>
        <div id="delivery-time">
                <h4>Deivery in 10 Minutes</h4>
        </div>
      </>
    )
  }
}

export default BillHeader
