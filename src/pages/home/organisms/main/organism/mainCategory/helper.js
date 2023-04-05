export function renderCategory(category){
	return (
		<div key={category.id} onClick={() => this.onCategoryChange(category.id)}>
			{category.displayName}
		</div>
	);
};
