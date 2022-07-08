import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../Redux/Cart/cart-actions';
import { DialogShadow } from '../CardDialog/CardDialog';

import { CartFooter } from './CartFooter';
import { OrderContent } from './OrderContent';

export const Cart = () => {
	const dispatch = useDispatch();
	const hidden = useSelector((state) => state.cart.hidden);
	const cartItems = useSelector((state) => state.cart.cartItems);

	const handlerToggle = () => {
		dispatch(CartActions.toggleCartHidden());
	};

	const totalCart = cartItems.reduce((acc, item) => {
		return acc + item.price * item.quantity;
	}, 0);

	return (
		<>
			{hidden && <DialogShadow onClick={handlerToggle} />}
			<CartStyled show={hidden}>
				<OrderContent cartItems={cartItems} />

				<CartFooter
					totalCart={totalCart}
					handlerToggle={handlerToggle}
				/>
			</CartStyled>
		</>
	);
};

const CartStyled = styled.div`
	position: fixed;
	right: 0;
	top: 106px;
	width: 350px;
	height: calc(100% - 106px);
	z-index: 10;
	background-color: #fafaf8;
	box-shadow: 4px 0px 5px 4px gray;
	display: flex;
	flex-direction: column;
	transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
	transition-property: transform;
	transition-duration: 0.5s;
`;
