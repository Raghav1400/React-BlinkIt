import React, { Component } from "react";
import "./main.module.css";
import { MainCategory } from "./organism/mainCategory";
import { Subcategories } from "./organism/subcategories";
import { Section } from "./organism/section";
import CATEGORIES from "./constants/main.categories";
import SUBCATEGORIES from "./constants/main.subcategories";
import CATEGORY_CONFIG from "./configs/main.categories";
import SUBCATEGORY_CONFIG from "./configs/main.subcategories";
import { getCategoryConfig } from "./helpers/main.getCategoryConfig";
import { getDefaultSubcategory } from "./helpers/main.getDefaultCategory";
class Main extends Component {
	state = {
		selectedCategory: CATEGORIES.FRUITS_VEGETABLES,
		selectedSubcategory: SUBCATEGORIES.FRUITS,
	};
	handleCategoryChange = (newCategoryid) => {
		this.setState({
			selectedCategory: CATEGORIES[newCategoryid],
			selectedSubcategory: getDefaultSubcategory(newCategoryid),
		});
	};
	handleSubCategoryChange = (newsubcategoryId) => {
		this.setState({
			selectedSubcategory: SUBCATEGORIES[newsubcategoryId],
		});
	};
	render() {
		const { selectedCategory, selectedSubcategory } = this.state;
		const selectedCategoryConfig = getCategoryConfig(selectedCategory);
		return (
			<div>
				<MainCategory
					onCategoryChange={this.handleCategoryChange}
					categories={CATEGORY_CONFIG}
				/>
				<main>
					<Subcategories
						selectedCategoryConfig={selectedCategoryConfig}
						onSubcategoryChange={this.handleSubCategoryChange}
						subcategories={SUBCATEGORY_CONFIG}
					/>
					<Section
						category={selectedCategory}
						subcategory={selectedSubcategory}
					/>
				</main>
			</div>
		);
	}
}

export default Main;
