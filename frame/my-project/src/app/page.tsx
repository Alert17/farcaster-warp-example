export const dynamic = "force-dynamic";

import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
	const baseUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: "http://localhost:3000";
	const url = new URL("/frames", baseUrl);
	console.log("Fetching metadata from:", url.toString());

	const frameMetadata = await fetchMetadata(url);

	return {
		title: "My page",
		other: {
			...frameMetadata,
		},
	};
}

export default function Page() {
	return <span>Donate me: 0x2fc6E6e1bb7204aD0d166b9Cb35ad321FaD4778f</span>;
}
