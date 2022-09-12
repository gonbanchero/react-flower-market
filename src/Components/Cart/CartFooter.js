import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../../Data/Products';
import { Link } from 'react-router-dom';
import { ConfirmButton } from '../CardDialog/CardDialog';
import { DialogFooter } from '../CardDialog/CardDialog';
import { useSelector } from 'react-redux';

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
	padding-top: 15px;
	padding-bottom: 15px;
	align-items: center;
	z-index: 6666;
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
