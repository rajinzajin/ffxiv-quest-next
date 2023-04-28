"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchQuest({ quest_list }) {
	const [filteredQuest, setFilteredQuest] = useState([]);

	const onEnterQuery = (e) => {
		const query = e.target.value;
		if (query == "") {
			setFilteredQuest([]);
			return;
		}

		const filtered = quest_list.filter((q) =>
			q.n.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredQuest(filtered.slice(0, 10));
	};
	return (
		<div className="w-[70%]">
			<input
				onChange={onEnterQuery}
				type="text"
				placeholder="Search Quest"
				className="bg-primary px-5 py-3 rounded-lg w-full"
			/>
			<ul>
				{filteredQuest.map((q) => (
					<li key={q.i} className="px-5 py-3">
						<Link href={`/quest/${q.i}`}>{q.n}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
