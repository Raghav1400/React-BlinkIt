import React from "react";
import { GeneralInfo } from "./molecules/generalInfo";
import { CardsContainer } from "./organism/cardContainer";
import "./section.module.css";
import PropTypes from "prop-types";


const Section = (props) => {
	return (
		<section>
			<GeneralInfo />
			<CardsContainer
				category={props.category}
				subcategory={props.subcategory}
			/>
		</section>
	);
};
export default Section;

Section.prototype = {
	category: PropTypes.string,
	subcategory:PropTypes.string
}
