import React, { FC } from "react";
import classes from "./Banner.module.scss";
import Image from "next/image";

interface Props {
	image: {
		src: string;
		alt: string;
	};
	title: string;
}

const Banner: FC<Props> = ({ image, title }) => {
	return (
		<div className={classes.banner}>
			<figure className={classes.containerImage}>
				<Image src={image.src} alt={image.alt} fill />
			</figure>
			<div className={classes.containerText}>
				<p>{title}</p>
			</div>
		</div>
	);
};

export default Banner;
