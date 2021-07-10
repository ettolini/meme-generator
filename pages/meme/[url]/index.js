import { useRouter } from "next/router";

const meme = () => {
  const router = useRouter();
  const url = router.query.url;
  const imgUrl = "https://i.imgflip.com/" + url;

  return (
    <div className="mt-4 mx-auto border-gray-800 border-4 rounded-md">
      <img className="max-h-96" src={imgUrl} />
    </div>
  );
};

export default meme;
