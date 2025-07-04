import Banner from "@/components/Banner";
import React from "react";

const Nosotros = () => {
	return (
		<div>
			<Banner
				image={{ src: "/banner-nosotros.png", alt: "sobre nosotros" }}
				title={"Quiénes Somos"}
			/>
		</div>
	);
};

export default Nosotros;
