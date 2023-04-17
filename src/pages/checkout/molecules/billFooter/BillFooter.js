import React from "react";
import { connect } from "react-redux";
import { calculateBill } from "./helper";
import styles from "./billFooter.module.css";
import { selectAllCards } from "../../../../redux/cardRedux/cardReducer";

const BillFooter = (props) => {
	const { grandTotal, originaltotal, discount, items } = calculateBill(
		props.cards
	);
	return (
		<>
			<div className={styles["item-detail"]}>
				<div>MRP</div>
				<div>₹{originaltotal}</div>
			</div>
			<div className={styles["item-detail"]}>
				<div>Product discount</div>
				<div>₹{discount}</div>
			</div>
			<div className={styles["item-detail"]}>
				<div>delivery charge</div>
				<div>FREE</div>
			</div>
			<div className={styles["item-detail"]}>
				<h4>Grand Total</h4>
				<div>₹{grandTotal}</div>
			</div>
			<div className={`${styles["proceed"]} ${styles["item-detail"]}`}>
				<div className={styles["item-detail"]}>
					<div>{items} items</div>
					<div>₹{grandTotal}</div>
					<div>
						<strike>₹{originaltotal}</strike>
					</div>
				</div>
				<div>{"proceed -->"} </div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: selectAllCards(state),
	};
};
export default connect(mapStateToProps)(BillFooter);
