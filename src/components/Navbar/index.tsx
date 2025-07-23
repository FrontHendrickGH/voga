"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Menu, MenuItems, MenuItem, MenuButton } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div role="figure" className={styles.gap} />
			<div className={styles.container}>
				<nav className={styles.nav}>
					<Link
						onClick={setIsOpen.bind(null, false)}
						href={"/"}
						className={styles.logo}
					>
						<Image
							src={"/voga-logo.svg"}
							alt="voga logo"
							fill
							className={styles.image}
						/>
					</Link>

					<button
						className={styles.hamburger}
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <FiX /> : <FiMenu />}
					</button>

					<ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
						<li>
							<Link onClick={setIsOpen.bind(null, false)} href="/nosotros">
								Nosotros
							</Link>
						</li>
						<Menu as="li" className={styles.menu}>
							<MenuButton className={styles.menuButton}>
								Servicios
								<figure className={styles.containerArrow}>
									<Image src={"/arrow-down.svg"} alt="open menu" fill />
									<Image src={"/arrow-down-gray.svg"} alt="open menu" fill />
								</figure>
							</MenuButton>
							<MenuItems className={styles.menuItems}>
								<MenuItem>
									<Link
										onClick={setIsOpen.bind(null, false)}
										href="/nuestra-cocina"
									>
										Nuestra cocina
									</Link>
								</MenuItem>
								<MenuItem>
									<Link onClick={setIsOpen.bind(null, false)} href="#">
										Coordinación
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										onClick={setIsOpen.bind(null, false)}
										href="/eventos-corporativos"
									>
										Eventos corporativos
									</Link>
								</MenuItem>
							</MenuItems>
						</Menu>
						<Menu as="li" className={styles.menu}>
							<MenuButton className={styles.menuButton}>
								Salones
								<figure className={styles.containerArrow}>
									<Image src={"/arrow-down.svg"} alt="open menu" fill />
									<Image src={"/arrow-down-gray.svg"} alt="open menu" fill />
								</figure>
							</MenuButton>
							<MenuItems className={styles.menuItems}>
								<MenuItem>
									<Link onClick={setIsOpen.bind(null, false)} href="#">
										Salón voga
									</Link>
								</MenuItem>
								<MenuItem>
									<Link onClick={setIsOpen.bind(null, false)} href="#">
										Los jardínes
									</Link>
								</MenuItem>
							</MenuItems>
						</Menu>
						<li>
							<Link onClick={setIsOpen.bind(null, false)} href="/contacto">
								Contacto
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
