"use client";
import React, { useState, useRef } from "react";
import classes from "./ContactForm.module.scss";
import Turnstile from "react-turnstile";

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [error, setError] = useState("");
	const [token, setToken] = useState("");
	const [success, setSuccess] = useState("");

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		if (!form || !form.current) return;
		e.preventDefault();

		if (!token) {
			return setError("Por favor resuelve el CAPTCHA");
		}

		const dataForm = new FormData(form.current);

		const {
			event,
			numberOfGuests,
			day,
			month,
			year,
			phone,
			name,
			email,
			message,
		} = Object.fromEntries(dataForm.entries());

		if (
			!name ||
			!email ||
			!event ||
			!numberOfGuests ||
			!day ||
			!month ||
			!year
		) {
			return setError(
				"Por favor, cuentanós un poco más sobre tus necesidades para tu proximo evento"
			);
		}

		const resCaptcha = await fetch("/api/validate-turnstile", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token }),
		});

		const dataCaptcha = await resCaptcha.json();

		if (!dataCaptcha.success) {
			setSuccess("");
			setError("Captcha inválido");
			return e.preventDefault();
		}

		const res = await fetch("/api/send-email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				event,
				numberOfGuests,
				day,
				month,
				year,
				phone,
				name,
				email,
				message,
			}),
		});

		const data = await res.json();

		if (data.success) {
			form.current.reset();
			setError("");
			setSuccess("Pronto nos pondremos en contacto con usted");
		}
	};

	return (
		<section className={classes.contact}>
			<div className={classes.formContainer}>
				<div className={classes.containerTitle}>
					<h3>Planea tu evento con nosotros</h3>
				</div>
				<div className={classes.container}>
					<p className={classes.complete}>
						Completa la siguiente forma para recibir nuestra información
						detallada
						<br />y poder iniciar con los plane s de tu evento
					</p>
					<p className={classes.required}>
						Los campos marcados * son requeridos
					</p>
					<form ref={form} onSubmit={sendEmail} className={classes.formContent}>
						<h3>1. Sobre tu evento</h3>
						<div
							className={`${classes.inputContainer} ${classes.inputContainerEvent}`}
						>
							<label htmlFor="event">
								¿Que tipo de evento quieres realizar? *
							</label>
							<select name="event" id="event">
								<option value="" disabled>
									Selecciona una opción
								</option>
								<option value="Boda">Boda</option>
								<option value="XV">XV años</option>
								<option value="Graduaciones">Graduaciones</option>
								<option value="Corporativo">Corporativo</option>
								<option value="Despedidas">Despedidas</option>
								<option value="Baby-shower">Baby Shower</option>
							</select>
						</div>
						<fieldset>
							<legend>Numero de invitados *</legend>
							<label>
								<input
									type="radio"
									name="numberOfGuests"
									value="120-200"
									required
								/>
								120-200
							</label>

							<label>
								<input type="radio" name="numberOfGuests" value="200-300" />
								200-300
							</label>

							<label>
								<input type="radio" name="numberOfGuests" value="300-400" />
								300-400
							</label>

							<label>
								<input type="radio" name="numberOfGuests" value="400-500" />
								400-500
							</label>
						</fieldset>
						<div
							className={`${classes.inputContainer} ${classes.inputContainerDate}`}
						>
							<p>Fecha del evento *</p>
							<select name="day" id="day">
								<option value="" disabled>
									Día
								</option>
								{Array.from({ length: 31 }, (_, i) => (
									<option key={i + 1} value={i + 1}>
										{i + 1}
									</option>
								))}
							</select>
							<select name="month" id="month">
								<option value="" disabled>
									Mes
								</option>
								{Array.from({ length: 12 }, (_, i) => (
									<option key={i + 1} value={i + 1}>
										{i + 1}
									</option>
								))}
							</select>
							<select name="year" id="year">
								<option value="" disabled>
									Año
								</option>
								<option value={2025}>2025</option>
								<option value={2026}>2026</option>
								<option value={2027}>2027</option>
								<option value={2028}>2028</option>
							</select>
						</div>
						<h3>2. Datos personales</h3>
						<div
							className={`${classes.inputContainer} ${classes.inputContainerName}`}
						>
							<input
								type="text"
								name="name"
								id="name"
								required
								placeholder="Nombre *"
							/>
						</div>
						<div className={classes.inputs}>
							<div className={classes.inputContainer}>
								<input
									type="email"
									name="email"
									id="email"
									required
									placeholder="Email *"
								/>
							</div>
							<div className={classes.inputContainer}>
								<input
									type="text"
									name="phone"
									id="phone"
									placeholder="Teléfono"
								/>
							</div>
						</div>
						<div
							className={`${classes.inputContainer} ${classes.inputContainerArea}`}
						>
							<textarea
								name="message"
								id="message"
								placeholder="Mensaje"
							></textarea>
						</div>

						{success && (
							<p className={`${classes.success} ${classes.message}`}>
								{success}
							</p>
						)}
						{error && (
							<p className={`${classes.message} ${classes.error}`}>{error}</p>
						)}
						<div className={classes.buttons}>
							<Turnstile
								sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
								onSuccess={token => setToken(token)}
								onExpire={() => setToken("")}
							/>
							<button type="submit" className={classes.submit}>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
