import React, { useReducer, useEffect } from 'react';
import { validate } from '../../Utils/validator';
import styled, { css } from 'styled-components';

const CHANGE = 'CHANGE';
const TOUCHE = 'TOUCHE';

const FromControl = styled.div`
	/* margin: 0rem 0rem 1rem 0rem; */
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	position: relative;
	border: 1px solid #d7d7d7;
	border-radius: 3px;
	font-size: 14px;
	color: #7d7d7d;
	padding: 4px 0;

	&:focus {
		background-color: #ffffff;
		outline-width: 0;
	}
	${({ showError }) =>
		showError
			? css`
					border-color: red;
					background: #ffd1d1;
			  `
			: null}
`;

const StyledInput = styled.input`
	width: 100%;
	font: inherit;
	border: none;
	caret-color: #ff441f;
	border-radius: 15px;
	background-color: transparent;
	height: 25px;
	padding: 0.15rem 1.1rem;
	display: block;
	color: #7d7d7d;
	&:focus {
		outline: none;
		background-color: transparent;
		border-color: black;
	}
	&::placeholder {
		font-size: 14px;
	}
`;

// const StyledLabel = styled.div`
// 	font-weight: bold;
// 	padding: 4px 0;
// 	margin-bottom: 0.5rem;
// 	${({ showError }) => (showError ? `color: red;` : null)}
// `;

const inputReducer = (state, action) => {
	switch (action.type) {
		case CHANGE:
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators),
			};
		case TOUCHE:
			return {
				...state,
				isTouche: true,
			};

		default:
			return state;
	}
};

const ErrorText = styled.p`
	color: red;
	font-size: 14px;
	padding: 4px 0;
	margin: 0 16px;
`;

export const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.initialValue || '',
		isTouche: false,
		isValid: props.initialValid || false,
	});

	const { isValid, value } = inputState;
	const { onInput, id } = props;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [onInput, id, value, isValid]);

	const changeHandler = (event) => {
		dispatch({
			type: CHANGE,
			val: event.target.value,
			validators: props.validators,
		});
	};

	const toucheHandler = (event) => {
		dispatch({
			type: TOUCHE,
		});
	};

	/* console.log('TOUCHE', inputState.isTouche);
  console.log('Valid', inputState.isValid);
  console.log('FINAL', !inputState.isValid && inputState.isTouche); */

	return (
		<FromControl>
			{/* <StyledLabel
				htmlFor={props.id}
				showError={!inputState.isValid && inputState.isTouche}
			>
				{props.label}
			</StyledLabel> */}
			<InputContainer
				showError={!inputState.isValid && inputState.isTouche}
			>
				<StyledInput
					id={props.id}
					type={props.type}
					name={props.name}
					placeholder={props.placeholder}
					onChange={changeHandler}
					onBlur={toucheHandler}
					value={inputState.value}
					showError={!inputState.isValid && inputState.isTouche}
				/>
			</InputContainer>

			{!inputState.isValid && inputState.isTouche && (
				<ErrorText>{props.errorText}</ErrorText>
			)}
		</FromControl>
	);
};
