"use client";
import React, { FC } from "react";
import classes from "./IntroduceLounges.module.scss";
import Image from "next/image";
import CTA from "../CTA";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
	theme: "Voga" | "Los-jardines";
}

const Quote: FC<Props> = ({ theme }) => {
	return (
		<svg
			width="45"
			height="37"
			viewBox="0 0 45 37"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32.84 0.75C36.37 0.75 39.07 2.2 40.94 5.11C42.5 7.52 43.28 10.53 43.28 14.15C43.28 18.75 42.11 22.87 39.76 26.51C37.42 30.15 33.88 33.09 29.14 35.32L27.87 32.84C30.73 31.64 33.18 29.75 35.24 27.18C37.29 24.61 38.32 22.01 38.32 19.38C38.32 18.26 38.19 17.3 37.92 16.5C36.4 17.71 34.7 18.31 32.83 18.31C30.37 18.31 28.3 17.52 26.6 15.93C24.9 14.34 24.06 12.21 24.06 9.53C24.06 7.88 24.46 6.38 25.27 5.04C26.07 3.7 27.15 2.65 28.49 1.89C29.83 1.13 31.28 0.75 32.84 0.75ZM9.53 0.75C13.06 0.75 15.76 2.2 17.63 5.11C19.19 7.52 19.98 10.53 19.98 14.15C19.98 18.75 18.81 22.87 16.46 26.51C14.11 30.15 10.58 33.09 5.84 35.32L4.57 32.84C7.43 31.64 9.88 29.75 11.94 27.18C13.99 24.61 15.02 22.01 15.02 19.38C15.02 18.26 14.89 17.3 14.62 16.5C13.06 17.71 11.36 18.31 9.53 18.31C7.03 18.31 4.94 17.52 3.27 15.93C1.6 14.34 0.76 12.21 0.76 9.53C0.76 7.03 1.61 4.94 3.31 3.27C5.01 1.6 7.08 0.76 9.54 0.76M32.84 0C31.15 0 29.57 0.42 28.12 1.24C26.67 2.06 25.5 3.21 24.63 4.65C23.76 6.1 23.32 7.74 23.32 9.52C23.32 12.4 24.26 14.74 26.1 16.47C27.94 18.18 30.2 19.05 32.84 19.05C34.5 19.05 36.05 18.61 37.46 17.74C37.54 18.23 37.58 18.78 37.58 19.37C37.58 21.82 36.6 24.29 34.66 26.7C32.69 29.16 30.31 30.99 27.59 32.14L26.84 32.45L27.21 33.17L28.48 35.65L28.81 36.3L29.47 35.99C34.31 33.71 37.99 30.65 40.4 26.91C42.81 23.17 44.04 18.87 44.04 14.15C44.04 10.4 43.21 7.22 41.58 4.7C39.57 1.58 36.63 0 32.85 0L32.84 0ZM9.53 0C6.88 0 4.61 0.92 2.77 2.73C0.93 4.54 0 6.83 0 9.53C0 12.41 0.92 14.75 2.75 16.47C4.56 18.18 6.84 19.05 9.53 19.05C11.16 19.05 12.71 18.61 14.15 17.73C14.23 18.23 14.27 18.78 14.27 19.37C14.27 21.82 13.29 24.29 11.35 26.7C9.38 29.16 7 30.99 4.28 32.14L3.53 32.45L3.9 33.17L5.17 35.65L5.5 36.3L6.16 35.99C11 33.71 14.68 30.65 17.09 26.91C19.5 23.16 20.73 18.87 20.73 14.15C20.73 10.4 19.9 7.22 18.26 4.7C16.25 1.58 13.31 0 9.53 0Z"
				fill={theme !== "Los-jardines" ? "#449F82" : "#9CB731"}
			/>
		</svg>
	);
};

const IntroduceLounges: FC<Props> = ({ theme }) => {
	console.log(theme);
	const infoLounges = {
		Voga: {
			images: [
				"/voga-gallery-1.jpg",
				"/voga-gallery-2.jpg",
				"/voga-gallery-3.jpg",
			],
			section1: {
				title: "Moderno y sofisticado.",
				capacity: "500",
				location: "Zona Río",
				style: "Moderno - Elegante - Versátil - Contemporáneo",
				amenities: "Iluminación - Calefacción - Seguridad - Estacionamiento",
				image: "/voga-polaroid.png",
			},
			section2: {
				articles: [
					{
						title: "Salón Principal",
						excerpt:
							"Amplio y adaptable, perfecto para celebraciones majestuosas.",
						subtitle: "",
						image: "/voga-article-1.jpg",
					},
					{
						title: "Recepción",
						excerpt:
							"Amplia recepción para recibir a tus invitados, perfecta para una excelente primer impresión.",
						subtitle: "",
						image: "/voga-article-2.jpg",
					},
					{
						title: "Terraza",
						excerpt:
							"Elegancia al aire libre, ideal para cócteles y momentos inolvidables.",
						subtitle: "",
						image: "/voga-article-3.jpg",
					},
					{
						title: "Área de Jardín",
						excerpt:
							"Un toque natural para eventos sofisticados en un entorno exclusivo.",
						subtitle: "",
						image: "/voga-article-4.jpg",
					},
				],
			},
			section3: {
				location: {
					title:
						"Blvd. Sanchéz Taboada 10521 Zona Río, C.P. 22420, Tijuana, B.C.",
					link: "https://www.google.com/maps/place/Blvrd+Gral+Rodolfo+S%C3%A1nchez+Taboada+10521,+Zona+Urbana+Rio+Tijuana,+22010+Tijuana,+B.C./@32.517837,-117.0141709,17z/data=!3m1!4b1!4m6!3m5!1s0x80d9483fa047ce4b:0x9dbe21e63690253!8m2!3d32.5178325!4d-117.011596!16s%2Fg%2F11tdm3bndk?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D",
				},
			},
		},
		["Los-jardines"]: {
			images: [
				"/los-jardines-gallery-1.jpg",
				"/los-jardines-gallery-2.jpg",
				"/los-jardines-gallery-3.jpg",
			],
			section1: {
				title: "Íntimo y acogedor.",
				capacity: "250",
				location: "Zona Río",
				style: "Jardín - Clásico - Elegante - Versátil",
				amenities: "Iluminación - Sonido - Seguridad - Valet Parking",
				image: "/los-jardines.png",
			},
			section2: {
				articles: [
					{
						title: "Jardín Principal",
						subtitle: (
							<span>
								Naturaleza y elegancia
								<br />
								en armonía
							</span>
						),
						excerpt:
							"Amplio y adaptable, perfecto para celebraciones majestuosas.",
						image: "/los-jardines-article-1.jpg",
					},
					{
						title: "Salón",
						subtitle: (
							<span>
								Versatilidad
								<br /> y estilo clásico
							</span>
						),
						excerpt:
							"El salón de Los Jardines ofrece un espacio cerrado y elegante. La división con salida a terraza permite adaptar el espacio según tus necesidades.",
						image: "/los-jardines-article-2.jpg",
					},
					{
						title: "Terraza",
						subtitle: (
							<span>
								Un espacio para
								<br />
								relajarse y socializar
							</span>
						),
						excerpt:
							"La terraza de Los Jardines complementa perfectamente el salón, funcionando como un área de descanso o como parte integral del evento.",
						image: "/los-jardines-article-3.jpg",
					},
				],
			},
			section3: {
				location: {
					title:
						"Av. Escuadrón 201 #3188, Col. Aviación,  C.P. 22420 Tijuana, B.C.",
					link: "https://www.google.com/maps/dir/Los+Jardines/Los+Jardines,+Escuadr%C3%B3n+201+3188,+Aviacion,+22014+Tijuana,+B.C./@32.5077764,-117.0216737,13z/data=!4m13!4m12!1m5!1m1!1s0x80d9483e3ff909c3:0x2bf024241f31e1df!2m2!1d-117.0094852!2d32.516541!1m5!1m1!1s0x80d9483e3ff909c3:0x2bf024241f31e1df!2m2!1d-117.0094852!2d32.516541?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D",
				},
			},
		},
	};
	const CTAProps = {
		title: {
			title: (
				<span>
					Celebra tus momentos
					<br />
					más importantes con nosotros
				</span>
			),
			color: theme === "Voga" ? "#EDECEB" : "#242C3F",
		},
		isFloating: false,
		backgroundColor: theme === "Voga" ? "#449F82" : "#9CB731",
		button: {
			title: "Agenda una visita",
			link: "#",
			color: "#242C3F",
			backgroundColor: "#EDECEB",
		},
	};
	const { section1, section2, section3, images } = infoLounges[theme];
	return (
		<div className={`${classes.introduce} ${classes[`introduce--${theme}`]}`}>
			<div className={classes.swiperContainer}>
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: ".custom-next",
						prevEl: ".custom-prev",
					}}
					loop={true}
					spaceBetween={0}
					slidesPerView={1}
				>
					{images.map((src, i) => (
						<SwiperSlide key={i}>
							<figure className={classes.image}>
								<Image
									src={src}
									alt={`Slide ${i}`}
									className="slide-image"
									fill
								/>
							</figure>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={classes.buttons}>
					<button className="custom-prev">
						<svg
							width="12"
							height="23"
							viewBox="0 0 12 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.46392e-07 11.5L12 22.3253L12 0.674682L5.46392e-07 11.5Z"
								fill="#EDECEB"
							/>
						</svg>
					</button>
					<button className="custom-next">
						<svg
							width="12"
							height="23"
							viewBox="0 0 12 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 11.5L-6.59078e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
								fill="#EDECEB"
							/>
						</svg>
					</button>
				</div>
			</div>
			<section className={classes.section1}>
				<div className={classes.container1}>
					<div className={classes.left}>
						<div className={classes.containerTitle}>
							<h3>{section1.title}</h3>
							<Quote theme={theme} />
						</div>
						<div className={classes.features}>
							<div className={classes.top}>
								<div className={classes.feature}>
									<p>Capacidad:</p>
									<span>{section1.capacity}</span>
								</div>
								<div className={classes.feature}>
									<p>Ubicación:</p>
									<span>{section1.location}</span>
								</div>
							</div>
							<div className={classes.feature}>
								<p>Estilo:</p>
								<span>{section1.style}</span>
							</div>
							<div className={classes.feature}>
								<p>Amenidades:</p>
								<span>{section1.amenities}</span>
							</div>
						</div>
					</div>
					<figure className={classes.right}>
						<Image src={section1.image} alt={`${theme} image`} fill />
					</figure>
				</div>
			</section>
			<CTA {...CTAProps} />
			<section className={classes.section2}>
				<div className={classes.container2}>
					<div className={classes.articles}>
						{section2.articles.map((article, i) => {
							const { title, excerpt, image, subtitle } = article;
							return (
								<article key={i}>
									<div>
										<h3>{title}</h3>
										{subtitle && subtitle} <p>{excerpt}</p>
										<svg
											width="90"
											height="12"
											viewBox="0 0 90 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M89.5303 6.53033C89.8232 6.23744 89.8232 5.76256 89.5303 5.46967L84.7574 0.696699C84.4645 0.403806 83.9896 0.403806 83.6967 0.696699C83.4038 0.989593 83.4038 1.46447 83.6967 1.75736L87.9393 6L83.6967 10.2426C83.4038 10.5355 83.4038 11.0104 83.6967 11.3033C83.9896 11.5962 84.4645 11.5962 84.7574 11.3033L89.5303 6.53033ZM0 6.75H89V5.25H0V6.75Z"
												fill="#EDECEB"
											/>
										</svg>
									</div>
									<figure>
										<Image src={image} alt={`${theme} imagen #${i + 1}`} fill />
									</figure>
								</article>
							);
						})}
					</div>
				</div>
			</section>
			<section className={classes.section3}>
				<div className={classes.container3}>
					<div className={classes.experience}>
						<div className={classes.top}>
							<h3>
								Vive la
								<br />
								experiencia <br />
								voga
								<Quote theme={theme} />
							</h3>
							<p>
								Transforma tus sueños en realidad con nuestros servicios de
								decoración personalizada, banquete gourmet y atención a cada
								detalle. Nuestro equipo de expertos coordina todo para que
								disfrutes de una experiencia sin contratiempos.
							</p>
						</div>
						<div className={classes.bottom}>
							<div className={classes.links}>
								<h3>Ubicación</h3>
								<p>{section3.location.title}</p>
								<Link href={section3.location.link} className={classes.maps}>
									Ver en Google Maps
								</Link>
								<Link href={"telto:+526646861327"}>Tel. (664) 686 1327</Link>
								<Link href={"mailto:info@vogaeventos.com"}>
									info@vogaeventos.com
								</Link>
							</div>
							<div className={classes.tour}>
								<h3>Recorrido 360</h3>
								<div className={classes.iframeContainer}>
									<iframe
										title="Street View Embed"
										width="100%"
										height="378"
										style={{ border: 0 }}
										loading="lazy"
										allowFullScreen
										referrerPolicy="no-referrer-when-downgrade"
										src="https://www.google.com/maps/embed?pb=!4v1714423779257!6m8!1m7!1sCIHM0ogKEICAgICEi_aCiAE!2m2!1d32.5176361!2d-117.0103787!3f74.5!4f94.53!5f0.7820865974627469"
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default IntroduceLounges;
