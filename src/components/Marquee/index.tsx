"use client";
import React from "react";
import MarqueeC from "react-fast-marquee";
import classes from "./MarqueeLounge.module.scss";

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
		</div>
	);
};

export default Marquee;
