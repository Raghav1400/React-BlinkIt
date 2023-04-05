import React from "react";
import { renderSubcategory } from "./helper";
import "./subcategories.module.css";
import PropTypes from "prop-types";

const Subcategories = (props) => {
	const { onSubcategoryChange, selectedCategoryConfig, subcategories } = props;
	return (
		<aside>
			{selectedCategoryConfig.subcategories.map(renderSubcategory, {
				onSubcategoryChange,
				subcategories,
			})}
		</aside>
	);
};

export default Subcategories;

Subcategories.propTypes = {
	onSubcategoryChange: PropTypes.func.isRequired,
	subcategories: PropTypes.objectOf(
		PropTypes.shape({
			id: PropTypes.string,
			displayName: PropTypes.string,
			img_src: PropTypes.string,
			img_alt: PropTypes.string,
		})
	),
	selectedCategoryConfig: PropTypes.shape({
		id: PropTypes.string.isRequired,
		displayName: PropTypes.string.isRequired,
		subcategories: PropTypes.arrayOf(PropTypes.string),
	}),
};
