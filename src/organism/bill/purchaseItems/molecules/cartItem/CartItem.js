import React from "react";
import { ItemPrice } from "../../../../../molecules/itemPrice";
import styles from "./cartItem.module.css";

const CartItem = (props) => {
	const { item } = props;
	const { name, weight, img_alt, img_src } = item;
	return (
		<div className={styles["item"]}>
			<img className={styles["item-image"]} src={img_src} alt={img_alt} />
			<div className={styles["item-info"]}>
				<div className="item-name">{name}</div>
				<div className="item-weight">{weight}</div>
				<ItemPrice info={item} />
			</div>
		</div>
	);
};
export default CartItem;
