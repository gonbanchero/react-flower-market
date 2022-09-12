import styled from 'styled-components';
import { Title } from '../../Styles/Title';
import { celeste, violeta } from '../../Styles/Colors';
import { devices } from '../../Styles/breakpoints';

export const CardGrid = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, 300px);
	justify-content: center;
	flex-wrap: wrap;
	@media ${devices.mobileL} {
		grid-gap: 0px;
	}
`;

export const CardLabel = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.47);
	padding: 5px;
	font-size: 15px;
`;

export const Card = styled.div`
	height: auto;
	width: 300px;
	border-radius: 20px;
	min-height: 300px;
	background-color: #fff;
	box-shadow: 0px 0px 15px 0px #d7d7d7;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	z-index: 1;
	align-self: center;
	justify-self: center;
	margin: 20px 0px;
`;

export const CardImg = styled.div`
	background-image: ${({ img }) => `url(${img})`};
	background-position: center;
	background-size: cover;
	filter: contrast(75%);
	width: 100%;
	height: 200px;
	cursor: pointer;
	border-bottom: 4px solid ${violeta};
`;

export const CardTitle = styled(Title)`
	margin: 15px 0px;
	font-weight: 500;
`;

export const CardPrice = styled(Title)`
	font-size: 14px;
	font-weight: 300;
	color: ${celeste};
	margin-bottom: 5px;
`;

export const CardButton = styled.div`
	background-color: ${violeta};
	width: 100%;
	margin-top: 10px;
	height: 40px;
	font-size: 15px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0px 0px 20px 20px;
	cursor: pointer;
`;

// export const Card = styled.div`
// 	height: 200px;

// 	background-image: ${({ img }) => `url(${img})`};
// 	background-position: top;
// 	background-size: cover;
// 	filter: contrast(75%);
// 	color: #000;
// 	padding: 10px;
// 	font-size: 25px;
// 	margin-top: 5px;
// 	border-radius: 7px;
// 	transition-property: box-shadow margin-top;
// 	transition-duration: 0.1s;
// 	box-shadow: 0px 0px 2px 0px grey;

// 	&:hover {
// 		cursor: pointer;
// 		filter: constrast(100%);
// 		box-shadow: 0px 0px 15px 0px grey;
// 		margin-top: 0px;
// 	}
// `;
