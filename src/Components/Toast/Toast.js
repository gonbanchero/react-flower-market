import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../assets/check.svg';
import { Title } from '../../Styles/Title';

export const Toast = (props) => {
	return (
		<ToastStyled display={props.display.openToast}>
			<img src={CheckIcon} alt="" />
			<Text>Item agregado al carrito</Text>
		</ToastStyled>
	);
};

const ToastStyled = styled.div`
	position: fixed;
	bottom: 0;
	right: 6%;
	opacity: 100%;
	margin-bottom: 15px;
	z-index: 5555;
	width: 250px;
	height: 50px;
	background-color: #38a168;
	color: #fff;
	display: ${(props) => props.display};
	justify-content: space-evenly;
	align-items: center;
	border-radius: 9px;
	transition: opacity 0.1s ease-in;
	transition: opacity 0.2s ease-out;
`;

const Text = styled(Title)`
	font-size: 14px;
	font-weight: 300;
`;
