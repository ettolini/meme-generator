import Layout from "../components/Layout";
import "../styles/globals.css";
import tailwind from "../dist/source.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
