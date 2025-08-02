import React from "react";
import classes from "./TwoCards.module.scss";
import Image from "next/image";
import Link from "next/link";
const TwoCards = () => {
	return (
		<section className={classes.container}>
			<div className={classes.card}>
				<figure>
					<Image src={"/card-1.png"} alt="nuestro banquete y catering" fill />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="630"
						height="20"
						viewBox="0 0 630 20"
						fill="none"
					>
						<path
							d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
							fill="currentColor"
						/>
					</svg>
				</figure>
				<div className={classes.containerText}>
					<p className={classes.subtitle}>Nuestra cocina</p>
					<h3 className={classes.title}>
						Banquetes y Catering
						<br />
						Exclusivo en Tijuana.
					</h3>
					<p className={classes.description}>
						Sorprende a tus invitados con una experiencia
						<br /> gastronómica excepcional
					</p>
					<Link href={"/nuestra-cocina"} className={classes.link}>
						Descúbrela
					</Link>
				</div>
			</div>
			<div className={classes.card}>
				<figure>
					<Image src={"/card-2.png"} alt="eventos en tijuana" fill />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="630"
						height="20"
						viewBox="0 0 630 20"
						fill="none"
					>
						<path
							d="M329.346 2.25057L320.902 10.7527C317.924 13.7426 313.087 13.7426 310.109 10.7527L301.665 2.25057C300.241 0.815425 298.295 0 296.263 0H7.6079C3.40182 0 0 3.40304 0 7.61064V20H630V7.61064C630 3.40304 626.598 0 622.392 0H334.737C332.716 0 330.77 0.804553 329.336 2.25057H329.346Z"
							fill="currentColor"
						/>
					</svg>
				</figure>
				<div className={classes.containerText}>
					<p className={classes.subtitle}>Coordinación</p>
					<h3 className={classes.title}>
						Coordinación de
						<br />
						Eventos en Tijuana.
					</h3>
					<p className={classes.description}>
						Disfruta de tu celebración <br />
						sin preocupaciones.
					</p>
					<Link href={"/coordinacion-y-decoracion"} className={classes.link}>
						Planeemos
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TwoCards;
