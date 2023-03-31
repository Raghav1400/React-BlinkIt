import React from "react";
import {renderSubcategory } from "./helper";
import "./subcategories.module.css";

const Subcategories = (props) => {
	return (
		<aside>
			{renderSubcategory(props.category,props.onSubcategoryChange)}
		</aside>
	);
};

export default Subcategories;
