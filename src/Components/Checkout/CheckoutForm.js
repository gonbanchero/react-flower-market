import React, { useState } from 'react';
import useForm from '../../Hooks/useForm';
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../Utils/validator';
import styled from 'styled-components';
import { Input } from '../UI/Input';
import { MainTitle } from './CheckoutPayment';
import { CheckoutPayment } from './CheckoutPayment';
import { useSelector, useDispatch } from 'react-redux';
import { payments } from '../../Data/Payments';
import * as CartActions from '../../Redux/Cart/cart-actions';
import { devices } from '../../Styles/breakpoints';

export const CheckoutForm = () => {
	let cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const totalCart = useSelector((state) =>
		state.cart.cartItems.reduce(
			(acc, cartItems) => acc + cartItems.price * cartItems.quantity,
			0
		)
	);

	const [formState, inputHandler] = useForm(
		{
			nombre: {
				value: '',
				isValid: false,
			},
			apellido: {
				value: '',
				isValid: false,
			},
			email: {
				value: '',
				isValid: false,
			},
			telefono: {
				value: '',
				isValid: false,
			},
			calle: {
				value: '',
				isValid: false,
			},
			numero: {
				value: '',
				isValid: false,
			},
			localidad: {
				value: '',
				isValid: false,
			},
			provincia: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const [active, setActive] = useState(false);

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (!formState.isValid || !active) {
			alert('Por favor completar todos los datos');
			return;
		}
		console.log('YEEEAAA mandale no ma!');
		window.open(
			`https://api.whatsapp.com/send/?phone=5491173660749&text=PEDIDO%3A+%2A${Math.floor(
				Math.random() * 100 + 1
			)}%2A%0A%0A+${cartItems
				.map(
					(item) =>
						`%E2%80%94 ${item.name} x ${item.quantity}> %2A$${item.price}%2A%0A`
				)
				.join(
					' '
				)}%0A%2ATotal%3A+%24${totalCart}%2A%0A%0ANombre%3A+%2A${
				formState.inputs.nombre.value
			}%2A%0ATeléfono%3A+%2A${
				formState.inputs.telefono.value
			}%2A%0AEmail%3A+%2A${
				formState.inputs.email.value
			}%2A%0AMétodo+de+Pago%3A+%2A${payments.map((payment) => {
				if (payment.id === active) {
					return payment.name;
				}
			})}%2A%0A&app_absent=0`
		);
		setActive(false);
		dispatch(CartActions.Reset());
		window.open('/thank', '_self');
	};

	return (
		<>
			<MainTitle>Datos de Facturación</MainTitle>
			<form onSubmit={handlerSubmit}>
				<FormStyled>
					<Input
						id="nombre"
						placeholder="Nombre"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_REQUIRE()]}
						errorText="Campo Obligatorio"
					/>
					<Input
						id="apellido"
						placeholder="Apellido"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_REQUIRE()]}
						errorText="Campo Obligatorio"
					/>
					<Input
						id="email"
						placeholder="Email"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_EMAIL()]}
						errorText="Email incorrecto"
					/>
					<Input
						id="telefono"
						placeholder="Telefono"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_MINLENGTH(10)]}
						errorText="Número incorrecto"
					/>
					<Input
						id="calle"
						placeholder="Calle"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_REQUIRE()]}
						errorText="Campo Obligatorio"
					/>
					<Input
						id="numero"
						placeholder="Número"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_MINLENGTH(1)]}
						errorText="Campo Obligatorio"
					/>
					<Input
						id="localidad"
						placeholder="Localidad"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_REQUIRE()]}
						errorText="Campo Obligatorio"
					/>
					<Input
						id="provincia"
						placeholder="Provincia"
						type="text"
						onInput={inputHandler}
						validators={[VALIDATOR_REQUIRE()]}
						errorText="Campo Obligatorio"
					/>
				</FormStyled>
				<CheckoutPayment
					isValid={formState.isValid}
					submit={handlerSubmit}
					paymentState={setActive}
					isActive={active}
				/>
			</form>
		</>
	);
};

const FormStyled = styled.div`
	display: grid;
	grid-template-columns: 49% 49%;
	gap: 15px;
	margin: 20px 0px;
	@media ${devices.mobileL} {
		grid-template-columns: 100%;
	}
`;
