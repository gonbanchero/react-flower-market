import React, { useRef } from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/Title';
import { celeste } from '../../Styles/Colors';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { devices } from '../../Styles/breakpoints';

//FORM
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../Utils/validator';
import { Input } from '../UI/Input';

export const HomeContact = () => {
	//EMAIL JS

	const form = useRef();
	const [Message, setMessage] = useState('none');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_55y83p8',
				'template_54r9lw5',
				form.current,
				'user_VRcF84uTNf5bQ9l2SpU2e'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log(form.current);
					form.current.reset();
					form.current.nombre.value = '';
					form.current.email.value = '';
					setMessage('block');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<Titulo>¿Tenés dudas? Escribinos</Titulo>
			<Layout>
				<LayoutContent>
					<Contact>
						<FormStyled ref={form} onSubmit={sendEmail}>
							<Input
								id="nombre"
								placeholder="Nombre"
								name="user_name"
								type="text"
								onInput={() => {}}
								validators={[VALIDATOR_REQUIRE()]}
								errorText="Campo Obligatorio"
							/>
							<Input
								id="email"
								placeholder="Email"
								name="user_email"
								type="text"
								onInput={() => {}}
								validators={[VALIDATOR_EMAIL()]}
								errorText="Ingresa un correo válido"
							/>
							<Textarea>
								<TextAreaInput
									id="consulta"
									name="textarea"
									rows="5"
									placeholder="Consulta"
								></TextAreaInput>
							</Textarea>

							<ButtonArea>
								<Button type="submit" value="Send">
									Enviar
								</Button>
							</ButtonArea>
							<ConfirmMessage Display={Message}>
								Correo enviado correctamente!
							</ConfirmMessage>
						</FormStyled>
					</Contact>
					<Map>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52623.6721907384!2d-58.49515600000001!3d-34.478044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fd6a1cb686d647d!2sLa%20Parolaccia%20Trattoria%20(San%20Isidro)!5e0!3m2!1ses-419!2sar!4v1656425198014!5m2!1ses-419!2sar"
							width="100%"
							height="420"
							style={{ border: 0 }}
							loading="lazy"
						></iframe>
					</Map>
				</LayoutContent>
			</Layout>
		</>
	);
};

const Textarea = styled.div`
	position: relative;
	border: 1px solid #d7d7d7;
	border-radius: 3px;
	font-size: 14px;
	color: #7d7d7d;
`;

const TextAreaInput = styled.textarea`
	width: 100%;
	font: inherit;
	border: none;
	caret-color: #ff441f;
	border-radius: 15px;
	background-color: transparent;
	overflow: scroll;
	box-sizing: border-box;
	padding: 0.8rem 1.1rem;
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

const Layout = styled.div`
	display: flex;
	justify-content: center;
`;

const LayoutContent = styled.div`
	max-width: 1400px;
	display: flex;
	justify-content: center;
	@media ${devices.tablet} {
		flex-wrap: wrap;
	}
	@media ${devices.mobileL} {
		max-width: 90%;
	}
`;

const FormStyled = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 25px;
	margin-top: 30px;
	background-color: #fff;
	border-radius: 15px;
	width: 500px;
	/* box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16); */
	@media ${devices.mobileL} {
		width: 100%;
	}
`;

const Titulo = styled(Title)`
	text-align: center;
	color: ${celeste};
	font-size: 1.5rem;
	margin: 4rem 0rem;
`;
const Contact = styled.div`
	box-sizing: border-box;
	padding: 30px;
	background-color: #fff;
	@media ${devices.mobileL} {
		width: 100%;
	}
`;

const ButtonArea = styled.div`
	display: flex;
	justify-content: end;
	/* align-items: center; */
	@media ${devices.mobileL} {
		justify-content: center;
	}
`;

const ConfirmMessage = styled.div`
	display: ${({ Display }) => `${Display}`};
	font-size: 14px;
	color: green;
	position: absolute;

	bottom: 30px;
`;

const Button = styled.button`
	background-color: ${celeste};
	color: #fff;
	padding: 10px 15px;
	width: 20%;
	text-align: center;
	border-radius: 3px;
	border: 0;
	@media ${devices.mobileL} {
		width: 100%;
	}
`;
const Map = styled.div`
	width: 500px;
	@media ${devices.mobileL} {
		width: 100%;
	}
`;
