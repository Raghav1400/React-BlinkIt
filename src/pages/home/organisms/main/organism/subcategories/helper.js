import { SubcategoryChild } from "./molecules/subcategoryChild";
export function renderSubcategory(subcategoryId) {
	const subcategoryData = this.subcategories[subcategoryId];
	return (
		<SubcategoryChild
			key={subcategoryData.id}
			info={subcategoryData}
			onSubcategoryChange={this.onSubcategoryChange}
		/>
	);
}
