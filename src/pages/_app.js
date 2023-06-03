import '@/assets/styles/globals.css'
import Layout from "../components/layout/layout.jsx";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
