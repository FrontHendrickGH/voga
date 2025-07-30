export async function POST(req: Request) {
	const { token } = await req.json();

	const res = await fetch(
		"https://challenges.cloudflare.com/turnstile/v0/siteverify",
		{
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				secret: process.env.TURNSTILE_SECRET_KEY!,
				response: token,
			}),
		}
	);

	const data = await res.json();
	return Response.json({ success: data.success });
}
