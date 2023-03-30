import { CartItem } from "./molecules/cartItem";
export const isInCart = (card) => {
	return card.count > 0;
};

export const renderCartElement = (element) => {
	return <CartItem key={element.id} item={element} />;
};
