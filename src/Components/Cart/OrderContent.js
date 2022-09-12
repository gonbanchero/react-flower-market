import React from 'react';
import styled from 'styled-components';

import { formatPrice } from '../../Data/Products';
import { CartQuantity } from './CartQuantity';
import { ShippingOptions } from './ShippingOptions';

export const OrderContent = ({ cartItems }) => {
	return (
		<>
			{cartItems?.length === 0 ? (
				<Order>Nada por Aquí... agregá algo al carrito chaval!</Order>
			) : (
				<>
					<Order>
						<OrderContainer>Tu Pedido:</OrderContainer>
						{cartItems.map((item, index) => (
							<OrderBody id={index}>
								<ItemImg img={item.img}></ItemImg>
								<ItemDescription>
									<div>{item.name}</div>
									<div>
										{formatPrice(
											item.price * item.quantity
										)}
									</div>
								</ItemDescription>
								<CartQuantity item={item}></CartQuantity>
							</OrderBody>
						))}
						<ShippingOptions />
					</Order>
				</>
			)}
		</>
	);
};

const Order = styled.div`
	padding: 20px;
	max-height: 100%;
	height: 100%;
	overflow: scroll;
`;

const OrderContainer = styled.div`
	padding: 10px 10px 20px 10px;
	font-size: 18px;
	border-bottom: 1px solid #ededed;
`;

const OrderBody = styled.div`
	padding: 10px 5px;
	display: grid;
	gap: 5px;
	grid-template-columns: 50px 120px 100px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ededed;
`;

export const ItemImg = styled.div`
	width: 46px;
	height: 46px;
	background-image: ${({ img }) => `url(${img})`};
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 10px;
`;

const ItemDescription = styled.div`
	display: flex;
	flex-direction: column;
`;
