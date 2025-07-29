import Banner from "@/components/Banner";
import CelebrateMoments from "@/components/CelebrateMoments";
import Footer from "@/components/Footer";
import IntroduceUs from "@/components/IntroduceUs";
import OurPurpose from "@/components/OurPurpose";
import React from "react";
import styles from "../page.module.css";

const Nosotros = () => {
	return (
		<div className={styles.page}>
			<Banner
				image={{ src: "/banner-nosotros.png", alt: "sobre nosotros" }}
				title={"Quiénes Somos"}
			/>
			<IntroduceUs />
			<OurPurpose />
			<CelebrateMoments />
			<Footer
				button={{ title: "Contáctanos", href: "/contacto" }}
				title="Agenda una llamada con nuestros expertos."
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
				paddingTop={360}
			/>
		</div>
	);
};

export default Nosotros;
