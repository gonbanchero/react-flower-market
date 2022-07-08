export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const SHIPPING_COST = 'SHIPPING_COST';
export const RESET = 'RESET';

export const toggleCartHidden = () => ({
	type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});

export const AddShippingCost = (item) => ({
	type: SHIPPING_COST,
	payload: item,
});

export const Reset = () => ({
	type: RESET,
});
