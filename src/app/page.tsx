import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import TwoCards from "@/components/TwoCards";
import FeaturedCards from "@/components/FeaturedCards";

export default function Home() {
	return (
		<div className={styles.page}>
			<Banner
				image={{ src: "/banner-nosotros.png", alt: "sobre nosotros" }}
				title={"Quiénes Somos"}
			/>
			<FeaturedCards />
			<TwoCards />
			<Footer
				paddingTop={271}
				title="Haz Realidad el Evento de Tus Sueños."
				description="Contáctanos para agendar una visita y descubre cómo podemos hacer de tu evento una experiencia única."
				button={{ title: "Contáctanos", href: "/contacto" }}
			/>
		</div>
	);
}
