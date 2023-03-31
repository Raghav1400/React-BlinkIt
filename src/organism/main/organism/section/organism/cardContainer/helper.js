import { Card } from "./molecules/card";
import { ALL } from "../../../../constant";

export function checkSelectedCategoryAndSubcategory(card) {
	let cardCategory = card.category;
	let cardSubcategory = card.subcategory;
	let selectedCategory = this.category;
	let selectedSubcategory = this.subcategory;
	return (
		(selectedCategory === ALL && selectedSubcategory === ALL) ||
		(selectedCategory === ALL && selectedSubcategory === cardSubcategory) ||
		(selectedCategory === cardCategory && selectedSubcategory === ALL) ||
		(selectedCategory === cardCategory &&
			selectedSubcategory === cardSubcategory)
	);
}

export const renderCard = (card) => {
	return <Card key={card.id} info={card} />;
};
