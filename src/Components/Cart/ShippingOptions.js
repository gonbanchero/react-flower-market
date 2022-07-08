import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';
import { formatPrice } from '../../Data/Products';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../Redux/Cart/cart-actions';

export const ShippingOptions = () => {
	const dispatch = useDispatch();

	const handleShipping = (value, e) => {
		console.log(e.currentTarget.checked);
		if (e.currentTarget.checked) {
			dispatch(cartActions.AddShippingCost(value));
		} else {
			dispatch(cartActions.AddShippingCost(''));
		}
	};

	return (
		<>
			<ChooseTitle>Elegí como obtener tu compra:</ChooseTitle>
			<ShippingFormStyled>
				<LocalShipping>
					<input
						type="checkbox"
						onChange={(e) => {
							handleShipping(500, e);
						}}
					/>
					<div>
						<p style={{ margin: 0 }}>OCA Estándar</p>
						<p style={{ margin: '0', fontSize: '11px' }}>
							5 a 6 días hábiles
						</p>
					</div>
					<p style={{ color: '#BA87C9', fontWeight: '800' }}>
						{formatPrice(500)}
					</p>
				</LocalShipping>
				<LocalShipping>
					<input
						type="checkbox"
						onChange={(e) => {
							handleShipping(0, e);
						}}
					/>
					<div>
						<p style={{ margin: 0 }}>Retiro en Tienda</p>
						<p style={{ margin: '0', fontSize: '11px' }}>
							Av.Santa Fe 982 CABA
						</p>
					</div>
					<p style={{ color: '#BA87C9', fontWeight: '800' }}>
						Gratis
					</p>
				</LocalShipping>
			</ShippingFormStyled>
		</>
	);
};

const ChooseTitle = styled(Title)`
	font-size: 12px;
	margin: 25px 0px 0px 0px;
	font-weight: 100;
`;
const ShippingFormStyled = styled.div`
	border: 1px solid #efefef;
	border-radius: 3px;
	margin-top: 20px;
`;

const LocalShipping = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 20px;
	margin-bottom: 15px;
	border-radius: 8px;
	padding: 5px 10px;
`;
