import React from "react";
import { ItemPrice } from "../../../../../../../../molecules/itemPrice";
import { CardDiscountButton } from "./molecules/cardDiscountButton";
import { CardImage } from "./molecules/cardImage";
import { ItemName } from "./molecules/itemName";
import { ItemWeight } from "./molecules/itemWeight";
import { SourceTime } from "./molecules/sourceTime";
import styles from "./card.module.css";

const Card = (props) => {
	const { discount, img_src, img_alt, source_time, name, weight } = props.info;
	return (
		<div className={styles["card"]}>
			<CardDiscountButton discount={discount} />
			<CardImage src={img_src} alt={img_alt} />
			<SourceTime time={source_time} />
			<ItemName name={name} />
			<ItemWeight weight={weight} />
			<ItemPrice info={props.info} />
		</div>
	);
};

export default Card;
