import { useRouter } from "next/router";

const meme = () => {
  const router = useRouter();
  const url = router.query.url;
  const imgUrl = "https://i.imgflip.com/" + url;

  return <img src={imgUrl} />;
};

export default meme;
