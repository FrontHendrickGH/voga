import Image from "next/image";
import React from "react";
import classes from "./SpecialDay.module.scss";
import Link from "next/link";

const SpecialDay = () => {
	return (
		<section className={classes.special}>
			<Image
				src={"/special-day-background.jpg"}
				alt="background image decoration for your special day!"
				fill
			/>
			<div className={classes.container}>
				<div className={classes.containerTitle}>
					<h2>
						Un día especial,
						<br />
						merece un lugar
						<svg
							width="45"
							height="37"
							viewBox="0 0 45 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M32.84 0.75C36.37 0.75 39.07 2.2 40.94 5.11C42.5 7.52 43.28 10.53 43.28 14.15C43.28 18.75 42.11 22.87 39.76 26.51C37.42 30.15 33.88 33.09 29.14 35.32L27.87 32.84C30.73 31.64 33.18 29.75 35.24 27.18C37.29 24.61 38.32 22.01 38.32 19.38C38.32 18.26 38.19 17.3 37.92 16.5C36.4 17.71 34.7 18.31 32.83 18.31C30.37 18.31 28.3 17.52 26.6 15.93C24.9 14.34 24.06 12.21 24.06 9.53C24.06 7.88 24.46 6.38 25.27 5.04C26.07 3.7 27.15 2.65 28.49 1.89C29.83 1.13 31.28 0.75 32.84 0.75ZM9.53 0.75C13.06 0.75 15.76 2.2 17.63 5.11C19.19 7.52 19.98 10.53 19.98 14.15C19.98 18.75 18.81 22.87 16.46 26.51C14.11 30.15 10.58 33.09 5.84 35.32L4.57 32.84C7.43 31.64 9.88 29.75 11.94 27.18C13.99 24.61 15.02 22.01 15.02 19.38C15.02 18.26 14.89 17.3 14.62 16.5C13.06 17.71 11.36 18.31 9.53 18.31C7.03 18.31 4.94 17.52 3.27 15.93C1.6 14.34 0.76 12.21 0.76 9.53C0.76 7.03 1.61 4.94 3.31 3.27C5.01 1.6 7.08 0.76 9.54 0.76M32.84 0C31.15 0 29.57 0.42 28.12 1.24C26.67 2.06 25.5 3.21 24.63 4.65C23.76 6.1 23.32 7.74 23.32 9.52C23.32 12.4 24.26 14.74 26.1 16.47C27.94 18.18 30.2 19.05 32.84 19.05C34.5 19.05 36.05 18.61 37.46 17.74C37.54 18.23 37.58 18.78 37.58 19.37C37.58 21.82 36.6 24.29 34.66 26.7C32.69 29.16 30.31 30.99 27.59 32.14L26.84 32.45L27.21 33.17L28.48 35.65L28.81 36.3L29.47 35.99C34.31 33.71 37.99 30.65 40.4 26.91C42.81 23.17 44.04 18.87 44.04 14.15C44.04 10.4 43.21 7.22 41.58 4.7C39.57 1.58 36.63 0 32.85 0L32.84 0ZM9.53 0C6.88 0 4.61 0.92 2.77 2.73C0.93 4.54 0 6.83 0 9.53C0 12.41 0.92 14.75 2.75 16.47C4.56 18.18 6.84 19.05 9.53 19.05C11.16 19.05 12.71 18.61 14.15 17.73C14.23 18.23 14.27 18.78 14.27 19.37C14.27 21.82 13.29 24.29 11.35 26.7C9.38 29.16 7 30.99 4.28 32.14L3.53 32.45L3.9 33.17L5.17 35.65L5.5 36.3L6.16 35.99C11 33.71 14.68 30.65 17.09 26.91C19.5 23.16 20.73 18.87 20.73 14.15C20.73 10.4 19.9 7.22 18.26 4.7C16.25 1.58 13.31 0 9.53 0Z"
								fill="#449F82"
							/>
						</svg>
					</h2>
					<figure className={classes.image}>
						<Image
							fill
							src={"/special-day-text.svg"}
							alt="special day text 'Especial'"
						/>
					</figure>
					<p>
						Queremos celebrar contigo los momentos más importantes <br /> de tu
						vida ayudándote a que todo salga a la perfección.
					</p>
					<Link href={"/contacto#tu-proximo-evento"}>Cotiza tu evento</Link>
				</div>
			</div>
			<figure className={classes.weddingImage}>
				<Image
					src={"/special-day-image.png"}
					alt="convierte tu gran día con nosotros!"
					fill
				/>
			</figure>
		</section>
	);
};

export default SpecialDay;
