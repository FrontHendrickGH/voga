import React from "react";
import styles from "../page.module.css";
import Footer from "@/components/Footer";
import SurpriseGuests from "@/components/SurpriseGuests";
import Banner from "@/components/Banner";
import GalleryDishes from "@/components/GalleryDishes";

const NuestraCocina = () => {
	return (
		<div className={styles.page}>
			<Banner
				image={{ src: "/cocina-banner.jpg", alt: "Banner de cocina" }}
				title="Nuestra cocina"
			/>
			<SurpriseGuests />
			<GalleryDishes />
			<Footer
				paddingTop={120}
				button={{ title: "Contáctanos", href: "#" }}
				title="Agenda una llamada con nuestros expertos."
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default NuestraCocina;
