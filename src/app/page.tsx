import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import TwoCards from "@/components/TwoCards";
import FeaturedCards from "@/components/FeaturedCards";
import CTA from "@/components/CTA";
import IntroduceLounge from "@/components/IntroduceLounge";
import PresentLounge from "@/components/PresentLounge";
import Marquee from "@/components/Marquee";

export default function Home() {
	return (
		<div className={styles.page}>
			<Banner
				image={{ src: "/banner-nosotros.png", alt: "sobre nosotros" }}
				title={"Quiénes Somos"}
			/>
			<CTA
				backgroundColor="#242C3F"
				button={{
					title: "Agenda ahora",
					link: "#",
					backgroundColor: "#449F82",
					color: "#EDECEB",
				}}
				title={{
					title: (
						<span>
							Celebra tus momentos
							<br /> más importantes con nosotros.
						</span>
					),
					color: "#EDECEB",
				}}
				isFloating={false}
			/>
			<FeaturedCards />
			<IntroduceLounge />
			<PresentLounge />
			<Marquee />
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
