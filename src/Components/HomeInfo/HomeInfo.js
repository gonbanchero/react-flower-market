import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';
import { celeste } from '../../Styles/Colors';
import Calendar from '../../assets/calendar.svg';
import Flower from '../../assets/flower.svg';
import Pause from '../../assets/pause.svg';
import Truck from '../../assets/truck.svg';
import { devices } from '../../Styles/breakpoints';

export const HomeInfo = () => {
	return (
		<InfoContainer>
			<MainTitle>¿Cómo funciona nuestro sistema?</MainTitle>
			<InfoGrid>
				<Info>
					<InfoIcon src={Calendar}></InfoIcon>
					<InfoTitle>ELEGÍ LA FRECUENCIA</InfoTitle>
					<InfoText>
						¿Un ramo a la semana? ¿Un ramo cada 15 días? ¿Un ramo al
						mes? ¡Vos decidís!
					</InfoText>
				</Info>
				<Info>
					<InfoIcon src={Flower}></InfoIcon>
					<InfoTitle>ELEGÍ EL RAMO</InfoTitle>
					<InfoText>
						En cada entrega, podrás escoger qué ramo preferis entre
						varias opciones.
					</InfoText>
				</Info>
				<Info>
					<InfoIcon src={Truck}></InfoIcon>
					<InfoTitle>ENVÍO GRATIS</InfoTitle>
					<InfoText>
						Podés cambiar la dirección de entrega cuando quieras sin
						costo adicional.
					</InfoText>
				</Info>
				<Info>
					<InfoIcon src={Pause}></InfoIcon>
					<InfoTitle>PERSONALIZÁ</InfoTitle>
					<InfoText>
						Podés modificar, pausar o cancelar tu suscripción cuando
						quieras.
					</InfoText>
				</Info>
			</InfoGrid>
		</InfoContainer>
	);
};

const InfoContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 50px 0px;
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('img/florista.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MainTitle = styled(Title)`
	color: ${celeste};
	font-size: 2rem;
	margin-bottom: 30px;
	@media ${devices.laptopL} {
		font-size: 1.7rem;
	}
	@media ${devices.mobileL} {
		font-size: 1.5rem;
		text-align: center;
	}
`;

const InfoGrid = styled.div`
	width: 70%;

	display: grid;
	grid-template-columns: repeat(auto-fit, 250px);
	justify-content: center;
	gap: 20px;
	align-self: center;
	justify-self: center;
	@media ${devices.mobileL} {
		gap: 5px;
	}
`;

const Info = styled.div`
	align-self: center;
	justify-self: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 50px 0px;
	@media ${devices.tablet} {
		margin: 10px;
	}
`;

const InfoTitle = styled(Title)`
	font-size: 20px;
	color: #fff;
	padding-bottom: 20px;
	text-align: center;
	@media ${devices.mobileL} {
		font-size: 15px;
	}
`;

const InfoIcon = styled.img`
	width: 45px;
	padding-bottom: 20px;
`;

const InfoText = styled(Title)`
	font-size: 15px;
	text-align: center;
	padding: 0px 25px;
	color: #fff;
	font-weight: 200;
	@media ${devices.mobileL} {
		font-size: 13px;
	}
`;
