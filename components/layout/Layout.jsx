import Head from 'next/head'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Header />
      <main className='container'>{children}</main>
    </>
  )
}
