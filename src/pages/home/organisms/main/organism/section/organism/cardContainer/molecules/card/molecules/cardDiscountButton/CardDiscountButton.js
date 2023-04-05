import React from "react";
import { BlockContainer } from "../../../../../../../../../../../../atoms/blockContainer";

function CardDiscountButton(props) {
	return <BlockContainer className="discount-btn" content={props.discount} />;
}

export default CardDiscountButton;
