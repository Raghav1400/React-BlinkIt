import React from "react";
import { increaseCount, decreaseCount } from "../../redux/cardRedux";
import { connect } from "react-redux";
import { ItemPriceWithCount } from "./molecule";
import styles from "./itemPrice.module.css";
import { cardReader } from "../../organism/constants/cardReader";

const ItemPrice = (props) => {
	const { clickMinus, clickPlus ,info} = props;
	const count = cardReader.getCount(info);
	const id = cardReader.getId(info);
	const oldPrice = cardReader.getOldPrice(info);
	const newPrice = cardReader.getNewPrice(info);
	return (
		<div className={styles["section-bottom-item-price-add"]} id={id}>
			<div className={styles["price"]} >
				<div className={styles["new-price"]}>{newPrice}</div>
				<div className={styles["old-price"]}>{oldPrice}</div>
			</div>
			{count === 0 && (
				<button className={styles["add-btn"]} onClick={() => clickPlus(id)}>
					ADD
				</button>
			)}
			{count !== 0 && (
				<ItemPriceWithCount
					elementId={cardReader.getId(info)}
					clickMinus={clickMinus}
					clickPlus={clickPlus}
					count={count}
				/>
			)}
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		clickPlus: (id) => {
			dispatch(increaseCount(id));
		},
		clickMinus: (id) => {
			dispatch(decreaseCount(id));
		},
	};
};
export default connect(null, mapDispatchToProps)(ItemPrice);
