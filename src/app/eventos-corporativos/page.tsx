import Banner from "@/components/Banner";
import BringPeople from "@/components/BringPeople";
import Footer from "@/components/Footer";
import MarqueeCorporative from "@/components/MarqueeCorporative";
import PresentLounge from "@/components/PresentLounge";
import React from "react";

const CorporativeEvents = () => {
	return (
		<div>
			<Banner
				title="Eventos Corporativos"
				image={{
					src: "/banner-corporativos.jpg",
					alt: "Eventos corporativos hero",
				}}
			/>
			<BringPeople />
			<MarqueeCorporative />
			<PresentLounge />
			<Footer
				paddingTop={120}
				button={{ title: "Contáctanos", href: "#" }}
				title="Agenda una llamada con nuestros expertos."
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default CorporativeEvents;
