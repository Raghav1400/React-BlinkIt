import React from "react";

function ItemPriceWithCount(props) {
	const id = props.elementId;
	const { clickMinus, clickPlus } = props;
	return (
		<button className="cart-button">
			<div className="minus" onClick={() => clickMinus(id)}>
				-
			</div>
			<div className="quantity">{props.count}</div>
			<div className="plus" onClick={() => clickPlus(id)}>
				+
			</div>
		</button>
	);
}

export default ItemPriceWithCount;
