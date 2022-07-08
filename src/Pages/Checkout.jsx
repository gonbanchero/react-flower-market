import React from 'react';
import styled from 'styled-components';
import { CheckoutProducts } from '../Components/Checkout/CheckoutProducts';
import { CheckoutForm } from '../Components/Checkout/CheckoutForm';
import { NavbarNoIcon } from '../Components/Navbar/NavbarNoIcon';

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
	/* background-color: gray; */
	padding-top: 130px;
	display: flex;
	justify-content: center;
`;

const RightSection = styled.div`
	min-width: 45%;
	/* background-color: red; */
`;

const LeftSection = styled.div`
	min-width: 25%;
	/* background-color: green; */
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
