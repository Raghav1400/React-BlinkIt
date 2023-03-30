import React, { Component } from "react";
// import {Header,Footer} from '../../organism'
import { Header } from "../../organism/header";
import { Footer } from "../../organism/footer";
import { BillFooter } from "../../molecules/bill/billFooter";
import { BillHeader } from "../../molecules/bill/billHeader";
import { PurchaseItems } from "../../organism/bill/purchaseItems";
import styles from "./checkout.module.css";
class Checkout extends Component {
	render() {
		return (
			<>
				<Header />
				<div className={styles["bill-container"]}>
					<BillHeader />
					<PurchaseItems />
					<BillFooter />
				</div>
				<Footer />
			</>
		);
	}
}

export default Checkout;
