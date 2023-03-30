import React from "react";
import styles from "./location.module.css";
import { renderPlace } from "./location.helper";

function Location(props) {
	return (
		<div className={styles["location-info"]}>
			<div>Delivery in 10 Minuted</div>
			<select name="location" className={styles["location-option"]}>
				{props.locations.map(renderPlace)}
			</select>
		</div>
	);
}

export default Location;
