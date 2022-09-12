import React from 'react';

import { Banner } from '../Components/Banner/Banner';
import styled from 'styled-components';
import Cards from '../Components/Cards/Cards';
import { Navbar } from '../Components/Navbar/Navbar';
import { Title } from '../Styles/Title';
import { CardDialog } from '../Components/CardDialog/CardDialog';
import { Filter } from '../Components/Filter/Filter';
import { Toast } from '../Components/Toast/Toast';
import { HomeInfo } from '../Components/HomeInfo/HomeInfo.js';
import { HomeContact } from '../Components/HomeInfo/HomeContact';
import { devices } from '../Styles/breakpoints';

export default function Home({ openedCard, openedToast }) {
	return (
		<>
			<Navbar />
			<Toast display={openedToast} />
			<CardDialog {...openedCard} {...openedToast} />
			<Banner>
				<BannerTitle>
					<h1 style={{ margin: '0px' }}>
						Suscripción de Ramos Florales
					</h1>
					<p>¡Recibilos en la comodidad de tu casa mensualmente!</p>
				</BannerTitle>
			</Banner>
			<TitleContainer>
				<ProductTitle>Conocé nuestros exclusivos ramos</ProductTitle>
				<Filter></Filter>
			</TitleContainer>

			<Cards {...openedCard}></Cards>

			<HomeInfo />
			<HomeContact />
		</>
	);
}

const BannerTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: #2a7fc7;
	@media ${devices.mobileL} {
		font-size: 14px;
	}
`;

const TitleContainer = styled.div`
	margin: 0 auto;
	padding: 35px 0px;
	max-width: 1350px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media ${devices.laptop} {
		justify-content: center;
		flex-wrap: wrap;
		gap: 12px;
	}
`;

const ProductTitle = styled(Title)`
	font-size: 1.6rem;
	text-align: center;
	z-index: 1;

	@media ${devices.laptopL} {
		width: 100%;
		font-size: 1.3rem;
	}
`;
