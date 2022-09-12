import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../../Data/Products';
import { Link } from 'react-router-dom';
import { DialogFooter } from '../CardDialog/CardDialog';
import { useSelector } from 'react-redux';
import { Title } from '../../Styles/Title';
import { celeste } from '../../Styles/Colors';
import { devices } from '../../Styles/breakpoints';

export const CartFooter = ({ totalCart, handlerToggle }) => {
	const ShippingInfo = useSelector((state) => state.cart.shipping);

	let ShippingLeyend = '';
	let ShippingPrice = 0;

	if (ShippingInfo === '') {
		ShippingLeyend = 'Elegí arriba tu mejor opción';
	} else {
		ShippingPrice = ShippingInfo;
	}

	return (
		<>
			{totalCart === 0 ? (
				' '
			) : (
				<Footer>
					<SubTotals>
						<p style={{ margin: 0 }}>Subtotal:</p>
						<p style={{ margin: 0 }}>{formatPrice(totalCart)}</p>
					</SubTotals>
					<SubTotals>
						<p style={{ margin: 0 }}>Envío:</p>
						<p style={{ margin: 0 }}>
							{ShippingInfo === ''
								? ShippingLeyend
								: formatPrice(ShippingPrice)}
						</p>
					</SubTotals>
					<Totals>
						<TotalPrice>
							<p style={{ margin: 0 }}>Total:</p>
							<p style={{ margin: 0 }}>
								{formatPrice(totalCart + ShippingPrice)}
							</p>
						</TotalPrice>
						<Cuotas>
							O hasta 3 cuotas sin interés de{' '}
							{formatPrice((totalCart + ShippingPrice) / 3)}
						</Cuotas>
					</Totals>
					<Link to="/checkout" onClick={handlerToggle}>
						<ConfirmButton>INICIAR COMPRA</ConfirmButton>
					</Link>
					<MoreProducts onClick={handlerToggle}>
						Ver más productos
					</MoreProducts>
				</Footer>
			)}
		</>
	);
};

const Footer = styled(DialogFooter)`
	flex-direction: column;
	display: flex;
	padding-top: 15px;
	padding-bottom: 15px;
	align-items: center;
	z-index: 6666;
	border-top: 1px solid #9faab7;
	box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
`;

const SubTotals = styled.div`
	display: flex;
	width: 80%;
	margin: 5px 0px;
	justify-content: space-between;
	font-size: 14px;
	color: #9faab7;
`;

const Totals = styled.div`
	border-top: 1px solid #ededed;
	padding: 5px 0px;
	margin-top: 10px;
	width: 80%;
`;

const TotalPrice = styled.div`
	font-size: 18px;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
	margin: 10px 0px;
`;

const Cuotas = styled.p`
	font-size: 13px;
	text-align: right;
	margin-top: 0px;
`;

const MoreProducts = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	z-index: 9999;
`;

export const ConfirmButton = styled(Title)`
	margin: 10px;
	color: white;
	height: 20px;
	border-radius: 8px;
	padding: 10px;
	width: 200px;
	font-weight: 400;
	cursor: pointer;
	background-color: ${celeste};
	text-align: center;
	&:hover {
		opacity: 0.7;
	}
	&:active {
		opacity: 1;
	}
	@media ${devices.mobileL} {
		width: 100%;
		margin: 0 auto;
		font-size: 0.9rem;
	}
`;
