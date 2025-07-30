import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs"; // o fetch si usas HTTP
interface FormData {
	event: string;
	numberOfGuests: string;
	day: string;
	month: string;
	year: string;
	name: string;
	email: string;
	message: string;
}

export async function POST(req: NextRequest) {
	const body: FormData = await req.json();
	const { event, numberOfGuests, day, month, year, name, email, message } =
		body;
	console.log({
		event,
		numberOfGuests,
		day,
		month,
		year,
		name,
		email,
		message,
	});

	return NextResponse.json({ success: true });
	try {
		const result = await emailjs.send(
			process.env.SERVICE_ID!,
			process.env.TEMPLATE_ID!,
			{ name, email, message, event, numberOfGuests, day, month, year },
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
