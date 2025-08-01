"use client";
import React from "react";
import MarqueeC from "react-fast-marquee";
import classes from "./MarqueeLounge.module.scss";
import Link from "next/link";

const Marquee = () => {
	return (
		<div className={classes.container}>
			<MarqueeC
				gradient={false}
				speed={60}
				direction="left"
				pauseOnHover={false}
				className={classes.wrapperTitle}
			>
				<h3 className={classes.title}>celebra con nosotros</h3>
			</MarqueeC>
			<Link href={"/contacto"} className={classes.link}>
				Cotiza tu evento
			</Link>
		</div>
	);
};

export default Marquee;
