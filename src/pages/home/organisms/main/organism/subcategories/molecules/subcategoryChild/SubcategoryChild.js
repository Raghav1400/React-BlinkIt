import React from "react";
import styles from "./subcategoryChild.module.css";

function SubcategoryChild(props) {
	const { img_src, img_alt, id, displayName } = props.info;
	return (
		<div onClick={() => props.onSubcategoryChange(id)}>
			<div className={styles["aside-img"]}>
				<img src={img_src} alt={img_alt} />
			</div>
			<div className={styles["aside-content"]}>{displayName}</div>
		</div>
	);
}

export default SubcategoryChild;
