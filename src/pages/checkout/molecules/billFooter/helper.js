export const calculateBill = (cards) => {
	let grandTotal = 0;
	let originaltotal = 0;
	let discount = 0;
	let items = 0;
	cards.forEach(calculateBillHelper);
	function calculateBillHelper(element) {
		if (Number(element.count) > 0) {
			items += Number(element.count);
			discount +=
				(Number(element.newPrice) - Number(element.oldPrice)) *
				Number(element.count);
			originaltotal += Number(element.oldPrice) * Number(element.count);
			grandTotal += Number(element.newPrice) * Number(element.count);
		}
	}
	return { grandTotal, originaltotal, discount, items };
};
