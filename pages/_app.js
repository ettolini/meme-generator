import "../styles/globals.css";
import tailwind from "../dist/source.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
