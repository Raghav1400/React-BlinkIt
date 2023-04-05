import { Card } from "./molecules/card";

export function checkSelectedCategoryAndSubcategory(card) {
	let cardCategory = card.category;
	let cardSubcategory = card.subcategory;
	let selectedCategory = this.category;
	let selectedSubcategory = this.subcategory;
	if (cardCategory===selectedCategory && cardSubcategory === selectedSubcategory) return card;

}

export const renderCard = (card) => {
	return <Card key={card.id} info={card} />;
};
