import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';

import { celeste } from '../../Styles/Colors';
import { formatPrice } from '../../Data/Products';

import { useDispatch } from 'react-redux';
import * as cartActions from '../../Redux/Cart/cart-actions';
import { devices } from '../../Styles/breakpoints';

const CardDialogContainer = ({
	openCard,
	setOpenCard,
	setOpenToast,
	openToast,
}) => {
	const dispatch = useDispatch();

	const handlerClose = () => {
		setOpenCard();
	};

	const handlerAddToCart = () => {
		dispatch(cartActions.addItem(openCard));
		handlerClose();
		setOpenToast('flex');
		setTimeout(function () {
			setOpenToast('none');
		}, 1500);
	};

	return (
		<>
			<DialogShadow onClick={handlerClose} />
			<Dialog>
				<Left>
					<DialogHeader img={openCard.img}></DialogHeader>
				</Left>
				<Right>
					<DialogTitle>{openCard.name}</DialogTitle>
					{/* <DialogContent></DialogContent> */}

					<ConfirmButton
						onClick={() => {
							handlerAddToCart();
							// console.log('si saco esto me genera un bug');
						}}
					>
						Agregar - {formatPrice(openCard.price)}
					</ConfirmButton>
				</Right>
			</Dialog>
		</>
	);
};

export const CardDialog = (props) => {
	if (!props.openCard) return null;

	return <CardDialogContainer {...props} />;
};

const Dialog = styled.div`
	width: 500px;
	background-color: #fff;
	position: fixed;
	top: 150px;
	z-index: 5;
	max-height: calc(100%- 100px);
	left: calc(50% - 250px);
	display: flex;
	flex-direction: row;
	border-radius: 8px;
	padding: 20px;
	@media ${devices.mobileL} {
		flex-wrap: wrap;
		flex-direction: column;
		width: 70%;
		left: 40px;
		top: 150px;
		justify-content: center;
		align-items: center;
	}
`;

const Left = styled.div`
	width: 50%;
	min-height: 200px;
	@media ${devices.mobileL} {
		width: 100%;
	}
`;
const Right = styled.div`
	width: 50%;
	min-height: 200px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media ${devices.mobileL} {
		width: 100%;
		min-height: 0;
	}
`;

const DialogHeader = styled.div`
	min-height: 200px;
	${({ img }) => `background-image: url(${img});`}
	filter: contrast(75%);
	background-position: center;
	background-size: cover;
`;

const DialogTitle = styled(Title)`
	text-align: center;
	margin: 15px 0px;
	font-size: 1.2rem;
`;

// const DialogContent = styled.div`
// 	max-height: 150px;
// 	overflow: scroll;
// 	padding: 0px 25px;
// 	margin-bottom: 25px;
// `;

export const DialogFooter = styled.div``;

export const ConfirmButton = styled(Title)`
	margin: 10px;
	color: white;
	height: 20px;
	border-radius: 8px;
	padding: 10px 0px;
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

export const DialogShadow = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.7;
	position: fixed;
	z-index: 4;
`;
