import Link from "next/link";

const MemeItem = (props: any) => {
  const memeUrl = props.meme.url as string;

  return (
    <div className="mx-auto mb-4 hover:shadow-md grid grid-cols-2 w-5/12">
      <div className="inline text-xs w-24">
        <img
          className=""
          src="https://freepngimg.com/thumb/internet_meme/3-2-troll-face-meme-png-thumb.png"
        />
      </div>
      <div className="inline mb-16">
        <Link
          href="/meme/[id]"
          as={`/meme/${memeUrl.replace("https://i.imgflip.com/", "")}`}
        >
          <p className="inline cursor-pointer font-sans italic text-xl">
            {props.meme.name}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MemeItem;
