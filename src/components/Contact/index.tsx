import React from "react";
import classes from "./Contact.module.scss";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
	return (
		<section className={classes.contact}>
			<div className={classes.container}>
				<div className={classes.intro}>
					<h2>
						¿LISTO PARA PLANEAR
						<br /> EL EVENTO DE TUS SUEÑOS?
					</h2>
					<div className={classes.locations}>
						<h3>Ubicaciones</h3>
						<div className={classes.locationsContainer}>
							<article className={classes.location}>
								<figure>
									<Image
										width={145}
										height={76}
										src={"/voga-location.png"}
										alt="Voga venue lounge decoración"
									/>
								</figure>
								<div>
									<p>
										Blvd. Sanchéz Taboada 10521
										<br /> Zona Río, C.P. 22420, Tijuana, B.C.
									</p>
									<Link
										href={"https://maps.app.goo.gl/PN6F6UP53pDpLiAc6"}
										className={classes.maps}
										target="_blank"
									>
										Ver en Google Maps
									</Link>
									<Link href={"telto:+526646861327"}>Tel. (664) 686 1327</Link>
									<Link href={"mailto:info@vogaeventos.com"}>
										info@vogaeventos.com
									</Link>
								</div>
							</article>
							<article className={classes.location}>
								<figure>
									<Image
										width={172}
										height={92}
										src={"/jardines-location.png"}
										alt="Voga venue lounge decoración"
									/>
								</figure>
								<div>
									<p>
										Av. Escuadrón 201 #3188,
										<br />
										Col. Aviación, C.P. 22420 Tijuana, B.C.
									</p>
									<Link
										href={"https://maps.app.goo.gl/FiGELkhX4dLJ3ZBZ7"}
										className={classes.maps}
										target="_blank"
									>
										Ver en Google Maps
									</Link>
									<Link href={"telto:+526646861327"}>Tel. (664) 686 1327</Link>
									<Link href={"mailto:info@vogaeventos.com"}>
										info@vogaeventos.com
									</Link>
								</div>
							</article>
						</div>
					</div>
				</div>
				<div className={classes.map}>
					<Image
						src={"/location-map-ss.png"}
						alt="Ubicación de nuestros salones"
						fill
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
