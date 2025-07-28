"use client";
import React from "react";
import classes from "./CustomDecoration.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CustomDecoration = () => {
	const images = [
		"/coordinacion-gallery-1.jpg",
		"/coordinacion-gallery-2.jpg",
		"/coordinacion-gallery-3.jpg",
		"/coordinacion-gallery-4.jpg",
		"/coordinacion-gallery-5.jpg",
	];
	return (
		<section className={classes.custom}>
			<div className={classes.container}>
				<div className={classes.containerTitle}>
					<span>Decoración personalizada</span>
					<h3>
						Sabemos que
						<br />
						los pequeños detalles
						<br />
						hacen la diferencia.
					</h3>
				</div>
				<div className={classes.bottom}>
					<div className={classes.left}>
						<p>
							Nuestros expertos en decoración se especializan en crear ambientes
							que emocionan; juntos seleccionarán los elementos que se adaptan a
							tu estilo tomando en cuenta tu presupuesto. Desde flores hasta
							mobiliario exclusivo que se adapta a tu visión.
						</p>
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
					</div>
					<div className={classes.right}>
						<p>
							Ofrecemos servicios de
							<br /> coordinación completos que incluyen:
						</p>
						<ul className={classes.filledList}>
							<li>
								<Image
									src={"/check.png"}
									width={26}
									height={22}
									alt="contamos con..."
								/>
								Gestión de proveedores y logística
							</li>
							<li>
								<Image
									src={"/check.png"}
									width={26}
									height={22}
									alt="contamos con..."
								/>
								Decoración personalizada y ambientación temática
							</li>
							<li>
								<Image
									src={"/check.png"}
									width={26}
									height={22}
									alt="contamos con..."
								/>
								Supervisión durante el evento para garantizar su éxito
							</li>
						</ul>
						<ul className={classes.simpleList}>
							<li>Arreglos florales</li>
							<li>Mantelería fina</li>
							<li>Pastelería o postres</li>
							<li>Encortinado</li>
							<li>Salas lounge</li>
							<li>Periqueras</li>
							<li>Ilumunación</li>
							<li>Pistas de baile</li>
							<li>Decoración en general</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomDecoration;
