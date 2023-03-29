export function checkSelectedCategoryAndSubcategory(element,selectedCategory,selectedSubcategory){
    let elementCategory=element.category;
    let elementSubcategory=element.subcategory;
    return (selectedCategory==='default'&&selectedSubcategory==='default')||(selectedCategory==='default'&&selectedSubcategory===elementSubcategory)||(selectedCategory===elementCategory&&selectedSubcategory==='default')||(selectedCategory===elementCategory&&selectedSubcategory===elementSubcategory);
}