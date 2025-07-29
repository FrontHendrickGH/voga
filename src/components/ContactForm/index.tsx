"use client";
import React, { useState, useRef } from "react";
import classes from "./ContactForm.module.scss";

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isValidated, setIsValidated] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		if (!form || !form.current) return;
		e.preventDefault();

		const dataForm = new FormData(form.current);

		const {
			event,
			numberOfGuests,
			day,
			month,
			year,
			// "g-recaptcha-response": captcha,
		} = Object.fromEntries(dataForm.entries());

		console.log({ event, numberOfGuests, day, month, year });

		if (!isValidated) {
			setSuccess("");
			setIsValidated(false);
			setError("Por favor, verifica el captcha");
			return e.preventDefault();
		}

		// if (!name || !email || !message) {
		// 	setSuccess("");
		// 	return setError("Por favor, cuentanós un poco más sobre ti");
		// }

		// if (name && email && captcha && message) {
		// 	return;
		// emailjs
		// 	.sendForm(keys.service_id, keys.template_id, form.current, {
		// 		publicKey: keys.email_key,
		// 	})
		// 	.then(
		// 		() => {
		// 			console.log("SUCCESS!");
		// 			form.current?.reset();
		// 			setSuccess("Pronto nos pondremos con contacto con usted");
		// 		},
		// 		error => {
		// 			console.log(process.env.SERVICE_ID);

		// 			console.log(error);

		// 			setSuccess("");
		// 			console.log("FAILED...", error.text);
		// 		}
		// 	);
		// }
	};

	return (
		<section className={classes.contact}>
			<div className={classes.formContainer}>
				<div className={classes.containerTitle}>
					<h3>Planea tu evento con nosotros</h3>
				</div>
				<p className={classes.complete}>
					Completa la siguiente forma para recibir nuestra información detallada
					<br />y poder iniciar con los planes de tu evento
				</p>
				<p className={classes.required}>Los campos marcados * son requeridos</p>
				<form ref={form} onSubmit={sendEmail} className={classes.formContent}>
					<h3>1. Sobre tu evento</h3>
					<div className={classes.inputContainer}>
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
					<div className={classes.inputContainer}>
						<p>Fecha del evento</p>
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

					{error && <p className={classes.error}>{error}</p>}
					{success && <p className={classes.error}>{success}</p>}
					<div className={classes.buttons}>
						<button type="submit" className={classes.submit}>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
