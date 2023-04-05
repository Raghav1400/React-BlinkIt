import React from "react";
import styles from "./mainCategory.module.css";
import { renderCategory } from "./helper";
import PropTypes from "prop-types";

const MainCategory = (props) => {
	const { categories, onCategoryChange } = props; 
	return <div className={styles["header"]}>{
		categories.map(renderCategory,
			{ onCategoryChange }
		)
	}</div>;
};

export default MainCategory;

MainCategory.propTypes = {
	onCategoryChange: PropTypes.func.isRequired,
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			displayName: PropTypes.string.isRequired,
			subcategories: PropTypes.arrayOf(
				PropTypes.string
			)
		})
	),
};
