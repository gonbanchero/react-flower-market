import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
	return (
		<FooterStyled>
			Copyright © {new Date().getFullYear()} | Powered by
			<a href="https://gonbanchero.com"> Gon Banchero</a>
		</FooterStyled>
	);
};

const FooterStyled = styled.div`
	background-color: #000;
	color: #fff;
	padding: 22px;
	text-align: center;
	margin-top: 40px;
`;
