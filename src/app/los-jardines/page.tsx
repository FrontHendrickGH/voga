import React from "react";
import styles from "../page.module.css";
import IntroduceLounges from "@/components/IntroduceLounges";

const LosJardines = () => {
	return (
		<div className={styles.page}>
			<IntroduceLounges theme="Los-jardines" />
		</div>
	);
};

export default LosJardines;
