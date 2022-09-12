import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import cartReducer from './Cart/cart-reducer';
import productsReducer from './Products/products-reducer';
import categoriesReducer from './Categories/categories-reducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	products: productsReducer,
	categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
