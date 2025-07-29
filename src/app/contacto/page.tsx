import React from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
	return (
		<div>
			<Contact />
			<ContactForm />
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
