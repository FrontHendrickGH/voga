import React from "react";
import classes from "./OurChef.module.scss";

const OurChef = () => {
	return (
		<section className={classes.chef}>
			<h3>Nuestro chef</h3>
			<video src="/chef.mp4" controls></video>
		</section>
	);
};

export default OurChef;
