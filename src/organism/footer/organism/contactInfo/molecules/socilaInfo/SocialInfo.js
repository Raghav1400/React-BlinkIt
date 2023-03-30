import React from "react";
import styles from "./socialInfo.module.css";
import { renderSocialInfo } from "./helper";

function SocialInfo(props) {
	return (
		<div className={styles["social-logo"]}>
			{props.socialInfo.map(renderSocialInfo)}
		</div>
	);
}

export default SocialInfo;
