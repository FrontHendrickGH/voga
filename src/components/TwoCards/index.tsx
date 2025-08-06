import React from "react";
import classes from "./TwoCards.module.scss";
import Image from "next/image";
import Link from "next/link";

const TwoCards = () => {
	return (
		<section className={classes.container}>
			<div className={classes.card}>
				<figure>
					<Image src={"/card-1.jpg"} alt="nuestro banquete y catering" fill />
					<svg
						width="100%"
						height="20"
						viewBox="0 0 630 20"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
					>
						<path
							d="M12 0 Q0 0 0 12 V20 H630 V12 Q630 0 618 0 H334.737 C332.716 0 330.77 0.804553 329.336 2.25057 L320.902 10.7527 C317.924 13.7426 313.087 13.7426 310.109 10.7527 L301.665 2.25057 C300.241 0.815425 298.295 0 296.263 0 H12 Z"
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
					<Image src={"/card-2.jpg"} alt="eventos en tijuana" fill />
					<svg
						width="100%"
						height="20"
						viewBox="0 0 630 20"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
					>
						<path
							d="M12 0 Q0 0 0 12 V20 H630 V12 Q630 0 618 0 H334.737 C332.716 0 330.77 0.804553 329.336 2.25057 L320.902 10.7527 C317.924 13.7426 313.087 13.7426 310.109 10.7527 L301.665 2.25057 C300.241 0.815425 298.295 0 296.263 0 H12 Z"
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
