import React from "react";
import styles from "./perks.module.css";
import { PERKS } from "./constant";
import { renderPerk } from "./helper";

function Perks(props) {
	return <div className={styles["perks"]}>{PERKS.map(renderPerk)}</div>;
}

export default Perks;
