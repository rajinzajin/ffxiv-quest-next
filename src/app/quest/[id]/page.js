export default function QuestDetail({params}){
    const { quest } = require(`@/data/quests/${params.id}.json`)
    return (
        <><h1>{quest.name}</h1></>
    )
}

// export async function getStaticPaths(){
//     console.log("static path")
// }