
import CATEGORY_CONFIG from "../configs/main.categories";
export function getDefaultSubcategory(categoryId) {
    const defaultCategory=CATEGORY_CONFIG.find(
        (category) => {
            return (category.id === categoryId) 
        }
    )
    if(defaultCategory.subcategories.length>0)
        return defaultCategory.subcategories[0];
    return ''
}
