import React from 'react';
import styled from 'styled-components';

import imgLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const NavbarNoIcon = () => {
	return (
		<NavBarContainer>
			<NavBarStyled>
				<Link to="/">
					<Logo src={imgLogo} />
				</Link>
				<NavigationMenu>
					<Link to="/">Volver al sitio</Link>
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
	z-index: 999;
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
`;

const NavigationMenu = styled.div`
	display: flex;
	padding: 15px;
	align-self: flex-end;
	margin-right: 20px;
`;
