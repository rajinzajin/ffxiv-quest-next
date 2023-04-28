// import asd from "@/data/quests.json"
export async function GET(request) {
	const gg = require("@/data/quests.json");
	return new Response(JSON.stringify(gg));
}
