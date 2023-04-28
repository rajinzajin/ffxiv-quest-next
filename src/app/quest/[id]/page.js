import Image from "next/image";
import quests from "@/data/quests.json";
import Link from "next/link";
import journal_genres from "@/data/journal_genre.json";
import classJobCategory from "@/data/class_job_category";
export default function QuestDetail({ params }) {
	const { quest } = require(`@/data/quests/${params.id}.json`);

	const genre = journal_genres.find((j) => j.id === `${quest.genre}`);

	const requiredJob =
		quest.reqs.jobs?.length > 0
			? classJobCategory.find((c) => c.id === `${quest.reqs.jobs[0].id}`)
			: {};

	const nextQuests =
		quest.next?.length > 0
			? quests.filter((q) => quest.next?.indexOf(q.i) !== -1)
			: [];

	return (
		<div className="px-10 grid grid-cols-1 justify-items-start">
			<Image
				priority
				width={80}
				height={80}
				src={`/icon/quest/${quest.eventIcon}.png`}
				alt={quest.name}
			/>
			<h1>{quest.name}</h1>
			<h1>{quest.location}</h1>
			<h1>{genre.Name}</h1>
			<h1>Level {quest.reqs.jobs?.length>0 ? quest.reqs.jobs[0].lvl : 1}</h1>
			<h1>{requiredJob.Name}</h1>
			<br />
			{nextQuests.length > 0 && <h1>Next Quest</h1>}
			<ul>
				{nextQuests.map((q) => (
					<li key={q.i}>
						<Link href={`/quest/${q.i}`}>{q.n}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export async function getStaticPaths() {
	const quests = require("@/data/quests.json");
	const paths = quests.map((q) => ({ params: { id: `${q.i}` } }));
	return { paths, fallback: false };
}
