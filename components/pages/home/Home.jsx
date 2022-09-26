import TopBar from './TopBar'
import Countries from './Countries'
import Head from 'next/head'
import ui from 'dictionaries/ui'

const Home = props => (
  <>
    <Head>
      <title>{ui.home.title}</title>
    </Head>
    <div className='mt-q mb-4'>
      <TopBar />
      <Countries serverList={props.countries} />
    </div>
  </>
)

export default Home
