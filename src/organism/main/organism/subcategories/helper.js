import { SubcategoryChild } from "./molecules/subcategoryChild";
import { CATEGORIES } from "../../constant";
import { SUBCATEGORIES_DETAIL } from "../../constant/constant";

export function renderSubcategory(category, handleSubcategoryChange) {
	let renderedSubcategories = [];
	for (let subcategory in SUBCATEGORIES_DETAIL) {
		if (
			SUBCATEGORIES_DETAIL[subcategory].category === category ||
			category === CATEGORIES.ALL
		) {
			renderedSubcategories.push(
				<SubcategoryChild
					key={SUBCATEGORIES_DETAIL[subcategory.id]}
					info={SUBCATEGORIES_DETAIL[subcategory]}
					subcategory={subcategory}
					onSubcategoryChange={handleSubcategoryChange}
				/>
			);
		}
	}
	return renderedSubcategories;
}
