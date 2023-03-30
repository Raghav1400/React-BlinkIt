import React from "react";
import styles from "./logo.module.css";

function Logo(props) {
	const { src } = props;
	return (
		<div className={styles["blinkit-logo"]}>
			<img src={src} alt="brand-logo" />
		</div>
	)
}

export default Logo;
