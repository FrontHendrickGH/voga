"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import classes from "./GalleryDishes.module.scss";

const GalleryDishes = () => {
	const images = [
		"/galeria-cocina-1.jpg",
		"/galeria-cocina-2.jpg",
		"/galeria-cocina-3.jpg",
		"/galeria-cocina-4.jpg",
		"/galeria-cocina-5.jpg",
		"/galeria-cocina-6.jpg",
		"/galeria-cocina-7.jpg",
		"/galeria-cocina-8.jpg",
	];
	return (
		<section className={classes.gallery}>
			<div>
				<h3>Galería de platillos</h3>
				<p>*Los platillos pueden variar según la temporada.</p>
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

export default GalleryDishes;
