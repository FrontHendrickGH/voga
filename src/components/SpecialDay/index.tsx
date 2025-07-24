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
					</h2>
					<figure className={classes.image}>
						<Image
							fill
							src={"/special-day-text.png"}
							alt="special day text 'Especial'"
						/>
					</figure>
					<p>
						Queremos celebrar contigo los momentos más importantes <br /> de tu
						vida ayudándote a que todo salga a la perfección.
					</p>
					<Link href={"#"}>Cotiza tu evento</Link>
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
