import { arraySections } from '../../Data/Products';

const INITIAL_STATE = {
	categories: arraySections,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default categoriesReducer;
