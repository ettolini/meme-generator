import Link from "next/link";

const MemeItem = (props: any) => {
    return (
        <Link href="/meme/[id]" as={`/meme/${props.meme.id}`}>
            <a>
                <h3>{props.meme.name}</h3>
            </a>
        </Link>
    )
}

export default MemeItem;