import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import * as ProductActions from '../../Redux/Products/products-actions';

export const Filter = () => {
	const dispatch = useDispatch();

	const categorie = useSelector((state) => state.categories.categories[0]);

	const categorieAll = ['Todos', ...categorie];

	const handleFilter = (filterProduct) => {
		dispatch(ProductActions.filteredProduct(filterProduct));
	};

	return (
		<>
			<FilterStyled onChange={(e) => handleFilter(e.target.value)}>
				{categorieAll.map((cat) => (
					<option value={cat} key={cat}>
						{cat}
					</option>
				))}
			</FilterStyled>
		</>
	);
};

const FilterStyled = styled.select`
	padding: 5px 10px;
	border: 0px;
	border-bottom: 2px solid #ededed;
	font-size: 16px;
`;
