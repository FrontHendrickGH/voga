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
										href={
											"https://www.google.com/maps/place/Blvrd+Gral+Rodolfo+S%C3%A1nchez+Taboada+10521,+Zona+Urbana+Rio+Tijuana,+22010+Tijuana,+B.C./@32.517837,-117.0141709,17z/data=!3m1!4b1!4m6!3m5!1s0x80d9483fa047ce4b:0x9dbe21e63690253!8m2!3d32.5178325!4d-117.011596!16s%2Fg%2F11tdm3bndk?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
										}
										className={classes.maps}
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
										href={
											"https://www.google.com/maps/dir/Los+Jardines/Los+Jardines,+Escuadr%C3%B3n+201+3188,+Aviacion,+22014+Tijuana,+B.C./@32.5077764,-117.0216737,13z/data=!4m13!4m12!1m5!1m1!1s0x80d9483e3ff909c3:0x2bf024241f31e1df!2m2!1d-117.0094852!2d32.516541!1m5!1m1!1s0x80d9483e3ff909c3:0x2bf024241f31e1df!2m2!1d-117.0094852!2d32.516541?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
										}
										className={classes.maps}
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
						src={"/location-map.jpg"}
						alt="Ubicación de nuestros salones"
						fill
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
