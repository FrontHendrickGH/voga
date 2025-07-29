import React from "react";
import styles from "../page.module.css";
import IntroduceLounges from "@/components/IntroduceLounges";
import Footer from "@/components/Footer";

const SalonVoga = () => {
	return (
		<div className={styles.page}>
			<IntroduceLounges theme="Voga" />
			<Footer
				paddingTop={216}
				button={{ title: "Agenda una visita", href: "/contacto" }}
				title="¡Planeemos el evento de tus sueños juntos!"
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default SalonVoga;
