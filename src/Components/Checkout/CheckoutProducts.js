import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../Data/Products';
import { Title } from '../../Styles/Title';

export const CheckoutProducts = () => {
	const ShippingPrice = useSelector((state) => state.cart.shipping);

	const totalCart = useSelector((state) =>
		state.cart.cartItems.reduce(
			(acc, cartItems) => acc + cartItems.price * cartItems.quantity,
			0
		)
	);

	const products = useSelector((state) => state.cart.cartItems);
	console.log(products);
	return (
		<>
			<StyledCheckout>
				<CheckoutTitle>Detalle de tu carrito</CheckoutTitle>
				<StyledUl>
					{products.map((product) => (
						<li>
							{product.name} - x {product.quantity}
						</li>
					))}
				</StyledUl>
				<IndividualCostContainer>
					<div>Costo productos: </div>
					<div> {formatPrice(totalCart)}</div>
				</IndividualCostContainer>
				<IndividualCostContainer>
					<div>Costo envío: </div>
					<div> {formatPrice(ShippingPrice)}</div>
				</IndividualCostContainer>
				<Divider />
				<TotalCart>
					<div>Total: </div>
					<div> {formatPrice(totalCart + ShippingPrice)}</div>
				</TotalCart>
			</StyledCheckout>
		</>
	);
};

const StyledCheckout = styled.div`
	display: flex;
	flex-direction: column;
`;

const CheckoutTitle = styled(Title)`
	font-size: 18px;
	border-bottom: 1px solid #e7e7e7;
	padding-bottom: 10px;
	z-index: 0;
`;

const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	color: #9faab7;
`;

const IndividualCostContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0px;
`;

const Divider = styled.div`
	height: 1px;
	background-color: #e7e7e7;
	margin: 10px 0px;
`;

const TotalCart = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 30px;
	font-weight: 900;
`;
