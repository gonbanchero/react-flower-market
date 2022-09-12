import React from 'react';
import styled from 'styled-components';
import { CheckoutProducts } from '../Components/Checkout/CheckoutProducts';
import { CheckoutForm } from '../Components/Checkout/CheckoutForm';
import { NavbarNoIcon } from '../Components/Navbar/NavbarNoIcon';

import { devices } from '../Styles/breakpoints';

export const Checkout = () => {
	return (
		<>
			<NavbarNoIcon />
			<Layout>
				<LeftSection>
					<InsideCard>
						<CheckoutProducts></CheckoutProducts>
					</InsideCard>
				</LeftSection>
				<RightSection>
					<InsideCard>
						<CheckoutForm />
					</InsideCard>
				</RightSection>
			</Layout>
		</>
	);
};

export const Layout = styled.div`
	padding-top: 130px;
	display: flex;
	justify-content: center;
	@media ${devices.tablet} {
		flex-wrap: wrap;
		gap: 40px;
	}
`;

const RightSection = styled.div`
	min-width: 45%;

	@media ${devices.tablet} {
		width: 100%;
	}
`;

const LeftSection = styled.div`
	min-width: 25%;
	@media ${devices.tablet} {
		width: 100%;
	}
`;

const InsideCard = styled.div`
	margin: 0 auto;
	background-color: #fff;
	border-radius: 15px;
	width: 95%;
	box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
	padding: 30px;
	box-sizing: border-box;
`;
