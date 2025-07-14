"use client";
import React from "react";
import classes from "./IdealSpace.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const IdealSpace = () => {
	const images = ["/ideal-gallery-1.jpg", "/ideal-gallery-1.jpg"];
	return (
		<section className={classes.ideal}>
			<div className={classes.top}>
				<div>
					<h3>Espacio ideal para eventos</h3>
					<figure>
						<svg
							width="90"
							height="12"
							viewBox="0 0 90 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M89.5303 6.53033C89.8232 6.23744 89.8232 5.76256 89.5303 5.46967L84.7574 0.696699C84.4645 0.403806 83.9896 0.403806 83.6967 0.696699C83.4038 0.989593 83.4038 1.46447 83.6967 1.75736L87.9393 6L83.6967 10.2426C83.4038 10.5355 83.4038 11.0104 83.6967 11.3033C83.9896 11.5962 84.4645 11.5962 84.7574 11.3033L89.5303 6.53033ZM0 6V6.75H89V6V5.25H0V6Z"
								fill="#EDECEB"
							/>
						</svg>
					</figure>
					<Link href={"#"}>Cotiza tu evento</Link>
				</div>
				<ul>
					<li>
						<Image
							src={"/ideal-1.svg"}
							alt="espacio ideal decoracion #1"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Conferencias</span>
					</li>
					<li>
						<Image
							src={"/ideal-2.svg"}
							alt="espacio ideal decoracion #2"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Talleres</span>
					</li>
					<li>
						<Image
							src={"/ideal-3.svg"}
							alt="espacio ideal decoracion #3"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Seminarios</span>
					</li>
					<li>
						<Image
							src={"/ideal-4.svg"}
							alt="espacio ideal decoracion #4"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Team building</span>
					</li>
					<li>
						<Image
							src={"/ideal-5.svg"}
							alt="espacio ideal decoracion #5"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Ferias comerciales</span>
					</li>
					<li>
						<Image
							src={"/ideal-6.svg"}
							alt="espacio ideal decoracion #6"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Exposiciones</span>
					</li>
					<li>
						<Image
							src={"/ideal-7.svg"}
							alt="espacio ideal decoracion #7"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Eventos de reconocimiento</span>
					</li>
					<li>
						<Image
							src={"/ideal-8.svg"}
							alt="espacio ideal decoracion #8"
							width={62}
							height={46}
							objectFit="scale-down"
						/>
						<span>Celebraciones</span>
					</li>
				</ul>
			</div>
			<div className={classes.middle}>
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
		</section>
	);
};

export default IdealSpace;
