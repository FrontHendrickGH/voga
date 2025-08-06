"use client";
import React, { useState, useEffect } from "react";
import classes from "./HeroSlider.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const HeroSlider = () => {
	const initialSlides = [
		{
			src: "/hero-slider/slide-1.jpg",
			title: (
				<span>
					Eventos memorables
					<br /> en Tijuana.
				</span>
			),
			button: {
				link: "/contacto#tu-proximo-evento",
				title: "Cotiza Ahora",
				color: "#242C3F",
				backgroundColor: "#EDECEB",
			},
		},
		{
			src: "/hero-slider/slide-2.jpg",
			title: (
				<span>
					Detalles <br />
					que sorprenden.
				</span>
			),
			button: {
				link: "/contacto#tu-proximo-evento",
				title: "Cotiza Ahora",
				color: "#EDECEB",
				backgroundColor: "#242C3F",
			},
		},
		{
			src: "/hero-slider/slide-3.jpg",
			title: (
				<span>
					Una experiencia
					<br /> de sabor
				</span>
			),
			button: {
				link: "/contacto#tu-proximo-evento",
				title: "Cotiza Ahora",
				color: "#EDECEB",
				backgroundColor: "#242C3F",
			},
		},
		{
			src: "/hero-slider/slide-4.jpg",
			title: (
				<span>
					Eventos <br />
					con estilo
				</span>
			),
			button: {
				link: "/contacto#tu-proximo-evento",
				title: "Cotiza Ahora",
				color: "#EDECEB",
				backgroundColor: "#242C3F",
			},
		},
	];
	const [slides, setSlides] = useState(initialSlides);

	useEffect(() => {
		const updateFirstSlideSrc = () => {
			setSlides(prev => {
				const updated = [...prev];
				updated[0] = {
					...updated[0],
					src:
						window.innerWidth <= 1024
							? "/hero-slider/slide-1-mobile.png"
							: "/hero-slider/slide-1.png",
				};
				return updated;
			});
		};

		// Initial check
		updateFirstSlideSrc();

		// Listen for resize
		window.addEventListener("resize", updateFirstSlideSrc);

		// Cleanup
		return () => {
			window.removeEventListener("resize", updateFirstSlideSrc);
		};
	}, []);

	return (
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
				{slides.map(({ src, button, title }, i) => (
					<SwiperSlide key={i}>
						<article className={classes.container}>
							<div className={classes.containerInfo}>
								{title && <h1>{title}</h1>}
								{button && button.title && (
									<Link
										href={button.link}
										style={{
											color: button.color,
											backgroundColor: button.backgroundColor,
										}}
									>
										{button.title}
									</Link>
								)}
							</div>
							<figure className={classes.image}>
								<Image
									src={src}
									alt={`Slide ${i}`}
									className="slide-image"
									fill
								/>
							</figure>
						</article>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Custom arrows */}
			<div className={classes.buttons}>
				<button className="custom-prev">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13"
						height="23"
						viewBox="0 0 13 23"
						fill="none"
					>
						<path
							d="M5.60978e-07 11.8337L12.3203 22.948L12.3203 0.719386L5.60978e-07 11.8337Z"
							fill="#EDECEB"
						/>
					</svg>
				</button>
				<button className="custom-next">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13"
						height="23"
						viewBox="0 0 13 23"
						fill="none"
					>
						<path
							d="M12.4272 11.8337L0.106917 22.948L0.106918 0.719386L12.4272 11.8337Z"
							fill="#EDECEB"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default HeroSlider;
