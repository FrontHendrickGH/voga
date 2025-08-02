import Image from "next/image";
import React from "react";
import classes from "./FeaturedCards.module.scss";
import Link from "next/link";

const FeaturedCards = () => {
	return (
		<section className={classes.featured}>
			<div className={classes.container}>
				<Image
					src={"/featured-cards-decoration.png"}
					alt="Imagen de fondo sobre los servicios que ofrecemos "
					fill
				/>
				<div className={classes.cards}>
					<article className={classes.card}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="413"
							height="14"
							viewBox="0 0 630 20"
							fill="none"
						>
							<path
								d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
								fill="#fff"
							/>
						</svg>

						<h3>Bodas</h3>
						<p>
							El lugar perfecto
							<br />
							para tu boda
							<br />
							en tijuana
						</p>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
					</article>
					<article className={classes.card}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="413"
							height="14"
							viewBox="0 0 630 20"
							fill="none"
						>
							<path
								d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
								fill="#fff"
							/>
						</svg>

						<h3>XV Años</h3>
						<p>
							XV AÑOS Y SWEET SIXTEEN <br /> INOLVIDABLES <br /> EN TIJUANA
						</p>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
					</article>
					<article className={classes.card}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="413"
							height="14"
							viewBox="0 0 630 20"
							fill="none"
						>
							<path
								d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
								fill="#fff"
							/>
						</svg>

						<h3>Graduaciones</h3>
						<p>
							EL LUGAR PREDILECTO <br />
							PARA GRADUACIONES
							<br /> EN TIJUANA
						</p>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
					</article>
					<article className={classes.card}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="413"
							height="14"
							viewBox="0 0 630 20"
							fill="none"
						>
							<path
								d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
								fill="#fff"
							/>
						</svg>

						<h3>Eventos Corporativos</h3>
						<p>
							impulsa tu negocio en un
							<br /> espacio elegante y profesional <br />
							EN TIJUANA
						</p>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
					</article>
					<article className={classes.card}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="413"
							height="14"
							viewBox="0 0 630 20"
							fill="none"
						>
							<path
								d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
								fill="#fff"
							/>
						</svg>

						<h3>Despedidas</h3>
						<p>
							disfruta tu despedida
							<br /> de manera única <br />
							en Tijuana
						</p>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
					</article>
					<article className={classes.card}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="413"
							height="14"
							viewBox="0 0 630 20"
							fill="none"
						>
							<path
								d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
								fill="#fff"
							/>
						</svg>

						<h3>Baby Shower</h3>
						<p>
							celebra la llegada de
							<br /> una nueva vida en un evento
							<br /> lleno de amor
						</p>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
					</article>
				</div>
			</div>
		</section>
	);
};

export default FeaturedCards;
