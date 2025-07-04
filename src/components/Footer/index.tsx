import React, { FC } from "react";
import Image from "next/image";
import classes from "./Footer.module.scss";
import Link from "next/link";

interface Props {
	paddingTop: number;
	title?: string;
	description?: string;
	button?: { title: string; href: string };
}

const Footer: FC<Props> = ({ paddingTop, description, title, button }) => {
	return (
		<footer style={{ paddingTop }} className={classes.footer}>
			<div className={classes.containerBothSides}>
				<div className={classes.left}>
					<figure
						className={
							!title && !description ? classes.estiloParaEmparejar : ""
						}
					>
						<Image
							src={"/logo-white.svg"}
							alt="logo voga events"
							width={94}
							height={50}
						/>
					</figure>
					{(title || description) && (
						<div className={classes.containerText}>
							{title && <h3>{title}</h3>} {description && <p>{description}</p>}
						</div>
					)}
				</div>
				<div className={classes.right}>
					{button && (
						<Link className={classes.buttonContact} href={button.href}>
							{button.title}
						</Link>
					)}
					<ul className={classes.containerLinks}>
						<div className={classes.topLinks}>
							<li>
								<Link href={"telto:+526646861327"}>Tel. (664) 686 1327</Link>
							</li>
							<li>
								<Link href={"mailto:info@vogaeventos.com"}>
									info@vogaeventos.com
								</Link>
							</li>
						</div>
						<div className={classes.bottomLinks}>
							<li>
								<Link href={"#"}>Facebook</Link>
							</li>
							<li>
								<Link href={"#"}>Instagram</Link>
							</li>
							<li>
								<Link href={"#"}>Youtube</Link>
							</li>
						</div>
					</ul>
				</div>
			</div>
			<p className={classes.copy}>
				Todos los derechos reservados &copy; Voga Eventos
			</p>
		</footer>
	);
};

export default Footer;
