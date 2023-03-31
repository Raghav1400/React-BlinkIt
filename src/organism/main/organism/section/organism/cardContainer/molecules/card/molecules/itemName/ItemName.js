import React from "react";
import { BlockContainer } from "../../../../../../../../../../atoms";

function ItemName(props) {
	return (
		<BlockContainer className="section-bottom-item-name" content={props.name} />
	);
}

export default ItemName;
