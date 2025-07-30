import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs"; // o fetch si usas HTTP
interface FormData {
	event: string;
	numberOfGuests: string;
	day: string;
	month: string;
	year: string;
	name: string;
	phone: string;
	email: string;
	message: string;
}

export async function POST(req: NextRequest) {
	try {
		const body: FormData = await req.json();

		const {
			event,
			numberOfGuests,
			day,
			month,
			year,
			name,
			email,
			message,
			phone,
		} = body;

		const result = await emailjs.send(
			process.env.SERVICE_ID!,
			process.env.TEMPLATE_ID!,
			{ name, email, message, event, numberOfGuests, day, month, year, phone },
			{
				publicKey: process.env.EMAIL_PUBLIC_KEY,
				privateKey: process.env.EMAIL_KEY,
			}
		);

		return NextResponse.json({ success: true, result }, { status: 200 });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
