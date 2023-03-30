import React from "react";
import { Link } from "react-router-dom";
import { calculateCartItems } from "./helper";
import styles from "./cartButton.module.css";

const CartButton = (props) => {
	const [cartPrice, cartCount] = calculateCartItems(props.cards);
	return (
		<Link to="/checkout" className={styles["header-mycart"]}>
			<img
				className={styles["header-cart-logo"]}
				src="./assects/icons8-shopping-cart-50.png"
				alt="cart-logo"
			/>
			{cartCount === 0 ? (
				<div className={styles["header-cart-button"]}>My Cart</div>
			) : (
				<div className={styles["cart-info"]}>
					<div>{cartCount} Items</div>
					<div>₹ {cartPrice}</div>
				</div>
			)}
		</Link>
	);
};
export default CartButton;
