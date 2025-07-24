import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import PerfectCoordination from "@/components/PerfectCoordination";
import CustomDecoration from "@/components/CustomDecoration";

const index = () => {
	return (
		<div>
			<Banner
				title="Coordinación y Decoración"
				image={{
					src: "/banner-coordinacion.jpg",
					alt: "Coordinación y decoración hero",
				}}
			/>
			<PerfectCoordination />
			<CustomDecoration />
			<Footer
				paddingTop={120}
				button={{ title: "Contáctanos", href: "#" }}
				title="Planeemos tu evento juntos."
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default index;
