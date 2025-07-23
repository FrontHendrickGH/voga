import React from "react";
import styles from "../page.module.css";
import Footer from "@/components/Footer";
import SurpriseGuests from "@/components/SurpriseGuests";
import Banner from "@/components/Banner";
import GalleryDishes from "@/components/GalleryDishes";
import OurChef from "@/components/OurChef";
import CTA from "@/components/CTA";

const NuestraCocina = () => {
	return (
		<div className={styles.page}>
			<Banner
				image={{ src: "/cocina-banner.jpg", alt: "Banner de cocina" }}
				title="Nuestra cocina"
			/>
			<SurpriseGuests />
			<GalleryDishes />
			<OurChef />
			<CTA
				backgroundColor="#AC3964"
				isFloating={false}
				button={{
					title: "Coordinación",
					backgroundColor: "#EDECEB",
					color: "#242C3F",
					link: "#",
				}}
				title={{
					title: (
						<span>
							Conoce a detalle nuestro
							<br />
							servicio de coordinación
						</span>
					),
					color: "#EDECEB",
				}}
			/>
			<Footer
				paddingTop={270}
				button={{ title: "Contáctanos", href: "#" }}
				title="Haz Realidad el Evento de Tus Sueños"
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default NuestraCocina;
