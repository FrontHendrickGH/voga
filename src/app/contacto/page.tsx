import React from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
	return (
		<div>
			<Contact />
			<ContactForm />
			<Footer paddingTop={420} />
		</div>
	);
};

export default Contacto;
