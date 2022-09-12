import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import { celeste } from '../../Styles/Colors';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../Redux/Cart/cart-actions';

export const Carticon = () => {
	const dispatch = useDispatch();

	const quantity = useSelector((state) =>
		state.cart.cartItems.reduce((acc, cartItem) => {
			return acc + cartItem.quantity;
		}, 0)
	);

	const handlerToggle = () => {
		dispatch(cartActions.toggleCartHidden());
	};

	return (
		<>
			<CartIconStyled onClick={handlerToggle}>
				<ShoppingIcon style={{ width: '24px', height: '24px' }} />
				<QuanityNumber>{quantity}</QuanityNumber>
			</CartIconStyled>
		</>
	);
};

const CartIconStyled = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const QuanityNumber = styled.div`
	position: absolute;
	font-size: 11px;
	top: 18px;
	color: ${celeste};
`;
