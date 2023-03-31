import React, { Component } from "react";
import styles from "./sortFilter.module.css";
export class SortFilter extends Component {
	render() {
		return (
			<div id="section-top-filter">
				<label>
					Sort By
					<select className={styles["filter-options"]}>
						<option value="Revelance">Revelance</option>
						<option value="Low to High">Low to High</option>
						<option value="High to Low">High to Low</option>
					</select>
				</label>
			</div>
		);
	}
}

export default SortFilter;
