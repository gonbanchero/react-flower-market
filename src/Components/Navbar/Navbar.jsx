import React from 'react';
import styled from 'styled-components';

import imgLogo from '../../assets/logo.png';
import { Carticon } from '../Cart/Carticon';
import { Link } from 'react-router-dom';
import { devices } from '../../Styles/breakpoints';

export const Navbar = () => {
	return (
		<NavBarContainer>
			<NavBarStyled>
				<Link to="/">
					<Logo src={imgLogo} />
				</Link>
				<NavigationMenu>
					<Carticon />
				</NavigationMenu>
			</NavBarStyled>
		</NavBarContainer>
	);
};

const NavBarContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #ffffff;
	position: fixed;
	z-index: 9999;
`;

const NavBarStyled = styled.div`
	padding: 15px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
	width: 1400px;
	margin: 0 auto;

	border-bottom: 1px solid #e5edef;
`;

const Logo = styled.img`
	max-width: 200px;
	height: auto;
	@media ${devices.mobileL} {
		max-width: 150px;
	}
`;

const NavigationMenu = styled.div`
	display: flex;
	padding: 15px;
	align-self: flex-end;
	margin-right: 20px;
`;
