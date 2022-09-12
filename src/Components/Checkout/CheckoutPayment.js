import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';
import { payments } from '../../Data/Payments';
import { ItemImg } from '../Cart/OrderContent';
import { violeta } from '../../Styles/Colors';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../Data/Products';

export const CheckoutPayment = ({
	isValid,
	submit,
	paymentState,
	isActive,
}) => {
	const ShippingPrice = useSelector((state) => state.cart.shipping);

	const totalCart = useSelector((state) =>
		state.cart.cartItems.reduce(
			(acc, cartItems) => acc + cartItems.price * cartItems.quantity,
			0
		)
	);

	const handleSelect = (value) => {
		paymentState(value);
	};

	return (
		<Container>
			<MainTitle>Medios de Pago</MainTitle>
			{payments.map((pay) => (
				<PaymentCard
					id={pay.id}
					active={isActive}
					onClick={() => handleSelect(pay.id)}
				>
					<Image img={pay.icon}></Image>
					{pay.logo ? (
						<Logo src={pay.logo}></Logo>
					) : (
						<div>{pay.name}</div>
					)}
				</PaymentCard>
			))}
			<PayButton
				onClick={submit}
				disabled={isValid === false || isActive === false}
			>
				Finalizar Compra - {formatPrice(totalCart + ShippingPrice)}
			</PayButton>
		</Container>
	);
};

const Container = styled.div``;

export const MainTitle = styled(Title)`
	font-size: 20px;
	text-align: center;
	padding: 10px 0px;
`;

//No entiendo pq carajo funciona esto
const PaymentCard = styled.div`
	${(props) => props.id !== props.active} {
		border: 1px solid ${violeta};
	}
	border: 1px solid #d7d7d7;
	border-radius: 3px;
	padding: 20px;
	display: flex;
	justify-content: flex-start;
	gap: 20px;
	margin: 10px 0px;
`;

const Image = styled(ItemImg)`
	background-image: ${({ img }) => `url(${img})`};
	width: 25px;
	height: 25px;
`;

const Logo = styled.img`
	width: auto;
	height: 25px;
`;

const PayButton = styled.button`
	border: none;
	border-bottom: 5px solid ${violeta};
	width: 100%;
	color: ${violeta};
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 3px;
	cursor: pointer;
	background: linear-gradient(to top, ${violeta} 50%, #fff 50%);
	background-size: 100% 200%;
	background-position: top;
	transition: all 0.2s ease-out;
	&:hover {
		background-position: bottom;
		color: #fff;
	}
	&:disabled {
		background: #ccc;
		border: none;
		color: #878787;
		cursor: initial;
	}
`;
