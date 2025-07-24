import React from "react";
import styles from "../page.module.css";
import IntroduceLounges from "@/components/IntroduceLounges";

const SalonVoga = () => {
	return (
		<div className={styles.page}>
			<IntroduceLounges theme="Voga" />
		</div>
	);
};

export default SalonVoga;
