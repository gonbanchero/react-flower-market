import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';

import { celeste } from '../../Styles/Colors';
import { formatPrice } from '../../Data/Products';

import { useDispatch } from 'react-redux';
import * as cartActions from '../../Redux/Cart/cart-actions';

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
				<DialogHeader img={openCard.img}></DialogHeader>
				<DialogTitle>{openCard.name}</DialogTitle>
				<DialogContent></DialogContent>
				<DialogFooter>
					<ConfirmButton
						onClick={() => {
							handlerAddToCart();
							// console.log('si saco esto me genera un bug');
						}}
					>
						Agregar - {formatPrice(openCard.price)}
					</ConfirmButton>
				</DialogFooter>
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
	flex-direction: column;
	border-radius: 8px;
`;

const DialogHeader = styled.div`
	min-height: 150px;
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

const DialogContent = styled.div`
	max-height: 150px;
	overflow: scroll;
	padding: 0px 25px;
	margin-bottom: 25px;
`;

export const DialogFooter = styled.div`
	box-shadow: 0px -2px 10px 0px gray;
	display: flex;
	justify-content: center;
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
`;

export const DialogShadow = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.7;
	position: fixed;
	z-index: 4;
`;
