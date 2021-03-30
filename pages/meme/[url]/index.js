import { useRouter } from "next/router";

const meme = () => {
  const router = useRouter();
  const url = router.query.url;
  const imgUrl = "https://i.imgflip.com/" + url;

  return (
    <div>
      <img className="mx-auto border-gray-300 border-4" src={imgUrl} />
    </div>
  );
};

export default meme;
