import '../src/index.scss'
import Layout from "../src/components/Layout/Layout";

const myApp = ({ Component, pageProps }) =>{
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default myApp