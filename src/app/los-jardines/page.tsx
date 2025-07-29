import React from "react";
import styles from "../page.module.css";
import IntroduceLounges from "@/components/IntroduceLounges";
import Footer from "@/components/Footer";

const LosJardines = () => {
	return (
		<div className={styles.page}>
			<IntroduceLounges theme="Los-jardines" />
			<Footer
				paddingTop={216}
				button={{ title: "Agenda una visita", href: "/contacto" }}
				title="¿Listo para planear el evento de tus sueños?"
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default LosJardines;
