import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
	variable: "--font-playfair-display",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Voga Eventos",
	description: "Eventos memorables para tus invitados",
	icons: {
		icon: "/VOGA-favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.variable} ${playfairDisplay.variable}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
