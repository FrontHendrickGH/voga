import React from "react";
import classes from "./OurPurpose.module.scss";
import Link from "next/link";

const OurPurpose = () => {
	return (
		<section className={classes.purpose}>
			<h3>Nuestro Propósito</h3>
			<p>
				Celebramos los momentos más importantes de la vida de nuestros clientes;
				por lo que buscamos darles un espacio en el que puedan disfrutar de una
				experiencia personalizada acompañados de las personas que forman parte
				de su historia.
				<br /> <br />
				Nuestros espacios exclusivos y adaptables, banquetes con alimentos de
				alta calidad y servicio de decoración que refleja la verdadera esencia
				de cada evento le aseguran a nuestros clientes una experiencia sin
				contratiempos.
			</p>
			<Link href={"#"}>Cotiza tu evento</Link>
		</section>
	);
};

export default OurPurpose;
