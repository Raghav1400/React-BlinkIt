import React from "react";
import styles from "./perkChild.module.css";

function PerkChild(props) {
	const { img_src, title, description } = props.info;
	return (
		<div className={styles["perk"]}>
			<div className={styles["perk-logo"]}>
				<img src={img_src} alt="perk-info" />
			</div>
			<div className={styles["perk-heading"]}>{title}</div>
			<div className={styles["perk-data"]}>{description}</div>
		</div>
	);
}

export default PerkChild;
