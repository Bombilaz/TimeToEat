import Layout from '../src/components/Layout/Layout';
import {AppProps} from "next/app";
import '../src/index.scss';


const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default myApp;
