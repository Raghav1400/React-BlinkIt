import React from "react";
import styles from "./extraInfo.module.css";
function ExtraInfo(props) {
	return <div className={styles[props.className]}>{props.info}</div>;
}

export default ExtraInfo;
