import productList from '../../Data/Products';
import { FILTER_PRODUCT } from './products-actions';
import { filterProduct } from './products-utils';

const INITIAL_STATE = {
	products: productList,
};

const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FILTER_PRODUCT:
			return {
				...state,
				products: filterProduct(state.products, action.payload),
			};
		default:
			return state;
	}
};

export default productsReducer;
