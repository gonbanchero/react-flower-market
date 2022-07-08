import React from 'react';
import { NavbarNoIcon } from '../Components/Navbar/NavbarNoIcon';
import { Banner } from '../Components/Banner/Banner';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { celeste } from '../Styles/Colors';

export const Thanks = () => {
	return (
		<>
			<NavbarNoIcon />
			<Banner>
				<MainTitle style={{ margin: '0px' }}>
					¡Gracias por tu compra!
				</MainTitle>
				<p style={{ color: '#000', fontSize: '1.2rem' }}>
					En instantes nos estaremos comunicando con vos por WhatsApp
				</p>
			</Banner>
		</>
	);
};

const MainTitle = styled(Title)`
	color: ${celeste};
	font-size: 1.7rem;
`;
