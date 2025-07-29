import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/nodejs"; // o fetch si usas HTTP

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") return res.status(405).end();

	const { name, email, message } = req.body;

	try {
		const result = await emailjs.send(
			process.env.SERVICE_ID!,
			process.env.TEMPLATE_ID!,
			{ name, email, message },
			{
				publicKey: process.env.EMAIL_PUBLIC_KEY,
				privateKey: process.env.EMAIL_KEY,
			}
		);

		return res.status(200).json({ success: true, result });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Failed to send email" });
	}
}
