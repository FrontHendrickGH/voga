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
			>
				<h1 className={classes.title}>celebra con nosotros &nbsp;</h1>
			</MarqueeC>
			<Link href={"#"} className={classes.link}>
				Cotiza tu evento
			</Link>
		</div>
	);
};

export default Marquee;
