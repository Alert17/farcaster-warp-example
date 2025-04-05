/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

export const dynamic = "force-dynamic";

const handleRequest = frames(async () => {
	return {
		image: "https://picsum.photos/200/300",
		buttons: [
			<Button action="post" target={{ query: { value: "Yes" } }}>
				Say Yes
			</Button>,
			<Button action="post" target={{ query: { value: "No" } }}>
				Say No
			</Button>,
		],
	};
});

export const GET = handleRequest;
export const POST = handleRequest;
