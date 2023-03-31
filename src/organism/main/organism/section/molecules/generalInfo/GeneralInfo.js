import React from "react";
import { SortFilter } from "./molecule/sortFilter";
import styles from "./generalInfo.module.css";
const GeneralInfo = () => {
	return (
		<div className={styles["generalInfo"]}>
			<div>Buy Fresh Grocery Items</div>
			<SortFilter />
		</div>
	);
};

export default GeneralInfo;
