import Banner from "@/components/Banner";
import IntroduceUs from "@/components/IntroduceUs";
import React from "react";

const Nosotros = () => {
	return (
		<div>
			<Banner
				image={{ src: "/banner-nosotros.png", alt: "sobre nosotros" }}
				title={"Quiénes Somos"}
			/>
			<IntroduceUs />
		</div>
	);
};

export default Nosotros;
