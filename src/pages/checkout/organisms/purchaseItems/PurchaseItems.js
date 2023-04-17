import React from "react";
import { connect } from "react-redux";
import styles from "./purchaseItem.module.css";
import { selectAllCards } from "../../../../redux/cardRedux/cardReducer";
import { isInCart, renderCartElement } from "./helper";

const PurchaseItems = (props) => {
	const cards = props.cards;
	var cartItems=cards.filter(isInCart).map(renderCartElement);
	return (
		<div className={styles["item-container"]}>
			{cartItems}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: selectAllCards(state),
	};
};
export default connect(mapStateToProps)(PurchaseItems);
