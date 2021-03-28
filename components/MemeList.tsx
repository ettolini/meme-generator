import MemeItem from "./MemeItem";

const MemeList = (props: any) => {
    return (
        <div>
            {props.memes.map((meme: any) => (
                <MemeItem meme={meme} />
            ))}
        </div>
    )
}

export default MemeList