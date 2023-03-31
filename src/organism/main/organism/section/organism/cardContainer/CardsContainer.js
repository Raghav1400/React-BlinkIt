import React from "react";
import { connect } from "react-redux";
import { checkSelectedCategoryAndSubcategory, renderCard } from "./helper";
import styles from "./cardsContainer.module.css";
import { selectAllCards } from "../../../../../../pages/redux/cardRedux/cardReducer";

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
