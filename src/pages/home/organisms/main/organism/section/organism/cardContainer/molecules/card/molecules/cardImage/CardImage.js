import React from "react";
import { ImageContainer } from "../../../../../../../../../../../../atoms/imageContainer";
function CardImage(props) {
	return (
		<ImageContainer
			className="section-bottom-item-imgContainer"
			childClass="section-bottom-item-imgChild"
			src={props.src}
			alt={props.alt}
		/>
	);
}

export default CardImage;
