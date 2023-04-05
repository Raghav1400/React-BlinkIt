import  CATEGORIES from "../constants/main.categories";
import SUBCATEGORIES from "../constants/main.subcategories";

const CATEGORY_CONFIG =  [
        {
            id:CATEGORIES.DAIRY_BREAKFAST,
			displayName: "Dairy and Breakfast",
			subcategories: [SUBCATEGORIES.MILK],
		},
        {
            id:CATEGORIES.INSTANT_FROZEN,
			displayName: "Instant and Frozen",
			subcategories: [],
		},
        {
            id:CATEGORIES.BAKERY,
			displayName: "Bakery",
			subcategories: [],
		},
        {
            id:CATEGORIES.TEA_COFFEE,
			displayName: "Tea and Coffee",
			subcategories: [],
		},
        {
            id:CATEGORIES.FRUITS_VEGETABLES,
			displayName: "Fruits and Vegetables",
			subcategories: [SUBCATEGORIES.FRESH_VEGETABLES , SUBCATEGORIES.FRUITS],
		},
        {
            id:CATEGORIES.MUNCHIES,
			displayName: "Munchies",
			subcategories: [],
		},
        {
            id:CATEGORIES.DRINKS_JUICES,
			displayName: "Drinks and Juices",
			subcategories: [SUBCATEGORIES.APPLE_JUICE,SUBCATEGORIES.COLD_DRINK],
		},
    ]
export default CATEGORY_CONFIG;