import React from "react";
import { BlockContainer } from "../../../../../../../../../../../../atoms/blockContainer";

function SourceTime(props) {
	return (
		<BlockContainer
			className="section-bottom-item-source-time"
			content={props.time}
		/>
	);
}

export default SourceTime;
