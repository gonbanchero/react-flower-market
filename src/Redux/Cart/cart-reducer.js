import {
	ADD_ITEM,
	REMOVE_ITEM,
	TOGGLE_CART_HIDDEN,
	SHIPPING_COST,
	RESET,
} from './cart-actions';
import { addItemToCart, removeItemsFromCart } from './cart-utils';

const INITIAL_STATE = {
	hidden: false,
	cartItems: [],
	shipping: '',
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemsFromCart(state.cartItems, action.payload),
			};
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case SHIPPING_COST:
			return {
				...state,
				shipping: action.payload,
			};
		case RESET:
			return {
				cartItems: [],
				shipping: '',
			};
		default:
			return state;
	}
};

export default cartReducer;
