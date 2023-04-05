import React from "react";
import { connect } from "react-redux";
import { checkSelectedCategoryAndSubcategory, renderCard } from "./helper";
import styles from "./cardsContainer.module.css";
import { selectAllCards } from "../../../../../../../redux/cardRedux/cardReducer";
import PropTypes from "prop-types";
const CardsContainer = (props) => {
	var { category, subcategory } = props;
	return (
		<div className={styles["cards-container"]}>
			{props.cards
				.filter(checkSelectedCategoryAndSubcategory, {
					category,
					subcategory,
				})
				.map(renderCard)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: selectAllCards(state),
	};
};
export default connect(mapStateToProps)(CardsContainer);

CardsContainer.prototype = {
	category: PropTypes.string,
	subcategory: PropTypes.string,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			// discount: PropTypes.string,
			// img_src: "./assects/391305a.webp",
			// img_alt: "Potato Image",
			// source_time: "Source at 5AM",
			// name: "Fruit Basket",
			// weight: "1Kg",
			// newPrice: "15",
			// oldPrice: "17",
			// category: "FRUITS_VEGETABLES",
			// subcategory: "FRESH_VEGETABLES",
			// count: 0,
		})
	),
};