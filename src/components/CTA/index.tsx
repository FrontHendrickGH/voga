import React, { FC, JSX } from "react";
import classes from "./CTA.module.scss";
import Link from "next/link";

interface Props {
	backgroundColor: string;
	title: {
		title: JSX.Element;
		color: string;
	};
	button: {
		title: string;
		link: string;
		color: string;
		backgroundColor: string;
	};
	isFloating?: boolean;
	className?: string;
}

const CTA: FC<Props> = ({
	title,
	button,
	isFloating = true,
	backgroundColor,
	className,
}) => {
	return (
		<aside
			className={`${classes.cta} ${!isFloating ? classes.ctaFloating : ""} ${
				className || ""
			}`}
			style={{
				backgroundColor,
			}}
		>
			{title && <h3 style={{ color: title.color }}>{title.title}</h3>}
			{button && button.title && (
				<Link
					href={button.link}
					style={{
						color: button.color,
						backgroundColor: button.backgroundColor,
					}}
				>
					{button.title}
				</Link>
			)}
		</aside>
	);
};

export default CTA;
