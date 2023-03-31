import React from "react";
import styles from "./subcategoryChild.module.css";
import { SUBCATEGORIES } from "../../../../constant";

function SubcategoryChild(props) {
	const { img_src, category, img_alt, id } = props.info;
	return (
		<div
			key={id}
			category={category}
			subcategory={props.subcategory}
			onClick={(e) => props.onSubcategoryChange(props.subcategory)}>
			<div className={styles["aside-img"]}>
				<img src={img_src} alt={img_alt} />
			</div>
			<div className={styles["aside-content"]}>{SUBCATEGORIES[props.subcategory]}</div>
		</div>
	);
}

export default SubcategoryChild;
