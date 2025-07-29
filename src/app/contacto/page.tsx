import React from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Contacto = () => {
	return (
		<div>
			<Contact />
			<Footer
				paddingTop={120}
				button={{ title: "Contáctanos", href: "/contacto" }}
				title="Planeemos tu evento juntos."
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
			/>
		</div>
	);
};

export default Contacto;
