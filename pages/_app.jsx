import 'assets/styles/globals.scss'
import Layout from 'components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {' '}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
