import React from "react";
import classes from "./PresentLounge.module.scss";
import Image from "next/image";
import Link from "next/link";

const PresentLounge = () => {
	return (
		<section className={classes.present}>
			<article>
				<div>
					<Image
						src={"/voga-lounge.svg"}
						alt="logo voga venue"
						width={145}
						height={76}
					/>
					<h3>El salón de eventos más exclusivo de Tijuana</h3>
					<ul>
						<li>Diseño moderno</li>
						<li>Elegante</li>
						<li>Vanguardista</li>
						<li>Ubicado en zona gastronómica</li>
					</ul>
					<p>
						Capacidad: <br />
						<span>500 personas</span>
					</p>
					<div>
						<Link href={"#"}>Cotiza ahora</Link>
						<Link href={"#"}>Ver salón</Link>
					</div>
				</div>
			</article>
		</section>
	);
};

export default PresentLounge;
