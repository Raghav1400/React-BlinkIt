import CATEGORY_CONFIG from "../configs/main.categories";
export function getCategoryConfig(categoryId) {
	return CATEGORY_CONFIG.find((category) => {
		return category.id === categoryId;
	});
}
