import React, { Component } from "react";
import "./main.module.css";
import { MainCategory } from "./organism/mainCategory";
import { Subcategories } from "./organism/subcategories";
import { Section } from "./organism/section";
import { CATEGORIES } from "./constant";
import { SUBCATEGORIES } from "./constant";
import { ALL } from "./constant";

class Main extends Component {
	state = {
		selectedCategory: CATEGORIES.ALL,
		selectedSubcategory: ALL,
	};
	// should pass newCategory not element
	handleCategoryChange = (element) => {
		this.setState({
			selectedCategory: CATEGORIES[element.getAttribute("category")],
			selectedSubcategory: ALL,
		});
	};
  handleSubCategoryChange = (newsubcategory) => {
		this.setState({
			selectedSubcategory: SUBCATEGORIES[newsubcategory],
		});
	};
	render() {
    const { selectedCategory, selectedSubcategory } = this.state;
		return (
			<div>
				<MainCategory
					onCategoryChange={this.handleCategoryChange}
					CATEGORIES={CATEGORIES}
				/>
				<main>
					<Subcategories
						category={selectedCategory}
						onSubcategoryChange={this.handleSubCategoryChange}
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
