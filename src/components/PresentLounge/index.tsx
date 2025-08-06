"use client";
import React from "react";
import classes from "./PresentLounge.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PresentLounge = () => {
	const images = [
		"/voga-lounge-1.jpg",
		"/voga-lounge-2.jpg",
		"/voga-lounge-3.jpg",
		"/voga-lounge-4.jpg",
	];
	const images2 = [
		"/jardines-lounge-1.jpg",
		"/jardines-lounge-2.jpg",
		"/jardines-lounge-3.jpg",
		"/jardines-lounge-4.jpg",
	];
	return (
		<section className={classes.present}>
			<article className={classes.container}>
				<div className={classes.infoLounge}>
					<Image
						src={"/voga-lounge.svg"}
						alt="logo voga venue"
						width={145}
						height={76}
					/>
					<h3>El salón de eventos más exclusivo de Tijuana.</h3>
					<ul>
						<li>Diseño moderno</li>
						<li>Elegante</li>
						<li>Vanguardista</li>
						<li>Ubicado en zona gastronómica</li>
					</ul>
					<p>
						Capacidad: <br />
						<span>500 personas</span>
					</p>
					<div className={classes.links}>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
						<Link href={"/salon-voga"}>Ver salón</Link>
					</div>
				</div>
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

					{/* Custom arrows */}
					<div className={classes.buttons}>
						<button className="custom-prev">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="23"
								viewBox="0 0 12 23"
								fill="none"
							>
								<path
									d="M5.46392e-07 11.5L12 22.3253L12 0.674682L5.46392e-07 11.5Z"
									fill="#449F82"
								/>
							</svg>
						</button>
						<button className="custom-next">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="23"
								viewBox="0 0 12 23"
								fill="none"
							>
								<path
									d="M12 11.5L-6.59078e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
									fill="#449F82"
								/>
							</svg>
						</button>
					</div>
				</div>
			</article>
			<article className={classes.container}>
				<div className={classes.swiperContainer}>
					<Swiper
						modules={[Navigation]}
						navigation={{
							nextEl: ".custom-next-2",
							prevEl: ".custom-prev-2",
						}}
						loop={true}
						spaceBetween={0}
						slidesPerView={1}
					>
						{images2.map((src, i) => (
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

					{/* Custom arrows */}
					<div className={classes.buttons}>
						<button className="custom-prev-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="23"
								viewBox="0 0 12 23"
								fill="none"
							>
								<path
									d="M5.46392e-07 11.5L12 22.3253L12 0.674682L5.46392e-07 11.5Z"
									fill="#449F82"
								/>
							</svg>
						</button>
						<button className="custom-next-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="23"
								viewBox="0 0 12 23"
								fill="none"
							>
								<path
									d="M12 11.5L-6.59078e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
									fill="#449F82"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className={classes.infoLounge}>
					<Image
						src={"/jardines-lounge.svg"}
						alt="logo voga venue"
						width={145}
						height={76}
					/>
					<h3>El jardín de eventos más versátil de Tijuana.</h3>
					<ul>
						<li>Jardín con un salón acogedor</li>
						<li>Ideal para celebraciones íntimas</li>
						<li>Ambiente versátil</li>
					</ul>
					<p style={{ color: "#9cb731" }}>
						Capacidad: <br />
						<span style={{ color: "#242C3F" }}>250 personas</span>
					</p>
					<div className={classes.links}>
						<Link href={"/contacto#tu-proximo-evento"}>Cotiza ahora</Link>
						<Link href={"/los-jardines"} style={{ backgroundColor: "#9CB731" }}>
							Ver salón
						</Link>
					</div>
				</div>
			</article>
		</section>
	);
};

export default PresentLounge;
