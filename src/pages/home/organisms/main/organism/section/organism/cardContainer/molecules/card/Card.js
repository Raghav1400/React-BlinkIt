import React from "react";
import { ItemPrice } from "../../../../../../../../../../molecules/itemPrice";
import { CardDiscountButton } from "./molecules/cardDiscountButton";
import { CardImage } from "./molecules/cardImage";
import { ItemName } from "./molecules/itemName";
import { ItemWeight } from "./molecules/itemWeight";
import { SourceTime } from "./molecules/sourceTime";
import styles from "./card.module.css";
import {cardReader} from '../../../../../../../../../../organism/constants/cardReader'
const Card = (props) => {
	const { info } = props;
	return (
		<div className={styles["card"]}>
			<CardDiscountButton discount={cardReader.getDiscount(info)} />
			<CardImage src={cardReader.getImgSrc(info)} alt={cardReader.getAlt(info)} />
			<SourceTime time={cardReader.getTime(info)} />
			<ItemName name={cardReader.getName(info)} />
			<ItemWeight weight={cardReader.getWeight(info)} />
			<ItemPrice info={info} />
		</div>
	);
};

export default Card;
