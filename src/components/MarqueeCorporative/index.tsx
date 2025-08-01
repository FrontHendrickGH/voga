import React from "react";
import Marquee from "react-fast-marquee";
import classes from "./MarqueeCorporative.module.scss";

const MarqueeCorporative = () => {
	return (
		<aside className={classes.marquee}>
			<Marquee
				gradient={false}
				speed={60}
				direction="left"
				className={classes.wrapperTitle}
				pauseOnHover={false}
			>
				<h1 className={classes.title}>Eventos corporativos &nbsp;</h1>
			</Marquee>
		</aside>
	);
};

export default MarqueeCorporative;
