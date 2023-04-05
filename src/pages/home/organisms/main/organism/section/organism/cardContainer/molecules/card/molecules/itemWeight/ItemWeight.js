import React from "react";
import { BlockContainer } from "../../../../../../../../../../../../atoms/blockContainer";

function ItemWeight(props) {
	return (
		<BlockContainer
			className="section-bottom-item-weight"
			content={props.weight}
		/>
	);
}

export default ItemWeight;
