import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
	return {
		title: "My Page",
		// provide a full URL to your /frames endpoint
		other: await fetchMetadata(
			new URL(
				"/frames",
				process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
			)
		),
	};
}

export default function Page() {
	return <span>Donate me: 0x2fc6E6e1bb7204aD0d166b9Cb35ad321FaD4778f</span>;
}
