import { useRouter } from "next/router";

const meme = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  return <div>This is meme #{id}</div>;
};

export default meme;
