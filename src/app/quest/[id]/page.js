import Image from "next/image";

export default function QuestDetail({ params }) {
	const { quest } = require(`@/data/quests/${params.id}.json`);
	return (
		<>
            <Image priority width={80} height={80} src={`/icon/quest/${quest.eventIcon}.png`} alt={quest.name}/>
			<h1>{quest.name}</h1>
            <h1>{quest.location}</h1>
		</>
	);
}

// export async function getStaticPaths(){
//     console.log("static path")
// }
