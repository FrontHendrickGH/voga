"use client";
import React from "react";
import classes from "./IntroduceUs.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const IntroduceUs = () => {
	const images = [
		"/introduce-slide-1.jpg",
		"/introduce-slide-2.jpg",
		"/introduce-slide-3.jpg",
	];
	return (
		<section className={classes.introduce}>
			<h3>
				En VOGA Eventos, reunimos a las personas en torno a celebraciones únicas
				y sofisticadas en Tijuana.
			</h3>
			<Image src={"/logo-no-title.png"} width={145} height={54} alt="logo" />
			<p>
				Con más de 20 años de experiencia, hemos evolucionado para convertirnos
				en el salón de eventos más exclusivo y elegante en Tijuana.
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
		</section>
	);
};

export default IntroduceUs;
