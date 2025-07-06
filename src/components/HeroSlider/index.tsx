"use client";
import React from "react";
import classes from "./HeroSlider.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const HeroSlider = () => {
	const slides = [
		{
			src: "/hero-slider/slide-1.png",
			title: (
				<span>
					Eventos memorables
					<br /> en Tijuana.
				</span>
			),
			button: {
				link: "#",
				title: "Cotiza Ahora",
				color: "#242C3F",
				backgroundColor: "#EDECEB",
			},
		},
		{
			src: "/hero-slider/slide-2.png",
			title: "Detalles que sorprenden.",
			button: {
				link: "#",
				title: "Cotiza Ahora",
				color: "#EDECEB",
				backgroundColor: "#242C3F",
			},
		},
		{
			src: "/hero-slider/slide-3.png",
			title: "Una experiencia de sabor",
			button: {
				link: "#",
				title: "Cotiza Ahora",
				color: "#EDECEB",
				backgroundColor: "#242C3F",
			},
		},
		{
			src: "/hero-slider/slide-4.png",
			title: "Eventos con estilo",
			button: {
				link: "#",
				title: "Cotiza Ahora",
				color: "#EDECEB",
				backgroundColor: "#242C3F",
			},
		},
	];
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
