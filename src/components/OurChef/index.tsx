"use client";
import React, { useRef, useState } from "react";
import classes from "./OurChef.module.scss";
import Image from "next/image";

const OurChef = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleVideoClick = () => {
		if (!videoRef.current) return;

		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};
	return (
		<section className={classes.chef}>
			<h3>Nuestro chef</h3>
			<div className={classes.container} onClick={handleVideoClick}>
				<video
					ref={videoRef}
					src="/chef.mp4"
					controls={false}
					className={classes.video}
				/>
				<div className={classes.overlay}>
					<Image
						src="/video-play.svg"
						alt="Play"
						width={60}
						height={60}
						className={`${classes.icon} ${!isPlaying ? classes.visible : ""}`}
					/>
					<Image
						src="/video-pause.svg"
						alt="Pause"
						width={60}
						height={60}
						className={`${classes.icon} ${isPlaying ? classes.visible : ""}`}
					/>
				</div>
			</div>
		</section>
	);
};

export default OurChef;
