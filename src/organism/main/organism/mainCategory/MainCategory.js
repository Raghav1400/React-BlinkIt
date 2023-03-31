import React from "react";
import styles from "./mainCategory.module.css";
import { renderCategory } from "./helper";

const MainCategory = (props) => {
	const { CATEGORIES } = props;
	return (
		<div
			className={styles["header"]}
			onClick={(e) => props.onCategoryChange(e.target)}>
			{renderCategory(CATEGORIES)}
		</div>
	);
};

export default MainCategory;
