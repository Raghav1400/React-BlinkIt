import React, { Component } from "react";
import "./main.module.css";
import { MainCategory } from "./organism/mainCategory";
import { Subcategories } from "./organism/subcategories";
import { Section } from "./organism/section";
import { CATEGORIES } from "./constant";

class Main extends Component {
	state = {
		selectedCategory: "default",
		selectedSubcategory: "default",
	};
	// should pass newCategory not element
	handleCategoryChange = (element) => {
		this.setState({
			selectedCategory: element.getAttribute("category"),
			selectedSubcategory: "default",
		});
	};
	handleSubCategoryChange = (newsubcategory) => {
		this.setState({
			selectedSubcategory: newsubcategory,
		});
	};
  render() {
    console.log(CATEGORIES)
		const { selectedCategory, selectedSubcategory } = this.state;
		return (
			<div>
				<MainCategory onCategoryChange={this.handleCategoryChange} />
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
