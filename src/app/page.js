import SearchQuest from "@/components/SearchQuest";
export default function Home() {
	const quests = require("@/data/quests.json")
	return (
		<main className="flex flex-col items-center justify-between p-3">
			<SearchQuest quest_list={quests} />
		</main>
	);
}