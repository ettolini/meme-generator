import Link from "next/link";

const MemeItem = (props: any) => {
    const memeUrl = (props.meme.url as string);

    return (
        <div className="grid-cols-2">
            <img className="inline pr-6 mb-2 text-xs w-24" src="https://freepngimg.com/thumb/internet_meme/3-2-troll-face-meme-png-thumb.png"/>
            <Link href="/meme/[id]" as={`/meme/${memeUrl.replace("https:\/\/i.imgflip.com\/", "")}`}>
                <p className="inline cursor-pointer font-sans italic text-xl">{props.meme.name}</p>
            </Link>
        </div>
    )
}

export default MemeItem;