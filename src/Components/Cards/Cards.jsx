import React from 'react';
import styled from 'styled-components';

import {
	Card,
	CardGrid,
	CardImg,
	CardTitle,
	CardPrice,
	CardButton,
} from './CardsStyles';
import { formatPrice } from '../../Data/Products';
import { useSelector } from 'react-redux';

export default function Cards({ openCard, setOpenCard }) {
	const ProductJson = useSelector((state) => state.products.products);
	// console.log(ProductJson);

	return (
		<CardStyled>
			<CardGrid>
				{ProductJson?.map((item) => (
					<Card key={item.id} id={item.id}>
						<CardImg
							img={item.img}
							onClick={() => {
								setOpenCard(item);
							}}
						></CardImg>
						<CardTitle>
							<div>{item.name}</div>
						</CardTitle>
						<CardPrice>
							<div>{formatPrice(item.price)}</div>
						</CardPrice>
						<CardButton
							onClick={() => {
								setOpenCard(item);
							}}
						>
							Comprar
						</CardButton>
					</Card>
				))}
			</CardGrid>
		</CardStyled>
	);
}

const CardStyled = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 0px 0px 50px 0px;
`;
