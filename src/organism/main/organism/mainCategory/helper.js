import { CategoryChild } from "./molecules/categoryChild";

export const renderCategory = (categories) => {
	let renderedCategories = [];
	for (let category in categories) {
		renderedCategories.push(
			<CategoryChild
				key={category}
				info={categories[category]}
				type={category}
			/>
		);
	}
	return renderedCategories;
};
