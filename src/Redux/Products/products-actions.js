export const FILTER_PRODUCT = 'FILTER_PRODUCT';

export const filteredProduct = (item) => ({
	type: FILTER_PRODUCT,
	payload: item,
});
