import { CartItem } from "./molecules/cartItem";
export const isInCart = (card) => {
	// var x = setTimeout(() => { return card.count > 0; }, 5000);
	// console.log(x,'--');
	// return x;
	return card.count > 0;
};

export const renderCartElement = (element) => {
	return <CartItem key={element.id} item={element} />;
};
