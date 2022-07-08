export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.key === cartItemToAdd.key
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) => {
			return cartItem.key === cartItemToAdd.key
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem;
		});
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, cartItemtoRemove) => {
	console.log(cartItemtoRemove, cartItems);
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.key === cartItemtoRemove.key
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItems) => cartItems.key !== cartItemtoRemove.key
		);
	}

	return cartItems.map((cartItem) => {
		return cartItem.key === cartItemtoRemove.key
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem;
	});
};

export const resetCart = (cartItems) => {
	console.log('pepe', cartItems);
};
