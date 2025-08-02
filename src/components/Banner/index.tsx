import React, { FC } from "react";
import classes from "./Banner.module.scss";
import Image from "next/image";

interface Props {
	image: {
		src: string;
		srcMobile?: string;
		alt: string;
	};
	title: string;
}

const Banner: FC<Props> = ({ image, title }) => {
	return (
		<div className={classes.banner}>
			<figure className={classes.containerImage}>
				<picture>
					<source srcSet={image.srcMobile} media="(max-width: 820px)" />
					<Image src={image.src} alt={image.alt} fill priority />
				</picture>
			</figure>
			<div className={classes.containerText}>
				<p>{title}</p>
			</div>
		</div>
	);
};

export default Banner;
