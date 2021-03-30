import MemeList from "../components/MemeList";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ memes }) {
  const allMemes = memes.data.memes;

  return (
    <div>
      <h1 className="mb-8 mx-auto text-center italic text-green-700 font-sans font-bold">
        Hello, <span className="line-through">World</span> Memes!
      </h1>
      <MemeList memes={allMemes} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://api.imgflip.com/get_memes`);
  const memes = await response.json();

  return {
    props: {
      memes,
    },
  };
};
