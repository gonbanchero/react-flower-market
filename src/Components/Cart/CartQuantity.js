import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';
import RemoveIcon from '../../assets/delete-full.svg';
import { violeta } from '../../Styles/Colors';
import * as cartActions from '../../Redux/Cart/cart-actions';

export const CartQuantity = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<CartQuantityStyled>
			{item.quantity === 1 ? (
				<RemoveIconStyled
					src={RemoveIcon}
					onClick={() => {
						dispatch(cartActions.removeItem(item));
					}}
				></RemoveIconStyled>
			) : (
				<QuantityButton
					onClick={() => {
						dispatch(cartActions.removeItem(item));
					}}
				>
					-
				</QuantityButton>
			)}
			<QuantityStyled>{item.quantity}</QuantityStyled>
			<QuantityButton
				onClick={() => {
					dispatch(cartActions.addItem(item));
				}}
			>
				{' '}
				+{' '}
			</QuantityButton>
		</CartQuantityStyled>
	);
};

const CartQuantityStyled = styled(Title)`
	min-width: 80px;
	max-width: 200px;
	display: flex;
	justify-content: center;
	height: 24px;
	align-items: center;
	border-radius: 8px;
	margin: 5px;
	height: 20px;
	padding: 10px;
	box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

const QuantityStyled = styled.span`
	font-size: 14px;
	width: 24px;
	text-align: center;
`;

const QuantityButton = styled.div`
	width: 23px;
	color: ${violeta};
	font-size: 20px;
	text-align: center;
	cursor: pointer;
	line-height: 23px;
	margin: 0px 10px;
	&:hover {
		background-color: #ffe3e3;
	}
`;

const RemoveIconStyled = styled.img`
	width: 17px !important;
	height: 17px !important;
	cursor: pointer;
	margin: 0 10px;
	color: red;
`;
